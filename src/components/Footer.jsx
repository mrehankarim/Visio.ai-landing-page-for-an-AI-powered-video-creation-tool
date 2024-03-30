import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:text-sm">
      <div className="mx-auto  w-4/5 ">
        <div className="flex justify-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Quick Links
            </h4>
            <ul className="underline">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Featues</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>

          {/* Contact In formation */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-orange-600">
              Contact Us
            </h4>
            <p>123 Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
