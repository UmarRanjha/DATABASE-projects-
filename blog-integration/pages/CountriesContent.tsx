

// type Props= {
//   info:{
//     flag:string,
//     country:string,
//     description:string,
//     features:string[],
//     image:string,
//     link:string,
//     paragraph?:string,
//   }
// }
// export default function CountriesContent({info}:Props) {

//   return (
//     <div className="flex-1 flex flex-col">
//     <div className="pt-32 container">{info.country} Page</div>
//     <div className="pt-10 container">{info.paragraph}</div>

//     </div>
//   )
// }


import Image from 'next/image';
import Link from 'next/link';


// Define the type for props (same as before)
type Props= {
  info:{
    flag:string,
    country:string,
    description:string,
    features:string[], // Used for Key Benefits/Why Choose Us
    image:string,
    link:string, 
    paragraph?:string,
  }
}

export default function CountriesContent({info}:Props) {

  // Placeholder data for the "Steps" section 
  const applicationSteps = [
    { icon: 'fas fa-file-alt', title: 'Submit CV & Screening', description: 'Upload your latest resume and pass our initial eligibility check.' },
    { icon: 'fas fa-phone-alt', title: 'Interview & Selection', description: 'Attend virtual or in-person interviews with the overseas employer.' },
    { icon: 'fas fa-passport', title: 'Documentation & Visa', description: 'We handle all work permit, visa application, and documentation processes.' },
    { icon: 'fas fa-plane-departure', title: 'Deployment & Support', description: 'Receive travel assistance and post-placement support upon arrival.' },
  ];
  
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Prominent Image & Flag/Title) */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Background Image */}
        <Image 
          src={info.image} 
          alt={`Skyline of ${info.country}`} 
          fill
          style={{ objectFit: 'cover' }} 
          className="brightness-75"
          priority // Load this image with high priority
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex items-center space-x-4">
              {/* Flag as Text */}
              <div className="text-6xl md:text-8xl" role="img" aria-label={`${info.country} Flag`}>
                {info.flag}
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
                Work in <span className="text-yellow-400">{info.country}</span>
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
        {/* Changed grid layout to single column, effectively removing the right column */}
        <div className="grid grid-cols-1 gap-12"> 
          
          {/* Main Content now spans full width */}
          <div className="col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
              Why Choose {info.country} for Your Career?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {info.paragraph || "Discover a world of opportunity in this dynamic and thriving nation. Our dedicated team is here to guide you through every step of your international job placement journey."}
            </p>

            {/* Key Features/Benefits */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-8">Key Benefits Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {info.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50/50 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <i className="fas fa-medal text-blue-600 text-2xl mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* The removed Sticky CTA Card slot is no longer here */}

        </div>
      </section>

      {/* 3. APPLICATION PROCESS STEPS */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            Our 4-Step Overseas Placement Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="relative text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
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
            Don't Miss Your Opportunity!
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Apply today and let us connect you to your dream job in {info.country}.
          </p>
          {/* This link/button is kept as requested */}
          <Link href={info.link} passHref legacyBehavior>
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