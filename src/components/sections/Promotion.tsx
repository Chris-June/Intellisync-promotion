import React from 'react';
import { Gift, Clock, Check } from 'lucide-react';
import { GradientHeading } from '../ui/GradientHeading';
import { ContactFormModal } from '../ui/ContactFormModal';
import { TextEffect } from '../ui/text-effect';
import { Modal } from '../ui/Modal'; // Import Modal component
import { GradientBackground as GradientBackgroundComponent } from '../ui/Gradient-background';
import { BorderTrail } from '@/components/core/border-trail';

const transformWords = [
  "Brand",
  "Future",
  "Success",
  "Vision",
  "Innovation",
  "Strategy",
  "Impact"
];

export function Promotion() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [currentWord, setCurrentWord] = React.useState(transformWords[0]);
  const [key, setKey] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const element = document.getElementById('promotion-section');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = transformWords.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % transformWords.length;
        return transformWords[nextIndex];
      });
      setKey(k => k + 1); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    console.log('Contact Modal State:', isContactModalOpen);
  }, [isContactModalOpen]);

  return (
    <>
      <div className="relative min-h-screen">
        <GradientBackgroundComponent 
          colors={{ 
            from: 'from-blue-500/10', 
            via: 'via-purple-500/10', 
            to: 'to-pink-500/10' 
          }} 
          animation="fade"
          className="absolute inset-0 pointer-events-none"
        />
        <section id="promotion-section" className="py-24 relative">
          <div id="promotions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Gift className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">2025 New Years Offer</span>
              </div>
              <GradientHeading className="text-4xl font-bold mb-4">
                <TextEffect
                  key={key}
                  per="char"
                  preset="fade"
                  className="text-4xl font-bold"
                  trigger={isVisible}
                >
                  {`Build Your ${currentWord}, Transform Your Future`}
                </TextEffect>
              </GradientHeading>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Kickstart 2025 with a professionally designed digital presence, tailored just for you.
              </p>
            </div>

            <GradientHeading className="text-4xl font-bold text-center mb-16">Limited Time Offer to Kick Start 2025</GradientHeading>
            <div className="rounded-2xl shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-700/30 backdrop-blur-xl min-w-[120%] lg:min-w-full bg-gray-900/30 transition-transform duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 z-0 pointer-events-none">
                <BorderTrail 
                  className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-50"
                  size={120}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 relative">
                <div className="absolute inset-0">
                  <GradientBackgroundComponent 
                    colors={{ 
                      from: 'from-purple-500/5', 
                      via: 'via-pink-500/5', 
                      to: 'to-blue-500/5' 
                    }} 
                    animation="fade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-8 lg:p-12 lg:w-[110%] lg:-mx-[5%] relative">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">
                        <strong>$750.00</strong> for a fully customized website
                      </span>
                    </div>

                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">
                        Includes: Navigation, Home, About, Services, and Contact page
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">
                        Personal or business branding tailored to your needs
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">
                        Mobile-friendly, responsive design
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">Free 1-hour consultation</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">14-day delivery guarantee</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3" />
                      <span className="text-gray-300">6 months of free maintenance</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center mb-4">
                      <Clock className="h-5 w-5 text-emerald-400 mr-2" />
                      <span className="text-sm text-gray-400">Offer ends Feb 28, 2025</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default form submission
                        e.stopPropagation(); // Stop event propagation
                        console.log('Button clicked!');
                        setIsContactModalOpen(true);
                      }}
                      className="w-full bg-emerald-400 text-white px-8 py-3 rounded-lg hover:bg-emerald-500 transition-colors relative z-10 cursor-pointer"
                    >
                      Claim Your Offer
                    </button>
                  </div>
                </div>

                <div className="relative p-10 lg:p-12">
                  <div className="text-white">
                    <GradientHeading as="h3" className="text-4xl font-bold mb-4">
                      Your Vision, Your Brand
                    </GradientHeading>
                    <div className="text-lg mb-6 w-[110%] -mx-[5%] whitespace-nowrap">
                      <TextEffect 
                        key="custom-web-apps" 
                        per="char" 
                        preset="fade" 
                        className="text-lg inline-block w-full"
                        loop={true}
                      >
                        Custom web applications for creators, professionals, small businesses and personal branding.
                      </TextEffect>
                    </div>
                    <div className="space-y-4 text-sm">
                      <p>• Beautifully crafted personal branding sites</p>
                      <p>• Business-ready professional websites</p>
                      <p>• Mobile-friendly designs that stand out</p>
                      <p>• Start 2025 with a digital presence you’ll love</p>
                      <div className="mt-4 space-y-4">
                        <p className="text-md font-semibold text-gray-300">Demo Sites:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <a 
                            href="https://yoga-studios.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <div className="relative w-full aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                              <span className="text-white/70 text-sm">Yoga Studios</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          </a>
                          <a 
                            href="https://summit-shows-canada.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <div className="relative w-full aspect-video bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                              <span className="text-white/70 text-sm">Summit Shows Canada</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          </a>
                          <a 
                            href="https://erins-photography.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <div className="relative w-full aspect-video bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center">
                              <span className="text-white/70 text-sm">Erin's Photography</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          </a>
                          <a 
                            href="https://intellisync-home-pro.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <div className="relative w-full aspect-video bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                              <span className="text-white/70 text-sm">Intellisync Home Pro</span>
                            </div>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onContactUs={() => {
            setIsModalOpen(false);
            setIsContactModalOpen(true);
          }}
          title="Your Vision, Our Code"
        >
          <div className="space-y-6 text-white p-6">
            <section className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">What We Offer</h4>
              <p className="text-gray-300 leading-relaxed">
                Every click, every pixel, every interaction is designed and developed to bring your vision to life—without compromise. 
                From web applications to mobile solutions, our custom creations fit your business like a second skin.
              </p>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Why It Matters</h4>
              <p className="text-gray-300 leading-relaxed">
                Off-the-shelf solutions dim your light, forcing your brilliance into generic templates. 
                With IntelliSync, your digital solution becomes as exceptional as your vision—tailored, scalable, and undeniably you.
              </p>
            </section>

            <section>
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">Key Benefits</h4>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>A seamless extension of your business identity.</li>
                <li>Built for growth, ready for the future.</li>
                <li>Harmonious integration into your workflow.</li>
                <li>Elevated performance and unforgettable user experience.</li>
              </ul>
            </section>
          </div>
        </Modal>
      </div>
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}