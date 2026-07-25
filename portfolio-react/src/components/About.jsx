import React, { useRef, useEffect } from 'react';

const About = () => {
    const groupRef = useRef(null);   // wraps string + card together
    const cardRef = useRef(null);    // just for drag events
    const stringRef = useRef(null);  // for stretch effect
    const isDraggingRef = useRef(false);
    
    const stateRef = useRef({
        angle: 0,           // swing angle in degrees
        angleVel: 0,        // angular velocity
        twist: 0,           // 3D rotateY twist
        twistVel: 0,
        dragStartX: 0,
        dragStartAngle: 0,
        pullDist: 0,        // how far pulled down
    });

    useEffect(() => {
        const group = groupRef.current;
        const lpCard = cardRef.current;
        const lpString = stringRef.current;
        if (!group || !lpCard) return;

        const gravity = 0.15;       // pull back force
        const damping = 0.985;      // slow decay = longer swings
        const twistDamping = 0.92;
        let animId;

        function animate() {
            const s = stateRef.current;

            if (!isDraggingRef.current) {
                // Pendulum gravity: accelerate toward center
                s.angleVel += -s.angle * gravity * 0.01;
                s.angleVel *= damping;
                s.angle += s.angleVel;

                // Pull distance springs back
                s.pullDist *= 0.9;

                // Twist decays
                s.twistVel += -s.twist * 0.03;
                s.twistVel *= twistDamping;
                s.twist += s.twistVel;

                // Stop when nearly still
                if (Math.abs(s.angleVel) < 0.001 && Math.abs(s.angle) < 0.05) {
                    s.angle = 0; s.angleVel = 0;
                }
                if (Math.abs(s.twist) < 0.1 && Math.abs(s.twistVel) < 0.01) {
                    s.twist = 0; s.twistVel = 0;
                }
            }

            // Clamp angle
            s.angle = Math.max(-45, Math.min(45, s.angle));
            s.twist = Math.max(-60, Math.min(60, s.twist));

            // Apply transform to ENTIRE group — string + card move together
            group.style.transform = `rotate(${s.angle}deg)`;

            // Card gets subtle 3D twist
            lpCard.style.transform = `rotateY(${s.twist}deg)`;

            // String stretches when pulled down
            if (lpString) {
                const stretch = 1 + Math.max(0, s.pullDist) * 0.003;
                lpString.style.transform = `scaleY(${stretch})`;
            }

            animId = requestAnimationFrame(animate);
        }

        animate();

        // Get pivot position (top-center of group)
        const getGroupPivot = () => {
            const rect = group.getBoundingClientRect();
            return { x: rect.left + rect.width / 2, y: rect.top };
        };

        // Mouse handlers
        const onMouseDown = (e) => {
            isDraggingRef.current = true;
            const s = stateRef.current;
            s.dragStartX = e.clientX;
            s.dragStartAngle = s.angle;
            s.angleVel = 0;
        };

        const onMouseMove = (e) => {
            if (!isDraggingRef.current) return;
            const s = stateRef.current;
            const pivot = getGroupPivot();
            const dx = e.clientX - pivot.x;
            const dy = e.clientY - pivot.y;

            // Angle from vertical based on mouse position relative to pivot
            s.angle = Math.atan2(dx, Math.max(dy, 50)) * (180 / Math.PI);
            s.angle = Math.max(-45, Math.min(45, s.angle));

            // Pull distance (how far below natural position)
            s.pullDist = Math.max(0, dy - 200);

            // Build twist from horizontal velocity
            const mouseVelX = e.clientX - s.dragStartX;
            s.twistVel = mouseVelX * 0.05;
            s.dragStartX = e.clientX;
        };

        const onMouseUp = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            // Keep current angleVel for momentum bounce
            const s = stateRef.current;
            s.angleVel = s.angle * 0.08; // give momentum based on how far it was pulled
        };

        // Touch handlers
        const onTouchStart = (e) => {
            isDraggingRef.current = true;
            const s = stateRef.current;
            s.dragStartX = e.touches[0].clientX;
            s.dragStartAngle = s.angle;
            s.angleVel = 0;
        };

        const onTouchMove = (e) => {
            if (!isDraggingRef.current) return;
            const s = stateRef.current;
            const pivot = getGroupPivot();
            const dx = e.touches[0].clientX - pivot.x;
            const dy = e.touches[0].clientY - pivot.y;
            s.angle = Math.atan2(dx, Math.max(dy, 50)) * (180 / Math.PI);
            s.angle = Math.max(-45, Math.min(45, s.angle));
            s.pullDist = Math.max(0, dy - 200);
            const mouseVelX = e.touches[0].clientX - s.dragStartX;
            s.twistVel = mouseVelX * 0.05;
            s.dragStartX = e.touches[0].clientX;
        };

        const onTouchEnd = () => {
            if (!isDraggingRef.current) return;
            isDraggingRef.current = false;
            const s = stateRef.current;
            s.angleVel = s.angle * 0.08;
        };

        lpCard.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        lpCard.addEventListener('touchstart', onTouchStart);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);

        return () => {
            cancelAnimationFrame(animId);
            lpCard.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            lpCard.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    // -- snip: lanyard JSX section below --

    const lanyardJSX = (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center select-none" style={{ perspective: '1000px' }}>
                {/* Group: string + card rotate together from top pivot */}
                <div 
                    ref={groupRef}
                    className="flex flex-col items-center"
                    style={{ transformOrigin: 'top center', transition: 'none' }}
                >
                    {/* Lanyard String */}
                    <div 
                        ref={stringRef}
                        className="w-[3px] h-[80px] bg-gradient-to-b from-zinc-600 to-blue-500 rounded-full"
                        style={{ transformOrigin: 'top center' }}
                    />
                    {/* Lanyard Card */}
                    <div 
                        ref={cardRef}
                        className="w-[220px] bg-slate-800/90 backdrop-blur-sm rounded-[20px] border border-white/10 overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(59,130,246,0.15)] cursor-grab active:cursor-grabbing"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="w-[22px] h-[22px] rounded-full bg-slate-900 border-2 border-white/10 mx-auto mt-4" />
                        <div className="p-6 flex flex-col items-center gap-3 text-center">
                            <div className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30">
                                SI
                            </div>
                            <div className="mt-2">
                                <p className="font-bold text-lg text-white">Siddhesh Gupta</p>
                                <p className="text-xs text-gray-400 mt-1">B.Tech CSE Student</p>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <a href="https://github.com/siddhesh-71" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors"><i className="fab fa-github"></i></a>
                                <a href="https://linkedin.com/in/siddhesh-gupta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl transition-colors"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="about" className="pt-10 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* About Me & Experience Card Container */}
                <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 items-center p-8 md:p-12 rounded-[24px] border-4 border-blue-500/20 bg-slate-800/40 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.15)] mb-16">
                    
                    {/* Left Column: About */}
                    <div className="lg:border-r lg:border-blue-500/20 lg:pr-10 pb-8 lg:pb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
                            I am a Full Stack Developer Intern with experience in React, JavaScript, Python, Node.js, FastAPI, SQL, and Machine Learning. I have successfully built AI-driven platforms and scalable web applications. Currently, I am seeking opportunities to further leverage my skills in Frontend, Backend, or ML roles.
                        </p>

                        {/* Stats Section */}
                        <div className="flex gap-8 md:gap-12 flex-wrap mb-6 border-t border-blue-500/10 pt-6">
                            <div>
                                <span className="text-2xl md:text-3xl font-extrabold text-white block">7.54</span>
                                <span className="text-gray-400 text-xs md:text-sm mt-1 block">B.Tech CGPA</span>
                            </div>
                            <div>
                                <span className="text-2xl md:text-3xl font-extrabold text-white block">3+</span>
                                <span className="text-gray-400 text-xs md:text-sm mt-1 block">Major Projects</span>
                            </div>
                            <div>
                                <span className="text-2xl md:text-3xl font-extrabold text-white block">Top 10</span>
                                <span className="text-gray-400 text-xs md:text-sm mt-1 block">Hack up Hackathon</span>
                            </div>
                        </div>
                        
                        <p className="text-indigo-400/90 font-medium text-xs md:text-sm tracking-wide mt-6">
                            Terna Engineering College (2023 - Present) | Nerul
                        </p>
                    </div>

                    {/* Right Column: Lanyard */}
                    {lanyardJSX}
                </div>

                {/* Education and Achievements section below the main box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Education */}
                    <div className="glass-card rounded-2xl p-8 border border-white/5 relative">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Education</h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 border-l-4 border-blue-500">
                                <h4 className="font-bold text-white text-sm md:text-base">Bachelor of Computer Science Engineering</h4>
                                <p className="text-blue-400 text-xs md:text-sm mt-1">Terna Engineering College, Nerul | Aug 2023 - Present</p>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">CGPA: 7.54</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 border-l-4 border-purple-500">
                                <h4 className="font-bold text-white text-sm md:text-base">Higher Secondary Certificate (HSC)</h4>
                                <p className="text-blue-400 text-xs md:text-sm mt-1">Laxman Devram Sonavane | 2021 - 2023</p>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">Percentage: 78.5%</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 border-l-4 border-emerald-500">
                                <h4 className="font-bold text-white text-sm md:text-base">Secondary School Certificate (SSC)</h4>
                                <p className="text-blue-400 text-xs md:text-sm mt-1">Dr. Omprakash Agarwal English High School | 2008 - 2021</p>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">Percentage: 88.67%</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="glass-card rounded-2xl p-8 border border-white/5 relative">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Achievements & Awards</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-500/20 p-3 rounded-lg mr-4 text-blue-400">
                                    <i className="fas fa-trophy text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm md:text-base">Runner-Up</h4>
                                    <p className="text-gray-400 text-xs md:text-sm mt-1">Hack to Crack 2.0 Hackathon (March 2024)</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-purple-500/20 p-3 rounded-lg mr-4 text-purple-400">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm md:text-base">Finalist</h4>
                                    <p className="text-gray-400 text-xs md:text-sm mt-1">Infostav, IIIM Gwalior (November 2025)</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-emerald-500/20 p-3 rounded-lg mr-4 text-emerald-400">
                                    <i className="fas fa-star text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm md:text-base">Top 10</h4>
                                    <p className="text-gray-400 text-xs md:text-sm mt-1">Hack Up (Hack the Core) (April 2026)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <h4 className="text-white font-bold mb-3 text-sm">Core Competencies</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Data Structures', 'REST APIs', 'Automation (n8n)', 'NLP', 'FastAPI'].map((item) => (
                                    <span key={item} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack (Detailed) */}
                <div className="glass-card rounded-2xl p-8">
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
                                { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-500' },
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
