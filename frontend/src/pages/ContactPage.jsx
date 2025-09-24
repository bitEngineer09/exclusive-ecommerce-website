import React, { useState } from 'react';
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { FaHeadphones } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import FooterSecondary from '../components/Footer/FooterSecondary';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] pb-[4rem]">
      <PrimaryNavbar />
      <h1
        className='
          flex items-center justify-center gap-[1rem]
          text-[clamp(2.4rem,5vw,4rem)]
          text-white text-center font-medium tracking-wide 
          mt-[1rem]
          select-none
        '>Contact Us <FaHeadphones className='text-rose-700' /></h1>

      <div className='max-w-[70vw] mx-auto '>
        <div className=" mx-auto mt-[1rem] rounded-[1rem] overflow-hidden">
          {/* Header Section */}
          <div className="bg-zinc-900 text-white rounded-[1rem] p-[1rem_1.5rem]">
            <h1 className="text-[2rem] font-medium">Connect with us</h1>
            <p className="text-[1rem]  mt-[0.5rem]">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col mt-[1rem] gap-[1rem] md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-1/2 bg-zinc-900 p-[1.5rem] rounded-[1rem]">
              <h2 className="text-[2rem] font-semibold text-rose-100 mb-[1rem]">Get in Touch</h2>

              <div className="mb-6">
                <h3 className="text-[1.1rem] font-medium text-rose-600">Customer Support</h3>
                <p className="text-[0.9rem] text-rose-100 mt-[0.3rem]">support@exclusive.com</p>
                <p className="text-[0.9rem] text-rose-100">+1 (555) 123-4567</p>
              </div>

              <div className="mb-6">
                <h3 className="text-[1.1rem] font-medium text-rose-600">Business Inquiries</h3>
                <p className="text-[0.9rem] text-rose-100 mt-[0.3rem]">partnerships@exclusive.com</p>
                <p className="text-[0.9rem] text-rose-100">+91 9999999999</p>
              </div>

              <div>
                <h3 className="text-[1.1rem] font-medium text-rose-600">Headquarters</h3>
                <p className="text-[0.9rem] text-rose-100 mt-[0.3rem]">123 Fashion Street</p>
                <p className="text-[0.9rem] text-rose-100">Apparel District</p>
                <p className="text-[0.9rem] text-rose-100">New York, NY 10001</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full bg-zinc-900 rounded-[1rem] md:w-3/5 p-[1.5rem]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-0.95rem  text-white mb-[0.6rem]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      contactForm
                      text-white
                      w-full outline-none
                      px-[1rem] py-[0.5rem]
                      bg-zinc-700 rounded-[0.4rem]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-0.95rem  text-white mb-[0.6rem]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      contactForm
                      text-white
                      w-full outline-none
                      px-[1rem] py-[0.5rem]
                      bg-zinc-700 rounded-[0.4rem]
                      "
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-0.95rem  text-white mb-[0.6rem]">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="
                      contactForm
                      text-white
                      w-full outline-none
                      px-[1rem] py-[0.5rem]
                      bg-zinc-700 rounded-[0.4rem]
                    ">
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-issue">Order Issue</option>
                    <option value="return-exchange">Return & Exchange</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-0.95rem  text-white mb-[0.6rem]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="
                      contactForm
                      text-white
                      w-full outline-none
                      px-[1rem] py-[0.5rem]
                      bg-zinc-700 rounded-[0.4rem]
                    "
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                    flex items-center justify-center gap-[0.3rem]
                    w-full outline-none
                    bg-rose-800 hover:bg-rose-700 
                    text-white
                    py-[0.7rem] px-[1rem]
                    rounded-[0.4rem] duration-150 cursor-pointer
                    ">
                  Send Message <RiSendPlaneLine />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="p-[1.5rem] mt-[3rem] rounded-[1rem] bg-rose-100">
          <h2 className="text-[2rem] font-semibold text-rose-800 mb-[1rem]">Frequently Asked Questions</h2>

          <div className="space-y-[1rem]">
            <div>
              <h3 className="text-[1.1rem] font-medium text-rose-700">How long does shipping take?</h3>
              <p className="text-[0.95rem] text-gray-600 mt-[0.3rem]">
                Standard shipping takes 3-5 business days. Express options are available at checkout.
              </p>
            </div>

            <div>
              <h3 className="text-[1.1rem] font-medium text-rose-700">What is your return policy?</h3>
              <p className="text-[0.95rem] text-gray-600 mt-[0.3rem]">
                We offer a 30-day return policy on all unworn items with original tags attached.
              </p>
            </div>

            <div>
              <h3 className="text-[1.1rem] font-medium text-rose-700">Do you ship internationally?</h3>
              <p className="text-[0.95rem] text-gray-600 mt-[0.3rem]">
                Yes, we ship to over 50 countries worldwide. International shipping rates apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer absolute mt-[4rem] w-full">
        <FooterSecondary />
      </div>
    </div>
  );
};

export default ContactPage;