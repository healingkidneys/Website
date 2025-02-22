import React from 'react';
import Colors from '../Components/Color';
import WhatImage from '../assets/Banner.png';
import AKIImage from '../assets/chronische-nierenerkrankung-small.webp';
import cdkImage from '../assets/cardiovascularmortalitypost_889591.jpg';
import endrenalImage from '../assets/end-stage-renal.webp';
import kscImage from '../assets/kidneystonecysts.jpg';
import hyperImage from '../assets/doctor-checking-patient-blood-pressure.webp';
import ptcImage from '../assets/heart-transplant-procedure-dr-pajaro-surgery-8col.webp';
import htImage from '../assets/diabetespatientsinfectionmo_787816.jpg';

const ServiceSectionpage = () => {

    // Service Data
    const services = [
        { title: "What We Do", image: WhatImage, textColor: "text-white", path: "/", isHeader: true },
        { title: "Acute Kidney Injury (AKI)", image: AKIImage, path: "/", disableLink: true },
        { title: "Chronic Kidney Disease (CKD)", image: cdkImage, path: "/services/kidney-disease" },
        { title: "End Stage Renal Disease/Dialysis", image: endrenalImage, path: "/services/dialysis" },
        { title: "Kidney Stones & Cysts", image: kscImage, path: "/services/kidney-stones" },
        { title: "Hypertension Management", image: hyperImage, path: "/services/hypertension" },
        { title: "Post-Transplant Care", image: ptcImage, path: "/" },
        { title: "Hyponatremia", image: htImage, path: "/" },
    ];

    const handleLinkClick = (e, service) => {
        if (service.disableLink) {
            e.preventDefault(); // Prevents navigation if the link is disabled
        }
    };


    return (

        <div className="py-10">

            {/* Header Section */}
            <div className="max-w-5xl mx-auto mb-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold" style={{ color: Colors.headingBlue }}>
                    Healing Kidneys
                </h1>
            </div>

            <div className="max-w-5xl mx-auto mb-5">
                <h4 className="text-lg text-center" style={{ color: Colors.paragraphGray }}>
                    North Houston, Woodlands, and Conroe's Trusted Comprehensive Kidney Care Provider Whenever You Need
                </h4>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg w-full border-0 aspect-[9/4] sm:aspect-square md:aspect-[6/3] lg:aspect-square" // Adjusted height for smaller screens
                            style={{
                                backgroundColor: service.isHeader ? '#c64f22' : '#4b5f74', // Color for non-header services
                                backgroundImage: service.image ? `url(${service.image})` : 'none', // Image if provided
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {!service.isHeader && service.image && (
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 bg-[#4b5f74]/60 mix-blend-multiply" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4b5f74]/90 via-[#4b5f74]/50 to-transparent" />
                                </div>
                            )}
                            <div className="relative h-full w-full p-3 sm:p-4 md:p-6 flex items-end">
                                {service.isHeader ? (
                                    <div className="absolute top-4 left-4">
                                        <h3 className="text-left font-bold text-xl sm:text-2xl md:text-3xl"
                                            style={{ color: Colors.WhiteText }}>
                                            What
                                        </h3>
                                        <h3 className="text-left font-bold text-xl sm:text-2xl md:text-3xl underline mt-1"
                                            style={{ color: Colors.WhiteText }}>
                                            We Do
                                        </h3>
                                    </div>
                                ) : (
                                    <a
                                        href={service.path}
                                        onClick={(e) => handleLinkClick(e, service)}
                                        className="text-left font-bold text-base sm:text-lg md:text-xl leading-tight sm:leading-snug max-w-[90%] no-underline"
                                        style={{ color: Colors.WhiteText }}
                                    >
                                        {service.title}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ServiceSectionpage;