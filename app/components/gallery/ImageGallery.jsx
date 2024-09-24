import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../lib/firebase";

// ImageItem Component: Displays each image and where it is used
const ImageItem = ({ image, onClick }) => (
  <div className="border p-2">
    <img src={image.src} alt={image.name} className="w-full h-auto" onClick={() => onClick(image)} />
    <h4 className="text-sm mt-2">{image.name}</h4>
  </div>
);

// ImageModal Component: Shows detailed image information
const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          Close
        </button>
        <img src={image.src} alt={image.name} className="w-48 h-auto mx-auto mb-4" />
        <h3 className="text-lg font-bold">{image.name}</h3>
      </div>
    </div>
  );
};

// Main ImageGallery Component with Firebase Storage upload
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [existingFileNames, setExistingFileNames] = useState([]);

  // Fetch images and store the file names in state
  const fetchImages = async () => {
    const storageRef = ref(storage, "images/"); // Assuming 'images/' folder
    const res = await listAll(storageRef);
    const fileNames = res.items.map((itemRef) => itemRef.name);
    setExistingFileNames(fileNames); // Save file names for duplicate check
    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          id: itemRef.name,
          src: url,
          name: itemRef.name,
        };
      })
    );
    setImages(urls);
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  // Handle drop event to upload images
  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      // Check if the file name already exists in Firebase Storage
      if (existingFileNames.includes(file.name)) {
        alert(`File with the name "${file.name}" already exists.`);
        return; // Skip uploading this file
      }

      const storageRef = ref(storage, `images/${file.name}`);
      const metadata = {
        cacheControl: "public, max-age=31536000", // Cache for 1 year
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
          };
          setImages((prevImages) => [...prevImages, newImage]);
          setExistingFileNames((prevFileNames) => [...prevFileNames, file.name]); // Update file names
        }
      );
    });
  };

  // React Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
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
          <p>Drag 'n' drop some files here, or click to select files</p>
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
