import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageSquare, User, AtSign, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactBackground from '@/animations/homepage/contact-background';

const ContactSection = () => {
  const [formFocus, setFormFocus] = useState<string | null>(null);

  const stats = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "+65 6809 7118",
      gradient: "from-[#ff712a] to-[#ff9500]"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "info@hics.com.sg",
      gradient: "from-[#ff712a] to-[#ff9500]"
    }
  ];

  const formFields = [
    {
      icon: <User />,
      type: "text",
      placeholder: "Full Name",
      id: "name"
    },
    {
      icon: <AtSign />,
      type: "email",
      placeholder: "Email Address",
      id: "email"
    },
    {
      icon: <Phone />,
      type: "tel",
      placeholder: "Phone Number",
      id: "phone"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <ContactBackground />
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 " />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#ff712a]/10"
        >
          <div className="grid md:grid-cols-2">
            {/* Form Section */}
            <div className="p-8 md:p-12 relative">
              {/* Header Content */}
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 rounded-full bg-[#ff712a]/10 backdrop-blur-sm 
                    border border-[#ff712a]/20 mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                    font-medium">
                    GET IN TOUCH
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                    Transform
                  </span>
                  <span className="text-white"> Your IT Operations</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 md:text-lg"
                >
                  Ready to elevate your business with end-to-end IT management? Let our certified ITIL 
                  consultants help you focus on what matters most - your core business growth.
                </motion.p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} p-[1px]`}>
                        <div className="bg-black rounded-xl p-2">
                          {React.cloneElement(stat.icon, { 
                            className: `w-5 h-5 text-[#ff712a] group-hover:text-[#ff9500] transition-colors duration-300`
                          })}
                        </div>
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 
                      ${formFocus === field.id ? 'bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 blur-lg' : ''}`} 
                    />
                    <div className="relative flex items-center">
                      {React.cloneElement(field.icon, { 
                        className: "w-5 h-5 text-gray-400 absolute left-4" 
                      })}
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        onFocus={() => setFormFocus(field.id)}
                        onBlur={() => setFormFocus(null)}
                        className="w-full bg-black/20 border border-[#ff712a]/10 rounded-xl pl-12 pr-4 py-4 
                          text-white placeholder-gray-400 focus:outline-none focus:border-[#ff712a] 
                          transition-colors"
                      />
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 
                    ${formFocus === 'message' ? 'bg-gradient-to-r from-[#ff712a]/20 to-[#ff9500]/20 blur-lg' : ''}`} 
                  />
                  <div className="relative flex">
                    <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                    <textarea
                      placeholder="Tell us about your requirements"
                      rows={4}
                      onFocus={() => setFormFocus('message')}
                      onBlur={() => setFormFocus(null)}
                      className="w-full bg-black/20 border border-[#ff712a]/10 rounded-xl pl-12 pr-4 py-4 
                        text-white placeholder-gray-400 focus:outline-none focus:border-[#ff712a] 
                        transition-colors resize-none"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ff712a] to-[#ff9500] 
                    rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                  <Button
                    className="relative w-full bg-gradient-to-r from-[#ff712a] to-[#ff9500] hover:from-[#ff9500] 
                      hover:to-[#ff712a] text-white py-6 rounded-xl font-medium overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 
                      transition-transform duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white 
                      group-hover:text-[#ff712a] transition-colors duration-300">
                      SUBMIT REQUEST
                      <Send className="w-5 h-5" />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Image Section */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff712a]/20 to-[#ff9500]/20" />
              <img
                src="/page-components/care.avif"
                alt="Team"
                className="w-full h-full object-cover"
              />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-xl rounded-2xl p-6 
                  border border-[#ff712a]/10"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff712a] to-[#ff9500] p-[1px]">
                    <div className="bg-black rounded-xl p-2">
                      <Sparkles className="w-6 h-6 text-[#ff712a]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff712a] to-[#ff9500]">
                        24/7
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;