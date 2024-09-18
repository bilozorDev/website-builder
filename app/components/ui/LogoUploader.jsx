import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

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
        const file = new File([blob], 'cropped-logo.png', { type: 'image/png' });
        uploadImage(file); // Send cropped image to the server
      });
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-logo', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully!');
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Upload New Logo</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      {image && (
        <div>
          <Cropper
            src={image}
            style={{ height: 400, width: '100%' }}
            aspectRatio={1}
            guides={false}
            ref={cropperRef}
          />

          <button onClick={handleCrop}>Crop Image</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <h3>Cropped Image Preview:</h3>
          <img src={croppedImage} alt="Cropped logo preview" />
        </div>
      )}
    </div>
  );
};

export default LogoUploader;
