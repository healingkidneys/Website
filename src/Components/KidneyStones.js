import React, { useState } from 'react';
import Colors from '../Components/Color';

const KidneyStonesPage = () => {

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
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: Colors.headingBlue }}>Kidney Stones</h2>

                {/* Introduction */}
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Kidney stones can be extremely painful and debilitating.
                    Kidney stones are also one of the most common conditions a nephrologist, or kidney doctor, can treat.
                </p>

                {/* What is a Kidney Stone? */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>What is a Kidney Stone?</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    A kidney stone is a mass that forms when minerals and other substances in your urine clump together.
                </p>

                {/* Signs and Symptoms of a Kidney Stone */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Signs and Symptoms of a Kidney Stone</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    There are several signs and symptoms of kidney stones. You may have a kidney stone if you:
                </p>
                <ul className="list-disc pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Notice blood in your urine</li>
                    <li>Feel pain when you urinate</li>
                    <li>Experience a feeling of having to urinate often</li>
                    <li>Feel pain on your side, back, or abdomen</li>
                    <li>Have a fever, nausea, and vomiting</li>
                </ul>

                {/* Not All Kidney Stones Need Treatment */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Not all Kidney Stones Need Treatment</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    If you have a small kidney stone, it may pass in your urine, without causing any symptoms or pain.
                </p>

                {/* When You Should See a Kidney Doctor */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>When You Should See a Kidney Doctor in Conroe, The Woodlands, and Houston, TX</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Kidney stones can also be large and excruciating. If you are experiencing any of the signs or symptoms of kidney stones, you should see a kidney doctor.
                </p>

                {/* Treatment of Kidney Stones */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Treatment of Kidney Stones</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    One of the most effective treatments for kidney stones is a procedure known as Extracorporeal Shock Wave Lithotripsy, abbreviated as ESWL.
                    This kidney stone treatment uses shock waves to break up the kidney stone into smaller pieces which can then pass out of your body through your urine.
                </p>

                {/* The ESWL Procedure */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>The ESWL Procedure</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    ESWL is usually performed on an outpatient basis, typically under IV sedation, so you will need to bring someone with you to drive you home after the procedure.
                    After treatment, small pieces of the kidney stone will pass within a few weeks.
                </p>

                {/* Contact Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Want To Know More?</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    To find out more about the signs, symptoms, and treatment of kidney stones including Extracorporeal Shock Wave Lithotripsy,
                    call the kidney doctors at The Healing Kidneys Institute.
                    You can reach them in any of their three convenient office locations in Conroe, The Woodlands, and Houston, TX,
                    by calling {" "}
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
                    </a>, so call today.
                </p>
            </div>
        </div>
    );
};

export default KidneyStonesPage;
