import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, MessageSquare, User, AtSign, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
    const [formFocus, setFormFocus] = useState<string | null>(null);

    const reviewers = [
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100",
        "/api/placeholder/100/100"
    ];

    return (
        <section className="py-32 bg-[#0a0118] relative overflow-hidden">
            {/* Dynamic grid background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

            {/* Gradient orbs */}
            <motion.div
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2BB7DA] rounded-full filter blur-[128px] opacity-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff712a] rounded-full filter blur-[128px] opacity-20"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.25, 0.15, 0.25]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10"
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 md:p-12 relative">
                            {/* Accent Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#2BB7DA] to-[#ff712a]"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>

                            <div className="mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block px-4 py-2 rounded-full bg-[#2BB7DA]/10 backdrop-blur-sm 
                                        border border-[#2BB7DA]/20 mb-4"
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r 
                                        from-[#2BB7DA] to-[#ff712a] font-medium">
                                        LET'S CONNECT
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl font-bold text-white mb-4"
                                >
                                    Transform Your IT Operations
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-300 leading-relaxed"
                                >
                                    Ready to elevate your business with end-to-end IT management?
                                    Let our certified ITIL consultants help you focus on what matters most -
                                    your core business growth.
                                </motion.p>

                                <div className="flex flex-wrap gap-8 mt-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="flex items-center gap-3 text-gray-300 group"
                                    >
                                        <div className="p-3 rounded-xl bg-[#2BB7DA]/10 group-hover:bg-[#2BB7DA]/20 
                                            transition-colors duration-300">
                                            <Phone className="w-5 h-5 text-[#2BB7DA]" />
                                        </div>
                                        <span>+65 6809 7118</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="flex items-center gap-3 text-gray-300 group"
                                    >
                                        <div className="p-3 rounded-xl bg-[#2BB7DA]/10 group-hover:bg-[#2BB7DA]/20 
                                            transition-colors duration-300">
                                            <Mail className="w-5 h-5 text-[#2BB7DA]" />
                                        </div>
                                        <span>info@hics.com.sg</span>
                                    </motion.div>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${formFocus === 'name' ? 'bg-gradient-to-r from-[#2BB7DA]/20 to-[#ff712a]/20 blur-lg' : ''
                                        }`} />
                                    <div className="relative flex items-center">
                                        <User className="w-5 h-5 text-gray-400 absolute left-4" />
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            onFocus={() => setFormFocus('name')}
                                            onBlur={() => setFormFocus(null)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 
                                                text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] 
                                                transition-colors"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${formFocus === 'email' ? 'bg-gradient-to-r from-[#2BB7DA]/20 to-[#ff712a]/20 blur-lg' : ''
                                        }`} />
                                    <div className="relative flex items-center">
                                        <AtSign className="w-5 h-5 text-gray-400 absolute left-4" />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            onFocus={() => setFormFocus('email')}
                                            onBlur={() => setFormFocus(null)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 
                                                text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] 
                                                transition-colors"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="relative"
                                >
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${formFocus === 'phone' ? 'bg-gradient-to-r from-[#2BB7DA]/20 to-[#ff712a]/20 blur-lg' : ''
                                        }`} />
                                    <div className="relative flex items-center">
                                        <Phone className="w-5 h-5 text-gray-400 absolute left-4" />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            onFocus={() => setFormFocus('phone')}
                                            onBlur={() => setFormFocus(null)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 
                                                text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] 
                                                transition-colors"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="relative"
                                >
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${formFocus === 'message' ? 'bg-gradient-to-r from-[#2BB7DA]/20 to-[#ff712a]/20 blur-lg' : ''
                                        }`} />
                                    <div className="relative flex">
                                        <MessageSquare className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                                        <textarea
                                            placeholder="Tell us about your requirements"
                                            rows={4}
                                            onFocus={() => setFormFocus('message')}
                                            onBlur={() => setFormFocus(null)}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-4 
                                                text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] 
                                                transition-colors resize-none"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] 
                                        rounded-xl blur opacity-30" />
                                    <Button
                                        className="relative w-full bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] 
                                            text-white py-6 rounded-xl font-medium"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            SUBMIT REQUEST
                                            <Send className="w-5 h-5" />
                                        </span>
                                    </Button>
                                </motion.div>
                            </form>
                        </div>

                        <div className="relative hidden md:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2BB7DA]/20 to-[#ff712a]/20" />
                            <img
                                src="/api/placeholder/800/1000"
                                alt="Team"
                                className="w-full h-full object-cover"
                            />

                            {/* Reviews Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="absolute bottom-8 right-8 bg-black/40 backdrop-blur-xl 
                                    rounded-2xl p-6 border border-white/10"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex -space-x-3">
                                        {reviewers.map((avatar, index) => (
                                            <motion.img
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                src={avatar}
                                                alt={`Reviewer ${index + 1}`}
                                                className="w-12 h-12 rounded-full border-2 border-[#0a0118]"
                                            />
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r 
                                                from-[#2BB7DA] to-[#ff712a]">
                                                250
                                            </span>
                                            <span className="text-white">+</span>
                                        </div>
                                        <div className="text-sm text-gray-400">Successful Projects</div>
                                    </div>
                                </div>

                                {/* Animated border effect */}
                                <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
                                    <motion.div
                                        className="w-full h-full bg-gradient-to-r from-[#2BB7DA] to-[#ff712a]"
                                        animate={{
                                            x: ['-100%', '100%']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-full h-[2px] overflow-hidden">
                                    <motion.div
                                        className="w-full h-full bg-gradient-to-r from-[#ff712a] to-[#2BB7DA]"
                                        animate={{
                                            x: ['100%', '-100%']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Floating Accent Elements */}
                            <motion.div
                                className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-xl 
                                    rounded-2xl border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-[#2BB7DA]/20">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.2, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Sparkles className="w-6 h-6 text-[#2BB7DA]" />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">24/7</div>
                                        <div className="text-sm text-gray-400">Support Available</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Background Gradient Animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-[#2BB7DA]/10 to-[#ff712a]/10 mix-blend-overlay"
                                animate={{
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;