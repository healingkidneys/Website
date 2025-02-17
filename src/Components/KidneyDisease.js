import React, { useState } from 'react';
import Colors from '../Components/Color';

const KidneyDiseasePage = () => {

    const [hoverState, setHoverState] = useState({
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
                {/* Header - Centered for impact */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-6" style={{ color: Colors.headingBlue }}>Kidney Disease</h2>

                {/* Introduction Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl  font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Kidney Disease Treatment in Houston, Conroe, and The Woodlands, TX</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    While we don’t often think about it, our kidneys do so much for us! These organs are essential for filtering out toxins and waste from the bloodstream while also delivering important nutrients, vitamins, and hormones throughout the body. When kidneys don’t function properly, it's important to turn to our experienced nephrologists at The Healing Kidneys Institute of Houston for comprehensive care.
                </p>

                {/* Kidney Problems Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl  font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Types of Kidney Problems</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Various acute and chronic issues can impact the health and function of the kidneys. Some of the most common kidney problems we diagnose and treat include:
                </p>
                <ul className="list-disc pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Kidney infections</li>
                    <li>Polycystic kidney disease</li>
                    <li>Kidney stones</li>
                    <li>Chronic kidney disease</li>
                    <li>Kidney injuries</li>
                    <li>Hepatitis C (a liver disease that also impacts the kidneys)</li>
                </ul>

                {/* Causes Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>What Causes Kidney Disease?</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    There are many risk factors and issues that can lead to chronic kidney disease.
                    It’s important to recognize your risk factors so you can talk with our nephrologists about ways to reduce your risk for kidney issues now and in the future.
                    Kidney diseases can be the results of:
                </p>
                <ul className="list-disc pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>High blood pressure</li>
                    <li>Diabetes</li>
                    <li>Congenital diseases</li>
                    <li>Drugs and toxins</li>
                    <li>Family history of kidney failure</li>
                    <li>Polycystic kidney disease</li>
                    <li>Age</li>
                </ul>

                {/* Symptoms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Signs and Symptoms of Kidney Disease</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    The warning signs of kidney disease are not unique to this condition, so you may not immediately recognize that you could be dealing with kidney issues.
                    It’s important to turn to us right away if you notice these symptoms:
                </p>
                <ul className="list-disc pl-5 list-inside  mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Dry, itchy skin</li>
                    <li>Sleep disturbances</li>
                    <li>Brain fog</li>
                    <li>Intense fatigue</li>
                    <li>Loss of appetite</li>
                    <li>Muscle cramping, particularly at night</li>
                    <li>Swelling feet and ankles</li>
                    <li>Frequent urination</li>
                    <li>Puffiness around the eyes</li>
                    <li>Foamy urine</li>
                    <li>Blood in the urine</li>
                </ul>

                {/* Treatment Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Treating Kidney Disease</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    We will first need to determine what’s causing your symptoms before we can determine how to best treat it.
                    After all, how we address acute kidney problems will be different from how we treat chronic kidney issues.
                    The good news is that most kidney diseases can be properly treated or managed with the proper medication and lifestyle changes.
                    Those with more advanced stages of kidney disease will benefit from dialysis, which helps to filter the blood of toxins and waste when the kidneys no longer can.
                </p>

                {/* Contact Section */}
                <p className="text-center font-bold leading-relaxed" style={{ color: Colors.BlackText }}>
                    Our kidneys are vital to our overall health and well-being.
                    If you are experiencing any kidney disease symptoms, it's important to contact our kidney doctors at
                    The Healing Kidneys Institute of Houston for proper diagnosis and treatment.
                    Call our Houston, Conroe, or The Woodlands, TX office today at
                    {" "}
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
                    </a> {" "}
                    to schedule a consultation!
                </p>
            </div>
        </div>
    );
};

export default KidneyDiseasePage;
