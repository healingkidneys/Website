import React from 'react';
import Colors from '../Components/Color';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';

const WelcomeBlogPage = () => {

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <a href='/welcome-to-our-blog' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline uppercase mb-2"
                    style={{ color: Colors.primaryOrange }}>
                    Welcome to Our Blog
                </a>
                <p className=" mb-6" style={{ color: Colors.paragraphGray }}>Posted on: Jul. 10, 2023.</p> {/* Add the posted date here */}

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">

                    <p className=" leading-relaxed" style={{ color: Colors.paragraphGray }}>
                        The Healing Kidneys Institute of Houston would like to welcome you to our blog.
                        Here you will find informative and useful postings about your nephrology care and our practice.
                        At The Healing Kidneys Institute of Houston, we believe that educated patients are better prepared to make decisions regarding their overall health and well-being.
                        Our blog was designed to provide you with valuable health care information, the latest medical developments, and health advice from our dedicated team.
                        We hope you find our blog to be a great resource for keeping up to date with proper kidney care and treatments.
                        We welcome all comments and questions.
                    </p>

                </div>
                <div>
                    <p className=" leading-relaxed justify-start" style={{ color: Colors.paragraphGray }}>
                        --- The Healing Kidneys Institute of Houston
                    </p>

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

export default WelcomeBlogPage;
