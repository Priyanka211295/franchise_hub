import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sirImage from '../../../assets/images/sir.jpg';
import mypic from '../../../assets/images/mepic.jpg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [count, setCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const testimonials = [
    {
      text: "I got my dream franchise through this platform. The application process was smooth, and I was operating within 2 months!",
      author: "Rahul Sharma",
      role: "Franchise Owner, Mumbai"
    },
    {
      text: "The platform made it easy to compare different franchise opportunities and choose the one that best fit my budget and goals.",
      author: "Priya Patel",
      role: "New Franchise Partner, Delhi"
    },
    {
      text: "From application to approval, everything was transparent. The support team guided me through each step of getting my franchise.",
      author: "Amit Kumar",
      role: "Restaurant Franchise Owner, Bangalore"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Counter animation for franchise count
    const countInterval = setInterval(() => {
      if (count < 500) {
        setCount(prev => prev + 5);
      } else {
        clearInterval(countInterval);
      }
    }, 20);

    // Mouse move effect
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      clearInterval(countInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count]);

  // Calculate parallax movement based on mouse position
  const calcParallaxOffset = (factor) => {
    const xOffset = (mousePosition.x - 0.5) * factor;
    const yOffset = (mousePosition.y - 0.5) * factor;
    return { x: xOffset, y: yOffset };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-800 text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            style={{ 
              transform: `translate(${calcParallaxOffset(20).x}px, ${calcParallaxOffset(20).y}px)` 
            }}
          ></div>
          <div 
            className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{ 
              transform: `translate(${calcParallaxOffset(-30).x}px, ${calcParallaxOffset(-30).y}px)` 
            }}
          ></div>
          <div 
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            style={{ 
              transform: `translate(${calcParallaxOffset(40).x}px, ${calcParallaxOffset(40).y}px)` 
            }}
          ></div>
        </div>

        {/* Particle effect overlay */}
        <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat opacity-5 z-0"></div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10"></div>

        {/* Content */}
        <div className={`relative z-10 flex flex-col items-center justify-center h-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              <div className="mb-2 relative">
                <span className="absolute -left-1 -top-1 text-purple-800/20">UNLOCK</span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  UNLOCK
                </span>
              </div>
              <div className="mb-2 relative">
                <span className="absolute -left-1 -top-1 text-purple-800/20">YOUR BUSINESS</span>
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  YOUR BUSINESS
                </span>
              </div>
              <div className="relative">
                <span className="absolute -left-1 -top-1 text-purple-800/20">POTENTIAL</span>
                <span className="relative z-10 text-white">POTENTIAL</span>
              </div>
            </h1>
            
            {/* Animated highlight bar */}
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 animate-pulse"></div>
            
            {/* Subheading with improved typography */}
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Your gateway to successful franchise ownership - Apply, Get Approved, and Start Operating            </p>
            
            {/* Stats display with animated counters */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
                <div className="text-4xl font-bold text-blue-400 mb-1">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
                <div className="text-4xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Expert Support</div>
              </div>
                </div>
            <button className="border-2 border-purple-600 text-purple-400 font-bold py-3 px-8 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
              Click on Apply Now for Franchise
            </button>
              
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-blue-200 font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-gray-700/50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-blue-500 text-4xl mb-4">📝</div>
              <h3 className="text-xl text-blue-200 font-mono mb-4">Easy Application</h3>
              <p className="text-gray-300">Simple and streamlined franchise application process with quick approval timelines.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-700/50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl text-blue-200 font-bold mb-4">Flexible Investment</h3>
              <p className="text-gray-300">Various franchise options available across different investment ranges and industries.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-700/50 p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-purple-500 text-4xl mb-4">🎯</div>
              <h3 className="text-xl text-blue-200 font-bold mb-4">Complete Support</h3>
              <p className="text-gray-300">Comprehensive training, location selection assistance, and ongoing operational support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-blue-200 font-bold text-center mb-8">Franchise Success Stories</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700/30 p-8 rounded-2xl">
              <p className="text-xl italic mb-6">{testimonials[currentTestimonial].text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonials[currentTestimonial].author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-bold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profile Section (replacing Call to Action) */}
      <section className="py-10 bg-slate-900" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mentor/Sir's Profile Card */}
            <div className="bg-gradient-to-br h-64   from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-purple-500/20 hover:scale-105">
              <div className="relative h-6 overflow-hidden">
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-20 h-20 rounded-full border-4 border-purple-600 overflow-hidden -mt-20 shadow-xl relative z-20">
                    <img src={sirImage} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">Rajesh Bansal</h3>
                    <p className="text-purple-400">Mentor</p>
                  </div>
                </div>
                <p className="text-blue-300 mb-6">
                  Rajesh K. Bansal (MCA, SCJP, MCP)
                  <br></br>
Author of the book - 📑 Real Java 
<br></br>
Founder of - www.realJavaOnline.com
                </p> 
              </div>
            </div>
            
            {/* Your Profile Card */}
            <div className="bg-gradient-to-br h-64 from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-blue-500/20 hover:scale-105">
              <div className="relative h-6 overflow-hidden">
                <img 
                  src="/your-profile.jpg" 
                  // alt="Your Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300/6366f1/ffffff?text=Your+Profile";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-600 overflow-hidden -mt-20 shadow-xl relative z-20">
                    <img 
                      src={mypic} 
                      // alt="Your Avatar" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150/6366f1/ffffff?text=Y";
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">Priyanka kansal</h3>
                     <p className="text-purple-400">Developer</p>

                  </div>
                </div>
                <p className="text-blue-300 mb-6 flex-justify-center">
                M.SC 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-950 text-gray-400">
        {/* Top Footer with Columns */}
        <div className="container mx-auto px-6 py-1 text-center">
          <h3 className="text-3xl font-bold text-white mb-5">Franchise Hub</h3>
          <p className="mb-3 max-w-2xl mx-auto">Your trusted partner in franchise ownership and business growth.</p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-10">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 15.06V10.06h1.06v2.83h2.83v1.06h-2.83v2.83h-1.06v-2.83H7.76v-1.06h2.83V10.06H12v7H7.76v-1.06h2.83z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-5">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Franchise Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Franchise Categories */}
            <div>
              <h4 className="text-white font-semibold mb-4">Franchise Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Food & Beverage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
              </ul>
            </div>
 </div>

          <div className="border-t border-gray-800   max-w-xl mx-auto">
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-black py-1 text-center">
          <div className="container mx-auto px-6">
            <p className="mb-1">&copy; {new Date().getFullYear()} Franchise Hub. All rights reserved.</p>
           
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
