import React, { useState } from 'react';
import Colors from '../Components/Color';
import Image1 from '../assets/main.jpg';

const Carsouelpage = () => {
    // State for individual hover states for each link
    const [hoverState, setHoverState] = useState({
        kidneyDoctors: false,
        kidneyDiseases: false,
        hypertension: false,
        kidneyStones: false,
        dialysis: false
    });

    // Function to handle hover effect for each link
    const handleMouseEnter = (link) => {
        setHoverState((prevState) => ({
            ...prevState,
            [link]: true
        }));
    };

    const handleMouseLeave = (link) => {
        setHoverState((prevState) => ({
            ...prevState,
            [link]: false
        }));
    };

    return (
        <div className="mt-10">
            {/* Header Section */}
            {/* <div className="max-w-5xl mx-auto mb-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-center" style={{ color: Colors.headingBlue }}>
                    NORTH HOUSTON, WOODLANDS AND CONROE'S TRUSTED COMPREHENSIVE KIDNEY CARE PROVIDER WHENEVER YOU NEED
                </h1>
            </div> */}

            <div className="max-w-5xl mx-auto">
                {/* Main Content Section */}
                <div className="mx-auto max-w-5xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 border">
                        {/* Static Image Section */}
                        <div className="lg:col-span-1">
                            <img src={Image1} alt="Kidney Care Group 1" className="w-full rounded-lg" />
                        </div>

                        {/* Text Section */}
                        <div className="lg:col-span-1 px-2">
                            <p className="text-base mb-4" style={{ color: Colors.paragraphGray }}>
                                We are a group of committed, compassionate and caring
                                {" "}<a
                                    href="/services/kidney-doctor"
                                    className="font-bold no-underline hover:underline"
                                    style={{
                                        color: hoverState.kidneyDoctors ? Colors.primaryBlue : Colors.primaryOrange,
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={() => handleMouseEnter('kidneyDoctors')}
                                    onMouseLeave={() => handleMouseLeave('kidneyDoctors')}
                                >
                                    kidney doctors
                                </a>{" "}
                                dedicated to providing the high-quality care for patients.
                            </p>
                            <p className="text-base mb-4" style={{ color: Colors.paragraphGray }}>
                                We offer a wide range of nephrology services for
                                {" "}
                                <a
                                    href="/services/kidney-disease"
                                    className="font-bold no-underline hover:underline"
                                    style={{
                                        color: hoverState.kidneyDiseases ? Colors.primaryBlue : Colors.primaryOrange,
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={() => handleMouseEnter('kidneyDiseases')}
                                    onMouseLeave={() => handleMouseLeave('kidneyDiseases')}
                                >
                                    kidney diseases
                                </a>,
                                {" "}
                                <a
                                    href="/services/hypertension"
                                    className="font-bold no-underline hover:underline"
                                    style={{
                                        color: hoverState.hypertension ? Colors.primaryBlue : Colors.primaryOrange,
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={() => handleMouseEnter('hypertension')}
                                    onMouseLeave={() => handleMouseLeave('hypertension')}
                                >
                                    hypertension
                                </a>,
                                {" "}
                                <a
                                    href="/services/kidney-stones"
                                    className="font-bold no-underline hover:underline"
                                    style={{
                                        color: hoverState.kidneyStones ? Colors.primaryBlue : Colors.primaryOrange,
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={() => handleMouseEnter('kidneyStones')}
                                    onMouseLeave={() => handleMouseLeave('kidneyStones')}
                                >
                                    kidney stones
                                </a>,
                                and other kidney-related disorders. Additionally, we offer comprehensive
                                {" "}
                                <a
                                    href="/services/dialysis"
                                    className="font-bold no-underline hover:underline"
                                    style={{
                                        color: hoverState.dialysis ? Colors.primaryBlue : Colors.primaryOrange,
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={() => handleMouseEnter('dialysis')}
                                    onMouseLeave={() => handleMouseLeave('dialysis')}
                                >
                                    dialysis
                                </a>{" "}
                                treatment options.
                            </p>
                            <p className="text-base mb-4" style={{ color: Colors.paragraphGray }}>
                                We believe in treating our patients as if they are our family and
                                providing the excellent care they deserve any time of need.
                            </p>
                            <h2 className="font-bold text-xl " style={{ color: Colors.headingBlue }}>OUR MISSION</h2>
                            <p className="text-base " style={{ color: Colors.paragraphGray }}>
                                To treat and care for patients as we want to be treated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carsouelpage;
