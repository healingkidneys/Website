import React from 'react';
import Colors from '../Components/Color';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import image8 from '../assets/kidney_stone_doctor.jpg';
import image11 from '../assets/Kidney_Stones.jpg';

const InsideKidneyStonePage = () => {
    const blogPosts = [
        {
            title: "Signs and Symptoms of Kidney Stones: When To See a Doctor",
            date: "Oct. 24, 2024",
            content: "Your kidneys are a vital organ that helps cleanse the body by filtering waste to create urine and help produce certain hormones. Therefore, if you have signs of problems such as kidney stones in Houston, Conroe, & The Woodlands, TX, you should seek medical help. Luckily, you have a strong team of doctors at The Healing Kidneys Institute of Houston to assist you.",
            image: image8,
            link: "/signs-symptoms-kidney-stones-want-to-see-a-doctor" // Sample link, update with actual URL if available
        },
        {
            title: "Kidney Stones: Causes for Concern",
            date: "Dec. 18, 2023",
            content: "Kidney stones, tiny mineral deposits that form in the kidneys, can bring excruciating pain. Imagine sharp, intense discomfort starting in your back, often radiating to your lower abdomen or groin. You might notice pink, red, or brown urine accompanied by nausea, vomiting, or a persistent need to urinate. These are common signs of kidney stones.",
            image: image11,
            link: "/kidney-stones-causes-for-concern" // Sample link, update with actual URL if available
        },

    ];

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-6"
                    style={{ color: Colors.headingBlue }}
                >Blog</h1>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex flex-col sm:flex-row border-b pb-4">
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-auto sm:w-32 h-auto object-cover mr-0 sm:mr-4 rounded"
                                />
                            )}
                            <div className="flex-grow">
                                <a href={post.link} className="text-lg md:text-xl lg:text-2xl uppercase no-underline hover:underline"
                                    style={{ color: Colors.primaryOrange }}
                                >
                                    {post.title}
                                </a>
                                <p className="text-sm" style={{ color: Colors.paragraphGray }}>{post.date}</p>
                                <p className="mt-2" style={{ color: Colors.paragraphGray }}>{post.content}</p>
                                <a href={post.link} className=" font-bold no-underline hover:underline"
                                    style={{ color: Colors.primaryOrange }}
                                >Read more</a>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            <section>
                <GoogleFormPage />
            </section>

            <section>
                <Locations />
            </section>

            <section>
                <BlogLocationPage />
            </section>

        </div>
    );
};

export default InsideKidneyStonePage;
