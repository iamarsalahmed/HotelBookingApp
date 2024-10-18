import '../../globals.css'
import React from 'react';


export default () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a question, concern, or feedback? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Our Address</h2>
            <p className="text-gray-600 mt-2">123 Hotel Avenue, Manhattan, New York, USA</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Call Us</h2>
            <p className="text-gray-600 mt-2">+1 234 567 890</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700">Email Us</h2>
            <p className="text-gray-600 mt-2">support@hotelbooking.com</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
