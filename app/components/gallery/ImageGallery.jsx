import React, { useState, useEffect } from "react";

// Mock data for uploaded images and their usage (in real scenario, this would come from an API or database)
const mockImages = [
  {
    id: 1,
    src: "https://via.placeholder.com/150",
    name: "Image 1",
    usedIn: [
      { type: "post", title: "How to Code", url: "/posts/how-to-code" },
      { type: "page", title: "About Us", url: "/about" },
    ],
    uploadDate: "2023-09-01",
    fileSize: "150 KB",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/150",
    name: "Image 2",
    usedIn: [{ type: "post", title: "React Components", url: "/posts/react-components" }],
    uploadDate: "2023-08-25",
    fileSize: "200 KB",
  },
];

// ImageItem Component: Displays each image and where it is used
const ImageItem = ({ image, onClick }) => {
  return (
    <div className="border p-2">
      <img src={image.src} alt={image.name} className="w-full h-auto" onClick={() => onClick(image)} />
      <h4 className="text-sm mt-2">{image.name}</h4>
      <p className="text-xs text-gray-500">Used in:</p>
      <ul className="list-disc pl-4 text-xs text-gray-600">
        {image.usedIn.map((usage, idx) => (
          <li key={idx}>
            <a href={usage.url} className="text-indigo-600 underline">
              {usage.title} ({usage.type})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Modal Component: Shows detailed image information
const ImageModal = ({ image, onClose }) => {
    if (!image) return null;
  
    // This function closes the modal only when clicking outside of the modal content
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    return (
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center"
        onClick={handleOverlayClick} // Close modal on outside click
      >
        <div className="bg-white p-4 rounded shadow-lg relative">
          <button onClick={onClose} className="absolute top-0 right-0 m-4">
            Close
          </button>
          <img src={image.src} alt={image.name} className="w-48 h-auto mx-auto mb-4" />
          <h3 className="text-lg font-bold">{image.name}</h3>
          <p className="text-sm text-gray-500">Uploaded: {image.uploadDate}</p>
          <p className="text-sm text-gray-500">File Size: {image.fileSize}</p>
          <h4 className="text-sm mt-4">Used in:</h4>
          <ul className="list-disc pl-4 text-sm">
            {image.usedIn.map((usage, idx) => (
              <li key={idx}>
                <a href={usage.url} className="text-indigo-600 underline">
                  {usage.title} ({usage.type})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

// Main ImageGallery Component
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load the images from an API or database
    setImages(mockImages); // In a real scenario, replace this with a fetch call to load images
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} onClick={handleImageClick} />
      ))}

      {/* Show Modal if an image is selected */}
      {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};

export default ImageGallery;
