import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { Mail, Zap, Globe, Shield} from 'lucide-react';
import { GradientHeading } from '../ui/GradientHeading';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });

  const [offerCode] = useState(() => {
    // Generate offer code on component mount
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `KICKSTART-${month}${day}-${randomPart}`;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:chris.june@intellisync.ca?subject=IntelliSync Digital Transformation Inquiry (Offer: ${offerCode})&body=Offer Code: ${offerCode}%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}%0D%0AProject Type: ${formData.projectType}%0D%0A%0D%0AVisit our website: home.intellisyncsolutions.io`;
    window.location.href = mailtoLink;
  };

  const aiProjectTypes = [
    {
      value: 'ai_spa',
      label: 'AI-Powered Single Page Application',
      description: 'Intelligent web app with adaptive UI and predictive user experiences'
    },
    {
      value: 'ai_dashboard',
      label: 'AI-Driven Analytics Dashboard',
      description: 'Real-time insights with machine learning-powered visualizations'
    },
    {
      value: 'ai_chatbot',
      label: 'Conversational AI Assistant',
      description: 'Advanced NLP-powered chatbot for customer engagement'
    },
    {
      value: 'ai_recommendation',
      label: 'AI Recommendation Engine',
      description: 'Personalized content and product recommendations'
    },
    {
      value: 'ai_workflow',
      label: 'Intelligent Workflow Automation',
      description: 'AI-enhanced process optimization and task management'
    },
    {
      value: 'custom_ai',
      label: 'Custom AI Solution',
      description: 'Custom AI integration tailored to your unique vision'
    }
  ];

  const promotionFeatures = [
    {
      icon: Zap,
      title: 'Rapid Digital Transformation',
      description: 'Accelerate your digital journey with our cutting-edge Single Page Application (SPA) development.'
    },
    {
      icon: Globe,
      title: 'Global Design Standards',
      description: 'Leverage international design principles to create a website that resonates across markets.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Solution',
      description: 'End-to-end development including design, functionality, and strategic consultation.'
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Digital Transformation Consultation">
      <div className="space-y-8 bg-gray-900 p-2 rounded-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-500/20"
        >
          <GradientHeading className="text-3xl font-bold mb-4 text-center">
            Elevate Your Digital Presence
          </GradientHeading>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {promotionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100/10 text-emerald-400 group-hover:bg-emerald-100/20 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold text-emerald-400 mb-3">Promotion Highlights</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Custom Single Page Application (SPA) development</li>
              <li>• Comprehensive website package with essential sections</li>
              <li>• Modern design with gradient color theme</li>
              <li>• Advanced animated components</li>
              <li>• Free strategic UI/UX consultation</li>
              <li>• 6 months complimentary maintenance</li>
              <li className="text-yellow-300 mt-2">
                Pricing: Competitive flat rate with flexible payment schedule
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold text-red-400 mb-3">Client Responsibilities</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="text-red-300">• Responsible for domain name and hosting fees</li>
              <li>• Provide initial project brief and design preferences</li>
              <li>• Timely feedback during design and development phases</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Project Timeline & Payment</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="text-yellow-300">Project Milestones:</li>
              <li>• Mock-up design completed within 14 days</li>
              <li>• Full website functionality delivered within 30 days</li>
              <li className="mt-2 text-blue-300">Payment Schedule:</li>
              <li>• 25% downpayment at project initiation</li>
              <li>• 25% due at the time of first mock-up delivery</li>
              <li>• Remaining balance upon final delivery</li>
              <li className="mt-2 text-emerald-300">
                <a 
                  href="https://home.intellisyncsolutions.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                >
                  Visit our website for more details
                </a>
              </li>
            </ul>
          </div>

          {formData.projectType && (
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6 animate-fade-in">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">
                {aiProjectTypes.find(p => p.value === formData.projectType)?.label}
              </h4>
              <p className="text-gray-300 text-sm">
                {aiProjectTypes.find(p => p.value === formData.projectType)?.description}
              </p>
            </div>
          )}
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
              Project Type
            </label>
            <select
              id="projectType"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            >
              <option value="">Select a project type</option>
              {aiProjectTypes.map((projectType) => (
                <option key={projectType.value} value={projectType.value}>
                  {projectType.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              placeholder={`Tell me about your vision—your boldest dream, your ultimate goal. What inspires you? What sets your heart racing? Share your ambition, no matter how daring, and together, we’ll create something extraordinary—crafted with passion, driven by purpose, and built to transform your world.`}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Start Your Digital Journey
          </motion.button>
        </form>
      </div>
    </Modal>
  );
}