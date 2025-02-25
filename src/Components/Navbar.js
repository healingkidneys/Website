import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import FaxIcon from '../assets/FaxIcon';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false); // Close the navbar on mobile when a link is clicked
    };

    const leftSideIcons = [
        {
            type: "link",
            icon: <PhoneOutlined className="me-2 text-white font-bold" />,
            text: "(832) 610-2822",
            href: "tel:+18326102822",
            className: "text-white no-underline font-bold"
        },
        {
            type: "icon",
            icon: <FaxIcon className="me-2 text-white font-bold" />,
            text: "(936) 777-8831",
        },
        {
            type: "link",
            icon: <MailOutlined className="me-2 text-white font-bold" />,
            text: "healingkidneys@gmail.com",
            href: "mailto:healingkidneys@gmail.com",
            className: "text-white no-underline font-bold"
        },
    ];

    const rightSideLinks = [
        {
            text: "Patient Portal",
            href: "https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?",
            external: true,
            hoverColor: "hover:text-blue-600",
        },
        {
            text: "Pay Mybill",
            href: "/",
            external: false,
            hoverColor: "hover:text-[#0f3f8a]",
        },
    ];

    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "Physicians", href: "/physicians" },
        { name: "Services", href: "/services", isDropdown: true },
        { name: "Patient Registration", href: "/patient-registration" },
        { name: "Education", href: "/education", isDropdown: true },
        { name: "Locations/Directions", href: "/locations-directions" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const educationLinks = [
        { name: "Blog", href: "/education/blog" },
        { name: "Overview", href: "/education" },
    ];

    const servicesLinks = [
        { name: "Dialysis", href: "/services/dialysis" },
        { name: "Hypertension", href: "/services/hypertension" },
        { name: "Kidney Disease", href: "/services/kidney-disease" },
        { name: "What is a Kidney Doctor?", href: "/services/kidney-doctor" },
        { name: "Kidney Stones", href: "/services/kidney-stones" },
        { name: "All Services", href: "/services" },
    ];

    return (
        <>
            {/* Contact Info Section */}
            <div className="bg-[#c64f22] py-0 md:py-1 lg:py-2">
                <div className="max-w-5xl mx-auto py-0 md:py-1">
                    <div className="flex-none md:flex md:flex-row justify-between items-center space-y-2 md:space-y-0">

                        {/* Mobile Specific Section */}
                        <div className="block md:hidden bg-white">
                            {/* Top Division for Logo */}
                            <div className="flex justify-center pt-2">
                                <Image
                                    src={require('../assets/HK.png')}
                                    alt="Logo"
                                    width="200"
                                    height="80"
                                />
                            </div>
                            {/* Second Division for Telephone and Email */}
                            <div className="flex justify-center mt-2 space-x-2 rounded-lg p-2">
                                <a href="tel:+18326102822" className="text-black no-underline flex items-center space-x-1 border border-black rounded-lg px-2 py-1">
                                    <span>(832) 610-2822</span>
                                </a>
                                <a href="mailto:healingkidneys@gmail.com" className="text-black no-underline flex items-center space-x-1 border border-black rounded-lg px-2 py-1">
                                    <span>healingkidneys@gmail.com</span>
                                </a>
                            </div>
                            {/* Third Division for Links */}
                            <div className="flex justify-center mt-2 pb-3 space-x-2">
                                {rightSideLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        target={link.external ? "_blank" : "_self"}
                                        className={`text-[#c64f22] ${link.hoverColor} font-bold hover:underline no-underline px-3`}
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Left Side Icons for larger devices */}
                    
                        <div xs="auto" className="hidden md:flex md:items-center md:justify-center md:grid-cols-2 md:gap-0 flex-wrap items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2 sm:justify-start 
                            font-bold text-center sm:text-left md:pl-4 lg:pl-0">
                            {leftSideIcons.map((item, index) => (
                                <div key={index} className="flex items-center border border-white rounded-lg p-1 mt-1 mb-1 cursor-pointer contact-info md:whitespace-nowrap">
                                    {item.type === "link" ? (
                                        <a href={item.href} className={item.className}>
                                            {item.icon}
                                            {item.text}
                                        </a>
                                    ) : (
                                        <>
                                            {item.icon}
                                            <span className="text-white font-bold">{item.text}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Side Links for larger devices */}
                        <div
                            xs="auto"
                            className="hidden md:flex md:items-center md:justify-center md:grid-cols-2 md:gap-0 flex-wrap items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2 sm:justify-start 
                            font-bold text-center sm:text-left md:pr-4 lg:pr-0"
                        >
                            {rightSideLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    target={link.external ? "_blank" : "_self"}
                                    className={`text-white ${link.hoverColor} hover:underline no-underline px-1 sm:px-0`}
                                >
                                    {link.text}
                                </Link>
                            ))}

                            {/* Additional links for larger devices */}
                            <div className="hidden md:flex space-x-2">
                                <Link
                                    to="https://hkscheduling.vercel.app/"
                                    target="_blank"
                                    className="text-white hover:text-[#0f3f8a] hover:underline no-underline px-1 sm:px-0"
                                >
                                    Rocket
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Navbar Section */}
            <Navbar expand="lg" className="sticky-top bg-white shadow" expanded={expanded}>
                <Container className="flex !justify-center md:!justify-between !important">
                    <Navbar.Brand as={Link} to="/" className="justify-start hidden md:flex">
                        <Image
                            src={require('../assets/HK.png')}
                            alt="Logo"
                            width="200"
                            height="80"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                        className="block lg:hidden"     // mx-auto - for smaller devices
                    />
                    <Navbar.Collapse id="basic-navbar-nav"
                        className="justify-center md:justify-end lg:justify-end">
                        <Nav className="text-black font-bold">
                            {mainLinks.map((link, index) => {
                                if (link.isDropdown) {
                                    return (
                                        <NavDropdown title={<span className="text-black font-bold">{link.name}</span>} id={`dropdown-${index}`} className="px-3" key={index}>
                                            {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
                                                <NavDropdown.Item key={serviceIndex} as={Link} to={service.href} className="text-black font-bold" onClick={handleLinkClick}>
                                                    {service.name}
                                                </NavDropdown.Item>
                                            ))}
                                            {link.name === "Education" && educationLinks.map((education, educationIndex) => (
                                                <NavDropdown.Item key={educationIndex} as={Link} to={education.href} className="text-black font-bold" onClick={handleLinkClick}>
                                                    {education.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    );
                                }
                                return (
                                    <Nav.Link key={index} as={Link} to={link.href} className="px-3 text-black font-bold" onClick={handleLinkClick}>
                                        {link.name}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar;
