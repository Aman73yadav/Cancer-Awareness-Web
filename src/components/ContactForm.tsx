import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Unable to send message. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Reach Out for Support
          </h2>
          <p className="text-xl text-gray-600">
            We're here to listen, support, and guide you through your journey
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 text-lg">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-4 focus:ring-rose-100 transition-all outline-none resize-none"
                  placeholder="Share your story, ask a question, or let us know how we can help..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl hover:from-rose-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Response Time</p>
            <p className="text-2xl font-bold text-gray-900">24 Hours</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Availability</p>
            <p className="text-2xl font-bold text-gray-900">24/7</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Confidential</p>
            <p className="text-2xl font-bold text-gray-900">100%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
