import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-rose-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-10 h-10 text-rose-400 fill-rose-400" />
              <h3 className="text-2xl font-bold">Cancer Support</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Providing hope, support, and resources to cancer patients, survivors, and their families worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-all">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-rose-600 rounded-full flex items-center justify-center transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">support@canceraware.org</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">1-800-SUPPORT</p>
                  <p className="text-sm text-gray-400">24/7 Helpline</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Hope Street</p>
                  <p className="text-gray-300">New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Cancer Awareness & Support. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
