// import React from 'react'

// const ImageUpload2 = () => {
//   return (
//     <div>
//           ImageUpload2
//     </div>
//   )
// }

// export default ImageUpload2

// src/ImageUploadForm.js
import React, { useState } from "react";

const ImageUpload2 = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imagesArray = files.map((file) => ({
            url: URL.createObjectURL(file),
            file,
        }));
        setSelectedImages((prevImages) => prevImages.concat(imagesArray));
    };

    const handleRemoveImage = (imageUrl) => {
        setSelectedImages((prevImages) =>
            prevImages.filter((image) => image.url !== imageUrl),
        );
        URL.revokeObjectURL(imageUrl);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        selectedImages.forEach((image) => formData.append("images", image.file));

        // Example: sending formData to a server (adjust the URL and handling as needed)
        fetch("/upload-endpoint", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-8 p-4 border rounded-lg shadow-lg bg-white"
        >
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Upload Images
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:border-0 file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative group">
                        <img
                            src={image.url}
                            alt={`Preview ${index}`}
                            className="w-full h-auto object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveImage(image.url)}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
};

export default ImageUpload2;
