import React from 'react';
import Colors from '../Components/Color';

const Locations = () => {

    const locations = [
        {
            name: "Conroe",
            address: "200 S. Rivershire Dr, Suite #300\nConroe, TX 77304",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.1696142804656!2d-95.47156288488246!3d30.305279681795113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86472a5f03e5c139%3A0x1f22c5899aa4b1f5!2s200%20S%20Rivershire%20Dr%2C%20Conroe%2C%20TX%2077304%2C%20USA!5e0!3m2!1sen!2sin!4v1698161948489!5m2!1sen!2sin"
        },
        {
            name: "The Woodlands",
            address: "150 Pine Forest Dr, Suite #101\nShenandoah, TX 77384",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.243668490933!2d-95.45952908487595!3d30.19042372199312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864737c3b2150e6f%3A0xe0fc1e17e0e1ac04!2s150%20Pine%20Forest%20Dr%2C%20Shenandoah%2C%20TX%2077384%2C%20USA!5e0!3m2!1sen!2sin!4v1698162012575!5m2!1sen!2sin"
        },
        {
            name: "Houston",
            address: "724 FM 1960, Suite #210\nHouston, TX 77090",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.4569820592735!2d-95.41801758487535!3d30.01148832156844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473fc32f75ef41%3A0x826ab80ae0785a77!2s724%20FM%201960%20Rd%20W%2C%20Houston%2C%20TX%2077090%2C%20USA!5e0!3m2!1sen!2sin!4v1698162031890!5m2!1sen!2sin"
        }
    ];

    return (
        <div className="py-10">
            {/* Locations */}
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {locations.map((location, index) => (
                        <div key={index} className="text-center mt-4">
                            {/* Location name */}
                            <h2 className="font-bold text-2xl p-2" style={{ backgroundColor: Colors.SubmitButtonForm, color: Colors.WhiteText }}>{location.name}</h2>
                            {/* Location address */}
                            <p className="whitespace-pre-line" style={{ color: Colors.BlackText }}>{location.address}</p>

                            {/* Map iframe */}
                            <div className="border overflow-hidden">
                                <iframe
                                    src={location.mapSrc}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={location.name}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Locations;
