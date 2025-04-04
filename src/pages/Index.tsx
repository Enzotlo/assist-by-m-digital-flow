
import { 
  Clock, 
  FileText, 
  Calendar, 
  Check,
  Mail
} from 'lucide-react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';
import PrimaryButton from '@/components/PrimaryButton';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-beige-light/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
              Bienvenue chez Assist by M
            </h1>
            <p className="text-xl md:text-2xl text-gray-dark mb-8">
              Optimisez votre temps, simplifiez votre quotidien
            </p>
            <p className="text-lg text-gray-dark mb-10">
              Vous manquez de temps pour gérer vos tâches administratives et organiser vos événements ? 
              Assist by M vous accompagne dans la gestion de votre quotidien professionnel et personnel 
              pour vous permettre de vous concentrer sur l'essentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block">
                <PrimaryButton>
                  Me contacter
                </PrimaryButton>
              </a>
              <a href="#services" className="inline-block">
                <button className="bg-transparent border border-rose-powder text-gray-dark font-medium py-3 px-6 rounded-md hover:bg-rose-powder/10 transition-colors duration-300">
                  Découvrir mes services
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="section-container">
          <SectionTitle 
            title="Des services sur mesure pour un quotidien plus fluide" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Assistance administrative"
              description="Gestion des e-mails, planification d'agenda, facturation, saisie de documents… Déléguez pour gagner en sérénité."
              icon={<FileText size={28} />}
            />
            <ServiceCard 
              title="Organisation et gestion du temps"
              description="Optimisation de vos tâches, mise en place de process efficaces, suivi des échéances… Tout pour une meilleure productivité."
              icon={<Clock size={28} />}
            />
            <ServiceCard 
              title="Organisation d'événements"
              description="Coordination et organisation de vos événements privés et professionnels (séminaires, mariages, anniversaires, etc.)."
              icon={<Calendar size={28} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <a href="/services">
              <button className="border border-rose-powder text-gray-dark font-medium py-3 px-6 rounded-md hover:bg-rose-powder/10 transition-colors duration-300">
                Voir tous mes services
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-light">
        <div className="section-container">
          <SectionTitle 
            title="Pourquoi choisir Assist by M ?" 
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2">Un accompagnement 100% personnalisé</h3>
                  <p className="text-gray-dark">
                    Des solutions adaptées à vos besoins spécifiques et à votre façon de travailler.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2">Une expertise en organisation</h3>
                  <p className="text-gray-dark">
                    Des compétences pointues en gestion du temps et organisation pour un quotidien plus fluide.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2">Un service digital, flexible et réactif</h3>
                  <p className="text-gray-dark">
                    Une assistance à distance, disponible selon vos besoins, où que vous soyez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section id="contact" className="py-20 bg-beige-light">
        <div className="section-container text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-dark mb-6">
            Déléguez, respirez, avancez !
          </h2>
          <p className="text-xl text-gray-dark mb-10 max-w-2xl mx-auto">
            Contactez-moi dès aujourd'hui pour discuter de vos besoins et retrouver du temps pour l'essentiel.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-md mx-auto">
            <a href="mailto:tilleventsbym@gmail.com" className="flex items-center justify-center space-x-2 bg-white text-gray-dark px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <Mail size={20} className="text-rose-powder" />
              <span>tilleventsbym@gmail.com</span>
            </a>
            <a href="https://wa.me/33672093843" className="flex items-center justify-center space-x-2 bg-white text-gray-dark px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <span className="text-rose-powder text-xl">📱</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
