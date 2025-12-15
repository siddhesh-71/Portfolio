import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass border-b-0 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            Gupta Siddhesh.
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#about" className="hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <a href="#skills" className="hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                            <a href="#projects" className="hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                            <a href="#contact" className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-medium transition-all shadow-lg shadow-indigo-500/30">Hire Me</a>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden glass absolute w-full border-t border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#contact" className="text-indigo-400 font-bold block px-3 py-2 rounded-md text-base" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
