import React from 'react';
import { Users, Code2, Building, ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientHeading } from '../ui/GradientHeading';
import { TextEffect } from '../ui/text-effect';
import { BorderTrail } from '@/components/core/border-trail';
import { GradientBackground as GradientBackgroundComponent } from '../ui/Gradient-background';

const transformWords = [
  "Legends",
  "Futures",
  "Realities",
  "Innovations",
  "Transformations",
  "Experiences",
  "Solutions",
  "Visions",
  "Possibilities"
];

const coreValues = [
  {
    icon: Zap,
    title: 'Relentless Innovation',
    description: 'We don\'t just follow trends—we create them. Our passion for cutting-edge technology drives us to push boundaries and redefine what\'s possible.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We see beyond code. Our diverse team brings global insights, ensuring your digital solution resonates across cultures and markets.',
  },
  {
    icon: Shield,
    title: 'Unwavering Integrity',
    description: 'Trust is our currency. We deliver not just solutions, but promises—with transparency, reliability, and a commitment to your success.',
  }
];

const stats = [
  { icon: Users, value: '100+', label: 'Clients Transformed' },
  { icon: Code2, value: '300+', label: 'Innovations Delivered' },
  { icon: Building, value: '10+', label: 'Years of Excellence' },
];

export function About() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [300, 800], [50, -50]);
  const imageY = useTransform(scrollY, [300, 800], [0, -100]);

  const [currentWord, setCurrentWord] = React.useState(transformWords[0]);
  const [key, setKey] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const element = document.getElementById('about-section');
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

  return (
    <section id="about-section" className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientBackgroundComponent 
          colors={{ 
            from: 'from-purple-500/10', 
            via: 'via-pink-500/5', 
            to: 'to-blue-500/5' 
          }} 
          animation="fade"
          className="absolute inset-0 pointer-events-none -z-10"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: contentY }} className="space-y-8">
            <GradientHeading className="text-5xl font-bold mb-6 pb-4 w-full min-w-[850px]">
              <TextEffect
                key={key}
                per="char"
                preset="fade"
                className="text-4xl md:text-5xl font-bold whitespace-nowrap"
                trigger={isVisible}
              >
                {`Crafting Digital ${currentWord}`}
              </TextEffect>
            </GradientHeading>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are more than a tech company—we are digital architects transforming bold visions into extraordinary realities. At IntelliSync, every line of code is a brushstroke, every project a masterpiece waiting to reshape industries.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative p-6 rounded-xl border border-gray-800/50 bg-gray-800/50 hover:border-transparent transition-all hover:shadow-emerald-900/20 hover:shadow-lg hover:scale-[1.05]"
                  >
                    <BorderTrail
                      className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-50"
                      size={120}
                    />
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100/10 text-emerald-400 group-hover:bg-emerald-100/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            style={{ y: imageY }}
            className="relative hidden lg:block mt-24"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500/20 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600&h=900"
                alt="IntelliSync Team Collaboration"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-16 relative z-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 mb-4 relative z-20">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Core Values</span>
          </div>
          <GradientHeading className="text-5xl font-bold mb-6 relative z-20">
            Our Core Values
          </GradientHeading>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed relative z-20">
            The principles that drive our innovation and commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-gray-800/50 bg-gray-800/50 hover:border-transparent transition-all hover:shadow-emerald-900/20 hover:shadow-lg hover:scale-[1.05] overflow-hidden"
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
                    {value.title}
                  </GradientHeading>
                  <p className="text-gray-400 mb-4">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
