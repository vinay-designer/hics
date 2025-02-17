// data/services.ts

export interface ServiceFeature {
    title: string;
    description: string;
    icon?: string;
}

export interface ServiceContent {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    features: ServiceFeature[];
    keyPoints: string[];
    technologies?: string[];
    caseStudy?: {
        title: string;
        description: string;
    };
}


// data/services.ts

export const servicesData = {
    sap: {
        consulting: {
            title: "SAP Consulting",
            subtitle: "Expert SAP Solutions for Your Enterprise",
            description: "We provide expert SAP consulting services to help organizations optimize their business processes and achieve their goals.",
            longDescription: `
          We understand that SAP systems can be complex and challenging to navigate, which is why we offer a range of services to support your organization. Our team of certified SAP professionals has extensive experience in implementing, upgrading, and maintaining SAP systems, and has a wealth of knowledge and expertise in various industries, including manufacturing, retail, healthcare, and finance.
  
          We are committed to providing the highest level of service to our clients by working closely to understand their unique business requirements and tailor our solutions to meet their specific needs. Our expertise spans across various industries, ensuring that we can provide targeted solutions for your specific sector.
        `,
            features: [
                {
                    title: "SAP Implementation",
                    description: "Design and implement new SAP systems tailored to your specific business requirements with comprehensive planning and execution.",
                    icon: "Database"
                },
                {
                    title: "SAP Upgrades",
                    description: "Upgrade your existing SAP system to the latest version, ensuring you leverage the newest features and functionality.",
                    icon: "ArrowUpCircle"
                },
                {
                    title: "SAP Optimization",
                    description: "Optimize your SAP systems to increase productivity and reduce costs through careful analysis and implementation.",
                    icon: "Settings"
                },
                {
                    title: "Maintenance & Support",
                    description: "Ongoing maintenance and support including troubleshooting, system monitoring, and performance optimization.",
                    icon: "Shield"
                },
                {
                    title: "SAP Training",
                    description: "Comprehensive training programs including on-site, online, and customized training programs for your team.",
                    icon: "GraduationCap"
                },
                {
                    title: "Integration Services",
                    description: "Expert integration services including data migration, reporting, and analytics solutions.",
                    icon: "Network"
                }
            ],
            image: "/services/sap.jpg",
            keyPoints: [
                "Certified SAP professionals with extensive industry experience",
                "Proven track record of successful implementations",
                "Comprehensive support from planning to post-implementation",
                "Tailored solutions for your specific industry needs",
                "Focus on maximizing ROI and operational efficiency",
                "Expertise across multiple sectors including healthcare, retail, and manufacturing"
            ],
            technologies: [
                "SAP S/4HANA",
                "SAP ECC",
                "SAP Business One",
                "SAP SuccessFactors",
                "SAP Fiori",
                "SAP BW",
                "SAP PI/PO",
                "SAP Solution Manager"
            ]
        },
        azure: {
            title: "SAP on Azure",
            subtitle: "Powerful SAP Solutions on Microsoft Azure",
            description: "Leverage the power of SAP and Azure combined for optimal enterprise performance and scalability.",
            longDescription: `
          SAP on Azure is a powerful combination of two leading enterprise technologies. SAP is the world's leading enterprise resource planning (ERP) software, used by companies of all sizes and industries to manage their business processes and operations. Azure is Microsoft's public cloud platform, providing a wide range of services for building, deploying, and managing applications and infrastructure.
  
          By running SAP on Azure, companies can take advantage of the scalability, security, and global reach of the Azure cloud, while also leveraging the robust functionality of SAP. This can help organizations reduce costs, increase efficiency, and improve agility in their operations.
        `,
            features: [
                {
                    title: "Azure Migration",
                    description: "Expert migration of SAP systems to Azure with minimal disruption to your business operations.",
                    icon: "MoveRight"
                },
                {
                    title: "Performance Optimization",
                    description: "Optimize your SAP on Azure deployment for maximum performance and cost efficiency.",
                    icon: "Zap"
                },
                {
                    title: "Disaster Recovery",
                    description: "Implement robust disaster recovery solutions using Azure's built-in capabilities.",
                    icon: "Shield"
                },
                {
                    title: "Security & Compliance",
                    description: "Ensure your SAP on Azure deployment meets all security and compliance requirements.",
                    icon: "Lock"
                },
                {
                    title: "Integration Services",
                    description: "Seamless integration with Azure services like Azure Active Directory and Azure Monitor.",
                    icon: "Network"
                }
            ],
            image: "/services/sap.jpg",
            keyPoints: [
                "5+ years of experience managing SAP on Azure",
                "Successful migration projects for major enterprises",
                "24/7 support and monitoring",
                "Cost optimization expertise",
                "Security-first approach",
                "Proven experience with large-scale deployments"
            ],
            technologies: [
                "Azure Virtual Machines",
                "Azure Storage",
                "Azure Monitor",
                "Azure Backup",
                "Azure Site Recovery",
                "Azure Active Directory",
                "Azure DevOps",
                "Azure Logic Apps"
            ],
            caseStudy: {
                title: "Global Drug Distributor Migration",
                description: "Successfully migrated and managed SAP workloads on Azure for one of the world's largest drug distributors over the past 5 years.",
                results: [
                    "Zero downtime during migration",
                    "30% reduction in operating costs",
                    "Improved system performance by 40%",
                    "Enhanced disaster recovery capabilities"
                ]
            }
        },
        aws: {
            title: "SAP on AWS",
            subtitle: "Enterprise SAP Solutions on Amazon Web Services",
            description: "Optimize your SAP deployment with the power and flexibility of Amazon Web Services (AWS).",
            longDescription: `
          SAP on AWS is a powerful solution that allows organizations to run their SAP applications and databases on the highly reliable and scalable Amazon Web Services (AWS) cloud platform. This combination provides unparalleled flexibility and performance for your SAP workloads.
  
          With SAP on AWS, organizations can take advantage of the many benefits of the cloud, including lower costs, increased flexibility, and improved disaster recovery capabilities. AWS also provides a wide range of services and tools that can be easily integrated with SAP, such as analytics, machine learning, and Internet of Things (IoT) capabilities.
        `,
            features: [
                {
                    title: "AWS Migration",
                    description: "Seamless migration of SAP systems to AWS with minimal business disruption.",
                    icon: "MoveRight"
                },
                {
                    title: "Performance Optimization",
                    description: "Optimize your SAP on AWS deployment for maximum performance and cost efficiency.",
                    icon: "Zap"
                },
                {
                    title: "Scaling Solutions",
                    description: "Implement dynamic scaling to match your business needs and workload demands.",
                    icon: "ArrowUpCircle"
                },
                {
                    title: "Security & Compliance",
                    description: "Comprehensive security solutions leveraging AWS's advanced security features.",
                    icon: "Shield"
                }
            ],
            keyPoints: [
                "Expert AWS migration strategies",
                "Cost-effective scaling solutions",
                "Advanced security implementations",
                "24/7 monitoring and support",
                "Performance optimization",
                "Disaster recovery planning"
            ],
            image: "/services/sap.jpg",
            technologies: [
                "Amazon EC2",
                "Amazon S3",
                "AWS CloudWatch",
                "AWS CloudTrail",
                "Amazon RDS",
                "AWS IAM",
                "AWS Direct Connect",
                "AWS Organizations"
            ]
        },
        s4hana: {
            title: "S/4HANA Migration",
            subtitle: "Seamless Transition to SAP S/4HANA",
            description: "Expert guidance and support for your journey to SAP S/4HANA, ensuring a smooth and successful migration.",
            longDescription: `
          S/4HANA Migration is a comprehensive process of moving an organization's current ERP system to SAP's next-generation business suite, S/4HANA. Our expert team guides you through every step of this complex transformation, ensuring minimal disruption to your business operations.
  
          The migration process begins with a thorough assessment of your current system, followed by detailed planning and execution phases. We work closely with your team to ensure a smooth transition, providing training and support throughout the journey.
        `,
            features: [
                {
                    title: "System Assessment",
                    description: "Comprehensive analysis of your current SAP environment and migration readiness.",
                    icon: "Search"
                },
                {
                    title: "Migration Planning",
                    description: "Detailed migration strategy and roadmap development.",
                    icon: "ClipboardList"
                },
                {
                    title: "Data Migration",
                    description: "Secure and efficient transfer of your business data to S/4HANA.",
                    icon: "Database"
                },
                {
                    title: "Training & Support",
                    description: "Comprehensive training programs and ongoing support for your team.",
                    icon: "GraduationCap"
                }
            ],
            image: "/services/sap.jpg",
            keyPoints: [
                "End-to-end migration support",
                "Minimal business disruption",
                "Comprehensive testing and validation",
                "User training and adoption support",
                "Post-migration optimization",
                "Risk mitigation strategies"
            ],
            technologies: [
                "SAP S/4HANA",
                "SAP Fiori",
                "SAP HANA",
                "SAP Solution Manager",
                "SAP DMO",
                "SAP SUM",
                "SAP SWPM"
            ]
        }
    },
    microsoft: {
        azure: {
            title: "Azure Management",
            subtitle: "Comprehensive Azure Cloud Management Solutions",
            description: "Expert Azure management services to optimize your cloud infrastructure and maximize efficiency.",
            longDescription: `
          Our Azure Management services provide comprehensive solutions for businesses relying on Microsoft's Azure cloud platform. Our team of certified experts ensures your Azure environment operates at peak efficiency while maintaining security and cost-effectiveness.
  
          We understand the complexities of cloud infrastructure and provide tailored solutions to meet your specific business needs. Our services cover everything from initial deployment to ongoing optimization and security management.
        `,
            features: [
                {
                    title: "Infrastructure Management",
                    description: "Complete management of your Azure infrastructure with 24/7 monitoring and support.",
                    icon: "Server"
                },
                {
                    title: "Cost Optimization",
                    description: "Strategic cost management and optimization of Azure resources.",
                    icon: "LineChart"
                },
                {
                    title: "Security Management",
                    description: "Comprehensive security monitoring and threat protection.",
                    icon: "Shield"
                },
                {
                    title: "Performance Optimization",
                    description: "Continuous performance monitoring and optimization of Azure resources.",
                    icon: "Zap"
                }
            ],
            keyPoints: [
                "24/7 monitoring and support",
                "Cost optimization expertise",
                "Security-first approach",
                "Performance optimization",
                "Scalability management",
                "Disaster recovery planning"
            ],
            image: '/services/azure.png',
            technologies: [
                "Azure Virtual Machines",
                "Azure Kubernetes Service",
                "Azure Monitor",
                "Azure Security Center",
                "Azure Cost Management",
                "Azure Backup",
                "Azure Site Recovery",
                "Azure DevOps"
            ]
        },
        dynamics: {
            title: "MS Dynamics 365 Business Central",
            subtitle: "Comprehensive Business Management Solution",
            description: "Transform your business operations with Microsoft Dynamics 365 Business Central implementation and support.",
            longDescription: `
          Our Microsoft Dynamics 365 Business Central services provide comprehensive solutions for businesses looking to streamline their operations and improve efficiency. We offer expert consulting, implementation, and support services to help you maximize the benefits of this powerful business management solution.
  
          Our team of certified experts works closely with you to understand your unique business requirements and configure the system to meet your specific needs.
        `,
            features: [
                {
                    title: "Implementation",
                    description: "Expert implementation and configuration of Business Central.",
                    icon: "Settings"
                },
                {
                    title: "Customization",
                    description: "Tailored customizations to meet your specific business needs.",
                    icon: "Sliders"
                },
                {
                    title: "Integration",
                    description: "Seamless integration with other business systems and applications.",
                    icon: "Network"
                },
                {
                    title: "Training",
                    description: "Comprehensive training programs for your team.",
                    icon: "GraduationCap"
                }
            ],
            keyPoints: [
                "Certified implementation experts",
                "Industry-specific solutions",
                "End-to-end support",
                "Custom development capabilities",
                "Integration expertise",
                "User training and adoption support"
            ],
            image: "/services/microsoft-central.jpg",
            technologies: [
                "Dynamics 365 Business Central",
                "Power Platform",
                "Azure Services",
                "Office 365",
                "Power BI",
                "Common Data Service"
            ]
        },
        "power-platform": {
            title: "Power Platform",
            subtitle: "Low-Code Development Solutions",
            description: "Harness the power of Microsoft's Power Platform to create custom business solutions quickly and efficiently.",
            longDescription: `
          Our Microsoft Power Platform services enable businesses to create powerful custom applications without extensive coding. We provide expert guidance in leveraging Power Apps, Power Automate, and Power BI to transform your business processes.
  
          Our team helps you utilize these tools effectively to automate processes, analyze data, and create custom applications that meet your specific business needs.
        `,
            features: [
                {
                    title: "Power Apps Development",
                    description: "Custom application development using Power Apps.",
                    icon: "AppWindow"
                },
                {
                    title: "Process Automation",
                    description: "Workflow automation using Power Automate.",
                    icon: "GitBranch"
                },
                {
                    title: "Data Analytics",
                    description: "Business intelligence solutions using Power BI.",
                    icon: "BarChart"
                },
                {
                    title: "Integration Services",
                    description: "Seamless integration with other business systems.",
                    icon: "Network"
                }
            ],
            image: "/services/power-platform.png",
            keyPoints: [
                "Rapid application development",
                "Process automation expertise",
                "Data visualization solutions",
                "Custom integration capabilities",
                "User training and support",
                "Ongoing maintenance"
            ],
            technologies: [
                "Power Apps",
                "Power Automate",
                "Power BI",
                "Power Virtual Agents",
                "Dataverse",
                "AI Builder",
                "Office 365"
            ]
        },
        office365: {
            title: "Office365 Integrations",
            subtitle: "Seamless Office 365 Integration Solutions",
            description: "Maximize your productivity with expert Office 365 integration services and solutions.",
            longDescription: `
          Our Office 365 integration services help businesses leverage the full potential of Microsoft's productivity suite. We provide expert guidance in implementing, customizing, and integrating Office 365 with your existing business systems.
  
          Our team ensures smooth deployment and adoption of Office 365 tools, helping your organization improve collaboration and productivity.
        `,
            features: [
                {
                    title: "Implementation",
                    description: "Expert deployment and configuration of Office 365 services.",
                    icon: "Download"
                },
                {
                    title: "Integration",
                    description: "Seamless integration with existing business systems.",
                    icon: "Network"
                },
                {
                    title: "Customization",
                    description: "Tailored solutions to meet your specific needs.",
                    icon: "Settings"
                },
                {
                    title: "Training",
                    description: "Comprehensive user training and adoption support.",
                    icon: "GraduationCap"
                }
            ],
            keyPoints: [
                "Expert deployment services",
                "Custom integration solutions",
                "User adoption support",
                "Security optimization",
                "Ongoing maintenance",
                "Technical support"
            ],
            image: '/services/office365.jpg',
            technologies: [
                "Microsoft 365",
                "SharePoint Online",
                "Teams",
                "Exchange Online",
                "OneDrive",
                "Power Platform",
                "Azure AD"
            ]
        }
    },
    broadcom: {
        automic: {
            title: "Automic",
            subtitle: "Enterprise Automation Solutions",
            description: "Comprehensive Broadcom Automic automation services to streamline your IT operations and enhance efficiency.",
            longDescription: `
            Broadcom Automic is a powerful automation platform that enables businesses to streamline their IT operations and improve efficiency. Our comprehensive range of Broadcom Automic services are designed to help businesses maximize the benefits of this powerful platform.
    
            Our team of certified Broadcom Automic experts has extensive experience in implementing and managing Broadcom Automic environments such as AWA and CDA. We use the latest tools and technologies to ensure that your Broadcom Automic environment is running smoothly and efficiently.
          `,
            features: [
                {
                    title: "Automation Implementation",
                    description: "Expert implementation and configuration of Automic automation solutions.",
                    icon: "Settings"
                },
                {
                    title: "Process Optimization",
                    description: "Streamline and optimize your automated processes for maximum efficiency.",
                    icon: "GitBranch"
                },
                {
                    title: "Monitoring & Support",
                    description: "24/7 monitoring and support for your Automic environment.",
                    icon: "Activity"
                },
                {
                    title: "Security Management",
                    description: "Comprehensive security implementation and management.",
                    icon: "Shield"
                },
                {
                    title: "Integration Services",
                    description: "Seamless integration with existing systems and workflows.",
                    icon: "Network"
                }
            ],
            keyPoints: [
                "Certified Automic experts",
                "Extensive implementation experience",
                "24/7 monitoring and support",
                "Security-first approach",
                "Cost optimization expertise",
                "Custom automation solutions"
            ],
            image: "/services/broadcom-automatic.webp",
            technologies: [
                "Automic Workload Automation",
                "Continuous Delivery Automation",
                "Service Orchestration",
                "Release Automation",
                "AWA",
                "CDA"
            ]
        },
        clarity: {
            title: "Clarity PPM",
            subtitle: "Project and Portfolio Management Solutions",
            description: "Comprehensive Clarity PPM implementation and management services for effective project and portfolio management.",
            longDescription: `
            Broadcom Clarity PPM is a powerful software solution that helps organizations effectively manage and track their projects, portfolios, and resources. This comprehensive platform provides centralized management for all aspects of project and portfolio management, including planning, budgeting, scheduling, resource allocation, and performance tracking.
    
            Our team of experts helps organizations implement and optimize Clarity PPM to improve project delivery, resource utilization, and overall portfolio performance.
          `,
            features: [
                {
                    title: "Implementation",
                    description: "Expert implementation and configuration of Clarity PPM.",
                    icon: "Settings"
                },
                {
                    title: "Portfolio Management",
                    description: "Comprehensive portfolio management and optimization.",
                    icon: "Briefcase"
                },
                {
                    title: "Resource Management",
                    description: "Effective resource allocation and management.",
                    icon: "Users"
                },
                {
                    title: "Process Automation",
                    description: "Streamline and automate project management processes.",
                    icon: "GitBranch"
                },
                {
                    title: "Reporting & Analytics",
                    description: "Advanced reporting and analytics capabilities.",
                    icon: "BarChart"
                }
            ],
            keyPoints: [
                "Certified Clarity PPM experts",
                "Customized implementation approach",
                "Process optimization",
                "Training and support",
                "Integration capabilities",
                "Performance optimization"
            ],
            image: "/services/broadcom-clarity.png",
            technologies: [
                "Clarity PPM",
                "Jaspersoft",
                "Microsoft Project Integration",
                "Agile Management",
                "Portfolio Management",
                "Resource Management"
            ]
        }
    },
    managed: {
        infrastructure: {
            title: "Application & Infrastructure Management",
            subtitle: "Comprehensive IT Infrastructure Solutions",
            description: "Application and infrastructure management is the process of maintaining and optimizing the performance of both applications and the underlying infrastructure that supports them.",
            longDescription: `
            Application and infrastructure management is the process of maintaining and optimizing the performance of both applications and the underlying infrastructure that supports them. This includes tasks such as monitoring, troubleshooting, and updating software, as well as managing hardware, networks, and storage.
    
            Effective application and infrastructure management is essential for ensuring that businesses can operate smoothly and efficiently. It helps to prevent downtime, improve performance, and ensure that systems are secure and compliant with industry standards.
          `,
            features: [
                {
                    title: "Application Monitoring",
                    description: "We monitor the performance of your applications and identify any potential issues before they become a problem.",
                    icon: "Activity"
                },
                {
                    title: "Infrastructure Monitoring",
                    description: "We monitor your infrastructure, including servers, networks, and storage, to ensure that everything is running smoothly.",
                    icon: "Server"
                },
                {
                    title: "Troubleshooting",
                    description: "If an issue does arise, we work quickly to identify and resolve the problem to minimize downtime.",
                    icon: "AlertTriangle"
                },
                {
                    title: "Updates & Upgrades",
                    description: "We keep your software and hardware up-to-date with the latest patches and upgrades to ensure optimal performance and security.",
                    icon: "RefreshCw"
                },
                {
                    title: "Compliance Management",
                    description: "We ensure that your systems are compliant with industry standards and regulations to minimize the risk of data breaches and other security threats.",
                    icon: "Shield"
                }
            ],
            keyPoints: [
                "Proactive monitoring and maintenance",
                "Quick issue resolution",
                "Performance optimization",
                "Security compliance",
                "System updates and patches",
                "Infrastructure optimization"
            ],
            technologies: [
                "Server Infrastructure",
                "Network Systems",
                "Storage Solutions",
                "Monitoring Tools",
                "Security Systems",
                "Cloud Platforms",
                "Virtualization Technologies",
                "Compliance Tools"
            ]
        },
        itsm: {
            title: "ITSM Tools Implementation",
            subtitle: "IT Service Management Solutions",
            description: "ITSM tools are designed to help organizations manage and maintain their IT services effectively, automating and streamlining various IT processes.",
            longDescription: `
            ITSM (Information Technology Service Management) tools are designed to help organizations manage and maintain their IT services effectively. These tools are used to automate and streamline various IT processes, such as incident management, problem management, change management, and service level management.
    
            Implementing ITSM tools can be a complex process, but it is essential for organizations to have a seamless and efficient IT service management system in place. The process involves careful planning, configuration, and training to ensure successful implementation.
          `,
            features: [
                {
                    title: "Process Identification",
                    description: "Identify the IT processes that need to be automated and streamlined, focusing on areas where manual processes are causing delays.",
                    icon: "Search"
                },
                {
                    title: "Tool Selection",
                    description: "Evaluate and select the right ITSM tool that best fits your organization's needs and budget.",
                    icon: "CheckSquare"
                },
                {
                    title: "Implementation Planning",
                    description: "Create a project plan, identify required resources, and communicate changes to the organization.",
                    icon: "ClipboardList"
                },
                {
                    title: "Configuration & Customization",
                    description: "Configure and customize the ITSM tool to meet your organization's specific needs and processes.",
                    icon: "Settings"
                },
                {
                    title: "Testing & Validation",
                    description: "Test and validate the ITSM tool to ensure it works as expected and integrates properly with other systems.",
                    icon: "CheckCircle"
                },
                {
                    title: "Training & Support",
                    description: "Provide comprehensive training and documentation to ensure effective tool usage.",
                    icon: "GraduationCap"
                }
            ],
            keyPoints: [
                "Customized implementation approach",
                "Process automation and streamlining",
                "System integration capabilities",
                "User training and documentation",
                "Performance monitoring",
                "Continuous improvement"
            ],
            technologies: [
                "ServiceNow",
                "BMC Remedy",
                "JIRA Service Management",
                "Microsoft System Center",
                "HP Service Manager",
                "Incident Management Systems",
                "Change Management Tools",
                "Service Level Management"
            ]
        },
        helpdesk: {
            title: "Level 1 Helpdesk",
            subtitle: "First-Line Technical Support",
            description: "Level 1 Helpdesk is the first point of contact for customers seeking technical support, providing quick and efficient service for a wide range of technical issues.",
            longDescription: `
            Level 1 Helpdesk is the first point of contact for customers seeking technical support. Our team of skilled technicians are trained to handle a wide range of technical issues, including troubleshooting software and hardware problems, resolving network connectivity issues, and providing basic IT support.
    
            We understand that technology can be frustrating, which is why we strive to provide quick and efficient service. Our goal is to resolve your issue as quickly as possible, so you can get back to your daily tasks. Our Level 1 Helpdesk is available 24/7, so you can reach us at any time.
          `,
            features: [
                {
                    title: "24/7 Availability",
                    description: "Round-the-clock technical support for all your IT needs.",
                    icon: "Clock"
                },
                {
                    title: "Technical Troubleshooting",
                    description: "Expert troubleshooting of software and hardware issues.",
                    icon: "Tool"
                },
                {
                    title: "Network Support",
                    description: "Resolution of network connectivity and access issues.",
                    icon: "Network"
                },
                {
                    title: "Basic IT Support",
                    description: "General IT support for common technical issues.",
                    icon: "HelpCircle"
                },
                {
                    title: "Quick Response",
                    description: "Rapid response and resolution of technical issues.",
                    icon: "Zap"
                }
            ],
            keyPoints: [
                "24/7 support availability",
                "Skilled technical team",
                "Quick issue resolution",
                "Multiple support channels",
                "Efficient escalation process",
                "Regular performance monitoring"
            ],
            technologies: [
                "Help Desk Software",
                "Remote Support Tools",
                "Ticketing Systems",
                "Knowledge Base Systems",
                "Communication Platforms",
                "Network Diagnostic Tools"
            ]
        }
    },
    security: {
        iam: {
            title: "Identity and Access Management",
            subtitle: "Secure Access Management Solutions",
            description: "Comprehensive identity and access management solutions to protect your digital assets and ensure secure access control.",
            longDescription: `
            Identity and Access Management (IAM) is a crucial aspect of securing any organization's digital assets. It ensures that only authorized individuals have access to sensitive information and resources, while also providing a secure and efficient way to manage and control user access.
    
            The IAM process begins with the identification and authentication of users through various methods, such as usernames and passwords, biometrics, or multi-factor authentication. Once authenticated, users are assigned appropriate access levels based on their roles and responsibilities within the organization.
          `,
            features: [
                {
                    title: "User Authentication",
                    description: "Implement secure authentication methods including multi-factor authentication.",
                    icon: "Key"
                },
                {
                    title: "Access Control",
                    description: "Centralized management of user access rights and permissions.",
                    icon: "Lock"
                },
                {
                    title: "Identity Lifecycle",
                    description: "Comprehensive management of user identity lifecycle.",
                    icon: "Users"
                },
                {
                    title: "Audit & Compliance",
                    description: "Detailed tracking and auditing of user activities and access patterns.",
                    icon: "ClipboardCheck"
                },
                {
                    title: "Security Integration",
                    description: "Integration with existing security systems and infrastructure.",
                    icon: "Shield"
                }
            ],
            keyPoints: [
                "Centralized access management",
                "Multi-factor authentication",
                "Role-based access control",
                "Audit trail and compliance",
                "Cross-platform support",
                "Mobile device support"
            ],
            technologies: [
                "OpenAM",
                "ForgeRock AM",
                "KeyCloak",
                "SAP IDM",
                "Shibboleth",
                "Gluu",
                "Azure AD",
                "OAuth 2.0"
            ]
        },
        vapt: {
            title: "VAPT",
            subtitle: "Vulnerability Assessment and Penetration Testing",
            description: "Comprehensive security assessment services to identify and address potential vulnerabilities in your systems.",
            longDescription: `
            VAPT (Vulnerability Assessment and Penetration Testing) is a critical aspect of ensuring the security of any organization's digital infrastructure. It involves identifying and assessing vulnerabilities in systems, networks, or applications, and then testing the effectiveness of security measures in place to protect against potential attacks.
    
            Our VAPT services provide a proactive approach to security, helping organizations identify and address potential threats before they can be exploited by malicious actors. Through regular assessments, we help improve overall security posture and reduce the risk of successful cyber attacks.
          `,
            features: [
                {
                    title: "Network Assessment",
                    description: "Comprehensive assessment of network infrastructure security.",
                    icon: "Network"
                },
                {
                    title: "Web Application Testing",
                    description: "Thorough testing of web applications for vulnerabilities.",
                    icon: "Globe"
                },
                {
                    title: "Mobile App Security",
                    description: "Security assessment of mobile applications and infrastructure.",
                    icon: "Smartphone"
                },
                {
                    title: "Social Engineering",
                    description: "Assessment of human factor vulnerabilities and security awareness.",
                    icon: "Users"
                },
                {
                    title: "Remediation Support",
                    description: "Expert guidance on addressing identified vulnerabilities.",
                    icon: "Shield"
                }
            ],
            keyPoints: [
                "Comprehensive vulnerability assessment",
                "Regular security testing",
                "Detailed reporting",
                "Remediation guidance",
                "Compliance support",
                "Continuous monitoring"
            ],
            technologies: [
                "Network Scanning Tools",
                "Web Application Scanners",
                "Mobile Security Tools",
                "Penetration Testing Frameworks",
                "Security Assessment Platforms",
                "Compliance Tools"
            ]
        },
        "sast-dast": {
            title: "SAST and DAST",
            subtitle: "Application Security Testing Solutions",
            description: "Comprehensive application security testing using both static and dynamic analysis methods.",
            longDescription: `
            SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing) are two crucial techniques used to identify and mitigate security vulnerabilities in web applications. Together, they provide a comprehensive approach to ensuring application security throughout the development lifecycle.
    
            SAST examines the source code during development to identify potential security issues before deployment, while DAST tests the running application to find vulnerabilities that may only appear during execution. This dual approach ensures maximum security coverage for your applications.
          `,
            features: [
                {
                    title: "Static Code Analysis",
                    description: "Comprehensive source code security analysis during development.",
                    icon: "Code"
                },
                {
                    title: "Dynamic Testing",
                    description: "Runtime security testing of applications in production environment.",
                    icon: "Play"
                },
                {
                    title: "Automated Scanning",
                    description: "Continuous automated security testing and monitoring.",
                    icon: "RefreshCw"
                },
                {
                    title: "Vulnerability Management",
                    description: "Comprehensive tracking and management of identified vulnerabilities.",
                    icon: "Shield"
                },
                {
                    title: "Integration Support",
                    description: "Integration with development and deployment pipelines.",
                    icon: "Git"
                }
            ],
            keyPoints: [
                "Early vulnerability detection",
                "Continuous security testing",
                "Development pipeline integration",
                "Comprehensive coverage",
                "Detailed reporting",
                "Remediation guidance"
            ],
            technologies: [
                "Static Analysis Tools",
                "Dynamic Testing Platforms",
                "Code Security Scanners",
                "Web Application Scanners",
                "CI/CD Integration Tools",
                "Vulnerability Management Systems"
            ]
        }
    },
    iot: {
        bespoke: {
            title: "Bespoke IoT Solutions",
            subtitle: "Custom Internet of Things Solutions",
            description: "Tailored IoT solutions to meet your specific business needs and drive digital transformation.",
            longDescription: `
            The Internet of Things (IoT) is a revolutionary technology that is changing the way we interact with the world around us. It creates a network of connected devices, sensors, and machines that communicate with one another to share data and automate processes.
    
            Our bespoke IoT solutions help organizations leverage this technology to improve operations, enhance customer experiences, and create new business opportunities. From healthcare and transportation to energy efficiency and home automation, we develop custom solutions that address your specific needs.
          `,
            features: [
                {
                    title: "Custom Development",
                    description: "Tailored IoT solution development for your specific needs.",
                    icon: "Code"
                },
                {
                    title: "Device Integration",
                    description: "Seamless integration of IoT devices and sensors.",
                    icon: "Cpu"
                },
                {
                    title: "Data Analytics",
                    description: "Advanced analytics and insights from IoT data.",
                    icon: "BarChart"
                },
                {
                    title: "Automation",
                    description: "Process automation through IoT device networks.",
                    icon: "Settings"
                },
                {
                    title: "Security & Monitoring",
                    description: "Comprehensive security and monitoring solutions.",
                    icon: "Shield"
                }
            ],
            keyPoints: [
                "Custom solution development",
                "Scalable architecture",
                "Real-time monitoring",
                "Data analytics",
                "Security by design",
                "Continuous support"
            ],
            technologies: [
                "IoT Platforms",
                "Sensor Technologies",
                "Cloud Computing",
                "Edge Computing",
                "Data Analytics",
                "Security Frameworks",
                "Communication Protocols"
            ]
        }
    },
    staffing: {
        title: "Staff Augmentation",
        subtitle: "Flexible Staffing Solutions",
        description: "Professional staff augmentation services to supplement your workforce with skilled professionals.",
        longDescription: `
          Staff augmentation is a flexible service that enables companies to supplement their existing workforce with additional personnel. This strategic approach allows organizations to quickly scale their teams, access specialized skills, or fill critical vacancies without the lengthy process of permanent hiring.
    
          We offer various types of staff augmentation services, including temporary staffing, permanent staffing, and project-based staffing, each designed to meet your specific business needs and timeframes.
        `,
        features: [
            {
                title: "Temporary Staffing",
                description: "Short-term staffing solutions for temporary capacity needs.",
                icon: "Clock"
            },
            {
                title: "Permanent Staffing",
                description: "Long-term staffing solutions for permanent positions.",
                icon: "Users"
            },
            {
                title: "Project Staffing",
                description: "Specialized staffing for specific project requirements.",
                icon: "Briefcase"
            },
            {
                title: "Skill Assessment",
                description: "Comprehensive evaluation of candidate skills and expertise.",
                icon: "CheckSquare"
            },
            {
                title: "Resource Management",
                description: "Efficient management of augmented staff resources.",
                icon: "UserPlus"
            }
        ],
        keyPoints: [
            "Quick resource deployment",
            "Access to specialized skills",
            "Flexible staffing options",
            "Quality talent pool",
            "Cost-effective solutions",
            "Scalable workforce"
        ],
        technologies: [
            "Technical Skills",
            "Project Management",
            "Development",
            "Quality Assurance",
            "Business Analysis",
            "Infrastructure Management"
        ]
    }
}

