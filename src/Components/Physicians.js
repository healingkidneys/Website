import React from 'react';
import Colors from '../Components/Color';

const physicians = [
    {
        name: "Madhavilatha Vuppali, MD",
        image: require('../assets/vupalli.jpg'),
        fellowship: "Louisiana State University - Shreveport, LA",
        fellowLink: "https://www.lsus.edu/",
        residency: "St. Joseph Mercy Medical Center - Pontiac, MI",
        resiLink: "https://www.trinityhealthmichigan.org/",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    },
    {
        name: "Sushmitha Gandra, MD",
        image: require('../assets/Gandra.jpg'),
        fellowship: "University of Cincinnati - Cincinnati, OH",
        fellowLink: "https://www.uc.edu/",
        residency: "Lankenau Medical Center - Lankenau, PA",
        resiLink: "https://www.mainlinehealth.org/locations/lankenau-medical-center",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    },
    {
        name: "Dr. Amol Patel, D.O",
        image: require('../assets/Patel.jpg'),
        fellowship: "University of Washington, Seattle, WA - Nephrology",
        fellowLink: "https://www.washington.edu/",
        residency: "Houston Methodist Hospital - Houston, TX",
        resiLink: "https://www.houstonmethodist.org/",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    },
    {
        name: "Nousheen, Nayani APRN",
        image: require('../assets/nayani.jpg'),
        fellowship: "Prairie View A & M university - MSN",
        fellowLink: "",
        resiLink: "",
        residency: "",
        certifications: "",
        affiliations: [
            "Encompass Hospital - The Woodlands",
            "Encompass Hospital - Vision Park"
        ],
        dialysis: []
    },
    {
        name: "Mary Yanson APRN",
        image: require('../assets/yanson.jpg'),
        fellowship: "University of Phoenix - MSN",
        fellowLink: "",
        residency: "",
        resiLink: "",
        certifications: "",
        affiliations: [
            "Houston Methodist hospital- The Woodlands",
        ],
        dialysis: []
    },
];

const PhysicianPage = () => {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-5xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: Colors.headingBlue }}>Staff</h1>
                    <p className=" text-base text-left mt-3" style={{ color: Colors.paragraphGray }}>
                        Our team of Providers are committed to providing excellent kidney care for patients in North Houston, Spring, The Woodlands & Conroe areas.
                        Our providers see patients both at the hospitals, in clinic, and at dialysis centers for continuity of care. We strive to coordinate
                        and inform other providers involved in your care, so we achieve the best possible outcomes in caring for you.
                    </p>
                </div>

                <div className="space-y-1">
                    {physicians.map((physician, index) => (
                        <div key={index} className="border p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col items-center">
                                <img
                                    src={physician.image}
                                    alt={physician.name}
                                    className="w-full md:w-100 h-90 rounded-lg mb-4 object-cover"
                                />
                                <h2 className="text-xl font-bold  text-center" style={{ color: Colors.headingBlue }}>{physician.name}</h2>
                            </div>

                            <div className="md:w-full">
                                <div className="text-left">

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Nephrology Fellowship</h3>
                                    <p className=" text-base mb-3" style={{ color: Colors.paragraphGray }}>
                                        {/* {physician.name === "Madhavilatha Vuppali, MD" && (
                                            <>
                                                <a href='https://www.lsus.edu/' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >Louisiana State University</a> - Shreveport, LA
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <a href='https://www.uc.edu/' target='_blank' rel="noreferrer" className=" no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >University of Cincinnati</a> - Cincinnati, OH
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <a href='https://www.washington.edu/' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >University of Washington, Seattle, WA</a> - Nephrology
                                            </>
                                        )} */}
                                        {physician.fellowship !== "" ? (<> 
                                            <a href={physician.fellowLink} target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                            > {physician.fellowship.split("-")[0]} </a> - {physician.fellowship.split("-")[1]}
                                        </>) : (<></>)} 
                                    </p>

                                    {physician.residency !== "" ? (<>
                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Internal Medicine Residency</h3>
                                    <p className=" text-base mb-3" style={{ color: Colors.paragraphGray }}>
                                        <a href={physician.resiLink} target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                > {physician.residency.split("-")[0]} </a> - {physician.residency.split("-")[1]}
                                        
                                        {/* {physician.name === "Madhavilatha Vuppali, MD" && (
                                            <>
                                                <a href='https://www.trinityhealthmichigan.org/' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >St. Joseph Mercy Medical Center</a> - Pontiac, MI
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <a href='https://www.mainlinehealth.org/locations/lankenau-medical-center' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >Lankenau Medical Center</a> - Lankenau, PA
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <a href='https://www.houstonmethodist.org/' target='_blank' rel="noreferrer" className=" no-underline font-bold hover:underline  cursor-pointer"
                                                    style={{ color: Colors.primaryOrange }}
                                                >Houston Methodist Hospital, Houston, TX</a>
                                            </>
                                        )} */}
                                    </p>
                                    </>) : (<></>)}

                                    {physician.certifications !== "" ? (<>
                                        <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Board Certifications</h3>
                                        <p className="text-base mb-3" style={{ color: Colors.paragraphGray }}>{physician.certifications}</p>
                                    </>) : (<></>)}

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Hospital Affiliations</h3>
                                    <ul className=" p-0 text-base mb-3" style={{ color: Colors.paragraphGray }}>
                                        {physician.affiliations.map((affiliation, idx) => (
                                            <li key={idx}>
                                                {/* Conditionally render links and plain text based on specified names */}
                                                {affiliation.includes("CHI Baylor St. Lukes") ? (
                                                    <>
                                                        <a href="https://www.stlukeshealth.org/" target="_blank" rel="noreferrer" className="font-bold no-underline hover:underline cursor-pointer"
                                                            style={{ color: Colors.primaryOrange }}
                                                        >
                                                            CHI Baylor St. Lukes
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : affiliation.includes("HCA Houston Healthcare - Conroe") ? (
                                                    <>
                                                        <a href="https://www.hcahoustonhealthcare.com/" target="_blank" rel="noreferrer" className=" font-bold no-underline hover:underline  cursor-pointer"

                                                            style={{ color: Colors.primaryOrange }}>
                                                            HCA Houston Healthcare
                                                        </a>
                                                        - Conroe
                                                    </>
                                                ) : affiliation.includes("HCA Houston Healthcare - Northwest") ? (
                                                    <>HCA Houston Healthcare - Northwest</>
                                                ) : affiliation.includes("Houston Methodist") ? (
                                                    <>
                                                        <a href="https://www.houstonmethodist.org/" target="_blank" rel="noreferrer" className=" font-bold no-underline hover:underline cursor-pointer"
                                                            style={{ color: Colors.primaryOrange }}
                                                        >
                                                            Houston Methodist
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : affiliation.includes("Memorial Hermann") ? (
                                                    <>
                                                        <a href="https://memorialhermann.org/" target="_blank" rel="noreferrer" className=" font-bold no-underline hover:underline cursor-pointer"
                                                            style={{ color: Colors.primaryOrange }}
                                                        >
                                                            Memorial Hermann
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : (
                                                    affiliation
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    { physician.dialysis != "" ? (<>
                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Dialysis</h3>
                                    <ul className="p-0 text-base" style={{ color: Colors.paragraphGray }}>
                                        {physician.dialysis.map((center, idx) => (
                                            <li key={idx}>{center}</li>
                                        ))}
                                    </ul>
                                    </>):(<></>)}

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PhysicianPage;