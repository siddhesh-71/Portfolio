import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <div className="inline-block px-4 py-2 rounded-full glass border border-indigo-500/30 mb-6 animate-bounce duration-[3000ms]">
                        <span className="text-indigo-300 text-sm font-semibold">👋 Hello, I'm Siddhesh</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Full Stack <br />
                        <span className="text-gradient">Developer</span> & <br />
                        ML Enthusiast
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        Skilled in building responsive web applications, REST APIs, and AI-based systems. Experienced with
                        React, FastAPI, Node.js, and Machine Learning.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-wrap">
                        <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-semibold shadow-lg shadow-indigo-500/40 transition-all transform hover:scale-105 text-center">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full glass hover:bg-white/10 font-semibold border border-white/10 transition-all text-center">
                            Contact Me
                        </a>
                        <a href="/SiddheshGuptaResume.pdf" download="Siddhesh_Gupta_Resume.pdf" className="px-8 py-3 rounded-full glass hover:bg-indigo-500/20 font-semibold border border-indigo-500/50 transition-all text-center flex items-center justify-center gap-2 group">
                            <span>Download CV</span>
                            <i className="fas fa-download text-indigo-400 group-hover:translate-y-1 transition-transform"></i>
                        </a>
                    </div>
                </div>
                {/* Decorative Element for Hero */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10 pointer-events-none">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 glass-card rounded-full flex items-center justify-center animate-float border-2 border-indigo-500/20 shadow-[0_0_100px_-20px_rgba(99,102,241,0.3)]">
                        <div className="text-center p-8">
                            <i className="fas fa-laptop-code text-6xl text-indigo-400 mb-4"></i>
                            <h3 className="text-2xl font-bold text-white">Problem Solver</h3>
                            <p className="text-gray-400 text-sm mt-2">Java • Python • JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
