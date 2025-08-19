


import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaComment, FaTimes, FaRobot, FaUser } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { MdOutlineSupport } from "react-icons/md";

// Enhanced knowledge base (unchanged)
const knowledgeBase = {
  greeting: [
    "Hello! Welcome to CodeNiche SoftStudio. How can I help you today?",
    "Hi there! I'm the CodeNiche virtual assistant. What brings you here today?",
    "Welcome to CodeNiche! I'm here to answer your questions about our services and products."
  ],
  services: {
    general: [
      "We offer a comprehensive range of services including Web Development, Mobile App Development, Custom Software Solutions, UI/UX Design, Cloud Solutions, and Digital Transformation Consulting. Which one would you like to know more about?",
      "Our main services include Web & Mobile Development, Custom Software Solutions, Cloud Integration, and Digital Transformation. Can I tell you more about any specific service?"
    ],
    web: [
      "Our Web Development services include responsive website design, progressive web apps, e-commerce platforms, and enterprise web applications. We use technologies like React, Angular, Vue.js, Node.js, and PHP/Laravel. Would you like to see our portfolio?"
    ],
    mobile: [
      "For Mobile App Development, we create native applications for iOS and Android as well as cross-platform solutions using React Native and Flutter. Our apps feature modern UI, offline capabilities, and secure data handling. What kind of mobile app are you looking to build?"
    ],
    ui: [
      "Our UI/UX Design team focuses on creating intuitive, accessible, and visually appealing interfaces. We follow a user-centered design process including wireframing, prototyping, and user testing to ensure the best possible user experience."
    ],
    cloud: [
      "Our Cloud Solutions include cloud migration, infrastructure setup, serverless architectures, and DevOps automation. We work with AWS, Azure, and Google Cloud to provide scalable and secure cloud environments for your applications."
    ]
  },
  products: {
    general: [
      "Our flagship product is SkoolVriksh - a comprehensive school management system. We also have NicheCommerce for e-commerce solutions and CloudTrack for asset management. Would you like specific details about any of these?",
      "We have several products including SkoolVriksh (School Management), NicheCommerce (E-commerce platform), and CloudTrack (Asset Management). Which one interests you?"
    ],
    schoolvriksh: [
      "SkoolVriksh is our comprehensive school management system designed to streamline administrative tasks. It includes modules for student management, attendance tracking, fee collection, exam management, library management, and parent-teacher communication. Would you like a demo?",
      "SkoolVriksh helps schools digitize operations with features like student information management, attendance tracking, fee management, exam management, library management, transport management, and parent-teacher communication. Interested in learning more?"
    ],
    nichecommerce: [
      "NicheCommerce is an all-in-one e-commerce solution with inventory management, payment gateway integration, analytics, and marketing tools. It's designed to be scalable from small businesses to large enterprises with customizable themes and plugins."
    ],
    cloudtrack: [
      "CloudTrack is our asset management solution that helps businesses track and manage their physical and digital assets. It features real-time tracking, maintenance scheduling, depreciation calculation, and comprehensive reporting tools."
    ]
  },
  contact: [
    "You can reach us at codenichesoftstudio@gmail.com or call us at +91 9408534684. Would you prefer we contact you instead? I can take your details.",
    "Our team is available at codenichesoftstudio@gmail.com and phone: +91 9408534684. You can also fill our contact form for a personalized response."
  ],
  pricing: {
    general: [
      "Our pricing varies based on project requirements. We offer customized quotes after understanding your specific needs. Would you like to discuss your project for a personalized estimate?",
      "We provide tailored pricing based on project scope and requirements. I'd be happy to arrange a call with our team to discuss your needs and provide a quote."
    ],
    web: [
      "Web development projects typically range from ₹50,000 for simple websites to ₹5,00,000+ for complex web applications. The final cost depends on features, complexity, and timeline. Would you like to share your requirements for a more accurate estimate?"
    ],
    mobile: [
      "Mobile app development starts from ₹1,50,000 for basic apps and can go up to ₹10,00,000+ for complex applications with advanced features. Factors affecting price include platform (iOS/Android/both), features, and backend complexity."
    ],
    schoolvriksh: [
      "SkoolVriksh pricing starts at ₹75,000 per year for schools with up to 500 students, with additional pricing tiers for larger institutions. We offer a 15% discount for educational non-profits and government schools."
    ]
  },
  portfolio: [
    "Our portfolio includes projects for clients across education, healthcare, retail, and finance sectors. Some notable projects include the SkoolVriksh implementation for Delhi Public School, e-commerce platform for OrganicLife, and inventory management system for MediPlus Pharmacy chain. Would you like to see case studies from a specific industry?"
  ],
  technology: [
    "We work with modern technology stacks including React, Angular, Vue.js for frontend; Node.js, PHP/Laravel, Python/Django for backend; React Native and Flutter for mobile; and AWS, Azure for cloud solutions. Our team stays updated with the latest technologies to deliver cutting-edge solutions."
  ],
  process: [
    "Our development process follows an Agile methodology with 5 key phases: Discovery (requirements gathering), Design (UI/UX), Development, Testing, and Deployment/Maintenance. We ensure transparent communication throughout with regular updates and feedback sessions."
  ],
  team: [
    "Our team consists of experienced developers, designers, project managers, and QA specialists. Each project is assigned a dedicated team with relevant expertise, led by a project manager who serves as your primary point of contact."
  ],
  default: [
    "I'm not sure I understand. Could you please rephrase your question? Alternatively, you can ask about our Services, Products, or Contact information.",
    "I don't have that information right now. Would %!**you like to know about our services, products, or how to contact us?",
    "That's a good question. To better assist you, could you provide more details? Or you might want to check our services and products sections."
  ]
};

