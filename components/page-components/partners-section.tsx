import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Star, ArrowUpRight, Globe,
    Award, Sparkles, Users, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Seamless Marquee Component
interface SmoothMarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
}

const SmoothMarquee = ({ children, direction = 'left', speed = 25, className = '' }: SmoothMarqueeProps) => {
    const [duplicated, setDuplicated] = useState<React.ReactNode[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setContainerWidth(width);
            // Ensure enough duplicates for seamless scroll
            const duplicatesNeeded = Math.ceil((window.innerWidth * 2) / width) + 2;
            setDuplicated(Array(duplicatesNeeded).fill(children));
        }

        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setContainerWidth(width);
                const duplicatesNeeded = Math.ceil((window.innerWidth * 2) / width) + 2;
                setDuplicated(Array(duplicatesNeeded).fill(children));
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [children]);

    return (
        <div className={`overflow-hidden relative ${className}`}>
            <motion.div
                ref={containerRef}
                animate={{
                    x: direction === 'left' ? [-containerWidth, 0] : [0, -containerWidth],
                }}
                transition={{
                    duration: containerWidth / speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="flex"
            >
                {duplicated.map((item, idx) => (
                    <div key={idx} className="flex shrink-0">
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const PartnersSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<any>(null);

    const partners = [
        {
            name: "SKYLIGHT TECH",
            logo: "/api/placeholder/400/200",
            color: "#2BB7DA"
        },
        {
            name: "DALTON SYSTEMS",
            logo: "/api/placeholder/400/200",
            color: "#ff712a"
        },
        {
            name: "HUSTON SOLUTIONS",
            logo: "/api/placeholder/400/200",
            color: "#7928CA"
        },
        {
            name: "TECH DYNAMICS",
            logo: "/api/placeholder/400/200",
            color: "#FF0080"
        }
    ];

    const customers = [
        { name: "Customer 1", logo: "/api/placeholder/160/80" },
        { name: "Customer 2", logo: "/api/placeholder/160/80" },
        { name: "Customer 3", logo: "/api/placeholder/160/80" },
        { name: "Customer 4", logo: "/api/placeholder/160/80" },
        { name: "Customer 5", logo: "/api/placeholder/160/80" },
        { name: "Customer 6", logo: "/api/placeholder/160/80" },
        { name: "Customer 7", logo: "/api/placeholder/160/80" },
        { name: "Customer 8", logo: "/api/placeholder/160/80" }
    ];

    useEffect(() => {
        interface MousePosition {
            x: number;
            y: number;
        }

        const handleMouseMove = (e: MouseEvent): void => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Partner Logo Items
    const partnerItems = partners.map((partner, index) => (
        <div
            key={index}
            className="relative px-16 py-12 mx-6 bg-black/40 backdrop-blur-xl 
                border border-white/10 rounded-3xl"
        >
            {/* Static gradient background */}
            <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                    background: `linear-gradient(45deg, ${partner.color}33, transparent)`
                }}
            />

            {/* Partner Logo Only */}
            <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto object-contain"
            />


        </div>
    ));

    // Customer Items
    const customerItems = customers.map((customer, index) => (
        <div
            key={index}
            className="relative min-w-[180px] h-20 mx-3 bg-black/20 backdrop-blur-xl 
                border border-white/5 rounded-xl p-4 flex items-center justify-center"
        >
            <img
                src={customer.logo}
                alt={customer.name}
                className="h-10 w-auto object-contain opacity-50"
            />
        </div>
    ));

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-[#0a0118] overflow-hidden py-24"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2BB7DA_0%,_transparent_50%)] 
                        blur-3xl opacity-20"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
                    }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#ff712a_0%,_transparent_50%)] 
                        blur-3xl opacity-20"
                    style={{
                        transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
                    }}
                />
                <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5" />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{
                            scale: 1.1,
                            rotateZ: [0, -10, 10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-24 h-24 mx-auto mb-8 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] 
                            rounded-3xl blur-xl opacity-50" />
                        <div className="relative h-full bg-black/50 rounded-3xl p-6 backdrop-blur-xl 
                            border border-white/10 flex items-center justify-center">
                            <Users className="w-12 h-12 text-white" />
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-7xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r 
                            from-[#2BB7DA] to-[#ff712a]">
                            Trusted Partnerships
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative p-8 rounded-3xl backdrop-blur-xl mt-12"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2BB7DA]/20 
                            to-[#ff712a]/20 blur-xl opacity-50" />
                        <p className="relative text-xl text-gray-300 leading-relaxed">
                            We help customers with not just implementation but by managing their systems end to end.
                            There by allowing our customers to rest the worry on IT operations and focus more on
                            their business process improvements.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Partners Marquee Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-white mb-4">
                            Technology Partners
                        </h2>
                        <p className="text-xl text-gray-400">
                            Collaborating with industry leaders to deliver innovative solutions
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0118] to-transparent 
                            z-10 pointer-events-none" />

                        <SmoothMarquee direction="left" speed={30}>
                            {partnerItems}
                        </SmoothMarquee>
                    </div>
                </div>

                {/* Service Quality Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto mb-32"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="relative p-12 rounded-3xl overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#2BB7DA]/10 to-[#ff712a]/10"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />

                        <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 
                            rounded-3xl p-12 overflow-hidden group">

                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 opacity-30"
                                animate={{
                                    background: [
                                        'radial-gradient(circle at 0% 0%, #2BB7DA 0%, transparent 50%)',
                                        'radial-gradient(circle at 100% 0%, #ff712a 0%, transparent 50%)',
                                        'radial-gradient(circle at 100% 100%, #2BB7DA 0%, transparent 50%)',
                                        'radial-gradient(circle at 0% 100%, #ff712a 0%, transparent 50%)',
                                        'radial-gradient(circle at 0% 0%, #2BB7DA 0%, transparent 50%)',
                                    ]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            <motion.div
                                className="w-24 h-24 mx-auto mb-8 bg-black/30 rounded-2xl p-6 
                                    border border-white/10 relative group-hover:scale-110 
                                    transition-transform duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2BB7DA]/20 
                                    to-[#ff712a]/20 blur-lg opacity-50" />
                                <Sparkles className="w-12 h-12 text-[#2BB7DA]" />
                            </motion.div>

                            <p className="text-2xl text-gray-300 leading-relaxed text-center">
                                We focus on end-to-end service strategy, service design, service transition,
                                service operations and continual service improvement that is managed by certified
                                ITIL consultants who focus only on meeting customer defined service level agreements.
                            </p>

                            {/* Animated Corner Accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden">
                                <motion.div
                                    className="w-[2px] h-full bg-gradient-to-b from-[#2BB7DA] to-transparent absolute top-0 left-6"
                                    animate={{ top: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="w-full h-[2px] bg-gradient-to-r from-[#2BB7DA] to-transparent absolute top-6 left-0"
                                    animate={{ left: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                                <motion.div
                                    className="w-[2px] h-full bg-gradient-to-t from-[#ff712a] to-transparent absolute bottom-0 right-6"
                                    animate={{ bottom: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="w-full h-[2px] bg-gradient-to-l from-[#ff712a] to-transparent absolute bottom-6 right-0"
                                    animate={{ right: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Customers Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our Valued Customers
                        </h2>
                        <p className="text-xl text-gray-400">
                            Proudly serving distinguished organizations across Southeast Asia
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0118] to-transparent 
                                z-10 pointer-events-none" />

                            <SmoothMarquee direction="left" speed={35}>
                                {customerItems.slice(0, 4)}
                            </SmoothMarquee>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0118] to-transparent 
                                z-10 pointer-events-none" />

                            <SmoothMarquee direction="right" speed={30}>
                                {customerItems.slice(4)}
                            </SmoothMarquee>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-xl text-gray-400 mb-12">
                        We believe in strategic partnerships and partner ecosystem because we can form win-win alliances and make our customers happy with stronger engagement models.
                    </p>
                    <motion.div
                        className="relative inline-block"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="absolute -inset-3 bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] 
                            rounded-2xl blur-lg opacity-25" />

                        <Button
                            size="lg"
                            className="relative bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] text-white 
                                px-12 py-6 text-xl rounded-xl"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started Today
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </motion.div>
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersSection;