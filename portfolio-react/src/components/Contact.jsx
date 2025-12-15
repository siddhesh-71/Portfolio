import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_r5xkx7b', 'template_nfwgm3o', form.current, '30ZRk4Y8ggz0uv21C')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="text-gray-400 mb-8">Currently seeking internship opportunities in Frontend, Backend, or ML roles.</p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <span>gsiddhesh751@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <span>Mumbai, Maharashtra</span>
                        </div>
                    </div>

                    {status !== 'success' ? (
                        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4 text-left">
                            <div>
                                <input type="text" name="from_name" required
                                    className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Your Name" />
                            </div>
                            <div>
                                <input type="email" name="from_email" required
                                    className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Your Email" />
                            </div>
                            <div>
                                <textarea name="message" rows="4" required
                                    className="w-full bg-slate-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Message"></textarea>
                            </div>
                            <button type="submit" disabled={status === 'sending'}
                                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transform transition hover:-translate-y-1 group ${status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}>
                                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                <i className="fas fa-paper-plane ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                            {status === 'error' && <p className="text-red-500 text-center text-sm">Failed to send message. Please try again.</p>}
                        </form>
                    ) : (
                        <div className="text-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl animate-fade-in">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-check text-2xl text-green-400"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-300 mb-6">I have received your email. I will reply to you shortly.</p>
                            <button onClick={() => setStatus('')}
                                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors">
                                Send another message
                            </button>
                        </div>
                    )}

                    <div className="mt-10 flex justify-center space-x-8">
                        <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors"><i className="fab fa-github"></i></a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 text-2xl transition-colors"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
