import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-50 to-cyan-50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-blue-500 mb-4">
              <i className="fas fa-globe-americas text-2xl"></i>
              <span>Chandni Overseas</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your trusted partner for travel and overseas employment.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Services</h3>
            <div className="flex flex-col gap-2">
              <Link href="/hajj-umrah" className="text-gray-600 hover:text-blue-500 transition-colors">
                Hajj & Umrah
              </Link>
              <Link href="/visa-processing" className="text-gray-600 hover:text-blue-500 transition-colors">
                Visa Processing
              </Link>
              <Link href="/zahireen-pilgrim" className="text-gray-600 hover:text-blue-500 transition-colors">
                Zahireen Pilgrim
              </Link>
              <Link href="/ticket-booking" className="text-gray-600 hover:text-blue-500 transition-colors">
                Flight Ticketing
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">
                Home
              </Link>
              <a href="/#about" className="text-gray-600 hover:text-blue-500 transition-colors">
                About Us
              </a>
              <a href="/#contact" className="text-gray-600 hover:text-blue-500 transition-colors">
                Contact
              </a>
              <Link href="/apply-now" className="text-gray-600 hover:text-blue-500 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-2">
              <i className="fas fa-phone mr-2"></i> +92 333 522 1311
            </p>
            <p className="text-gray-600">
              <i className="fas fa-envelope mr-2"></i> chandnioep@yahoo.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-500">
          <p>&copy; 2006 Chandni Overseas Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
