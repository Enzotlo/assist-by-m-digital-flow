
import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PrimaryButton from '@/components/PrimaryButton';
import { Mail, Phone } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // For demo purposes, just show a success message
    toast.success("Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Layout>
      <section className="py-20 bg-beige-light">
        <div className="section-container">
          <SectionTitle title="Contactez-moi" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl font-semibold text-gray-dark mb-6">
                Parlons de vos besoins
              </h3>
              <p className="text-gray-dark mb-6">
                Vous souhaitez en savoir plus sur mes services ou discuter de vos besoins spécifiques ? 
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-powder"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-powder"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-powder"
                    placeholder="Comment puis-je vous aider ?"
                  ></textarea>
                </div>
                
                <div>
                  <PrimaryButton type="submit" className="w-full">
                    Envoyer le message
                  </PrimaryButton>
                </div>
              </form>
            </div>
            
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-playfair text-2xl font-semibold text-gray-dark mb-6">
                  Contact direct
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-powder/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-rose-powder" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-dark font-medium">Email</p>
                      <a href="mailto:tilleventsbym@gmail.com" className="text-gray-dark hover:text-rose-powder transition-colors">
                        tilleventsbym@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-rose-powder/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-rose-powder" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-dark font-medium">WhatsApp</p>
                      <a href="https://wa.me/33672093843" className="text-gray-dark hover:text-rose-powder transition-colors">
                        06 72 09 38 43
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-4">
                  Service 100% digital
                </h3>
                <p className="text-gray-dark">
                  Basée en Espagne, je vous propose un accompagnement entièrement à distance, 
                  efficace et réactif, quelle que soit votre localisation.
                </p>
              </div>
              
              <div className="bg-rose-powder/10 p-8 rounded-lg border border-rose-powder/30">
                <p className="text-gray-dark text-center italic">
                  "Déléguez, respirez, avancez !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
