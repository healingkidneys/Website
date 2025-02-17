import { useState } from 'react';
import Colors from '../Components/Color';

const KidneyDoctorPage = () => {

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
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: Colors.headingBlue }}>Kidney Doctor</h2>

                {/* Introduction Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>Kidney Doctors in Houston, Conroe, and The Woodlands, TX</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    As many as 37 million Americans are living with some form of chronic kidney disease (CKD). If you are experiencing some symptoms such as bloody urine or increased urination, you must consult with an experienced nephrologist at The Healing Kidneys Institute of Houston. Our experienced staff can not only help treat kidney disease but also treat or prevent issues that lead to CKD such as diabetes and hypertension.
                </p>

                {/* How a Kidney Specialist Can Help Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>How a Kidney Specialist Can Help You?</h3>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    The kidneys play a vital role in our bodies. Both of our kidneys are responsible for removing waste from the blood, releasing hormones, and maintaining electrolyte balance.
                    <br /><br />
                    When you have issues with your kidneys, an experienced nephrologist may screen for protein in the urine, or check your blood pressure. Our office may order blood tests for creatine or nitrogen presence. Our nephrologists will also monitor dialysis treatment for patients whose kidneys can no longer cleanse the blood.
                </p>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Our kidney doctors can help you with a wide range of issues related to the kidney, such as:
                </p>
                <ul className="list-disc pl-5 list-inside  mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Kidney Transplant</li>
                    <li>Polycystic Kidney Disease</li>
                    <li>Hypertension</li>
                    <li>Diabetes (This is the #1 cause of renal failure in the US)</li>
                    <li>Chronic Kidney Disease (CKD)</li>
                    <li>Dialysis</li>
                    <li>Hematuria</li>
                    <li>Proteinuria</li>
                    <li>Hyperkalemia</li>
                    <li>Electrolyte Disorders</li>
                    <li>Anemia</li>
                    <li>Acute Kidney Injury</li>
                </ul>

                {/* When to See a Kidney Doctor Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2" style={{ color: Colors.headingBlue }}>When Should You See a Kidney Doctor?</h3>
                <p className="leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    When you visit your primary care doctor, the reasons for your ailments may still be unresolved after testing. So you may also be referred to a nephrologist if you have these issues:
                </p>
                <ul className="list-disc pl-5 list-inside mb-8" style={{ color: Colors.paragraphGray }}>
                    <li>Kidney disease caused by heredity</li>
                    <li>Chronic kidney stones</li>
                    <li>Protein and excessive blood in the urine</li>
                    <li>Advanced CKD</li>
                    <li>High blood pressure unresponsive to treatment</li>
                    <li>Foamy urine</li>
                    <li>Anemia - which also causes lethargy</li>
                    <li>Dry and itchy skin</li>
                    <li>Excessive nighttime urination</li>
                    <li>Swollen feet and ankles</li>
                </ul>

                {/* Blood Pressure Monitoring Section */}
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Our nephrologists will monitor your high blood pressure because hypertension narrows the blood vessels.
                    This constriction damages the blood vessels in the kidneys and the rest of the body.
                    A damaged kidney won’t be able to remove extra bodily fluid or waste.
                    As a result, not only is the body poisoning itself, but your blood pressure will continue to rise and cause other problems.
                    According to The National Kidney Foundation, high blood pressure is the 2nd highest cause of kidney failure in the US.
                </p>

                {/* Contact Section */}
                <p className="text-center font-bold leading-relaxed mb-8" style={{ color: Colors.BlackText }}>
                    Kidney disease and its underlying issues are a major health concern that should be managed properly.
                    If you are looking for a compassionate and caring nephrologist team, contact the experts at The Healing Kidneys Institute of Houston.
                    You can reach our Houston, Conroe, or The Woodlands, TX office today at  <a
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
                    </a> !
                </p>
            </div>
        </div>
    );
};

export default KidneyDoctorPage;
