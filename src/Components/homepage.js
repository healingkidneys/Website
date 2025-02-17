import React from 'react';
import ServiceSectionpage from './ServiceSection';
import Locations from './Locations';
import PatientReviews from './PatientReviews';
import Carsouelpage from './Carsouel';

const Homepage = () => {

    return (

        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">

            <section>
                <ServiceSectionpage />
            </section>
            <section>
                <Carsouelpage />
            </section>
            <section>
                <PatientReviews />
            </section>
            <section>
                <Locations />
            </section>
            

        </div>
    );
};

export default Homepage;
