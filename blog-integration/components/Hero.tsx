import { useEffect, useState } from "react"
import Link from "next/link"


export default function Hero(){
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
  return(

      
      <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <i
            className="fas fa-briefcase absolute top-[20%] left-[10%] text-5xl text-blue-500/20 animate-float"
            style={{ animationDelay: "0s" }}
          ></i>
          <i
            className="fas fa-globe absolute top-[30%] right-[15%] text-5xl text-blue-500/20 animate-float"
            style={{ animationDelay: "2s" }}
          ></i>
          <i
            className="fas fa-plane absolute bottom-[30%] left-[20%] text-5xl text-blue-500/20 animate-float"
            style={{ animationDelay: "4s" }}
          ></i>
        </div>

        <div className="container text-center z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-800 leading-tight">Build Your Global Career</h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with premium overseas employment opportunities across the world. We specialize in placing skilled
            professionals in top companies internationally with complete visa and documentation support.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              <i className="fas fa-briefcase"></i>
              Apply for Jobs
            </a>
            <a href="#countries" className="btn-secondary text-lg px-8 py-4">
              <i className="fas fa-globe"></i>
              Explore Countries
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {stats.placements.toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {stats.countries}
              </div>
              <div className="text-gray-600 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {stats.years}+
              </div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                {stats.success}%
              </div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

) 
};
