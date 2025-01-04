
import {
  Code2,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { GradientHeading } from '../ui/GradientHeading';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-950 text-white border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Code2 className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">
                IntelliSync Solutions
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering you with forward-thinking cutting-edge digital
              experiences tailored to elevate innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          <div>
            <GradientHeading as="h3" className="text-lg font-semibold mb-4">
              Services
            </GradientHeading>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <GradientHeading as="h3" className="text-lg font-semibold mb-4">
              Company
            </GradientHeading>
            <ul className="space-y-2">

            
              <div className="mt-6">
                <a 
                  href="https://home.intellisyncsolutions.io" 
                  className="text-emerald-400 hover:underline"
                >
                  Visit our website
                </a>
              </div>
              
             
            </ul>
          </div>

          <div>
            <GradientHeading as="h3" className="text-lg font-semibold mb-4">
              Contact
            </GradientHeading>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">chris.june@intellisync.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">Chatham-Kent, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              2024 IntelliSync Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
