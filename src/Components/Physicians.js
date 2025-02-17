import React from 'react';
import Colors from '../Components/Color';

const physicians = [
    {
        name: "Madhavilatha Vuppali, MD",
        image: require('../assets/1DrVuppali.jpg.webp'),
        fellowship: "Louisiana State University - Shreveport, LA",
        residency: "St. Joseph Mercy Medical Center - Pontiac, MI",
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
        image: require('../assets/Sushmitha_Gandra.webp'),
        fellowship: "University of Cincinnati - Cincinnati, OH",
        residency: "Lankenau Medical Center - Lankenau, PA",
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
        image: require('../assets/dr-patel.jpg.webp'),
        fellowship: "University of Washington, Seattle, WA - Nephrology",
        residency: "Houston Methodist Hospital, Houston, TX",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    }
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
                                    className="w-full md:w-80 h-auto rounded-lg mb-4 object-cover"
                                />
                                <h2 className="text-xl font-bold  text-center" style={{ color: Colors.headingBlue }}>{physician.name}</h2>
                            </div>

                            <div className="md:w-full">
                                <div className="text-left">

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Nephrology Fellowship</h3>
                                    <p className=" text-base mb-3" style={{ color: Colors.paragraphGray }}>
                                        {physician.name === "Madhavilatha Vuppali, MD" && (
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
                                        )}
                                    </p>

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Internal Medicine Residency</h3>
                                    <p className=" text-base mb-3" style={{ color: Colors.paragraphGray }}>
                                        {physician.name === "Madhavilatha Vuppali, MD" && (
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
                                        )}
                                    </p>

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Board Certifications</h3>
                                    <p className="text-base mb-3" style={{ color: Colors.paragraphGray }}>{physician.certifications}</p>

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

                                    <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Dialysis</h3>
                                    <ul className="p-0 text-base" style={{ color: Colors.paragraphGray }}>
                                        {physician.dialysis.map((center, idx) => (
                                            <li key={idx}>{center}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Horizontal line between each physician */}
                            {/* <hr className="border-t-2 border-b my-2 col-span-2" /> */}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PhysicianPage;








// import React, { useState } from 'react';
// import Colors from '../Components/Color';

// const physicians = [

//     {
//         name: "Madhavilatha Vuppali, MD",
//         image: require('../assets/1DrVuppali.jpg.webp'),
//         fellowship: "Louisiana State University - Shreveport, LA",
//         residency: "St. Joseph Mercy Medical Center - Pontiac, MI",
//         certifications: "Nephrology, Internal Medicine",
//         affiliations: [
//             "CHI Baylor St. Lukes - The Woodlands",
//             "HCA Houston Healthcare - Conroe",
//             "HCA Houston Healthcare - Northwest",
//             "Houston Methodist - The Woodlands",
//             "Memorial Hermann - The Woodlands"
//         ],
//         dialysis: ["Davita", "FMC", "US Renal Care"]
//     },
//     {
//         name: "Sushmitha Gandra, MD",
//         image: require('../assets/Sushmitha_Gandra.webp'),
//         fellowship: "University of Cincinnati - Cincinnati, OH",
//         residency: "Lankenau Medical Center - Lankenau, PA",
//         certifications: "Nephrology, Internal Medicine",
//         affiliations: [
//             "CHI Baylor St. Lukes - The Woodlands",
//             "HCA Houston Healthcare - Conroe",
//             "HCA Houston Healthcare - Northwest",
//             "Houston Methodist - The Woodlands",
//             "Memorial Hermann - The Woodlands"
//         ],
//         dialysis: ["Davita", "FMC", "US Renal Care"]
//     },
//     {
//         name: "Dr. Amol Patel, D.O",
//         image: require('../assets/dr-patel.jpg.webp'),
//         fellowship: "University of Washington, Seattle, WA - Nephrology",
//         residency: "Houston Methodist Hospital, Houston, TX",
//         certifications: "Nephrology, Internal Medicine",
//         affiliations: [
//             "CHI Baylor St. Lukes - The Woodlands",
//             "HCA Houston Healthcare - Conroe",
//             "HCA Houston Healthcare - Northwest",
//             "Houston Methodist - The Woodlands",
//             "Memorial Hermann - The Woodlands"
//         ],
//         dialysis: ["Davita", "FMC", "US Renal Care"]
//     }
// ];


// const PhysicianPage = () => {

//     // State for individual hover states for each link
//     const [hoverState, setHoverState] = useState({
//         Louisiana: false,
//         JosephMercy: false,
//         CHIBaylor: false,
//         HCAHouston: false,
//         HoustonMethodist: false,
//         MemorialHermann: false,
//         UniversityCincinnati: false,
//         LankenauMedicalCenter: false, 
//         UniversityWashington: false,
//         HoustonMethodistHospital: false,

//     });

//     // Function to handle hover effect for each link
//     const handleMouseEnter = (link) => {
//         setHoverState((prevState) => ({
//             ...prevState,
//             [link]: true
//         }));
//     };

//     const handleMouseLeave = (link) => {
//         setHoverState((prevState) => ({
//             ...prevState,
//             [link]: false
//         }));
//     };


//     return (
//         <div className="py-10 px-4 sm:px-6 lg:px-8">

//             <div className="max-w-5xl mx-auto">
//                 <div className="mb-8 text-center">
//                     <h1 className="text-xl md:text-2xl lg:text-3xl font-bold"
//                         style={{ color: Colors.headingBlue }}>Staff</h1>
//                     <p className="text-base text-left mt-3"
//                         style={{ color: Colors.paragraphGray }}>
//                         Our team of Providers are committed to providing excellent kidney care for patients in North Houston, Spring, The Woodlands & Conroe areas.
//                         Our providers see patients both at the hospitals, in clinic, and at dialysis centers for continuity of care. We strive to coordinate
//                         and inform other providers involved in your care, so we achieve the best possible outcomes in caring for you.
//                     </p>
//                 </div>

//                 <div className="space-y-1">
//                     {physicians.map((physician, index) => (
//                         <div key={index} className="border p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div className="flex flex-col items-center">
//                                 <img
//                                     src={physician.image}
//                                     alt={physician.name}
//                                     className="w-full md:w-80 h-auto rounded-lg mb-4 object-cover"
//                                 />
//                                 <h2 className="text-xl font-bold text-center"
//                                     style={{ color: Colors.headingBlue }}>{physician.name}</h2>
//                             </div>

//                             <div className="md:w-full">
//                                 <div className="text-left">

//                                     <h3 className="font-bold mb-1 text-lg"
//                                         style={{ color: Colors.headingBlue }}>Nephrology Fellowship</h3>
//                                     <p className="text-gray-600 text-base mb-3">
//                                         {physician.name === "Madhavilatha Vuppali, MD" && (
//                                             <>
//                                                 <a href='https://www.lsus.edu/' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.Louisiana ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('Louisiana')}
//                                                     onMouseLeave={() => handleMouseLeave('Louisiana')}
//                                                 >Louisiana State University</a> - Shreveport, LA
//                                             </>
//                                         )}
//                                         {physician.name === "Sushmitha Gandra, MD" && (
//                                             <>
//                                                 <a href='https://www.uc.edu/' target='_blank' rel="noreferrer" className=" no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.UniversityCincinnati ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('UniversityCincinnati')}
//                                                     onMouseLeave={() => handleMouseLeave('UniversityCincinnati')}
//                                                 >University of Cincinnati</a> - Cincinnati, OH
//                                             </>
//                                         )}
//                                         {physician.name === "Dr. Amol Patel, D.O" && (
//                                             <>
//                                                 <a href='https://www.washington.edu/' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.UniversityWashington ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('UniversityWashington')}
//                                                     onMouseLeave={() => handleMouseLeave('UniversityWashington')}
//                                                 >University of Washington, Seattle, WA</a> - Nephrology
//                                             </>
//                                         )}
//                                     </p>

//                                     <h3 className="font-bold mb-1 text-lg"
//                                         style={{ color: Colors.headingBlue }}>Internal Medicine Residency</h3>
//                                     <p className="text-gray-600 text-base mb-3">
//                                         {physician.name === "Madhavilatha Vuppali, MD" && (
//                                             <>
//                                                 <a href='https://www.trinityhealthmichigan.org/' target='_blank' rel="noreferrer" className=" no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.JosephMercy ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('JosephMercy')}
//                                                     onMouseLeave={() => handleMouseLeave('JosephMercy')}
//                                                 >St. Joseph Mercy Medical Center</a> - Pontiac, MI
//                                             </>
//                                         )}
//                                         {physician.name === "Sushmitha Gandra, MD" && (
//                                             <>
//                                                 <a href='https://www.mainlinehealth.org/locations/lankenau-medical-center' target='_blank' rel="noreferrer" className="no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.LankenauMedicalCenter ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('LankenauMedicalCenter')}
//                                                     onMouseLeave={() => handleMouseLeave('LankenauMedicalCenter')}
//                                                 >Lankenau Medical Center</a> - Lankenau, PA
//                                             </>
//                                         )}
//                                         {physician.name === "Dr. Amol Patel, D.O" && (
//                                             <>
//                                                 <a href='https://www.houstonmethodist.org/' target='_blank' rel="noreferrer" className=" no-underline font-bold hover:underline cursor-pointer"
//                                                     style={{
//                                                         color: hoverState.HoustonMethodistHospital ? Colors.primaryBlue : Colors.primaryOrange,
//                                                         transition: 'color 0.3s ease',
//                                                     }}
//                                                     onMouseEnter={() => handleMouseEnter('HoustonMethodistHospital')}
//                                                     onMouseLeave={() => handleMouseLeave('HoustonMethodistHospital')}
//                                                 >Houston Methodist Hospital, Houston, TX</a>
//                                             </>
//                                         )}
//                                     </p>

//                                     <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Board Certifications</h3>
//                                     <p className="text-gray-600 text-base mb-3">{physician.certifications}</p>

//                                     <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Hospital Affiliations</h3>
//                                     <ul className="text-gray-600 p-0 text-base mb-3">
//                                         {physician.affiliations.map((affiliation, idx) => (
//                                             <li key={idx}>
//                                                 {/* Conditionally render links and plain text based on specified names */}
//                                                 {affiliation.includes("CHI Baylor St. Lukes") ? (
//                                                     <>
//                                                         <a href="https://www.stlukeshealth.org/" target="_blank" rel="noreferrer" className="font-bold no-underline hover:underline cursor-pointer"
//                                                             style={{
//                                                                 color: hoverState.CHIBaylor ? Colors.primaryBlue : Colors.primaryOrange,
//                                                                 transition: 'color 0.3s ease',
//                                                             }}
//                                                             onMouseEnter={() => handleMouseEnter('CHIBaylor')}
//                                                             onMouseLeave={() => handleMouseLeave('CHIBaylor')}
//                                                         >
//                                                             CHI Baylor St. Lukes
//                                                         </a>
//                                                         {affiliation.includes("The Woodlands") && " - The Woodlands"}
//                                                     </>
//                                                 ) : affiliation.includes("HCA Houston Healthcare - Conroe") ? (
//                                                     <>
//                                                         <a href="https://www.hcahoustonhealthcare.com/" target="_blank" rel="noreferrer" className="font-bold no-underline hover:underline cursor-pointer"
//                                                             style={{
//                                                                 color: hoverState.HCAHouston ? Colors.primaryBlue : Colors.primaryOrange,
//                                                                 transition: 'color 0.3s ease',
//                                                             }}
//                                                             onMouseEnter={() => handleMouseEnter('HCAHouston')}
//                                                             onMouseLeave={() => handleMouseLeave('HCAHouston')}
//                                                         >
//                                                             HCA Houston Healthcare
//                                                         </a>
//                                                         - Conroe
//                                                     </>
//                                                 ) : affiliation.includes("HCA Houston Healthcare - Northwest") ? (
//                                                     <>HCA Houston Healthcare - Northwest</>
//                                                 ) : affiliation.includes("Houston Methodist") ? (
//                                                     <>
//                                                         <a href="https://www.houstonmethodist.org/" target="_blank" rel="noreferrer" className="font-bold no-underline hover:underline cursor-pointer"
//                                                             style={{
//                                                                 color: hoverState.HoustonMethodist ? Colors.primaryBlue : Colors.primaryOrange,
//                                                                 transition: 'color 0.3s ease',
//                                                             }}
//                                                             onMouseEnter={() => handleMouseEnter('HoustonMethodist')}
//                                                             onMouseLeave={() => handleMouseLeave('HoustonMethodist')}
//                                                         >
//                                                             Houston Methodist
//                                                         </a>
//                                                         {affiliation.includes("The Woodlands") && " - The Woodlands"}
//                                                     </>
//                                                 ) : affiliation.includes("Memorial Hermann") ? (
//                                                     <>
//                                                         <a href="https://memorialhermann.org/" target="_blank" rel="noreferrer" className="font-bold no-underline hover:underline cursor-pointer"
//                                                             style={{
//                                                                 color: hoverState.MemorialHermann ? Colors.primaryBlue : Colors.primaryOrange,
//                                                                 transition: 'color 0.3s ease',
//                                                             }}
//                                                             onMouseEnter={() => handleMouseEnter('MemorialHermann')}
//                                                             onMouseLeave={() => handleMouseLeave('MemorialHermann')}
//                                                         >
//                                                             Memorial Hermann
//                                                         </a>
//                                                         {affiliation.includes("The Woodlands") && " - The Woodlands"}
//                                                     </>
//                                                 ) : (
//                                                     affiliation
//                                                 )}
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <h3 className="font-bold mb-1 text-lg" style={{ color: Colors.headingBlue }}>Dialysis</h3>
//                                     <ul className="text-gray-600 p-0 text-base">
//                                         {physician.dialysis.map((center, idx) => (
//                                             <li key={idx}>{center}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                             {/* Horizontal line between each physician */}
//                             {/* <hr className="border-t-2 border-b my-2 col-span-2" /> */}
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default PhysicianPage;

