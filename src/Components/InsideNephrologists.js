import React from 'react';
import Colors from '../Components/Color';
import image9 from '../assets/Nephrologists.jpg';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';

const InsideNephrologistsPage = () => {
    const blogPosts = [
        {
            title: "How Nephrologists Diagnose Kidney Disorders",
            date: "Aug. 13, 2024",
            content: "Nephrologists are specialists in kidney care who use a variety of diagnostic tools and methods to identify and manage kidney disorders. Accurate diagnosis is crucial for effective treatment and maintaining overall kidney health. If you’re dealing with a kidney disorder, it’s important that you’re able to get the proper treatment as soon as possible to avoid certain complications. Your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX, can explain what they do and how a nephrologist can diagnose your kidney disorder.",
            image: image9,
            link: "/how-nephrologists-diagnose-kidney-disorders" // Sample link, update with actual URL if available
        },
    ];

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: Colors.headingBlue }} >Blog</h1>
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
                                style={{ color: Colors.primaryOrange }}>
                                    {post.title}
                                </a>
                                <p className="text-sm " style={{ color: Colors.paragraphGray }}>{post.date}</p>
                                <p className="mt-2" style={{ color: Colors.paragraphGray }}>{post.content}</p>
                                <a href={post.link} className=" font-bold no-underline hover:underline" 
                                style={{ color: Colors.primaryOrange }}>Read more</a>
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

export default InsideNephrologistsPage;
