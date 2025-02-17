import React, { useState } from 'react';
import Colors from '../Components/Color';
import Image4 from '../assets/hypertension.jpg.webp'; // Update the path to your image

const HypertensionPage = () => {

    const [hoverState, setHoverState] = useState({
        phoneNumber: false,
        HealingKidneys: false,
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
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: Colors.headingBlue }}>Hypertension</h2>

                {/* Flex container for image and first paragraph */}
                <div className="flex flex-col mb-8 lg:flex-row">
                    {/* Image appears before the first paragraph on mobile */}
                    <div className="flex justify-center mb-4 lg:w-1/3 lg:mb-0">
                        <img src={Image4} alt="Hypertension" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                    <div className="lg:w-2/3 lg:pl-8">
                        <p className="leading-relaxed mt-4 mb-4" style={{ color: Colors.paragraphGray }}>
                            Hypertension is commonly known as high blood pressure and is a silent but serious condition that affects millions of people worldwide.
                            Despite its lack of noticeable symptoms in many cases, hypertension can significantly increase the risk of heart disease, stroke, and other complications.
                            It’s important to know if hypertension could affect you and if you’re at a high risk for dealing with it.
                            If hypertension is left unmanaged, it could lead to serious complications throughout your life.
                        </p>
                    </div>
                </div>

                {/* Remaining Content */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Dealing With Hypertension</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Hypertension occurs when the force of blood against the walls of the arteries is consistently too high.
                    This then places strain on the heart and blood vessels, increasing the risk of heart attack, stroke, and other cardiovascular diseases.
                    Blood pressure is measured using two numbers: systolic pressure (the pressure when the heart beats) and diastolic pressure (the pressure when the heart rests between beats).
                </p>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Various factors can contribute to your overall risk of dealing with hypertension. These factors include:
                </p>
                <ul className="list-disc pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Unhealthy diet</li>
                    <li>Lack of exercise</li>
                    <li>Obesity</li>
                    <li>Smoking</li>
                    <li>Excessive alcohol consumption</li>
                    <li>Chronic stress</li>
                    <li>Family history of hypertension</li>
                </ul>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    The most common way to manage these risk factors is through lifestyle changes.
                    You must manage your diet and make sure that you’re reaching all of your nutritional needs.
                    You should also be limiting things like sodium, saturated fats, and refined sugars.
                    You should also be exercising regularly and managing your weight.
                    You may need medication to help manage your blood pressure and keep it stable.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    It’s also crucial that you find ways to manage stress and promote relaxation.
                </p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Contact Our Doctor Today</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Make sure that you’re not ignoring hypertension and that you understand the factors in your life that could lead to it.
                    Contact our doctors at {" "}
                    <a
                        href="/"
                        style={{
                            color: hoverState.HealingKidneys ? Colors.primaryBlue : Colors.primaryOrange,
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter('HealingKidneys')}
                        onMouseLeave={() => handleMouseLeave('HealingKidneys')}
                        className="font-bold no-underline"
                    >
                        Healing Kidneys
                    </a>{" "}
                    Institute of Houston in Conroe, The Woodlands, and Houston, TX,
                    at {" "}
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
                    to learn
                    more about hypertension and if it could affect you.
                </p>
            </div>
        </div>
    );
};

export default HypertensionPage;
