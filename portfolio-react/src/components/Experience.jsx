import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "Full Stack Developer Intern",
            company: "NeuraXion Labs Private Limited",
            location: "Remote, India",
            duration: "December 2025 – April 2026",
            description: "Developed AI-driven platforms and contributed to full-stack application development. Built and integrated scalable frontend and backend systems. Collaborated with engineering teams on innovation-focused AI projects.",
            icon: "fas fa-laptop-code",
            color: "indigo"
        },
        {
            title: "Junior Web Developer",
            company: "Meshcraft",
            location: "Mumbai, India",
            duration: "September 2025 – December 2025",
            description: "Worked in the Web Development Department on multiple projects. Collaborated with team members to deliver high-quality solutions on time. Received a Letter of Appreciation.",
            icon: "fas fa-globe",
            color: "blue"
        }
    ];

    return (
        <section id="experience" className="pt-8 pb-8 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg">My journey so far</p>
                </div>

                <div className="relative max-w-5xl mx-auto mt-12">
                    {/* Central Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-indigo-500/30 rounded-full"></div>
                    {/* Left Line for Mobile */}
                    <div className="md:hidden absolute left-5 w-1 h-full bg-indigo-500/30 rounded-full"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Empty Spacer for the other side */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                    
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border-4 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-10 mt-2 md:mt-0">
                                        <i className={`${exp.icon} text-indigo-400 text-lg`}></i>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-16 pr-0 md:px-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="glass-card rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-300 group border border-slate-700/50">
                                            <div className="flex flex-col mb-4 gap-2">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.title}</h3>
                                                <div className="flex flex-wrap items-center gap-3 text-indigo-300 font-semibold text-lg mt-1">
                                                    <div className="flex items-center gap-2">
                                                        <i className="fas fa-building"></i>
                                                        <span>{exp.company}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 font-medium mb-5">
                                                <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700 shadow-inner text-indigo-200">
                                                    <i className="fas fa-calendar-alt text-indigo-400"></i>
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-2 text-blue-300 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    {exp.location}
                                                </span>
                                            </div>

                                            <div className="w-full h-px bg-gradient-to-r from-indigo-500/20 to-transparent my-5"></div>
                                            
                                            <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
