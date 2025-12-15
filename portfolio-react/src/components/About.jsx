import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Me & Education & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I am a **Computer Science Engineering** student at **Terna Engineering College** (CGPA: 7.54),
                            based in Mumbai. I have hands-on experience in Full Stack Development and Machine Learning.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            My passion lies in bridging the gap between data science and web development. I love building
                            automated insights platforms and healthcare solutions using AI.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4 mt-8">Education</h3>
                        <div className="space-y-4">
                            <div className="glass-card p-4 rounded-lg border-l-4 border-indigo-500">
                                <h4 className="font-bold text-white">B.E. Computer Science</h4>
                                <p className="text-indigo-300 text-sm">Terna Engineering College | 2023 - 2027</p>
                                <p className="text-gray-400 text-sm mt-1">CGPA: 7.54</p>
                            </div>
                            <div className="glass-card p-4 rounded-lg border-l-4 border-purple-500">
                                <h4 className="font-bold text-white">HSC (Science)</h4>
                                <p className="text-indigo-300 text-sm">Laxman Devram Sonavane | 2021 - 2023</p>
                                <p className="text-gray-400 text-sm mt-1">Percentage: 78.5%</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Achievements & Awards */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
                            <div className="glass-card rounded-2xl p-8 relative">
                                <h3 className="text-2xl font-bold mb-6 text-white text-center">Achievements & Awards</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 text-indigo-400">
                                            <i className="fas fa-trophy text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">Runner-Up</h4>
                                            <p className="text-gray-400 text-sm">Hack to Crack 2.0 Hackathon</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-purple-500/20 p-3 rounded-lg mr-4 text-purple-400">
                                            <i className="fas fa-medal text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">Finalist</h4>
                                            <p className="text-gray-400 text-sm">Infostav (IIIM Gwalior)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <h4 className="text-white font-bold mb-3">Core Competencies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Data Structures', 'REST APIs', 'Automation (n8n)', 'NLP', 'FastAPI'].map((item) => (
                                            <span key={item} className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack (Detailed) */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                    <div className="glass-card rounded-2xl p-8 relative">
                        <h3 className="text-2xl font-bold mb-8 text-white text-center">Tech Stack</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <SkillCategory title="Languages" skills={[
                                { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
                                { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
                                { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400' },
                            ]} />

                            <SkillCategory title="Frontend" skills={[
                                { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
                                { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
                                { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
                                { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' },
                                { name: 'TypeScript', icon: 'fas fa-code', color: 'text-blue-600' },
                            ]} />

                            <SkillCategory title="Backend" skills={[
                                { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-500' },
                                { name: 'Express.js', icon: 'fas fa-server', color: 'text-gray-400' },
                                { name: 'FastAPI', icon: 'fas fa-bolt', color: 'text-yellow-400' },
                                { name: 'Django', icon: 'fas fa-leaf', color: 'text-green-600' },
                                { name: 'Flask', icon: 'fas fa-flask', color: 'text-white' },
                                { name: 'JSP', icon: 'fab fa-java', color: 'text-orange-400' },
                            ]} />

                            <SkillCategory title="Databases" skills={[
                                { name: 'MySQL', icon: 'fas fa-database', color: 'text-orange-400' },
                                { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' },
                                { name: 'Supabase', icon: 'fas fa-bolt', color: 'text-green-400' },
                            ]} />

                            <SkillCategory title="ML & Automation" skills={[
                                { name: 'Python ML', icon: 'fas fa-brain', color: 'text-pink-400' },
                                { name: 'NLP', icon: 'fas fa-language', color: 'text-blue-400' },
                                { name: 'n8n', icon: 'fas fa-project-diagram', color: 'text-red-500' },
                            ]} />

                            <SkillCategory title="Tools" skills={[
                                { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
                                { name: 'GitHub', icon: 'fab fa-github', color: 'text-white' },
                                { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
                                { name: 'Android Studio', icon: 'fab fa-android', color: 'text-green-500' },
                            ]} />

                            <SkillCategory title="GUI" skills={[
                                { name: 'Java Swing', icon: 'fab fa-java', color: 'text-orange-600' },
                                { name: 'Tkinter', icon: 'fas fa-window-restore', color: 'text-blue-300' },
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCategory = ({ title, skills }) => (
    <div>
        <h4 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider text-center md:text-left">{title}</h4>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {skills.map((skill) => (
                <div key={skill.name} className="skill-icon group" data-tooltip={skill.name}>
                    <i className={`${skill.icon} text-3xl ${skill.color}`}></i>
                </div>
            ))}
        </div>
    </div>
);

export default About;
