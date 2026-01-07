import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the type for the single service item prop
type ServiceItem = {
    icon: string;
    iconColor: string; // Used for accent color/gradient
    title: string;
    description: string;
    link: string;
    image: string;
};

// Define the Props for the ServicesContent component
type ServiceProps = {
    info: ServiceItem;
}

export default function ServicesContent({ info }: ServiceProps) {

  // --- PLACEHOLDER DATA (Since the input object lacked these fields) ---
  
  // 1. Placeholder image (Replace with an actual image prop if available)
  const placeholderImage = "/images/services_background.jpg"; // Use a generic image path
  
  // 2. Placeholder Features (Detailed Deliverables/Benefits)
  const placeholderFeatures = [
    `${info.title} Documentation Guide`,
    "Dedicated Client Manager Access",
    "24/7 Priority Support",
    "Guaranteed Service Delivery Time",
  ];
  
  // 3. Placeholder Paragraph (Detailed service description)
  const placeholderParagraph = `Delivering excellence in ${info.title.toLowerCase()} is our priority. We understand the complexity involved in this process and offer seamless, professional handling of all requirements. Our goal is to provide a comprehensive, stress-free experience, ensuring complete compliance and satisfaction from consultation to delivery.`;

  // 4. Service Process Steps (Generic process, adjusted for tone)
  const serviceSteps = [
    { icon: 'fas fa-pen-alt', title: 'Registration & Inquiry', description: 'Submit your request details and necessary initial forms.' },
    { icon: 'fas fa-cogs', title: 'In-Depth Processing', description: 'Our experts handle all paperwork and liaise with relevant authorities.' },
    { icon: 'fas fa-stamp', title: 'Verification & Confirmation', description: 'Final checks and official confirmation of service completion.' },
    { icon: 'fas fa-thumbs-up', title: 'Client Handover & Follow-up', description: 'Delivery of completed service and post-service support.' },
  ];
  // --- END PLACEHOLDER DATA ---

  // Determine the accent color class for the Hero icon background
  const iconAccentClass = info.iconColor.split(' ').map(cls => cls.startsWith('to-') ? `border-${cls.slice(3)}` : `bg-${cls.slice(5)}`).join(' ');
  
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Prominent Image & Service Icon/Title) */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Background Image */}
        <Image 
          src={info.image} 
          alt={`Background for ${info.title} service`} 
          fill
          style={{ objectFit: 'cover' }} 
          className="brightness-75"
          priority
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/70 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex items-center space-x-6">
              {/* Dynamic Service Icon with Color */}
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-white text-3xl md:text-5xl shadow-2xl ${iconAccentClass}`}>
                <i className={`fas ${info.icon}`}></i>
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
                <span className="text-yellow-400">Expert</span> {info.title}
              </h1>
            </div>
            <p className="mt-4 text-xl text-gray-200 max-w-3xl drop-shadow">
              {info.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* 2. MAIN CONTENT - Full Width Description and Benefits */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12"> 
          
          <div className="col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
              Comprehensive Overview of Our {info.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {placeholderParagraph}
            </p>

            {/* Key Features/Deliverables */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-8">Key Service Deliverables</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {placeholderFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <i className="fas fa-check-double text-blue-600 text-xl mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE PROCESS STEPS */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            The {info.title} Process in 4 Simple Steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="relative text-center p-6 bg-white rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1">
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-gray-100">
                  {index + 1}
                </div>
                
                <i className={`${step.icon} text-blue-600 text-4xl mt-4 mb-4`}></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION (Footer Style) - RETAINED */}
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Begin Your {info.title} Journey?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Click below to initiate your service request and receive a personalized consultation.
          </p>
          {/* Link is kept as requested */}
          <Link href={info.title} passHref legacyBehavior>
            <a className="btn-primary inline-flex items-center justify-center bg-yellow-400 text-blue-800 hover:bg-yellow-500 font-extrabold text-lg px-12 py-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-105">
              <i className="fas fa-hand-point-right mr-3"></i>
              Start Application
            </a>
          </Link>
        </div>
      </div>

    </div>
  )
}