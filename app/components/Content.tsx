
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative py-16 md:py-32 overflow-hidden w-full min-h-[500px]" style={{ backgroundImage: "url('/assets/hero-bg-373c9e08.png')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", marginLeft: "calc(50% - 50vw)", marginRight: "calc(50% - 50vw)" }}>
            <div className="absolute top-8 left-8 md:left-16 z-10">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap inline-flex items-end">
                            Our Vision
                            <span className="bg-[#25AFFA] w-2 h-2 ml-1 mb-1"></span>
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6 max-w-xl">
                            We are committed to enhancing mental well-being through innovative, evidence-informed digital solutions designed to support healthy habits and improve quality of life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const About = () => {
    return (
        <div className="px-4 space-y-6 bg-white">
            <section className="bg-[#1A2238] py-16 md:py-24 text-white overflow-hidden rounded-[32px]" style={{ backgroundImage: "url('/assets/about-bg-1e0045a4.svg')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-2 px-8">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <div className="flex items-center mb-6">
                                <img src="/assets/title-left-5f7a618b.svg" alt="Title Left" className="w-10 h-10" />
                                <h2 className="text-3xl md:text-4xl font-bold mx-3">About Us</h2>
                                <img src="/assets/title-right-33edfae6.svg" alt="Title Right" className="w-10 h-10" />
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed max-w-xl">
                                DT MEDICAL INC. is committed to advancing mental well-being and sleep quality through evidence-based CBT and CBT-I methodologies. Our innovative platform equips healthcare providers with robust tools to boost client engagement, Promote positive lifestyle changes, and Support lasting positive change.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:flex md:items-center md:h-full">
                                <div className="image-container w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-[rgba(200,200,200,0.3)] bg-[#F2F5F9]">
                                    <img src="/assets/about-1-91b540af.png" className="w-full h-full object-cover" alt="Left image" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="image-container w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-[rgba(200,200,200,0.3)]">
                                    <img src="/assets/about-3-6eadc158.png" className="w-full h-full object-cover" alt="Top right image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 md:py-24 bg-[#F2F5F9] rounded-[32px]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <div className="flex items-center mb-6 justify-center">
                            <img src="/assets/title-left-5f7a618b.svg" alt="Title Left" className="w-10 h-10" />
                            <h2 className="text-3xl md:text-4xl font-bold mx-3">Key Advantages</h2>
                            <img src="/assets/title-right-33edfae6.svg" alt="Title Right" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="flex justify-center mb-8 text-center">
                        Our platform is designed to support mental well-being and sleep management by integrating evidence-based CBT principles with CCBT and CBT-I modules. Tailored for healthcare providers, it offers effective tools to enhance care delivery and improve service efficiency.
                    </div>
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="mb-4"><img src="/assets/adv-1-3dbc5abc.svg" alt="Advantage 1" className="w-10 h-10" /></div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Science-backed Approach</h3>
                                <p className="text-gray-700">Built on proven CBT principles, the platform provides evidence-informed methods to promote mental well-being and better sleep.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="mb-4"><img src="/assets/adv-2-2e758021.svg" alt="Advantage 2" className="w-10 h-10" /></div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Standardized Training</h3>
                                <p className="text-gray-700">The structured program simplifies implementation, making it easier for healthcare providers to deliver consistent support.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="mb-4"><img src="/assets/adv-3-eeb15660.svg" alt="Advantage 3" className="w-10 h-10" /></div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Reduced Workload</h3>
                                <p className="text-gray-700">Users can complete guided exercises independently, minimizing repetitive instructions for healthcare providers.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="mb-4"><img src="/assets/adv-4-c4ff6f24.svg" alt="Advantage 4" className="w-10 h-10" /></div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Accessible Anytime and Anywhere</h3>
                                <p className="text-gray-700">The platform is available on both mobile and desktop devices, ensuring flexibility for users.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="mb-4"><img src="/assets/adv-5-f1b6eaed.svg" alt="Advantage 5" className="w-10 h-10" /></div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Progress Tracking</h3>
                                <p className="text-gray-700">The system logs user progress and feedback, offering valuable insights to inform care strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section Preview */}
            <section className="bg-[#1A2238] py-16 md:py-24 text-white rounded-[32px] flex flex-row items-center justify-between">
                <img src="/assets/arrow-3b20b926.svg" alt="Arrow" className="hidden md:block w-12 h-32 ml-2" />
                <div className="container mx-auto px-4">
                    <div className="grid mb-4">
                        <div className="bg-[#3D4966] rounded-lg p-3 flex items-center relative">
                            <img src="/assets/personalized-8718ef6c.svg" alt="Personalized" className="absolute left-3 h-10" />
                            <div className="w-full flex items-center justify-center gap-3 pl-12 py-2">
                                <span className="font-medium text-center">Mental Health</span>
                                <span className="bg-[#5D6A85] w-3 h-3 inline-block rounded-[2px]"></span>
                                <span className="font-medium text-center">Sleep management</span>
                                <span className="bg-[#5D6A85] w-3 h-3 inline-block rounded-[2px]"></span>
                                <span className="font-medium text-center">Mindfulness</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#38B6FF] rounded-lg p-5 mb-4 flex items-center justify-center gap-4">
                        <a href="https://ccbt.dt-medical-inc.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-center hover:text-white underline-offset-4 hover:underline transition-all">CCBT Module</a>
                        <img src="/assets/plus-a5e843b4.svg" alt="Plus" className="mx-4" />
                        <span className="font-medium text-center">CBT-I Module</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
                        <div className="rounded-lg p-5 flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('/assets/ai-8875a197.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                            <span className="font-medium text-white relative z-10">Artificial Intelligence</span>
                        </div>
                        <div className="rounded-lg p-5 flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('/assets/ml-dc97ec73.jpg')" }}>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                            <span className="font-medium text-white relative z-10">Machine Learning</span>
                        </div>
                    </div>
                    <div className="container mx-auto mt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-10 md:mb-0 flex">
                                <div className="text-3xl md:text-3xl font-bold mb-6">
                                    We create better health experience through AI technology
                                    <span className="bg-[#25AFFA] w-1 h-1 ml-1 mb-0 inline-block"></span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center mb-6 justify-end">
                                    <img src="/assets/title-left-5f7a618b.svg" alt="Title Left" className="w-10 h-10" />
                                    <h2 className="text-3xl font-bold mx-3">Contact Us</h2>
                                    <img src="/assets/title-right-33edfae6.svg" alt="Title Right" className="w-10 h-10" />
                                </div>
                                <div className="flex justify-end">
                                    <a href="mailto:info@dtmedical.ca" className="inline-flex items-center justify-center bg-[#090E1D] hover:bg-blue-900 transition-colors py-3 px-6 rounded-lg">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        E-mail: info@dtmedical.ca
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/arrow-3b20b926.svg" alt="Arrow" className="hidden md:block w-12 h-32 mr-2" />
            </section>
        </div>
    );
};
