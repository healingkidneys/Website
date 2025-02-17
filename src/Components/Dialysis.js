import React, { useState } from 'react';
import Colors from '../Components/Color';

const DialysisPage = () => {

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
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  mb-4" style={{ color: Colors.headingBlue }}>Dialysis</h2>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>
                    Dialysis in Houston, Conroe and The Woodlands, TX
                </h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Dialysis is a critical medical procedure that assists individuals with kidney failure when their kidneys can no longer function properly.
                    It serves as a life-saving substitute, purifying their blood and removing waste and toxins to maintain a healthy balance in the body.
                    Candidates for dialysis in Conroe, The Woodlands, or Houston, TX, suffer from end-stage renal disease (ESRD) or severe kidney dysfunction where
                    their kidneys can't perform their filtering function adequately. If you or someone you care for experiences persistent fatigue, decreased urine
                    output, swelling, or uncontrolled hypertension, it may be time to seek help from Healing Kidney Care. Our compassionate team of expert nephrologists
                    and state-of-the-art facilities dedicate time to providing exceptional dialysis treatment and specialized care to support you on your journey to better health.
                </p>

                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>Dialysis: Explained</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Dialysis is a life-saving medical procedure that helps individuals whose kidneys can no longer function properly. The kidneys filter waste and excess
                    fluids from the blood, maintaining electrolyte balance and producing hormones. When they fail due to chronic kidney disease, diabetes, or other conditions,
                    dialysis becomes essential for maintaining overall health. During dialysis, a patient's blood is filtered carefully by a machine known as a dialyzer, which
                    acts as an artificial kidney. It removes waste products, toxins, and excess fluids that would otherwise accumulate in the body and cause severe complications.
                    This process prevents the build-up of harmful substances, helping to stabilize blood pressure, improve energy levels, and promote overall well-being.
                    If you have kidney failure, you could experience life-threatening consequences, such as heart problems, fluid overload, and severe fatigue without dialysis.
                    Our patients can enjoy and spend more time with their loved ones by undergoing regular dialysis treatments. Dialysis is a medical necessity and a compassionate
                    intervention that provides hope and support for those facing kidney failure.
                </p>

                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>What To Expect From Dialysis Treatment</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Dialysis treatment is a life-saving procedure for individuals with kidney failure. During sessions, patients sit comfortably in a chair while a dialysis
                    machine filters their blood, replicating the kidney's cleansing function. Though it may seem daunting, the process is painless and well-monitored by healthcare
                    professionals. Expect a friendly and supportive environment where you'll be cared for with compassion and empathy. As the machine efficiently removes waste and
                    excess fluid from your body, you may experience improved energy levels and reduced symptoms like swelling and fatigue. Depending on your needs, a typical session
                    lasts approximately three to four hours. While dialysis becomes a routine part of life, remember that your healthcare team is committed to enhancing your well-being
                    and ensuring a better quality of life.
                </p>

                {/* Contact Line */}
                <p className="text-lg text-center font-bold " style={{ color: Colors.BlackText }}>
                    To learn more about dialysis treatment, contact our nephrologists at The Healing Kidneys Institute of Houston. You can reach us at our Houston, Conroe, or The
                    Woodlands, TX office today at {" "}
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
                    </a>!
                </p>
            </div>
        </div>
    );
};

export default DialysisPage;
