import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#E16E0E] mb-3">PizzaFiesta 🍕</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Taste the best pizzas made with love, fresh ingredients, and a touch
            of Italian magic. Order now and satisfy your cravings!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#B92F17] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#E16E0E] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#E16E0E] transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-[#E16E0E] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#E16E0E] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold text-[#536304] mb-3">Get in Touch</h3>
          <p className="text-gray-300 text-sm">📍 Abuja, Nigeria</p>
          <p className="text-gray-300 text-sm">📞 +234 812 345 6789</p>
          <p className="text-gray-300 text-sm">✉️ info@pizzafiesta.com</p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-[#E16E0E] transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-300 hover:text-[#E16E0E] transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-300 hover:text-[#E16E0E] transition"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#B92F17]/30 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} PizzaFiesta. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
