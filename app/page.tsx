"use client";

import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Rocket,
  MessageSquare,
  Boxes,
  Tags,
  ArrowRight,
  Monitor,
  TrendingUp,
  Smartphone,
  PenTool,
  BookOpen, Target, Diamond,
  Phone, Feather, BarChart3, Brain, Settings, Wrench, Power,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Dribbble
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroWithFeatures from "@/components/page-components/hero-with-features";
import TransformSection from "@/components/page-components/transform-section";
import FloatingBackground from "@/components/page-components/foating-background";
import ServicesSection from "@/components/page-components/services-section";
import TrustedClientsSection from "@/components/page-components/partners-section";
import ContactSection from "@/components/page-components/contacts-us-section";
import PortfolioSection from "@/components/page-components/portfolio-section";
import ProcessSection from "@/components/page-components/process-section";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [transformRef, transformInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [chooseUsRef, chooseUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const clientLogos = [
    { name: "BAHAMA MUSEUM", logo: "/api/placeholder/160/40" },
    { name: "BLAKE STAR", logo: "/api/placeholder/160/40" },
    { name: "DALTON", logo: "/api/placeholder/160/40" },
    { name: "NICK & JOAN", logo: "/api/placeholder/160/40" },
    { name: "SKYLIGHT", logo: "/api/placeholder/160/40" },
    { name: "HUSTON", logo: "/api/placeholder/160/40" },
  ];

  const reviewers = [
    "/api/placeholder/40/40",
    "/api/placeholder/40/40",
    "/api/placeholder/40/40",
    "/api/placeholder/40/40"
  ];

  const processSteps = [
    {
      icon: <Brain className="w-10 h-10" />,
      number: "1",
      title: "Discovery",
      description: "Understanding client goals."
    },
    {
      icon: <Settings className="w-10 h-10" />,
      number: "2",
      title: "Strategy",
      description: "Crafting a tailored plan and approach."
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      number: "3",
      title: "Development",
      description: "Building and coding the solution."
    },
    {
      icon: <Power className="w-10 h-10" />,
      number: "4",
      title: "Launch",
      description: "Deploying the final product live."
    }
  ];

  const portfolioItems = [
    {
      title: "Dynamic Odyssey",
      description: "The road to achieving success in eCommerce",
      image: "/api/placeholder/600/400",
      category: "Web Development"
    },
    {
      title: "Design Dynamo",
      description: "The story of breaking into global markets",
      image: "/api/placeholder/600/400",
      category: "Graphic Design"
    },
    {
      title: "Fashion Velocity",
      description: "An uplifting account of success on the internet",
      image: "/api/placeholder/600/400",
      category: "Digital Marketing"
    },
    {
      title: "Code Craftsmen",
      description: "A green company's move into the digital sphere",
      image: "/api/placeholder/600/400",
      category: "App Development"
    }
  ];

  const features = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-[--accent-orange]" />,
      title: "Quality Assurance",
      description: "Ensuring the highest standards in every project",
    },
    {
      icon: <Tags className="w-8 h-8 text-[--accent-orange]" />,
      title: "Competitive Pricing",
      description: "Best value for your investment",
    },
    {
      icon: <Boxes className="w-8 h-8 text-[--accent-orange]" />,
      title: "Experienced Team",
      description: "Expert professionals at your service",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[--accent-orange]" />,
      title: "Excellent Support",
      description: "24/7 dedicated customer service",
    },
  ];

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-[--accent-orange]" />,
      title: "Web Design",
      description: "Crafting visually stunning and user-friendly websites that captivate your audience and enhance your online presence.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[--accent-orange]" />,
      title: "Digital Marketing",
      description: "Maximize your reach and engagement with our expert digital marketing services, designed to deliver measurable results.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[--accent-orange]" />,
      title: "App Development",
      description: "Developing innovative and user-friendly mobile apps that enhance your business operations and engage your audience effectively.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <PenTool className="w-12 h-12 text-[--accent-orange]" />,
      title: "Graphic Design",
      description: "Delivering unique and professional graphic designs that elevate your brand's visual identity and attract your target audience.",
      image: "/api/placeholder/400/300"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Dribbble className="w-5 h-5" />, href: "#" }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* <FloatingBackground /> */}
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img className="h-10 w-auto object-contain" src="/page-components/hics-light.png"/>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[--accent-orange]">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Button className="bg-[--accent-orange] hover:bg-[#e65d16]">
          GET FREE QUOTE
        </Button>
      </motion.nav>

      <HeroWithFeatures />

      <TransformSection />

      <ServicesSection />
      
      <TrustedClientsSection />



      <PortfolioSection />

      <ProcessSection />

      <ContactSection />
      <footer className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 pb-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <img className="h-10 w-auto object-contain" src="/page-components/hics-dark.png"/>
              </Link>
              <p className="text-gray-400">
                A passionate team of digital artisans helps clients navigate the
                digital landscape.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-[--accent-blue] transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">CONTACT INFO</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-[--accent-orange]" />
                  <span>HICS TECHNOLOGIES PTE. LTD.</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[--accent-orange]" />
                  <span>+65 6809 7118</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[--accent-orange]" />
                  <span>info@hics.com.sg</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">NEWSLETTER</h3>
              <div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address..."
                    className="w-full border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[--accent-orange] transition-colors"
                  />
                  <Button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent text-[--accent-orange] hover:text-[--accent-orange]"
                  >
                    SUBSCRIBE
                  </Button>
                </div>
                <p className="text-gray-400 mt-4">
                  Sign up for my newsletter to get latest updates.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-gray-400 hover:text-[--accent-orange]">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-[--accent-orange]">
                Privacy Policy
              </Link>
            </div>
            <div className="text-gray-400">
              © 2025 HICS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}