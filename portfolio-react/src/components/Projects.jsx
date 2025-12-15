import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Real-world applications solving data and healthcare problems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {/* Project 1 */}
                    <div className="glass-card rounded-xl overflow-hidden group">
                        <div className="h-48 bg-gray-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-chart-pie text-5xl text-white/50 group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Data Vizzard</h3>
                                <div className="flex gap-2 text-lg">
                                    <i className="fab fa-react text-blue-400" title="React"></i>
                                    <i className="fab fa-python text-yellow-300" title="Python"></i>
                                </div>
                            </div>
                            <p className="text-indigo-400 text-xs font-semibold mb-3">AI Data Visualization Platform</p>
                            <p className="text-gray-400 text-sm mb-4">
                                Full-stack platform converting CSV/Excel into insights. Implements trend analysis,
                                correlation detection, and outlier identification using AI models.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">FastAPI</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">TypeScript</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Python ML</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="glass-card rounded-xl overflow-hidden group">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-900 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-heartbeat text-5xl text-white/50 group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Care-Connect</h3>
                                <div className="flex gap-2 text-lg">
                                    <i className="fab fa-react text-blue-400" title="React"></i>
                                    <i className="fas fa-brain text-pink-400" title="ML"></i>
                                </div>
                            </div>
                            <p className="text-indigo-400 text-xs font-semibold mb-3">AI Healthcare Web Platform</p>
                            <p className="text-gray-400 text-sm mb-4">
                                Multi-role system with AI symptom checker, video consultation, and appointment booking.
                                Designed secure REST APIs and responsive UI.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Flask</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">WebRTC</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Machine Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
