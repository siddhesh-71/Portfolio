import React from 'react';

const TechStack = () => {
    const skills = [
        { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
        { name: 'Python', icon: 'fab fa-python', color: 'text-blue-300' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
        { name: 'React', icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Node.js', icon: 'fab fa-node', color: 'text-green-500' },
        { name: 'MySQL', icon: 'fas fa-database', color: 'text-orange-400' },
        { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500' },
    ];

    return (
        <div id="skills" className="w-full glass py-8 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-gray-500 text-sm mb-6 tracking-widest uppercase">Tech Stack & Tools</p>
                <div className="flex justify-center flex-wrap gap-6 md:gap-12 opacity-80">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <i className={`${skill.icon} text-4xl ${skill.color} mb-2`}></i>
                            <span className="text-xs mt-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
