"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import countriesData from "@/data/countries"
import servicesData from "@/data/services"

export default function HomePage() {

  
  const [stats, setStats] = useState({ placements: 0, countries: 0, years: 0, success: 0 })

  useEffect(() => {
    const animateValue = (key: string, end: number, duration: number) => {
      let start = 0
      const range = end - start
      const increment = end > 100 ? 50 : 1
      const stepTime = Math.abs(Math.floor(duration / (range / increment)))

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setStats((prev) => ({ ...prev, [key]: start }))
      }, stepTime)
    }

    animateValue("placements", 15000, 2000)
    animateValue("countries", 25, 2000)
    animateValue("years", 20, 2000)
    animateValue("success", 98, 2000)
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section id="services" className="section-padding bg-linear-to-br from-blue-50 to-cyan-100">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive overseas employment solutions to help you secure your dream job abroad
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="fa-kaaba"
              iconColor="from-green-500 to-green-600"
              title="Hajj & Umrah"
              description="Complete pilgrimage packages with accommodation, transportation, and spiritual guidance"
              link="/hajj-umrah"
            />
            <ServiceCard
              icon="fa-passport"
              iconColor="from-blue-500 to-blue-600"
              title="Visa Processing"
              description="Complete visa assistance including work permits, documentation, and application support"
              link="/visa-processing"
            />
            <ServiceCard
              icon="fa-users"
              iconColor="from-purple-500 to-purple-600"
              title="Zahireen Pilgrim"
              description="Specialized services for pilgrims including group coordination and spiritual support"
              link="/zahireen-pilgrim"
            />
            <ServiceCard
              icon="fa-plane"
              iconColor="from-orange-500 to-orange-600"
              title="Flight Booking"
              description="Best flight deals and booking services for domestic and international travel"
              link="/ticket-booking"
            />
            <ServiceCard
              icon="fa-file-alt"
              iconColor="from-pink-500 to-pink-600"
              title="Document Attestation"
              description="Professional document attestation services for educational, personal, and commercial certificates"
              link="/document-attestation"
            />
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>


        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="section-padding bg-linear-to-br from-purple-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">Popular Employment Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore high-demand job markets across the globe with excellent career opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countriesData.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
           
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-linear-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                Why Choose Chandni Overseas Agency?
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over 20+ years of experience in overseas recruitment, we've successfully placed thousands of
                professionals in prestigious positions worldwide. Our team of expert consultants works tirelessly to
                match your skills with the right opportunities.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                From skilled technicians to management professionals, healthcare workers to IT specialists, we have
                established networks with top employers across multiple industries and countries.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "fa-award", number: "15000", label: "Successful Placements" },
                  { icon: "fa-globe", number: "25", label: "Countries" },
                  { icon: "fa-chart-line", number: "20+", label: "Years Experience" },
                  { icon: "fa-zap", number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-2"
                  >
                    <i className={`fas ${stat.icon} text-blue-500 text-4xl mb-4`}></i>
                    <div className="text-3xl font-black text-blue-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src="/professional-team.jpg" alt="About Us" className="w-full rounded-3xl shadow-xl" />
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-600/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-linear-to-br from-cyan-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact our expert consultants today and take the first step towards your international career
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <ContactItem icon="fa-phone" title="Phone" detail="+92 333 522 1311" />
                <ContactItem icon="fa-envelope" title="Email" detail="chandnioep@yahoo.com" />
                <ContactItem icon="fa-map-marker-alt" title="Address" detail="Karachi, Pakistan" />
                <ContactItem icon="fa-clock" title="Working Hours" detail="Mon - Sat: 9:00 AM - 6:00 PM" />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you shortly</p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function ServiceCard({ icon, iconColor, title, description, link }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group">
      
      {/* ADD pointer-events-none HERE */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-blue-500/5 to-purple-600/5 translate-x-full group-hover:translate-x-0 transition-transform duration-400"></div>
      
      {/* Content remains the same */}
      <div className={`w-16                                                                                                                                                         h-16 bg-linear-to-br ${iconColor} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:scale-110 transition-transform`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {link ? (
        <Link href={"/service"+link} className="btn-primary inline-flex items-center gap-2 mx-auto mt-4 cursor-pointer relative z-10">
          Learn More
          <i className="fas fa-arrow-right"></i>
        </Link>
      ) : (
        <a href="#contact" className="btn-primary inline-flex items-center gap-2 mx-auto mt-4 cursor-pointer relative z-10">
          Learn More
          <i className="fas fa-arrow-right"></i>
        </a>
      )}
    </div>
  )
}
function CountryCard({ flag, country, description, features, image, link }: any) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 p-6">
      <div className="relative mb-6">
        <img src={image || "/placeholder.svg"} alt={country} className="w-full h-64 object-cover rounded-2xl" />
      </div>
      <div className="text-4xl mb-3">{flag}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{country}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="mb-6 space-y-2">
        {features.map((feature: string, index: number) => (
          <div key={index} className="flex items-center gap-2 text-gray-600 text-sm">
            <i className="fas fa-check-circle text-green-500"></i>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      {link ? (
        <Link href={link} className="btn-primary w-full justify-center">
          Explore {country}
        </Link>
      ) : (
        <a href="#contact" className="btn-primary w-full justify-center">
          Explore {country}
        </a>
      )}
    </div>
  )
}

function ContactItem({ icon, title, detail }: any) {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
        <i className={`fas ${icon}`}></i>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  )
}
