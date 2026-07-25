import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ProfileStats from './ProfileStats';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [focused, setFocused] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        emailjs.sendForm('service_r5xkx7b', 'template_nfwgm3o', form.current, '30ZRk4Y8ggz0uv21C')
            .then(() => {
                setStatus('success');
                form.current.reset();
            }, () => {
                setStatus('error');
            });
    };

    const contactLinks = [
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: 'siddheshg1195@gmail.com',
            href: 'mailto:siddheshg1195@gmail.com',
            color: 'text-indigo-400',
            iconBg: 'bg-indigo-500/20',
        },
        {
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            value: 'in/siddhesh-gupta',
            href: 'https://linkedin.com/in/siddhesh-gupta',
            color: 'text-blue-400',
            iconBg: 'bg-blue-500/20',
        },
        {
            icon: 'fab fa-github',
            label: 'GitHub',
            value: '@siddhesh-71',
            href: 'https://github.com/siddhesh-71',
            color: 'text-purple-400',
            iconBg: 'bg-purple-500/20',
        },
        {
            icon: 'fas fa-phone',
            label: 'Phone',
            value: '+91 8262975733',
            href: 'tel:+918262975733',
            color: 'text-emerald-400',
            iconBg: 'bg-emerald-500/20',
        },
    ];

    return (
        <section id="contact" className="pt-10 pb-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Currently seeking internship opportunities in Frontend, Backend, or ML roles. I'd love to hear from you!
                    </p>
                </div>

                {/* Profile Stats */}
                <ProfileStats githubUsername="siddhesh-71" leetcodeUsername="Siddhhh12" />

                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT — Contact Info Cards */}
                    <div className="flex flex-col gap-4">
                        <div className="mb-2">
                            <h3 className="text-2xl font-bold text-white mb-1">Let's Connect</h3>
                            <p className="text-gray-400">Feel free to reach out via Email or LinkedIn.</p>
                        </div>

                        {contactLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="glass-card flex items-center gap-4 rounded-2xl p-5 border border-white/5 group"
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${link.iconBg} ${link.color} border border-white/5`}>
                                    <i className={link.icon}></i>
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${link.color}`}>
                                        {link.label}
                                    </p>
                                    <p className="text-gray-300 text-sm truncate">{link.value}</p>
                                </div>

                                {/* Arrow */}
                                <i className="fas fa-arrow-right text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-300 group-hover:translate-x-1 transform"></i>
                            </a>
                        ))}

                        {/* Location badge */}
                        <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/3">
                            <span className="text-base">📍</span>
                            <span className="text-gray-300 text-sm">Mumbai, India</span>
                            <span className="ml-auto text-xs text-gray-500">IST (UTC+5:30)</span>
                        </div>
                    </div>

                    {/* RIGHT — Contact Form */}
                    <div className="glass-card rounded-2xl p-8 border border-white/5">

                        {status !== 'success' ? (
                            <>
                                <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                                <p className="text-gray-400 text-sm mb-8">I'll get back to you within 24 hours.</p>

                                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <i className={`fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200 ${focused === 'name' ? 'text-indigo-400' : 'text-gray-600'}`}></i>
                                            <input
                                                type="text"
                                                name="from_name"
                                                required
                                                placeholder="Input Name..."
                                                onFocus={() => setFocused('name')}
                                                onBlur={() => setFocused('')}
                                                className={`w-full pl-11 pr-4 py-3 bg-white/5 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 border ${focused === 'name' ? 'border-indigo-500/50' : 'border-white/8'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <i className={`fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200 ${focused === 'email' ? 'text-indigo-400' : 'text-gray-600'}`}></i>
                                            <input
                                                type="email"
                                                name="from_email"
                                                required
                                                placeholder="Input Email..."
                                                onFocus={() => setFocused('email')}
                                                onBlur={() => setFocused('')}
                                                className={`w-full pl-11 pr-4 py-3 bg-white/5 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 border ${focused === 'email' ? 'border-indigo-500/50' : 'border-white/8'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            placeholder="Message..."
                                            onFocus={() => setFocused('message')}
                                            onBlur={() => setFocused('')}
                                            className={`w-full px-4 py-3 bg-white/5 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 resize-none border ${focused === 'message' ? 'border-indigo-500/50' : 'border-white/8'}`}
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className={`w-full py-3 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5 shadow-lg group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {status === 'sending' ? (
                                                <>
                                                    <i className="fas fa-circle-notch fa-spin"></i>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <i className="fas fa-paper-plane transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                                                </>
                                            )}
                                        </span>
                                    </button>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 p-3 rounded-xl text-red-400 text-sm bg-red-500/10 border border-red-500/20">
                                            <i className="fas fa-exclamation-circle"></i>
                                            Failed to send message. Please try again.
                                        </div>
                                    )}
                                </form>
                            </>
                        ) : (
                            /* Success State */
                            <div className="text-center py-12 animate-fade-in">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                                    <i className="fas fa-check text-2xl text-green-400"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Thanks for reaching out! I've received your message and will reply within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus('')}
                                    className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
                                >
                                    <i className="fas fa-redo mr-2"></i>
                                    Send another message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
