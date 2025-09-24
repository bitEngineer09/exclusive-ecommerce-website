import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import PrimaryNavbar from '../components/nav/PrimaryNavbar';
import { FaTruck } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { stats } from '../helpers/aboutStats';
import { BsBagHeartFill } from "react-icons/bs";
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {

  const navigate = useNavigate();


  const features = [
    {
      icon: <FaBagShopping className="size-[1.8rem]" />,
      title: "Unbeatable Deals",
      description: "Discover exclusive offers and discounts on trending products that you won't find anywhere else."
    },
    {
      icon: <FaTruck className="size-[1.8rem]" />,
      title: "Fast Delivery",
      description: "Lightning-fast shipping to get your favorite products to your doorstep in record time."
    },
    {
      icon: <MdOutlineSecurity className="size-[1.8rem]" />,
      title: "Secure Shopping",
      description: "Shop with confidence knowing your data and transactions are protected with industry-leading security."
    },
    {
      icon: <FaRegStar className="size-[1.8rem]" />,
      title: "Premium Quality",
      description: "Every product is carefully curated and quality-tested to ensure you get the best value for your money."
    }
  ];


  return (
    <div className="min-h-screen bg-[#0C0A09] text-white">
      {/* Navigation */}
      <PrimaryNavbar />

      {/* Hero Section */}
      <section className="relative py-[2rem]">
        <div className="max-w-[65rem] mx-auto text-center ">
          <h1
            className="
              flex items-center justify-center gap-[0.5rem] lg:gap-[1rem]
              text-[2rem] md:text-[2.7rem] 2xl:text-[3rem] font-medium
              mb-[1rem] lg:mb-[2rem]
             text-white
              
            ">
            About exclusive <BsBagHeartFill className='text-rose-700 text-[1.8rem] md:text-[2.7rem] 2xl:text-[3rem]' />
          </h1>
          <p className="text-[0.9rem] md:text-[1.2rem] text-gray-300 mb-[1.5rem] px-[0.7rem]">
            Discover unbeatable deals, trending products, and fast delivery—shop smart,
            live better, and enjoy every moment with effortless online shopping.
          </p>
          <div className="w-[20rem] h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="my-[1rem] lg:my-[2.5rem] py-[2rem] lg:py-[3rem] bg-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  text-center
                  group hover:transform hover:scale-105
                  transition-all duration-300
                ">
                <div
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-pink-500
                    mb-[0.4rem]
                    group-hover:text-pink-400
                    mt-5
                  ">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-[0.7rem] pt-[1rem] md:pt-[4rem] pb-[3rem] lg:pb-[5rem]">
        <div className="max-w-[80rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-[1rem] lg:mb-[2rem] text-white text-center lg:text-start">
                Our <span className="text-rose-500">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-[0.9rem] md:text-[1.2rem] leading-relaxed text-center lg:text-start">
                <p>
                  Founded with a vision to revolutionize online shopping, Exclusive has grown from a small startup
                  to a trusted platform serving hundreds of thousands of customers worldwide.
                </p>
                <p>
                  We believe that shopping should be an experience that brings joy, convenience, and value to your life.
                  That's why we've built a platform that combines cutting-edge technology with human-centered design.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="
                 bg-stone-800
                  rounded-[1rem] lg:rounded-3xl
                  p-8
                  ">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <LiaAwardSolid className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Excellence Awarded</h3>
                    <p className="text-gray-300">Recognized for outstanding customer service and innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[2rem] lg:py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.7rem] 2xl:text-[3rem] font-bold text-white mb-4">
              Why Choose <span className="text-rose-500">exclusive</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experience the difference with our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  bg-black/50
                  rounded-2xl
                  p-8 border
                  border-gray-800
                  hover:border-pink-500/5
                   transition-all duration-300 
                   "
              >
                <div className="text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-[2rem] lg:py-[5rem] px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[1.5rem] md:text-[2.5rem] 2xl:text-[3rem] font-bold text-white mb-6">
            Ready to Experience Exclusive?
          </h2>
          <p className="text-[1rem] md:text-[1.2rem] 2xl:text-[1.5rem] mb-8">
            Join thousands of satisfied customers and discover what makes us different.
          </p>
          <button
            onClick={() => navigate('/collections')}
            className="
              bg-white
              text-pink-600 font-bold
              py-[0.8rem] lg:py-4
              px-12
              rounded-full
              text-[1rem] md:text-[1.4rem]
              ease-in-out duration-300
              hover:transform hover:scale-105
              cursor-pointer
              ">
            Start Shopping Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}