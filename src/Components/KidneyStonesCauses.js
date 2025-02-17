import React, { useState } from 'react';
import Colors from '../Components/Color';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import Images15 from '../assets/Kidney_Stones.jpg';

const KidneyStonesCausesPage = () => {

    const [hoverState, setHoverState] = useState({
        phoneNumber: false,
        website: false,
        kidneystones: false,
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
                <a href='/kidney-stones-causes-for-concern' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline uppercase mb-2"
                    style={{ color: Colors.primaryOrange }}>
                    Kidney Stones: Causes for Concern
                </a>
                <p className=" mb-6" style={{ color: Colors.paragraphGray }}>Posted on: Dec. 18, 2023.</p> {/* Add the posted date here */}

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={Images15}
                        alt="Medical professional examining kidney stone"
                        className="rounded-lg shadow-md max-w-full h-auto mb-4"
                    />
                    <p className="leading-relaxed" style={{ color: Colors.paragraphGray }}>
                        Kidney stones, tiny mineral deposits that form in the kidneys, can bring excruciating pain.
                        Imagine sharp, intense discomfort starting in your back, often radiating to your lower abdomen or groin.
                        You might notice pink, red, or brown urine accompanied by nausea, vomiting, or a persistent need to urinate.
                        These are common signs of kidney stones.
                    </p>

                    <p className="leading-relaxed" style={{ color: Colors.paragraphGray }}>
                        If you or a loved one experience these symptoms, seeking medical attention is paramount.
                        The Healing Kidneys Institute of Houston specializes in kidney health and provides comprehensive care for kidney stone-related issues.
                        Prompt contact with the Institute is essential when you notice persistent pain that doesn't alleviate with over-the-counter pain relievers,
                        blood in your urine, or if you have a history of kidney stones in Conroe, Shenandoah, Houston, or The Woodlands, TX.
                    </p>

                    <p className="leading-relaxed" style={{ color: Colors.paragraphGray }}>
                        Consulting the Healing Kidneys Institute of Houston offers you access to expert care and personalized treatment plans.
                        The compassionate team will guide you through diagnostic procedures, including imaging tests, to accurately identify and effectively manage your condition.
                        They prioritize your comfort and well-being, ensuring you receive the best care possible.
                    </p>
                </div>

                {/* What Are Kidney Stones Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>
                    Kidney Stones: Causes for Concern
                </h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Kidney stones, while small, can cause significant discomfort and, in some cases, lead to severe complications.
                    They form when certain substances in your urine become highly concentrated, crystallizing and creating solid masses within the kidneys.
                    Factors like dehydration, dietary habits (high in salt or protein),
                    family history, and certain medical conditions contribute to their development.
                </p>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    If you experience sharp, stabbing pain in your back or side, often radiating to the lower abdomen or groin,
                    it could indicate a kidney stone passing through the urinary tract.
                    Symptoms like blood in urine, nausea, persistent urge to urinate, or fever suggest complications requiring immediate attention.
                </p>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Timely intervention prevents complications like urinary tract obstruction, kidney damage, or recurring kidney stones in Conroe, Shenandoah, Houston, or The Woodlands, TX.
                    Your kidney doctor will conduct tests, including imaging and urine analysis, to diagnose, offer treatment options, and suggest preventive measures tailored to your condition,
                    ensuring better kidney health and minimizing future occurrences.
                </p>

                {/* Signs and Symptoms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>
                    Kidney Stones: Diagnosis and Treatment
                </h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Diagnosing kidney stones involves a physical exam, imaging tests like CT scans or ultrasounds, and analysis of urine samples to confirm their presence.
                    Treatment varies based on the stone's size and severity. Small stones usually pass naturally with increased fluid intake and pain medication.
                    Larger stones might require procedures like lithotripsy to break them into smaller pieces for easier passage or surgical intervention in complex cases.
                </p>

                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Please explore our {" "}
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: hoverState.website ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('website')}
                        onMouseLeave={() => handleMouseLeave('website')}
                        className="font-bold no-underline"
                    >
                        website
                    </a> {" "}
                    to learn about the conditions we treat and the services provided.
                    Consult our experts at The Healing Kidneys Institute of Houston to ensure a brighter future and
                    improved quality of life for you or your loved ones dealing with kidney issues.
                    You can call <a
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
                    </a> {" "}
                    to schedule an appointment for kidney stones in Conroe, Shenandoah, or Houston, TX, or book online.
                </p>

                <hr className="border-t" style={{ color: Colors.BlackBorder }}></hr>

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a
                        href="/blog/kidney-stones"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: hoverState.kidneystones ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('kidneystones')}
                        onMouseLeave={() => handleMouseLeave('kidneystones')}
                        className="font-bold no-underline text-sm"
                    >
                        Kidney Stones
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

export default KidneyStonesCausesPage;