// Enhanced AI response logic with context awareness (unchanged)
const getAIResponse = (message, conversationHistory = []) => {
  const lowerMsg = message.toLowerCase();
  let category = "default";
  let subcategory = "general";
  
  const recentMessages = conversationHistory.slice(-3);
  const context = getConversationContext(recentMessages);
  
  if (/^(hi|hello|hey|greetings|howdy|good (morning|afternoon|evening))/.test(lowerMsg)) {
    category = "greeting";
  } else if (lowerMsg.includes("service") || lowerMsg.includes("offer") || 
           lowerMsg.includes("provide") || lowerMsg.includes("do you do")) {
    category = "services";
    subcategory = "general";
  } else if (lowerMsg.includes("web") || lowerMsg.includes("website") || 
           lowerMsg.includes("web app") || lowerMsg.includes("webapp")) {
    category = "services";
    subcategory = "web";
  } else if (lowerMsg.includes("mobile") || lowerMsg.includes("app") || 
           lowerMsg.includes("android") || lowerMsg.includes("ios") ||
           lowerMsg.includes("iphone") || lowerMsg.includes("smartphone")) {
    category = "services";
    subcategory = "mobile";
  } else if (lowerMsg.includes("ui") || lowerMsg.includes("ux") || 
           lowerMsg.includes("design") || lowerMsg.includes("interface") ||
           lowerMsg.includes("user experience")) {
    category = "services";
    subcategory = "ui";
  } else if (lowerMsg.includes("cloud") || lowerMsg.includes("aws") || 
           lowerMsg.includes("azure") || lowerMsg.includes("devops")) {
    category = "services";
    subcategory = "cloud";
  } else if (lowerMsg.includes("product") || lowerMsg.includes("solution")) {
    category = "products";
    subcategory = "general";
  } else if (lowerMsg.includes("schoolvriksh") || lowerMsg.includes("skool") || 
           lowerMsg.includes("vriksh") || lowerMsg.includes("school") ||
           lowerMsg.includes("education") || lowerMsg.includes("school management")) {
    category = "products";
    subcategory = "schoolvriksh";
  } else if (lowerMsg.includes("nichecommerce") || lowerMsg.includes("ecommerce") || 
           lowerMsg.includes("e-commerce") || lowerMsg.includes("shop") ||
           lowerMsg.includes("store") || lowerMsg.includes("selling online")) {
    category = "products";
    subcategory = "nichecommerce";
  } else if (lowerMsg.includes("cloudtrack") || lowerMsg.includes("asset") || 
           lowerMsg.includes("tracking") || lowerMsg.includes("management system")) {
    category = "products";
    subcategory = "cloudtrack";
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || 
           lowerMsg.includes("phone") || lowerMsg.includes("reach") ||
           lowerMsg.includes("talk") || lowerMsg.includes("call") ||
           lowerMsg.includes("get in touch")) {
    category = "contact";
  } else if (lowerMsg.includes("price") || lowerMsg.includes("cost") || 
           lowerMsg.includes("rate") || lowerMsg.includes("quote") ||
           lowerMsg.includes("how much") || lowerMsg.includes("pricing") ||
           lowerMsg.includes("fee") || lowerMsg.includes("budget")) {
    category = "pricing";
    
    if (lowerMsg.includes("web") || lowerMsg.includes("website")) {
      subcategory = "web";
    } else if (lowerMsg.includes("mobile") || lowerMsg.includes("app")) {
      subcategory = "mobile";
    } else if (lowerMsg.includes("skool") || lowerMsg.includes("schoolvriksh") || 
               lowerMsg.includes("school")) {
      subcategory = "schoolvriksh";
    } else {
      subcategory = "general";
    }
  } else if (lowerMsg.includes("portfolio") || lowerMsg.includes("example") || 
           lowerMsg.includes("showcase") || lowerMsg.includes("previous work") ||
           lowerMsg.includes("case study") || lowerMsg.includes("client")) {
    category = "portfolio";
  } else if (lowerMsg.includes("technology") || lowerMsg.includes("tech stack") || 
           lowerMsg.includes("framework") || lowerMsg.includes("programming") ||
           lowerMsg.includes("language") || lowerMsg.includes("platform")) {
    category = "technology";
  } else if (lowerMsg.includes("process") || lowerMsg.includes("methodology") || 
           lowerMsg.includes("approach") || lowerMsg.includes("timeline") ||
           lowerMsg.includes("how do you") || lowerMsg.includes("develop")) {
    category = "process";
  } else if (lowerMsg.includes("team") || lowerMsg.includes("developer") || 
           lowerMsg.includes("designer") || lowerMsg.includes("staff") ||
           lowerMsg.includes("employee") || lowerMsg.includes("expert")) {
    category = "team";
  }
  
  if (context && category === "default") {
    if (context.category === "products" && 
        (lowerMsg.includes("features") || lowerMsg.includes("what does it do") || 
         lowerMsg.includes("tell me more") || lowerMsg.includes("how does it work"))) {
      category = "products";
      subcategory = context.subcategory || "general";
    } else if (context.category === "services" && 
             (lowerMsg.includes("tell me more") || lowerMsg.includes("detail") || 
              lowerMsg.includes("example"))) {
      category = "services";
      subcategory = context.subcategory || "general";
    }
  }
  
  let response;
  if (typeof knowledgeBase[category] === "object" && !Array.isArray(knowledgeBase[category])) {
    response = getRandomResponse(knowledgeBase[category][subcategory] || knowledgeBase[category].general);
  } else {
    response = getRandomResponse(knowledgeBase[category]);
  }
  
  return { text: response, category, subcategory };
};