export type ServiceCategory = keyof typeof servicesData;
export type ServiceType<T extends ServiceCategory> = keyof typeof servicesData[T];


export const getAllCategoryPaths = () => {
    const paths = [];

    // Add all category paths
    Object.keys(servicesData).forEach(category => {
        // Skip staffing since it's handled differently
        if (category !== 'staffing') {
            paths.push({ category });
        }
    });

    // Add staff-augmentation as a special case
    paths.push({ category: 'staff-augmentation' });

    return paths;
};

export const getAllServicePaths = () => {
    interface ServicePath {
        category: string;
        service?: string;
    }

    const paths: ServicePath[] = [];

    Object.entries(servicesData).forEach(([category, data]) => {
        // Skip staffing since it's handled at category level
        if (category === 'staffing') return;

        // If the category has sub-services
        if (!('title' in data)) {
            Object.keys(data).forEach(service => {
                paths.push({
                    category,
                    service
                });
            });
        }
    });

    return paths;
};

// Helper to get service data
export const getServiceData = (category: string, service?: string) => {
    // Handle staff-augmentation special case
    if (category === 'staff-augmentation') {
        return servicesData.staffing;
    }

    // Handle regular services
    const categoryData = servicesData[category as keyof typeof servicesData];
    if (!categoryData) return null;

    if (service) {
        return (categoryData as Record<string, any>)[service] || null;
    }

    return 'title' in categoryData ? categoryData : null;
};

// Helper to check if a path exists
export const isValidPath = (category: string, service?: string) => {
    if (category === 'staff-augmentation') {
        return true;
    }

    const categoryData = servicesData[category as keyof typeof servicesData];
    if (!categoryData) return false;

    if (service) {
        return !!(categoryData as Record<string, unknown>)[service];
    }

    return 'title' in categoryData;
};