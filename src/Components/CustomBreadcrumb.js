import React from 'react';
// import Colors from '../Components/Color';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const CustomBreadcrumb = () => {
    const location = useLocation();

    // Map routes to breadcrumb labels
    const breadcrumbMap = {
        '/': 'Home',
        '/physicians': 'Physicians',
        '/services': 'Services',
        '/services/dialysis': 'Dialysis',
        '/services/hypertension': 'Hypertension',
        '/services/kidney-disease': 'Kidney Disease',
        '/services/kidney-doctor': 'What is a Kidney Doctor?',
        '/services/kidney-stones': 'Kidney Stones',
        '/patient-registration': 'Patient Registration',
        '/education': 'Education',
        '/education/blog': 'Blog',
        '/locations-directions': 'Locations/Directions',
        '/contact-us': 'Contact Us',
        '/signs-symptoms-kidney-stones-want-to-see-a-doctor': 'Signs and Symptoms of Kidney Stones',
        '/how-nephrologists-diagnose-kidney-disorders': 'How Nephrologists Diagnose Kidney Disorders',
        '/understanding-hypertension-causes-symptoms-and-risk-factors': 'Understanding Hypertension',
        '/kidney-stones-causes-for-concern': 'Kidney Stones Causes for Concern',
        '/welcome-to-our-blog': 'Welcome to Our Blog',
    };

    const pathnames = location.pathname.split('/').filter((x) => x);

    // Define paths where breadcrumb should not render
    const hiddenBreadcrumbPaths = [
        '/',
        '/blog/kidney-stones',
        '/blog/nephrologists',
        '/sitemap',
        '/signs-symptoms-kidney-stones-want-to-see-a-doctor',
        '/how-nephrologists-diagnose-kidney-disorders',
        '/understanding-hypertension-causes-symptoms-and-risk-factors',
        '/kidney-stones-causes-for-concern',
        '/welcome-to-our-blog',
    ];

    // Return null if on a page where breadcrumb should not render
    if (hiddenBreadcrumbPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <div className=''>
            <Breadcrumb className="max-w-5xl mx-auto pt-4 flex items-center py-2 pl-6 sm:pl-6 lg:pl-0">
                <Breadcrumb.Item
                    linkAs={Link}
                    linkProps={{ to: '/' }}
                    className="text-gray-700 no-underline hover:underline font-semibold transition duration-200 ease-in-out">
                    Home
                </Breadcrumb.Item>
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <Breadcrumb.Item active key={routeTo} className="text-gray-700 font-semibold">
                            {breadcrumbMap[routeTo]}
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item
                            linkAs={Link}
                            linkProps={{ to: routeTo }}
                            key={routeTo}
                            className="text-gray-700 font-semibold transition duration-200 ease-in-out"
                        >
                            {breadcrumbMap[routeTo]}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </div>
    );
};

export default CustomBreadcrumb;
