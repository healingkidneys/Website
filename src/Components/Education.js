import React from 'react';
import Colors from '../Components/Color';
import Image5 from '../assets/Cutsection-of-Kidney.jpg.webp';
import Image6 from '../assets/Diabetes-effects.jpg.webp';
import Image7 from '../assets/Detailed-kidney-Anatomy.jpg.webp';

const EducationPage = () => {
    const images = [
        { src: Image5, alt: "Cut Section of Kidney" },
        { src: Image6, alt: "Diabetes Effects" },
        { src: Image7, alt: "Detailed Kidney Anatomy" },
    ];

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center" style={{ color: Colors.headingBlue }}>Education</h2>

                {/* Images in List Format Using Array */}
                <ul className="flex flex-col gap-6 list-none p-0 items-center max-w-5xl mx-auto">
                    {images.map((image, index) => (
                        <li key={index} className="w-full">
                            <div className="rounded-lg overflow-hidden p-4 border">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EducationPage;

