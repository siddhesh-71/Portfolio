import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-10 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Real-world applications solving data, security, and analysis problems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {/* Project 1 */}
                    <div className="glass-card rounded-xl overflow-hidden group flex flex-col h-full">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-shield-halved text-5xl text-white/50 group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Data Shield AI</h3>
                                <div className="flex gap-2 text-lg">
                                    <i className="fab fa-react text-blue-400" title="React"></i>
                                    <i className="fab fa-python text-yellow-300" title="Python"></i>
                                </div>
                            </div>
                            <p className="text-indigo-400 text-xs font-semibold mb-3">AI Cybersecurity Platform</p>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">
                                Developed an AI-powered cybersecurity platform that scans the dark web to detect potential data leaks and analyzes exposed information. Implemented decryption and data-processing techniques to display structured leak details through a web interface, helping users monitor compromised data and take preventive actions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">FastAPI</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">React.js</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Cryptography</span>
                            </div>
                            <a href="https://github.com/siddhesh-71" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-auto">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="glass-card rounded-xl overflow-hidden group flex flex-col h-full">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-950 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fab fa-youtube text-5xl text-white/50 group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">YouTube Niche Classifier</h3>
                                <div className="flex gap-2 text-lg">
                                    <i className="fab fa-python text-blue-400" title="Python"></i>
                                    <i className="fas fa-brain text-pink-400" title="ML/NLP"></i>
                                </div>
                            </div>
                            <p className="text-indigo-400 text-xs font-semibold mb-3">Data Analysis & ML Classifier</p>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">
                                Developed a data analysis tool that categorizes YouTube channels into different niches and analyzes growth and decline trends. Implemented a feature that generates detailed channel insights, including performance metrics, growth analysis, and interactive dashboards.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Python ML</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">NLP</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Dashboard</span>
                            </div>
                            <a href="https://github.com/siddhesh-71" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-auto">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="glass-card rounded-xl overflow-hidden group flex flex-col h-full">
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-900 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-chart-pie text-5xl text-white/50 group-hover:text-white transition-colors"></i>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Data Wizzard</h3>
                                <div className="flex gap-2 text-lg">
                                    <i className="fab fa-react text-blue-400" title="React"></i>
                                    <i className="fab fa-python text-yellow-300" title="Python"></i>
                                </div>
                            </div>
                            <p className="text-indigo-400 text-xs font-semibold mb-3">AI Data Visualization Platform</p>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">
                                Built a data analysis and visualization platform that transforms raw datasets into meaningful insights. Implemented data cleaning, transformation, and interactive dashboards to visualize trends, patterns, and key business metrics for better decision-making.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">React.js</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Node.js</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Data Visualization</span>
                            </div>
                            <a href="https://github.com/siddhesh-71/Data-Vizzard-Al-Data-Visualization-Platform" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-auto">
                                <i className="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
