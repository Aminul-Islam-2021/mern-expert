// import React from 'react'

// const ImageUpload1 = () => {
//   return (
//     <div>
//       Image Upload 1
//     </div>
//   )
// }

// export default ImageUpload1


// src/ImageUpload1.js
import React, { useState } from 'react';

const ImageUpload1 = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const imagesArray = files.map((file) =>
            URL.createObjectURL(file)
        );
        setSelectedImages((prevImages) => prevImages.concat(imagesArray));
    };

    const handleRemoveImage = (image) => {
        setSelectedImages(selectedImages.filter((img) => img !== image));
        URL.revokeObjectURL(image); // Free memory
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Upload Images
                </label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`Preview ${index}`}
                            className="w-full h-auto object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveImage(image)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full focus:outline-none"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    );
};

export default ImageUpload1;