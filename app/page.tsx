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
      icon: <BadgeCheck className="w-8 h-8 text-[#ff712a]" />,
      title: "Quality Assurance",
      description: "Ensuring the highest standards in every project",
    },
    {
      icon: <Tags className="w-8 h-8 text-[#ff712a]" />,
      title: "Competitive Pricing",
      description: "Best value for your investment",
    },
    {
      icon: <Boxes className="w-8 h-8 text-[#ff712a]" />,
      title: "Experienced Team",
      description: "Expert professionals at your service",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#ff712a]" />,
      title: "Excellent Support",
      description: "24/7 dedicated customer service",
    },
  ];

  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-[#ff712a]" />,
      title: "Web Design",
      description: "Crafting visually stunning and user-friendly websites that captivate your audience and enhance your online presence.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#ff712a]" />,
      title: "Digital Marketing",
      description: "Maximize your reach and engagement with our expert digital marketing services, designed to deliver measurable results.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#ff712a]" />,
      title: "App Development",
      description: "Developing innovative and user-friendly mobile apps that enhance your business operations and engage your audience effectively.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: <PenTool className="w-12 h-12 text-[#ff712a]" />,
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
    <main className="min-h-screen bg-[#0a0118] text-white relative overflow-hidden">
      <FloatingBackground />
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img className="h-10 w-auto object-contain" src="/page-components/hics-dark.png"/>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#ff712a]">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pages">Pages</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Button className="bg-[#ff712a] hover:bg-[#e65d16]">
          GET FREE QUOTE
        </Button>
      </motion.nav>

      <HeroWithFeatures />

      <TransformSection />

      <ServicesSection />

      {/* <section className="py-20 bg-[#150b2e]">
        <div className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={chooseUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl text-white mb-16">
              We are trusted by thousands of clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={chooseUsInView ? { opacity: 0.6 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ opacity: 1 }}
                  className="flex justify-center"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={chooseUsRef}
              initial={{ opacity: 0, x: -50 }}
              animate={chooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-[#2BB7DA] font-medium">WHY CHOOSE US</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Crafting experiences,<br />
                delivering success.
              </h2>
              <p className="text-gray-400 text-lg">
                Our commitment to quality and excellence is unparalleled. From the first
                brainstorming session to the final product delivery, we ensure that every
                step of the process is executed to perfection. You are not just getting a
                service; you are getting a partner who is committed to your growth and success.
              </p>

              <div className="pt-8 space-y-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <BookOpen className="w-5 h-5 text-[#2BB7DA]" />
                  <span>Digital solutions under one roof.</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Target className="w-5 h-5 text-[#2BB7DA]" />
                  <span>Strategies tailored to your business needs.</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Diamond className="w-5 h-5 text-[#2BB7DA]" />
                  <span>Competitive pricing for exceptional value.</span>
                </div>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <h3 className="text-5xl font-bold text-[#2BB7DA]">15<span className="text-[#ff712a]">+</span></h3>
                  <p className="text-sm text-gray-400 mt-2">YEARS OF EXPERIENCE</p>
                </div>
                <Button
                  variant="outline"
                  className="border-[#2BB7DA] text-[#2BB7DA] hover:bg-[#2BB7DA]/10"
                >
                  MORE ABOUT US
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={chooseUsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/api/placeholder/600/400"
                  alt="Team"
                  className="w-full rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#2BB7DA]/20 to-[#ff712a]/20 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#2BB7DA] rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-[#0a0118] relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff712a]/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2BB7DA]/20 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-[#2BB7DA] font-medium mb-4">FEATURED PORTFOLIO</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Impactful projects, every time
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A showcase of our commitment to delivering top-tier, innovative digital solutions.
              Our commitment to quality and excellence is unparalleled.
            </p>
          </motion.div>

          <motion.div
            ref={portfolioRef}
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <div className="relative h-[400px] transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0118]/50 to-[#0a0118]" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <Button
                        variant="outline"
                        className="border-[#2BB7DA] text-[#2BB7DA] hover:bg-[#2BB7DA]/10"
                      >
                        PORTFOLIO DETAILS
                      </Button>
                    </div>
                  </div>
                </div>


                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300">
                  <div className="bg-gradient-to-r from-[#ff712a] to-[#2BB7DA] p-[1px] rounded">
                    <div className="bg-[#0a0118] px-4 py-1 rounded">
                      <span className="text-white font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#150b2e] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={partnersRef}
              initial={{ opacity: 0, x: -50 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-square p-8">
                <img
                  src="/api/placeholder/600/600"
                  alt="Digital Success"
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#2BB7DA] rounded-full animate-pulse filter blur-sm" />
                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#ff712a] rounded-full animate-pulse filter blur-sm" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Your partner in digital success.
              </h2>

              <p className="text-gray-400 text-lg">
                Our services are designed with a primary focus on the benefits they can
                bring to your business. We seek to streamline your processes and
                operations, utilizing the latest technologies to automate tasks and reduce
                overheads.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Feather className="w-6 h-6 text-[#2BB7DA]" />
                  </div>
                  <p className="text-gray-300">
                    Our solutions are designed to streamline your operations, leading to
                    higher productivity and lower costs.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <BarChart3 className="w-6 h-6 text-[#2BB7DA]" />
                  </div>
                  <p className="text-gray-300">
                    By delivering a sleek and modern digital presence, we help elevate your
                    brand's image and reputation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button
                  className="bg-[#ff712a] hover:bg-[#ff712a]/90"
                >
                  GET FREE QUOTE
                </Button>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2BB7DA]" />
                  <span className="text-white font-medium">(123) 456 7890</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-[#0a0118] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#150b2e] to-[#0a0118] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-[#2BB7DA] font-medium mb-4">WORK PROCESS</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless process, stellar solutions
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Find out how we transform your ideas into digital solutions by learning how our efficient work process
              can turn them into digital solutions.
            </p>
          </motion.div>

  
          <motion.div
            ref={processRef}
            className="grid md:grid-cols-4 gap-6 relative"
          >

            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] transform -translate-y-1/2 opacity-20" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >

                <div className="bg-[#150b2e] p-8 rounded-lg border border-gray-800 relative z-10 h-full
                            transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2BB7DA] to-[#ff712a] p-[1px] mb-6">
                    <div className="w-full h-full rounded-full bg-[#150b2e] flex items-center justify-center
                                text-[#2BB7DA] group-hover:text-[#ff712a] transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 text-4xl font-bold text-[#2BB7DA]/10 group-hover:text-[#ff712a]/10 transition-colors duration-300">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 text-[#2BB7DA]">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-[#150b2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

        <div className="container mx-auto px-4">
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1132] rounded-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="mb-12">
                  <h3 className="text-[#2BB7DA] font-medium mb-4">LET'S CONNECT</h3>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Request a Quote
                  </h2>
                  <p className="text-gray-400">
                    By delivering superior digital solutions, we continuously surpass our
                    clients' expectations. Get in touch with us for a free quote!
                  </p>

                  <div className="flex flex-wrap gap-8 mt-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Phone className="w-5 h-5 text-[#2BB7DA]" />
                      <span>(123) 456 7890</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Mail className="w-5 h-5 text-[#2BB7DA]" />
                      <span>info@example.com</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-[#2c1f4a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[#2c1f4a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-[#2c1f4a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full bg-[#2c1f4a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#2BB7DA] transition-colors resize-none"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-[#2BB7DA] to-[#ff712a] hover:opacity-90 text-white py-6"
                  >
                    SUBMIT REQUEST
                  </Button>
                </form>
              </div>

              <div className="relative hidden md:block">
                <img
                  src="/api/placeholder/800/600"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-8 bg-[#150b2e]/80 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {reviewers.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt={`Reviewer ${index + 1}`}
                          className="w-10 h-10 rounded-full border-2 border-[#150b2e]"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#2BB7DA]">250<span className="text-white">+</span></div>
                      <div className="text-sm text-gray-400">5-star client reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <footer className="bg-[#0a0118] pt-20 pb-8">
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
                    className="text-gray-400 hover:text-[#2BB7DA] transition-colors"
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
                  <MapPin className="w-5 h-5 text-[#2BB7DA]" />
                  <span>HICS TECHNOLOGIES PTE. LTD.</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-[#2BB7DA]" />
                  <span>+65 6809 7118</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-[#2BB7DA]" />
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
                    className="w-full bg-[#150b2e] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#2BB7DA] transition-colors"
                  />
                  <Button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent text-[#2BB7DA] hover:text-[#ff712a]"
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
              <Link href="/terms" className="text-gray-400 hover:text-[#2BB7DA]">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-[#2BB7DA]">
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