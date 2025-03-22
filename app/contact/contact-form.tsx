'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
interface FormField {
    name: string;
    value: string;
}

interface FormErrors {
    [key: string]: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value }: FormField = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
        setErrors((prev: FormErrors) => ({
            ...prev,
            [name]: ''
        }));
    }
};

  // Validate form
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Validate form first
    if (!validateForm()) return;
    
    setFormStatus('sending');
    
    // EmailJS configuration
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'HICS_Website_ContactUs';
    const templateId = 'template_ContactUs_HICS';
    const publicKey = '50EqVqY6DRXrjqcMa';
    
    // Prepare template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFormStatus('success');
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        
        // Call the success callback if provided
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 3000);
        }
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus('error');
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 5000);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
              errors.firstName 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-orange-200/30 focus:border-orange-500 focus:ring-orange-500'
            } text-gray-800 focus:ring-1 transition-colors`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.firstName}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
              errors.lastName 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-orange-200/30 focus:border-orange-500 focus:ring-orange-500'
            } text-gray-800 focus:ring-1 transition-colors`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
            errors.email 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-orange-200/30 focus:border-orange-500 focus:ring-orange-500'
          } text-gray-800 focus:ring-1 transition-colors`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-600">Message</label>
        <textarea
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-white/80 border ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-orange-200/30 focus:border-orange-500 focus:ring-orange-500'
          } text-gray-800 focus:ring-1 transition-colors resize-none`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={formStatus === 'sending'}
        className="w-full relative overflow-hidden group bg-gradient-to-r from-orange-500
                 to-orange-600 hover:from-orange-600 hover:to-orange-500 text-white px-8 
                 py-4 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {formStatus === 'sending' ? (
            'Sending...'
          ) : formStatus === 'success' ? (
            <>
              Message Sent
              <CheckCircle className="w-5 h-5" />
            </>
          ) : formStatus === 'error' ? (
            <>
              Failed to Send
              <AlertCircle className="w-5 h-5" />
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </Button>

      {/* Status notifications */}
      {formStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
          <CheckCircle className="w-5 h-5" />
          <p>Your message has been sent successfully! We'll get back to you soon.</p>
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle className="w-5 h-5" />
          <p>There was an error sending your message. Please try again later.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;