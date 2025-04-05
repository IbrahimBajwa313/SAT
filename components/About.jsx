// pages/about.js

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-blue-900 text-white py-6 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-blue-800">What does Dr. Osama Riaz say about Shab e Abitalib?</h2>
                    <p className="mt-4 text-gray-700">
                        SHAB-E-ABI TALIB, a remarkable NGO established by students, is dedicated to aiding impoverished communities in Gaza. 
                        With a deep commitment to making a positive impact, our mission is to provide support and assistance to those in need.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-blue-800">✨ Inspiration Behind the NGO</h2>
                    <p className="mt-4 text-gray-700">
                        The journey began with a vision to uplift the less privileged in Gaza. Through our efforts, we strive to enhance the quality of life for those struggling to meet basic needs.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-blue-800">🚀 Projects and Initiatives</h2>
                    <p className="mt-4 text-gray-700">
                        Our projects range from medical outreach to educational camps, all aimed at fostering community development and empowerment. We believe in creating sustainable solutions that uplift the community.
                    </p>
                </section>
            </main>

            <footer className="bg-blue-900 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} Shab e Abitalib NGO. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;