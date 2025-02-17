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
                    <div className="flex flex-col md:flex-row space-x-0 md:pr-6 md:space-x-4 mt-2 md:mt-0">
                        <a href="https://login.officite.com/auth?state=4b00feb0fab95d1da85634c97bf79bee&scope=openid%20email%20brand%20smbportalapi%20profile&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Fsecure.officite.com%2Fsite%2Flogin&client_id=smbportalibc" 
                         target='_blank' rel="noreferrer" className="hover:underline  font-bold mb-2 md:mb-0" style={{ color: Colors.WhiteText }}>Admin Log In</a>
                        <a href="/sitemap" className="hover:underline font-bold" style={{ color: Colors.WhiteText }}>Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
