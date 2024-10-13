import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL, listAll, getMetadata } from "firebase/storage";
import { storage } from "../lib/firebase";
import CryptoJS from "crypto-js";
import ErrorAlert from "../ui/ErrorAlert";

// ImageItem Component: Displays each image
const ImageItem = ({ image }) => (
  <div className="border p-2">
    <img src={image.src} alt={image.name} className="w-full h-auto" />
    <h4 className="text-sm mt-2">{image.name}</h4>
  </div>
);

// Main ImageGallery Component with Firebase Storage upload
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [existingHashes, setExistingHashes] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  // Fetch images and hashes from Firebase Storage
  const fetchImages = async () => {
    const storageRef = ref(storage, "images/"); // Assuming 'images/' folder
    const res = await listAll(storageRef);
    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);

        return {
          id: itemRef.name,
          src: url,
          name: itemRef.name,
          hash: metadata.customMetadata?.hash, // Get stored hash
        };
      })
    );

    setImages(urls);
    setExistingHashes(urls.map((image) => image.hash)); // Collect all hashes for duplicate checking
  };

  useEffect(() => {
    fetchImages(); // Fetch images and hashes on component mount
  }, []);

  // Generate an MD5 hash for the file
  const generateFileHash = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(reader.result)).toString();
        resolve(hash);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsBinaryString(file); // Read file as binary for hashing
    });
  };

  // Handle drop event to upload images
  const onDrop = async (acceptedFiles) => {
    const newErrorMessages = [];
    for (const file of acceptedFiles) {
      const fileHash = await generateFileHash(file);

      // Check if the file hash already exists
      if (existingHashes.includes(fileHash)) {
        newErrorMessages.push(`File "${file.name}" is already uploaded.`);
        continue; // Skip uploading this file
      }

      const storageRef = ref(storage, `images/${file.name}`);
      const metadata = {
        cacheControl: "public, max-age=31536000", // Cache for 1 year
        customMetadata: {
          hash: fileHash, // Store the hash as metadata
        },
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const newImage = {
            id: file.name,
            src: downloadURL,
            name: file.name,
            hash: fileHash, // Add the file hash to the new image object
          };

          setImages((prevImages) => [...prevImages, newImage]);
          setExistingHashes((prevHashes) => [...prevHashes, fileHash]); // Add the new hash to the list of hashes
        }
      );
    }

    // Set error messages if any duplicate files were detected
    if (newErrorMessages.length > 0) {
      setErrorMessages(newErrorMessages);
    }
  };

  // Close error alert
  const handleCloseAlert = () => {
    setErrorMessages([]);
  };

  // React Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {/* Error Alert */}
      {errorMessages.length > 0 && <ErrorAlert messages={errorMessages} onClose={handleCloseAlert} />}

      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className={`border-dashed border-2 p-6 text-center cursor-pointer mb-4 ${
          isDragActive ? "border-green-400" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-green-400">Drop the files here ...</p>
        ) : (
          <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.length === 0 ? (
          <p className="text-gray-500 col-span-3">No images found.</p>
        ) : (
          images.map((image) => <ImageItem key={image.id} image={image} />)
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
