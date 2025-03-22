// data/solutions.ts

export interface SolutionFeature {
    title: string;
    description: string;
    icon?: string;
  }
  
  export interface SolutionContent {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    features: SolutionFeature[];
    keyPoints: string[];
    technologies?: string[];
    caseStudy?: {
      title: string;
      description: string;
      results?: string[];
    };
    image?: string;
  }
  
  export const solutionsData: Record<string, SolutionContent> = {
    "eforms": {
      title: "Digital Documentation (eForms)",
      subtitle: "Streamline Document Processing with Digital Solutions",
      description: "Transform your paper-based processes into efficient digital workflows with our comprehensive eForms solution.",
      longDescription: `
        In today's digital world, paper-based documentation processes are increasingly becoming bottlenecks for business efficiency. Our Digital Documentation (eForms) solution eliminates these bottlenecks by digitizing your forms and documentation processes.
  
        Our solution enables you to create, distribute, fill, sign, and manage forms digitally, streamlining your entire documentation workflow. This not only saves time and reduces errors but also enhances security and compliance by maintaining an auditable trail of all form activities.
  
        Whether you're in healthcare, finance, government, or any other industry that deals with extensive paperwork, our eForms solution can be tailored to meet your specific needs. From simple contact forms to complex multi-page applications with conditional logic, our platform handles it all with ease.
      `,
      features: [
        {
          title: "Intuitive Form Builder",
          description: "Drag-and-drop interface for creating forms without coding knowledge.",
          icon: "Code"
        },
        {
          title: "Workflow Automation",
          description: "Automated routing, approvals, and notifications to streamline processes.",
          icon: "GitBranch"
        },
        {
          title: "Digital Signatures",
          description: "Secure, legally-binding electronic signatures for document completion.",
          icon: "Pen"
        },
        {
          title: "Mobile Accessibility",
          description: "Access and complete forms from any device, anywhere, anytime.",
          icon: "Smartphone"
        },
        {
          title: "Integration Capabilities",
          description: "Seamless connection with existing systems like CRM, ERP, and document management.",
          icon: "Network"
        },
        {
          title: "Data Extraction & Analysis",
          description: "Convert form submissions into actionable insights through advanced analytics.",
          icon: "BarChart"
        }
      ],
      keyPoints: [
        "90% reduction in document processing time",
        "Elimination of manual data entry errors",
        "Enhanced compliance with automatic audit trails",
        "Significant cost savings on paper, printing, and storage",
        "Improved customer and employee experience",
        "Environmentally friendly paperless solution"
      ],
      technologies: [
        "ReactJS",
        "Node.js",
        "MongoDB",
        "AWS S3",
        "DocuSign API",
        "OAuth 2.0",
        "PDF Processing",
        "OCR Technology"
      ],
      caseStudy: {
        title: "Healthcare Provider Transforms Patient Onboarding",
        description: "A leading healthcare provider reduced patient onboarding time from 45 minutes to just 10 minutes by implementing our eForms solution, resulting in improved patient satisfaction and staff efficiency.",
        results: [
          "78% reduction in processing time",
          "93% decrease in data entry errors",
          "42% increase in staff productivity",
          "Annual savings of $245,000 in operational costs"
        ]
      },
      image: "/solutions/eforms.jpg"
    },
    "queue-management": {
      title: "Queue Management System",
      subtitle: "Optimize Customer Flow and Waiting Experience",
      description: "Enhance customer satisfaction and operational efficiency with our intelligent queue management solution.",
      longDescription: `
        Long waiting times and unorganized queues can significantly impact customer satisfaction and operational efficiency. Our Queue Management System addresses these challenges by providing a comprehensive solution to streamline customer flow.
  
        The system utilizes advanced algorithms to optimize queue processing, virtual ticket issuance, and staff allocation. Customers can join queues remotely through mobile apps or on-site kiosks, receive real-time updates on their position, and get accurate waiting time estimates.
  
        For businesses, our solution provides valuable insights into traffic patterns, service times, and resource utilization, enabling data-driven optimization of staffing and operations. The system can be customized for various industries including retail, healthcare, government services, banking, and telecommunications.
      `,
      features: [
        {
          title: "Virtual Queuing",
          description: "Allow customers to join queues remotely via mobile app or web interface.",
          icon: "Smartphone"
        },
        {
          title: "Real-time Notifications",
          description: "Automated SMS and app notifications about queue status and service readiness.",
          icon: "Bell"
        },
        {
          title: "Staff Management",
          description: "Optimize staff allocation based on real-time demand and service expertise.",
          icon: "Users"
        },
        {
          title: "Analytics Dashboard",
          description: "Comprehensive insights into wait times, service durations, and customer flow.",
          icon: "BarChart"
        },
        {
          title: "Multi-channel Integration",
          description: "Seamless integration with websites, mobile apps, and on-premise systems.",
          icon: "Layers"
        },
        {
          title: "Appointment Scheduling",
          description: "Optional pre-booking system that integrates with queue management.",
          icon: "Calendar"
        }
      ],
      keyPoints: [
        "Reduce perceived waiting time by up to 60%",
        "Increase operational efficiency by 30-40%",
        "Enhance customer satisfaction scores by 25%",
        "Optimize staff utilization through data-driven scheduling",
        "Minimize congestion in waiting areas",
        "Collect valuable customer feedback at service completion"
      ],
      technologies: [
        "Cloud Infrastructure",
        "Mobile Applications (iOS/Android)",
        "Real-time Database",
        "Machine Learning Algorithms",
        "IoT Devices",
        "Digital Signage Integration",
        "RESTful APIs",
        "WebSockets"
      ],
      caseStudy: {
        title: "Government Agency Transforms Citizen Services",
        description: "A government agency serving over 2,000 citizens daily implemented our queue management system, resulting in dramatic reductions in waiting times and significant improvements in citizen satisfaction.",
        results: [
          "Average waiting time reduced from 45 to 15 minutes",
          "93% citizen satisfaction rating (up from 62%)",
          "Staff productivity increased by 35%",
          "70% reduction in customer complaints about waiting"
        ]
      },
      image: "/solutions/queue-management.jpg"
    },
    "sso": {
      title: "Single Sign-On (SSO)",
      subtitle: "Seamless, Secure Authentication Across All Applications",
      description: "Enhance security and user experience with our enterprise-grade SSO solution that provides one-click access to all your applications.",
      longDescription: `
        Managing multiple login credentials for different applications creates friction for users and security challenges for organizations. Our Single Sign-On (SSO) solution eliminates these issues by enabling users to authenticate once and gain access to all authorized applications.
  
        Our enterprise-grade SSO implementation supports all major authentication protocols including SAML, OAuth, OpenID Connect, and WS-Federation. It integrates seamlessly with existing identity providers like Active Directory, LDAP, and cloud identity services, making implementation straightforward for organizations with established identity infrastructure.
  
        Beyond convenience, our SSO solution strengthens security through centralized authentication policies, multi-factor authentication options, and comprehensive audit logging. This helps organizations maintain compliance with regulations while providing a frictionless experience for users.
      `,
      features: [
        {
          title: "Universal Protocol Support",
          description: "Compatible with SAML, OAuth, OpenID Connect, and other major authentication protocols.",
          icon: "Shield"
        },
        {
          title: "Multi-factor Authentication",
          description: "Enhanced security through various second-factor verification methods.",
          icon: "Key"
        },
        {
          title: "Directory Integration",
          description: "Seamless connection with Active Directory, LDAP, and cloud identity providers.",
          icon: "Database"
        },
        {
          title: "Policy-Based Access Control",
          description: "Granular access policies based on user attributes, device, location, and more.",
          icon: "Lock"
        },
        {
          title: "Self-Service Portal",
          description: "User-friendly interface for password resets and profile management.",
          icon: "UserPlus"
        },
        {
          title: "Comprehensive Audit Logging",
          description: "Detailed authentication events for security monitoring and compliance.",
          icon: "ClipboardList"
        }
      ],
      keyPoints: [
        "Reduce password reset requests by up to 80%",
        "Enhance security through consistent authentication policies",
        "Streamline user onboarding and offboarding processes",
        "Achieve compliance with regulatory requirements",
        "Improve user experience with one-click access",
        "Gain insights into application usage patterns"
      ],
      technologies: [
        "SAML 2.0",
        "OAuth 2.0",
        "OpenID Connect",
        "JWT",
        "Azure AD",
        "Okta Integration",
        "RESTful APIs",
        "RADIUS"
      ],
      caseStudy: {
        title: "Financial Institution Secures Multi-Application Access",
        description: "A financial services company with over 5,000 employees implemented our SSO solution to secure access across 75+ internal applications, resulting in improved security posture and significant productivity gains.",
        results: [
          "Password reset tickets reduced by 92%",
          "Authentication-related security incidents down by 64%",
          "User satisfaction with IT systems improved by 47%",
          "$380,000 annual savings in support costs"
        ]
      },
      image: "/solutions/sso.jpg"
    },
    "fall-detection": {
      title: "Intelligent Elderly Fall Detection",
      subtitle: "AI-Powered Safety Monitoring for Elderly Care",
      description: "Advanced fall detection system that combines hardware sensors and AI to provide immediate alerts and continuous monitoring for elderly individuals.",
      longDescription: `
        Falls represent a significant health risk for elderly individuals, with timely detection being critical for minimizing negative outcomes. Our Intelligent Elderly Fall Detection solution addresses this challenge through an innovative combination of unobtrusive sensors and advanced AI algorithms.
  
        Unlike traditional pendant-based systems that require manual activation, our solution automatically detects falls through a combination of motion sensors, wearable devices, and optional camera-based monitoring (with privacy safeguards). The system's AI algorithms can distinguish between normal movements and actual falls, reducing false alarms while ensuring genuine incidents receive immediate attention.
  
        When a fall is detected, the system automatically alerts designated caregivers, family members, or emergency services based on customizable escalation protocols. The solution also provides additional insights into mobility patterns and potential risk factors, enabling preventative measures to be implemented before falls occur.
      `,
      features: [
        {
          title: "Multi-sensor Detection",
          description: "Combination of wearable devices, environmental sensors, and optional camera monitoring.",
          icon: "Radio"
        },
        {
          title: "AI-powered Analysis",
          description: "Advanced algorithms that distinguish between regular movement and actual falls.",
          icon: "BrainCircuit"
        },
        {
          title: "Instant Notifications",
          description: "Immediate alerts to caregivers, family members, or emergency services.",
          icon: "Bell"
        },
        {
          title: "Privacy Controls",
          description: "Configurable privacy settings with optional computer vision that processes data locally.",
          icon: "Eye"
        },
        {
          title: "Activity Monitoring",
          description: "Non-intrusive tracking of movement patterns to identify potential risks.",
          icon: "Activity"
        },
        {
          title: "Mobile Integration",
          description: "Companion apps for caregivers and family members with status updates and alerts.",
          icon: "Smartphone"
        }
      ],
      keyPoints: [
        "24/7 automated monitoring without requiring manual activation",
        "Significantly reduced response time to fall incidents",
        "Over 98% detection accuracy with minimal false alarms",
        "Privacy-preserving monitoring technology",
        "Easy installation in any living environment",
        "Predictive analytics to help prevent future falls"
      ],
      technologies: [
        "AI/Machine Learning",
        "IoT Sensors",
        "Edge Computing",
        "Computer Vision",
        "Wearable Technology",
        "Mobile Applications",
        "Cloud Infrastructure",
        "Secure Communication Protocols"
      ],
      caseStudy: {
        title: "Senior Living Community Enhances Resident Safety",
        description: "A senior living community with 200 residents implemented our fall detection system across their facility, resulting in faster emergency response times and enhanced peace of mind for residents, families, and staff.",
        results: [
          "Emergency response time reduced from 30+ minutes to under 5 minutes",
          "42% reduction in hospitalization due to falls",
          "89% of families reported increased peace of mind",
          "Staff efficiency improved by 35% through optimized monitoring"
        ]
      },
      image: "/solutions/fall-detection.jpg"
    }
  };
  
  // Helper functions for solutions pages
  export const getAllSolutionPaths = () => {
    return Object.keys(solutionsData).map(slug => ({ slug }));
  };
  
  export const getSolutionData = (slug: string) => {
    return solutionsData[slug] || null;
  };
  
  export const isValidSolutionPath = (slug: string) => {
    return !!solutionsData[slug];
  };