const getConversationContext = (recentMessages) => {
  for (let i = recentMessages.length - 1; i >= 0; i--) {
    const msg = recentMessages[i];
    if (!msg.isUser && msg.category) {
      return {
        category: msg.category,
        subcategory: msg.subcategory || "general"
      };
    }
  }
  return null;
};

const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
};




const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 90px; /* Above WhatsApp and ThemeToggle buttons */
  right: 20px;
  z-index: 1000;
  pointer-events: none; /* allow window/button to manage clicks */
  @media (max-width: 576px) {
    bottom: 90px;
  }
`;

const ToggleButton = styled.button`
  width: 3.25rem;
  position: absolute;
  bottom: 4rem;
  right: 0rem;
  height: 3.25rem;
  border-radius: 9999px;
  background-color: #4361ee;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const UnreadBadge = styled.span`
  position: absolute;
  top: -7.5rem;
  right: 0.1rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 9999px;
  height: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const NotificationPopup = styled(motion.div)`
  position: absolute;
  bottom: 8rem;
  right: 0;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
  width: 16rem;
  margin-bottom: 0.5rem;
`;

const NotificationContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const NotificationIconWrapper = styled.div`
  flex-shrink: 0;
  padding: 0.25rem;
`;

const NotificationTextWrapper = styled.div`
  margin-left: 0.5rem;
`;

const NotificationTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: #111827;
`;

const NotificationHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NotificationText = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
  margin-top: 0.25rem;
`;

const NotificationButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const NotificationButton = styled.button`
  font-size: 0.75rem;
  background-color: #4361ee;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3b82f6;
  }
`;

const ChatWindow = styled(motion.div)`
  position: absolute;
  right: 0;
  bottom: 3.75rem; /* sits above the toggle button */
  z-index: 1001;
  width: 20rem;
  height: 31.25rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  pointer-events: auto;
  @media (min-width: 640px) {
    width: 24rem;
    height: 31.25rem;
  }
`;

const Header = styled.div`
  background-color: #4361ee;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

const StatusIndicator = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  background-color: #34d399;
  border-radius: 9999px;
  margin-right: 0.25rem;
`;

const CloseButton = styled.button`
  color: white;
  cursor: pointer;
  &:hover {
    color: #e5e7eb;
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MessageWrapper = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageContent = styled.div`
  max-width: 80%;
  position: relative;
  order: ${props => props.isUser ? 1 : 1};
`;

const MessageBubble = styled.div`
  background-color: ${props => props.isUser ? '#4361ee' : 'white'};
  color: ${props => props.isUser ? 'white' : '#374151'};
  border-radius: ${props => props.isUser ? '0.5rem 0.5rem 0 0.5rem' : '0.5rem 0.5rem 0.5rem 0'};
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const MessageText = styled.p`
  font-size: 0.875rem;
`;

const MessageTimestamp = styled.span`
  font-size: 0.75rem;
  display: block;
  margin-top: 0.25rem;
  color: ${props => props.isUser ? '#d1d5db' : '#6b7280'};
`;

const MessageArrow = styled.div`
  position: absolute;
  ${props => props.isUser ? 'right: -0.25rem;' : 'left: -0.25rem;'}
  bottom: 0;
  width: 0.75rem;
  height: 0.75rem;
  overflow: hidden;
`;

const ArrowInner = styled.div`
  position: absolute;
  transform: rotate(45deg);
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.isUser ? '#4361ee' : 'white'};
  top: -0.5rem;
  left: -0.5rem;
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${props => props.isUser ? 2 : 0};
  ${props => props.isUser ? 'margin-left: 0.5rem;' : 'margin-right: 0.5rem;'}
`;

const UserAvatar = styled.div`
  background-color: #e5e7eb;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BotAvatar = styled.div`
  background-color: #4361ee;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypingIndicator = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TypingBubble = styled.div`
  background-color: white;
  border-radius: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  position: relative;
`;

const TypingDots = styled.div`
  display: flex;
  align-items: center;
`;

const TypingDot = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 1px;
  background-color: #4361ee;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 0.6s infinite alternate;
  @keyframes bounce {
    to { transform: translateY(-4px); }
  }
  &.delay-75 {
    animation-delay: 0.2s;
  }
  &.delay-150 {
    animation-delay: 0.4s;
  }
`;

const QuickRepliesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const QuickReplyButton = styled.button`
  background-color: #f3f4f6;
  color: #4361ee;
  font-size: 0.75rem;
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;
  transition: background-color 0.3s ease;
  border: 1px solid #e5e7eb;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const InputForm = styled.form`
  padding: 0.75rem;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  padding-left: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  outline: none;
  font-size: 0.875rem;
  &:focus {
    border-color: #4361ee;
  }
`;

const SendButton = styled.button`
  margin-left: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  background-color: ${props => props.disabled ? '#e5e7eb' : '#4361ee'};
  color: ${props => props.disabled ? '#9ca3af' : 'white'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

// Main Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: getRandomResponse(knowledgeBase.greeting),
      isUser: false,
      timestamp: new Date(),
      category: "greeting"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messageEndRef = useRef(null);
  
  useEffect(() => {
    if (!hasInteracted) {
      const timer = setTimeout(() => {
        if (!isOpen && !hasInteracted) {
          setShowNotification(true);
          setUnreadCount(1);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, hasInteracted]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowNotification(false);
      setUnreadCount(0);
      setHasInteracted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);
    setHasInteracted(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(input, messages);
      setMessages(prevMessages => [
        ...prevMessages, 
        {
          ...aiResponse,
          isUser: false,
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const getQuickReplies = () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && !lastMessage.isUser) {
      let quickReplies = [
        "What services do you offer?",
        "Tell me about your products",
        "How can I contact you?"
      ];
      
      switch (lastMessage.category) {
        case "greeting":
          quickReplies = [
            "What services do you offer?",
            "Tell me about SkoolVriksh",
            "How can I contact you?"
          ];
          break;
        case "services":
          if (lastMessage.subcategory === "general") {
            quickReplies = [
              "Web Development details",
              "Mobile App Development",
              "Tell me about your products"
            ];
          } else if (lastMessage.subcategory === "web") {
            quickReplies = [
              "Web development pricing",
              "Portfolio examples",
              "Technology stack used"
            ];
          } else if (lastMessage.subcategory === "mobile") {
            quickReplies = [
              "Mobile app pricing",
              "App development process",
              "iOS or Android?"
            ];
          }
          break;
        case "products":
          if (lastMessage.subcategory === "general") {
            quickReplies = [
              "Tell me about SkoolVriksh",
              "NicheCommerce features",
              "CloudTrack details"
            ];
          } else if (lastMessage.subcategory === "schoolvriksh") {
            quickReplies = [
              "SkoolVriksh pricing",
              "Schedule a demo",
              "Implementation process"
            ];
          } else if (lastMessage.subcategory === "nichecommerce") {
            quickReplies = [
              "E-commerce pricing",
              "Integration options",
              "Setup timeline"
            ];
          }
          break;
        case "pricing":
          quickReplies = [
            "Schedule a consultation",
            "Payment terms",
            "Contact information"
          ];
          break;
        case "contact":
          quickReplies = [
            "Schedule a meeting",
            "Your office location",
            "Working hours"
          ];
          break;
      }
      
      return quickReplies;
    }
    return [];
  };

  const handleQuickReply = (text) => {
    const userMessage = {
      text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    setHasInteracted(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(text, messages);
      setMessages(prevMessages => [
        ...prevMessages, 
        {
          ...aiResponse,
          isUser: false,
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const windowVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } },
  };

  const notificationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <ChatbotContainer>
      <div style={{ position: 'relative', pointerEvents: 'auto' }}>
        <ToggleButton onClick={toggleChatbot} aria-label="Toggle Chatbot">
          <FaComment style={{ fontSize: '1.5rem' }} />
        </ToggleButton>
        {unreadCount > 0 && !isOpen && (
          <UnreadBadge>{unreadCount}</UnreadBadge>
        )}
      </div>
      
      <AnimatePresence>
        {showNotification && !isOpen && (
          <NotificationPopup
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <NotificationContent>
              <NotificationIconWrapper>
                <FaRobot style={{ color: '#4361ee', fontSize: '1.125rem' }} />
              </NotificationIconWrapper>
              <NotificationTextWrapper style={{ width: '100%' }}>
                <NotificationHeaderRow>
                  <NotificationTitle>Hi there! 👋</NotificationTitle>
                </NotificationHeaderRow>
                <NotificationText>Need help with our services or products? I'm here to assist!</NotificationText>
              </NotificationTextWrapper>
            </NotificationContent>
            <NotificationButtonWrapper>
              <NotificationButton onClick={toggleChatbot}>
                Start Chat
              </NotificationButton>
            </NotificationButtonWrapper>
          </NotificationPopup>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Header>
              <HeaderContent>
                <MdOutlineSupport style={{ fontSize: '1.5rem' }} />
                <div style={{ marginLeft: '0.5rem' }}>
                  <HeaderTitle>CodeNiche Assistant</HeaderTitle>
                  <StatusWrapper>
                    <StatusIndicator />
                    <span>Online</span>
                  </StatusWrapper>
                </div>
              </HeaderContent>
              <CloseButton onClick={toggleChatbot} aria-label="Close chatbot">
                <FaTimes style={{ fontSize: '1.125rem' }} />
              </CloseButton>
            </Header>
            
            <MessagesContainer>
              {messages.map((msg, index) => (
                <MessageWrapper
                  key={index}
                  isUser={msg.isUser}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                >
                  <MessageContent isUser={msg.isUser}>
                    <MessageBubble isUser={msg.isUser}>
                      <MessageText>{msg.text}</MessageText>
                      <MessageTimestamp isUser={msg.isUser}>
                        {formatTime(msg.timestamp)}
                      </MessageTimestamp>
                    </MessageBubble>
                    <MessageArrow isUser={msg.isUser}>
                      <ArrowInner isUser={msg.isUser} />
                    </MessageArrow>
                  </MessageContent>
                  <AvatarWrapper isUser={msg.isUser}>
                    {msg.isUser ? (
                      <UserAvatar>
                        <FaUser style={{ color: '#4b5563', fontSize: '0.875rem' }} />
                      </UserAvatar>
                    ) : (
                      <BotAvatar>
                        <FaRobot style={{ color: 'white', fontSize: '0.875rem' }} />
                      </BotAvatar>
                    )}
                  </AvatarWrapper>
                </MessageWrapper>
              ))}
              
              {isTyping && (
                <TypingIndicator>
                  <AvatarWrapper isUser={false}>
                    <BotAvatar>
                      <FaRobot style={{ color: 'white', fontSize: '0.875rem' }} />
                    </BotAvatar>
                  </AvatarWrapper>
                  <TypingBubble>
                    <TypingDots>
                      <TypingDot />
                      <TypingDot className="delay-75" />
                      <TypingDot className="delay-150" />
                    </TypingDots>
                    <MessageArrow isUser={false}>
                      <ArrowInner isUser={false} />
                    </MessageArrow>
                  </TypingBubble>
                </TypingIndicator>
              )}
              
              {!isTyping && getQuickReplies().length > 0 && (
                <QuickRepliesContainer>
                  {getQuickReplies().map((reply, index) => (
                    <QuickReplyButton
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </QuickReplyButton>
                  ))}
                </QuickRepliesContainer>
              )}
              
              <div ref={messageEndRef} />
            </MessagesContainer>
            
            <InputForm onSubmit={handleSubmit}>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <SendButton
                type="submit"
                disabled={!input.trim()}
              >
                <IoMdSend style={{ fontSize: '1.125rem', opacity: input.trim() ? 1 : 0.5 }} />
              </SendButton>
            </InputForm>
          </ChatWindow>
        )}
      </AnimatePresence>
    </ChatbotContainer>
  );
};

export default Chatbot;