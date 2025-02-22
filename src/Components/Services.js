import React, { useState } from 'react';
import Colors from '../Components/Color';

const ServicesPage = () => {

    const [hoverState, setHoverState] = useState({
        kidneyDoctors: false,
        kidneyworks: false,
        hypertension: false,
        kidneyStones: false,
        dialysis: false,
        acuteKidneyInjury: false,
        endStageRenalDisease: false,
        postTransplantCare: false,
        hyponatremia: false,
        hematuria: false,
        proteinuria: false,
        hyperkalemia: false,
        electrolyteDisorders: false,
        anemia: false,
        understandingLabs: false,
        kidneyUltrasound: false,
        kidneyBiopsy: false,
        dialysisAccess: false,
        KidneyFunction: false,
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
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{ color: Colors.headingBlue }}>SERVICES</h2>
                <p className=" leading-relaxed mb-8" style={{ color: Colors.paragraphGray }}>
                    Kidney disease (CKD) is a silent killer; more than 10% of the population worldwide is affected by CKD.
                    Our experienced and trained physicians work proactively in the diagnosis, education, and treatment options
                    best suited for every individual situation. Rest assured, our team is here to help you anytime in need.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Services We Offer */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>Services we offer</h3>
                        <ul className="list-disc pl-5">
                            <li><a
                                href="https://www.kidney.org/kidney-topics/acute-kidney-injury-aki"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.acuteKidneyInjury ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('acuteKidneyInjury')}
                                onMouseLeave={() => handleMouseLeave('acuteKidneyInjury')}
                                className="font-bold no-underline"
                            >
                                Acute Kidney Injury
                            </a></li>
                            <li><a
                                href="/services/kidney-disease"
                                style={{
                                    color: hoverState.kidneyDiseases ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('kidneyDiseases')}
                                onMouseLeave={() => handleMouseLeave('kidneyDiseases')}
                                className="font-bold no-underline"
                            >
                                Chronic Kidney Disease (CKD)
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/dialysis"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.endStageRenalDisease ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('endStageRenalDisease')}
                                onMouseLeave={() => handleMouseLeave('endStageRenalDisease')}
                                className="font-bold no-underline"
                            >
                                End Stage Renal Disease/Dialysis
                            </a></li>
                            <li><a
                                href="/services/kidney-stones"
                                style={{
                                    color: hoverState.kidneyStones ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('kidneyStones')}
                                onMouseLeave={() => handleMouseLeave('kidneyStones')}
                                className="font-bold no-underline"
                            >
                                Kidney Stones
                            </a></li>
                            <li><a
                                href="/services/hypertension"
                                style={{
                                    color: hoverState.hypertension ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('hypertension')}
                                onMouseLeave={() => handleMouseLeave('hypertension')}
                                className="font-bold no-underline"
                            >
                                Hypertension Management
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/life-kidney-transplant"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.postTransplantCare ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('postTransplantCare')}
                                onMouseLeave={() => handleMouseLeave('postTransplantCare')}
                                className="font-bold no-underline"
                            >
                                Post-Transplant Care
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/hyponatremia-low-sodium-level-blood"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.hyponatremia ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('hyponatremia')}
                                onMouseLeave={() => handleMouseLeave('hyponatremia')}
                                className="font-bold no-underline"
                            >
                                Hyponatremia
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/hematuria-adults"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.hematuria ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('hematuria')}
                                onMouseLeave={() => handleMouseLeave('hematuria')}
                                className="font-bold no-underline"
                            >
                                Hematuria
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/urine-albumin-creatinine-ratio-uacr"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.proteinuria ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('proteinuria')}
                                onMouseLeave={() => handleMouseLeave('proteinuria')}
                                className="font-bold no-underline"
                            >
                                Proteinuria
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.hyperkalemia ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('hyperkalemia')}
                                onMouseLeave={() => handleMouseLeave('hyperkalemia')}
                                className="font-bold no-underline"
                            >
                                Hyperkalemia
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/mineral-and-bone-disorder"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.electrolyteDisorders ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('electrolyteDisorders')}
                                onMouseLeave={() => handleMouseLeave('electrolyteDisorders')}
                                className="font-bold no-underline"
                            >
                                Electrolyte Disorders
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/anemia-and-chronic-kidney-disease"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.anemia ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('anemia')}
                                onMouseLeave={() => handleMouseLeave('anemia')}
                                className="font-bold no-underline"
                            >
                                Anemia
                            </a></li>
                            <li><a
                                href="/services/dialysis"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.dialysis ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('dialysis')}
                                onMouseLeave={() => handleMouseLeave('dialysis')}
                                className="font-bold no-underline"
                            >
                                Dialysis
                            </a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>Useful Links</h3>
                        <ul className="list-disc pl-5">
                            <li><a
                                href="https://www.kidney.org/es/node/25721"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.kidneyworks ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('kidneyworks')}
                                onMouseLeave={() => handleMouseLeave('kidneyworks')}
                                className="font-bold no-underline"
                            >
                                How do Kidneys Work?
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/laboratory-tests-used-assess-kidney-function"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.understandingLabs ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('understandingLabs')}
                                onMouseLeave={() => handleMouseLeave('understandingLabs')}
                                className="font-bold no-underline"
                            >
                                Understanding Lab
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/news-stories/advocacy/coping-chronic-kidney-disease-being-advocate-saved-my-life"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.KidneyFunction ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('KidneyFunction')}
                                onMouseLeave={() => handleMouseLeave('KidneyFunction')}
                                className="font-bold no-underline"
                            >
                                EGFR/Kidney Function Test
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/kidney-ultrasound"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.kidneyUltrasound ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('kidneyUltrasound')}
                                onMouseLeave={() => handleMouseLeave('kidneyUltrasound')}
                                className="font-bold no-underline"
                            >
                                Renal Ultrasound
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/kidney-biopsy"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.kidneyBiopsy ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('kidneyBiopsy')}
                                onMouseLeave={() => handleMouseLeave('kidneyBiopsy')}
                                className="font-bold no-underline"
                            >
                                Kidney Biopsy
                            </a></li>
                            <li><a
                                href="https://www.kidney.org/kidney-topics/dialysis-access"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: hoverState.dialysisAccess ? Colors.primaryBlue : Colors.primaryOrange,
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={() => handleMouseEnter('dialysisAccess')}
                                onMouseLeave={() => handleMouseLeave('dialysisAccess')}
                                className="font-bold no-underline"
                            >
                                Dialysis Access
                            </a></li>
                        </ul>
                    </div>

                    {/* Insurances Accepted */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold  mb-1" style={{ color: Colors.headingBlue }}>Insurances Accepted</h3>
                        <p className="mb-4" style={{ color: Colors.paragraphGray }}>(check with office for the updated list)</p>
                        <ul className="list-disc pl-5 " style={{ color: Colors.paragraphGray }}>
                            <li>Medicare</li>
                            <li>Aetna</li>
                            <li>BCBS of Texas</li>
                            <li>Cigna</li>
                            <li>United Healthcare</li>
                            <li>Wellpoint</li>
                            <li>Wellmed</li>
                            <li>Memorial Hermann</li>
                            <li>Medicare advantage plans</li>
                            <li>TRS</li>
                            <li>VA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
