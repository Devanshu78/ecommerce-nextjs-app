import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold">Logo</h2>
          <p className="text-sm mt-1">New Delhi, India</p>
          <p className="text-sm mt-1">
            <span className="mr-1">&copy; {new Date().getFullYear()} Logo</span>
          </p>
        </div>

        <div className="space-y-1">
          <h1 className="font-bold text-lg">About us</h1>
          <a href="/about" className="block hover:underline text-sm">
            About Us
          </a>
          <a href="/contact" className="block hover:underline text-sm">
            Contact
          </a>
        </div>

        <div className="space-y-1">
          <h1 className="font-bold text-lg">Socail Link</h1>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3h2v3h-1c-1 0-1 .5-1 1v1h3l-.5 3H15v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM0 8h5v13H0V8zm7.5 0h4.6v1.8h.1c.6-1 2-2 4-2 4.2 0 5 2.7 5 6.2V21h-5v-5.7c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21h-5V8z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-400"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.2 4.2 0 001.85-2.3 8.3 8.3 0 01-2.65 1A4.2 4.2 0 0016.11 4c-2.34 0-4.23 2-4.23 4.5 0 .35 0 .7.06 1A12 12 0 013 5.15a4.4 4.4 0 001.3 6A4 4 0 012 10v.05c0 2.2 1.5 4 3.5 4.45a4.2 4.2 0 01-1.9.07c.6 2 2.3 3.4 4.4 3.4A8.5 8.5 0 012 20a12 12 0 006.29 1.85c7.55 0 11.68-6.5 11.68-12.1V9c.8-.6 1.5-1.3 2.1-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
