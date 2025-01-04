import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { GradientBackground } from '../ui/Gradient-background';
import { GradientHeading } from '../ui/GradientHeading';
import { TextEffect } from '../ui/text-effect'; // updated import path
import { ContactFormModal } from '../ui/ContactFormModal';

const heroTransformWords = [
  "Intelligent",
  "Revolutionary",
  "Seamless",
  "Transformative",
  "Breakthrough",
  "Innovative",
  "Powerful"
];

export function Hero() {
  const [currentWord, setCurrentWord] = React.useState(heroTransformWords[0]);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = heroTransformWords.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % heroTransformWords.length;
        return heroTransformWords[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientBackground 
          colors={{ 
            from: 'from-purple-500/10', 
            via: 'via-pink-500/5', 
            to: 'to-blue-500/5' 
          }} 
          animation="fade"
          className="absolute inset-0 pointer-events-none"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <GradientHeading 
            className="mb-6 font-extrabold text-7xl md:text-9xl"
          >
            <TextEffect className="text-7xl md:text-9xl">
              {`Elevate Your ${currentWord} Workflow`}
            </TextEffect>
          </GradientHeading>

          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Intellisync transforms how you collaborate, communicate, and create 
            <GradientHeading 
              as="h3"
              className="inline-block ml-2 text-2xl md:text-3xl"
              gradient="from-purple-500 via-pink-500 to-blue-500"
            >
              <TextEffect 
                per="word" 
                preset="fade" 
                className="font-bold"
              >
                Digital Experiences 
              </TextEffect>
            </GradientHeading>{' '}
            with our cutting-edge AI solutions.
          </p>

          <div className="flex justify-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="flex items-center px-8 py-4 text-lg rounded-full hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(to right, #3b82f6, #6d28d9, #ec4899)',
                color: 'white'
              }}
            >
              <Zap className="mr-3 h-6 w-6" />
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {isContactModalOpen && (
        <ContactFormModal 
          isOpen={isContactModalOpen} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default Hero;