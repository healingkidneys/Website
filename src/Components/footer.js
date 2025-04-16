import React from 'react';
import Colors from '../Components/Color';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-2 pb-0" style={{ color: Colors.WhiteText }}>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="font-bold mb-2 md:mb-0 underline md:pl-6">
                        © 2024 NTIPL
                    </p>
                    <a href="/sitemap" className="hover:underline font-bold mb-2 md:mb-0" style={{ color: Colors.WhiteText }}>Site Map</a>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
