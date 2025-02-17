import React, { useState } from 'react';
import Colors from '../Components/Color';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import Images13 from '../assets/Nephrologists.jpg';

const HowNephrologistsPage = () => {

    const [hoverState, setHoverState] = useState({
        Nephrologists: false,
        KidneyDisease: false,
        KidneyDisorder: false,
        phoneNumber: false,
    });

    // Function to handle hover effect for the link
    const handleMouseEnter = (link) => {
        setHoverState((prevState) => ({
            ...prevState,
            [link]: true,
        }));
    };

    const handleMouseLeave = (link) => {
        setHoverState((prevState) => ({
            ...prevState,
            [link]: false,
        }));
    };

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <a href='/how-nephrologists-diagnose-kidney-disorders' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline uppercase mb-2"
                    style={{ color: Colors.primaryOrange }}>
                    How Nephrologists Diagnose Kidney Disorders
                </a>
                <p className=" mb-6" style={{ color: Colors.paragraphGray }}>Posted on: Aug. 13, 2024.</p> {/* Add the posted date here */}

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={Images13}
                        alt="Medical professional examining kidney stone"
                        className="rounded-lg shadow-md max-w-full h-auto mb-4"
                    />
                    <p className="leading-relaxed" style={{ color: Colors.paragraphGray }}>
                        Nephrologists are specialists in kidney care who use a variety of diagnostic tools and methods to identify and manage kidney disorders.
                        Accurate diagnosis is crucial for effective treatment and maintaining overall kidney health.
                        If you’re dealing with a kidney disorder, it’s important that you’re able to get the proper treatment as soon as possible to avoid certain complications.
                        Your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX,
                        can explain what they do and how a nephrologist can diagnose your kidney disorder.
                    </p>
                </div>

                {/* What Are Kidney Stones Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>
                    How Nephrologists Diagnose Kidney Diseases and Disorders
                </h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    The diagnostic process begins with a thorough consultation.
                    Your nephrologist in Conroe, the Woodlands, and Houston, TX, will review your medical history, including any symptoms, family history of kidney disease, and any existing health conditions.
                    This information helps the nephrologist understand your risk factors and potential underlying issues.
                    A physical examination allows them to assess your general health and identify any physical signs of kidney problems.
                    They may check for swelling, changes in blood pressure, or other symptoms that could indicate kidney dysfunction.
                </p>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Your nephrologist may recommend blood tests, urinalysis, or urine cultures to detect different types of disorders.
                    This can help spot different indications of certain disorders and determine the best treatment.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Your nephrologist might also want to perform imaging tests.
                    This can include an ultrasound, CT scan, or MRI.
                    In some cases, you may need a kidney biopsy.
                    This procedure involves taking a small sample of kidney tissue to examine under a microscope.
                    It helps diagnose specific types of kidney disease, determine the extent of damage, and guide treatment options.
                </p>

                {/* Contact Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>
                    Contact Our Nephrologists Today
                </h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Make sure you understand how nephrologists work and how they can test for kidney disorders.
                    Contact your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX, to learn more about kidney testing.
                    Call for more information and to schedule your appointment today at {" "}
                    <a
                        href="tel:+18326102822"
                        className="no-underline font-bold"
                        style={{
                            color: hoverState.phoneNumber ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('phoneNumber')}
                        onMouseLeave={() => handleMouseLeave('phoneNumber')}
                    >
                        (832) 610-2822
                    </a>.
                </p>

                <hr className="border-t" style={{ color: Colors.BlackBorder }}></hr>

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm" style={{ color: Colors.paragraphGray }}>Tags: </span>
                    <a
                        href="/blog/nephrologists"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: hoverState.Nephrologists ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('Nephrologists')}
                        onMouseLeave={() => handleMouseLeave('Nephrologists')}
                        className="font-bold no-underline text-sm"
                    >
                        Nephrologists
                    </a>, {" "}
                    <a
                        href="/blog/nephrologists"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: hoverState.KidneyDisease ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('KidneyDisease')}
                        onMouseLeave={() => handleMouseLeave('KidneyDisease')}
                        className="font-bold no-underline text-sm"
                    >
                        Kidney Disease
                    </a>, {" "}
                    <a
                        href="/blog/nephrologists"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: hoverState.KidneyDisorder ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('KidneyDisorder')}
                        onMouseLeave={() => handleMouseLeave('KidneyDisorder')}
                        className="font-bold no-underline text-sm"
                    >
                        Kidney Disorder
                    </a>
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

export default HowNephrologistsPage;
