import React, { useState } from 'react';
import Colors from '../Components/Color';
import InputMask from 'react-input-mask';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        telehealth: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const { name, email, phone } = formData;

        // Name validation: Only letters and spaces
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (letters and spaces only).');
            return false;
        }

        // Email validation: Only Gmail accounts
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid Gmail address (e.g., example@gmail.com).');
            return false;
        }

        // Phone validation: Must be fully entered in (XXX)XXX-XXXX format
        const phoneRegex = /^\(\d{3}\)\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number in the format (XXX)XXX-XXXX.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch('healingkidneys.pythonanywhere.com/service/email/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({ name: '', email: '', phone: '', telehealth: '', notes: '' });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="px-4">
            <div className="max-w-5xl mx-auto rounded-lg p-8 mt-10 mb-10" style={{ backgroundColor: Colors.bgFormColor }}>
                <div className="text-center mb-6">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1" style={{ color: Colors.WhiteText }}>CONTACT US</h1>
                    <p className="font-bold" style={{ color: Colors.WhiteText }}>Send Us an Email</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                            />
                            <InputMask
                                mask="(999)999-9999"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(XXX)XXX-XXXX (Required)"
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                            >
                                {(inputProps) => (
                                    <input
                                        {...inputProps}
                                        type="tel"
                                        name="phone"
                                        maxLength={14}
                                    />
                                )}
                            </InputMask>
                            <select
                                name="telehealth"
                                value={formData.telehealth}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md border border-gray-300 focus:border-[#c64f22] focus:ring focus:ring-[#c64f22]/50"
                                required
                            >
                                <option value="" disabled>Interested in telehealth?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
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
                            className="font-bold px-8 py-2 rounded-full transition-colors"
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

export default ContactUsPage;
