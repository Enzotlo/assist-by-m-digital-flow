
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-beige-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-semibold text-gray-dark">Assist by M</h3>
            <p className="text-gray-dark text-sm">
              "Déléguez pour mieux avancer."
            </p>
            <p className="text-gray-dark text-sm">
              Assistante digitale spécialisée en organisation et gestion du temps.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gray-dark">Navigation</h3>
            <div className="flex flex-col space-y-2">
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
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-gray-dark">Contact</h3>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-rose-powder" />
              <a href="mailto:tilleventsbym@gmail.com" className="text-gray-dark hover:text-rose-powder transition-colors">
                tilleventsbym@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-rose-powder">📱</span>
              <a href="https://wa.me/33672093843" className="text-gray-dark hover:text-rose-powder transition-colors">
                WhatsApp: 06 72 09 38 43
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-dark hover:text-rose-powder transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-dark hover:text-rose-powder transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-dark">
          <p>© {new Date().getFullYear()} Assist by M. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
