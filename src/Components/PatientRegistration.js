import React, { useState } from 'react';
import Colors from '../Components/Color';

const PatientRegistrationPage = () => {

    const [hoverState, setHoverState] = useState({
        NewPatientPackage: false,
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
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-6" style={{ color: Colors.headingBlue }}>New Patients</h2>

                {/* Introduction */}
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    All new patients are required to fill the new patient package with demographics, medical background, financial disclosure, and patient privacy forms.
                    Please arrive 15 minutes prior to your appointment if you are unable to fill these forms.
                </p>

                {/* Assistance with Forms */}
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Please let us know if you need assistance filling the forms, and one of our friendly staff members will always assist you.
                </p>

                {/* Update Information */}
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Please inform us if your insurance, address, or medications have changed since your last visit, so your records are accurate.
                </p>

                {/* Patient Forms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl  font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Patient Forms</h3>
                <ul className=" pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>
                        <a
                            href="https://hushforms.com/69900-new-patient-packet"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                color: hoverState.NewPatientPackage ? Colors.primaryBlue : Colors.primaryOrange,
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={() => handleMouseEnter('NewPatientPackage')}
                            onMouseLeave={() => handleMouseLeave('NewPatientPackage')}
                            className="font-bold no-underline"
                        >
                            New Patient Package
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PatientRegistrationPage;

