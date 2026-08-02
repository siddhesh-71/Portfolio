import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative pt-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">

                    {/* LEFT — Text Content */}
                    <div className="flex flex-col items-start">

                        {/* Badge */}
                        <div className="flex items-center gap-3 bg-slate-800/60 border border-white/10 rounded-2xl px-4 py-3 mb-7 backdrop-blur-sm">
                            <img
                                src="https://ui-avatars.com/api/?name=SG&background=18181b&color=fff&size=80"
                                alt="SG"
                                className="w-10 h-10 rounded-lg object-cover"
                            />
                            <q className="text-sm text-gray-300 font-medium">Full Stack &amp; ML Enthusiast</q>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight shiny-hero-text">
                            Hi I'm Siddhesh Gupta
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                            A Full Stack Developer skilled in building responsive web applications,
                            REST APIs, and AI-driven systems. Passionate about solving complex
                            problems through code.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://drive.google.com/file/d/1kRlK7p90MnJBdKzrdToabuKbEm1pmZFv/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-7 py-3 rounded-full bg-slate-800/70 border border-white/15 text-white font-semibold text-sm hover:bg-slate-700/80 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                            >
                                <span className="shiny-hero-text">Download CV</span>
                                <i className="fas fa-download text-xs text-gray-400"></i>
                            </a>
                            <a
                                href="#projects"
                                className="flex items-center gap-2 px-7 py-3 rounded-full bg-slate-800/70 border border-white/15 text-white font-semibold text-sm hover:bg-slate-700/80 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                            >
                                <span className="shiny-hero-text">Explore My Projects</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT — Original Decorative Float */}
                    <div className="md:w-full mt-12 md:mt-0 flex justify-center md:justify-end z-10 pointer-events-none">
                        <div className="relative w-64 h-64 md:w-96 md:h-96 glass-card rounded-full flex items-center justify-center animate-float border-2 border-indigo-500/20 shadow-[0_0_100px_-20px_rgba(99,102,241,0.3)]">
                            <div className="text-center p-8">
                                <i className="fas fa-laptop-code text-6xl text-indigo-400 mb-4"></i>
                                <h3 className="text-2xl font-bold text-white">Problem Solver</h3>
                                <p className="text-gray-400 text-sm mt-2">Java • Python • JS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Shiny text CSS */}
            <style>{`
                .shiny-hero-text {
                    background: linear-gradient(90deg, #ccc 0%, #fff 40%, #888 60%, #fff 80%, #ccc 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: heroShine 3s linear infinite;
                }
                @keyframes heroShine {
                    0%   { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
