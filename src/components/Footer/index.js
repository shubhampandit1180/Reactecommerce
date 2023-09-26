import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white body-font border-t-4">
      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-wrap md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-semibold mb-4">Shubham's Trendy Treasures</h2>
            <p className="text-sm leading-relaxed">
              Your one-stop shop for the latest fashion trends and accessories.
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              Email: <a href="mailto:shubhampandit841@gmail.com" className="text-indigo-400 hover:text-indigo-300">shubhampandit841@gmail.com</a>
            </p>
            <p className="text-sm leading-relaxed">
              Address: Nanded, Maharashtra 431602
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Shubham's Trendy Treasures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
