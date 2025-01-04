import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GradientHeading } from '../ui/GradientHeading';
import { Modal } from '../ui/Modal';
import { ContactFormModal } from '../ui/ContactFormModal';
import { BorderTrail } from '@/components/core/border-trail';
import { features } from '../../data/features';
import { TextEffect } from '../ui/text-effect';
import { GradientBackground as GradientBackgroundComponent } from '../ui/Gradient-background';

const transformWords = [
  "Digital",
  "Innovative",
  "Strategic",
  "Transformative",
  "Cutting-Edge",
  "Advanced",
  "Powerful"
];

interface SelectedFeature {
  title: string;
  details: {
    what: string;
    why: string;
    benefits: string[];
  };
}

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);
  const [currentWord, setCurrentWord] = useState(transformWords[0]);
  const [key, setKey] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

  return (
    <section id="features" className="py-24 bg-gray-900 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientBackgroundComponent 
          colors={{ 
            from: 'from-purple-500/10', 
            via: 'via-pink-500/5', 
            to: 'to-blue-500/5' 
          }} 
          animation="fade"
          className="absolute inset-0 pointer-events-none"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <GradientHeading className="text-4xl font-bold mb-4">
            <TextEffect
              key={key}
              per="char"
              preset="fade"
              className="text-4xl font-bold"
            >
              {`${currentWord} Capabilities`}
            </TextEffect>
          </GradientHeading>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
         Bring your brand to life! Our dynamic web solutions empowers you to create a digital presence that elevates your image, amplifies your voice, and captivates your audience. Every feature, every design choice, and every line of code is crafted with your unique goals in mind—because your story deserves to be told in the most impactful way possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Determine random tilt direction
            const tiltClass = index % 2 === 0 
              ? 'hover:-rotate-1' 
              : 'hover:rotate-1';
            
            return ( 
              <div
                key={index}
                className={`group relative p-8 rounded-xl border border-gray-800/50 bg-gray-800/50 transition-all overflow-hidden perspective-500 transform-gpu hover:scale-[1.05] hover:shadow-2xl hover:shadow-emerald-900/50 duration-300 ease-out ${tiltClass}`}
                onClick={() => setSelectedFeature(feature)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedFeature(feature);
                  }
                }}
              >
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <GradientBackgroundComponent 
                    colors={{ 
                      from: 'from-purple-500/5', 
                      via: 'via-pink-500/5', 
                      to: 'to-blue-500/5' 
                    }} 
                    animation="fade"
                    className="absolute inset-0 pointer-events-none"
                  />
                </div>
                <BorderTrail
                  className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-50"
                  size={120}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <GradientHeading as="h3" className="text-xl font-semibold mb-3">
                    {feature.title}
                  </GradientHeading>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Modal
          isOpen={selectedFeature !== null}
          onClose={() => setSelectedFeature(null)}
          title={selectedFeature?.title || ''}
          onContactUs={() => setIsContactModalOpen(true)}
        >
          {selectedFeature && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">What We Offer</h4>
                <p className="text-gray-300">{selectedFeature.details.what}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Why It Matters</h4>
                <p className="text-gray-300">{selectedFeature.details.why}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {selectedFeature.details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Modal>

        <ContactFormModal 
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </section>
  );
}