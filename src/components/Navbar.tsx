
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-gray-dark font-playfair text-2xl font-bold">
          Assist by M
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-dark focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-dark hover:text-rose-powder transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-gray-dark hover:text-rose-powder transition-colors">
            À propos
          </Link>
          <Link to="/services" className="text-gray-dark hover:text-rose-powder transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-gray-dark hover:text-rose-powder transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-50 bg-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-end p-6">
            <button
              className="text-gray-dark focus:outline-none"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 mt-20">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-xl text-gray-dark hover:text-rose-powder transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="text-xl text-gray-dark hover:text-rose-powder transition-colors"
            >
              À propos
            </Link>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="text-xl text-gray-dark hover:text-rose-powder transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="text-xl text-gray-dark hover:text-rose-powder transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
