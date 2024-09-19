import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { PhotoIcon } from "@heroicons/react/24/outline";

const LogoUploader = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    if (cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      croppedCanvas.toBlob((blob) => {
        const file = new File([blob], "cropped-logo.png", {
          type: "image/png",
        });
        uploadImage(file); // Send cropped image to the server
      });
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully!");
        // Close the crop window and reset the image
        setImage(null); // This will close the Cropper window
        setCroppedImage(URL.createObjectURL(file)); // Set the cropped image for preview
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />

        <span className="mt-2 block text-sm font-semibold text-gray-900 mb-6">
          Upload new logo
        </span>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </button>

      {image && (
        <>
          <div>
            <Cropper
              src={image}
              style={{ height: "85%", width: "100%" }}
              className="absolute top-0 left-0 z-50"
              guides={false}
              ref={cropperRef}
            />
          </div>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 absolute -bottom-0 right-0 left-0 z-50"
            onClick={handleCrop}
          >
            Crop Image
          </button>
        </>
      )}
    </div>
  );
};

export default LogoUploader;
