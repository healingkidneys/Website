import React from 'react';
import Colors from '../Components/Color';
import InputMask from 'react-input-mask';

const GoogleFormPage = () => {

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Prevent form submission if any input is invalid
        if (!e.target.checkValidity()) {
            alert('Please fill out the form correctly.');
            return; // Stop further execution
        }

        // Handle form submission logic here (e.g., sending data to an API)
        alert('Form submitted successfully!');
    };

    return (
        <div className="">

            {/* {Google Form} */}
            <div className="max-w-5xl mx-auto rounded-lg p-8 mt-10" style={{ backgroundColor: Colors.bgFormColor }}>
                <div className="text-center mb-6">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 " style={{ color: Colors.WhiteText }}>CONTACT US</h1>
                    <p className="font-bold" style={{ color: Colors.WhiteText }}>Send Us an Email</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Enter your name (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                                pattern="[A-Za-z\s]+" // Allows only letters and spaces
                                title="Please enter a valid name (letters and spaces only)"
                            />
                            <input
                                type="email"
                                placeholder="Enter email (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                                pattern="[a-zA-Z0-9._%+-]+@gmail\.com$" // Allows only Gmail addresses
                                title="Please enter a valid Gmail address (e.g., example@gmail.com)"
                            />
                            <InputMask
                                mask="(999)999-9999"
                                placeholder="(XXX)XXX-XXXX (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                                title="Please enter a valid phone number in the format (XXX)XXX-XXXX"
                            >
                                {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        type="tel"
                                        maxLength={14}
                                    />
                                )}
                            </InputMask>
                            <select
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                defaultValue=""
                                required // Make selection required
                            >
                                <option value="" disabled>Interested in telehealth?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <div>
                            <textarea
                                placeholder="Notes to the Doctor"
                                className="w-full h-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50 min-h-[150px]"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm mb-4" style={{ color: Colors.WhiteText }}>
                            Please do not submit any Protected Health Information (PHI).
                        </p>

                        <button
                            type="submit"
                            className=" font-bold px-8 py-2 rounded-full  transition-colors"
                            style={{
                                backgroundColor: Colors.SubmitButtonForm,
                                color: Colors.WhiteText,
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = Colors.HoverSubmitButtonForm}
                            onMouseLeave={(e) => e.target.style.backgroundColor = Colors.SubmitButtonForm}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default GoogleFormPage;
