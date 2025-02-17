import React from 'react';
import Colors from '../Components/Color';

const BlogLocationPage = () => {

    const hours = [
        { day: 'Monday', hours: '8:30 am - 5:00 pm' },
        { day: 'Tuesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Wednesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Thursday', hours: '8:30 am - 5:00 pm' },
        { day: 'Friday', hours: '8:30 am - 5:00 pm' },
        { day: 'Saturday', hours: 'Closed' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    return (
        <div className="mt-10">

            <div className="max-w-5xl mx-auto border rounded-lg p-4">
                <div className="flex flex-col md:flex-row gap-8"> {/* Use flex instead of grid */}

                    {/* Location Section */}
                    <div className="flex flex-col w-full md:w-[60%] h-[340px]"> {/* Set width to 60% */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>OUR LOCATION</h2>
                        <div className="relative h-full rounded-lg overflow-hidden"> {/* Use h-full to fill parent height */}
                            {/* Google Maps Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.866103540454!2d-95.4579249844064!3d30.182280281893143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645b3f7207615c3%3A0x6c0a3b5e02b886b6!2s150%20Pine%20Forest%20Dr%20Suite%20101%2C%20Shenandoah%2C%20TX%2077384%2C%20United%20States!5e0!3m2!1sen!2sus!4v1698597407437!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map Location"
                            ></iframe>

                            {/* Attribution */}
                            <div className="absolute bottom-2 right-2 text-xs" style={{ color: Colors.paragraphGray }}>
                                <span className='' style={{ color: Colors.paragraphGray }}>Map data provided by </span>
                                <span className="" style={{ color: Colors.GoogleText }}>Google</span>
                            </div>
                        </div>
                    </div>

                    {/* Hours Section */}
                    <div className="flex flex-col w-full md:w-[40%] h-[340px] justify-between"> {/* Set width to 40% and match height */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold  mb-4" style={{ color: Colors.headingBlue }}>HOURS OF OPERATION</h2>
                        <div className="space-y-1 h-full overflow-auto"> {/* Allow scrolling if necessary */}
                            {hours.map((item) => (
                                <div key={item.day} className="flex w-full">
                                    <div className="text-sm p-2 font-semibold text-center w-1/2" style={{ backgroundColor: Colors.bgOrangeHours, color: Colors.WhiteText }}> {/* Set a fixed width for day labels */}
                                        {item.day}:
                                    </div>
                                    <div className="p-2 text-center text-sm flex-1" style={{ backgroundColor: Colors.HoursBg, color: Colors.BlackText }}> {/* Allow hours to take remaining space */}
                                        {item.hours}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogLocationPage;
