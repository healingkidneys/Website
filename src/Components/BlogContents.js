import React from 'react';
import Colors from '../Components/Color';
import image8 from '../assets/kidney_stone_doctor.jpg';
import image9 from '../assets/Nephrologists.jpg';
import image10 from '../assets/Hypertension_kidney.jpg';
import image11 from '../assets/Kidney_Stones.jpg';

const BlogContentPage = () => {
    const blogPosts = [
        {
            title: "Welcome to Our Blog",
            date: "Jul. 10, 2023",
            content: "The Healing Kidneys Institute of Houston would like to welcome you to our blog. Here you will find informative and useful postings about your nephrology care and our practice. At The Healing Kidneys Institute of Houston, we believe that educated patients are better prepared to make decisions regarding their overall health and well-being.",
            link: "/welcome-to-our-blog" // Sample link, update with actual URL if available
        },
        {
            title: "Signs and Symptoms of Kidney Stones: When To See a Doctor",
            date: "Oct. 24, 2024",
            content: "Your kidneys are a vital organ that helps cleanse the body by filtering waste to create urine and help produce certain hormones. Therefore, if you have signs of problems such as kidney stones in Houston, Conroe, & The Woodlands, TX, you should seek medical help. Luckily, you have a strong team of doctors at The Healing Kidneys Institute of Houston to assist you.",
            image: image8,
            link: "/signs-symptoms-kidney-stones-want-to-see-a-doctor" // Sample link, update with actual URL if available
        },
        {
            title: "How Nephrologists Diagnose Kidney Disorders",
            date: "Aug. 13, 2024",
            content: "Nephrologists are specialists in kidney care who use a variety of diagnostic tools and methods to identify and manage kidney disorders. Accurate diagnosis is crucial for effective treatment and maintaining overall kidney health. If you’re dealing with a kidney disorder, it’s important that you’re able to get the proper treatment as soon as possible to avoid certain complications. Your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX, can explain what they do and how a nephrologist can diagnose your kidney disorder.",
            image: image9,
            link: "/how-nephrologists-diagnose-kidney-disorders" // Sample link, update with actual URL if available
        },
        {
            title: "Understanding Hypertension: Causes, Symptoms, and Risk Factors",
            date: "Jun. 10, 2024",
            content: "The team of providers at The Healing Kidneys Institute of Houston helps patients live well with kidney-related diseases and disorders. Hypertension is a common issue we help treat and manage. Keep reading to understand hypertension, and come see us for help managing your risk.",
            image: image10,
            link: "/understanding-hypertension-causes-symptoms-and-risk-factors" // Sample link, update with actual URL if available
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
        <div className="">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: Colors.headingBlue }}>Blog</h1>
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
                                <a href={post.link} className="text-lg md:text-xl lg:text-2xl no-underline hover:underline uppercase" style={{ color: Colors.primaryOrange }}>
                                    {post.title}
                                </a>
                                <p className="text-sm " style={{ color: Colors.paragraphGray }}>{post.date}</p>
                                <p className="mt-2" style={{ color: Colors.paragraphGray }}>{post.content}</p>
                                <a href={post.link} className="font-bold no-underline hover:underline" style={{ color: Colors.primaryOrange }}>Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BlogContentPage;
