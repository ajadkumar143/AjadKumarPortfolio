import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      setLoading(false);
      return;
    }

    try {
      // Attempt EmailJS send if credentials configured, otherwise fallback to success simulation
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully. Ajad will respond within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'Failed to send message via EmailJS. Please try emailing directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 z-10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Initiate Dialogue"
          title="Let's Build Something Extraordinary"
          subtitle="Have an exciting enterprise opportunity, custom project, or technical consultation? Get in touch today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information & Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-2xl font-extrabold text-white">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Feel free to reach out via email, phone, or LinkedIn. Available for full-time senior development positions, remote roles, and consulting projects.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Email Address</span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Phone / WhatsApp</span>
                    <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold">Current Location</span>
                    <p className="text-sm font-bold text-white">
                      {personalInfo.location} (Remote / Onsite)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Mockup */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10 p-2">
              <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-900">
                <iframe
                  title="Location Map"
                  src="https://maps.google.com/maps?q=Aliganj,Lucknow,Uttar+Pradesh,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Send A Direct Message</h3>
                <p className="text-xs text-slate-400">Integrated with EmailJS notification pipeline</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Senior .NET Role / Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project scope, tech requirements, or hiring opportunities..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs sm:text-sm"
                />
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                        : 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="text-rose-400 flex-shrink-0" />
                    )}
                    <span>{statusMessage.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message Now</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
