
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-beige-light relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80')", filter: "brightness(0.8)" }}></div>
        <div className="section-container relative z-10">
          <SectionTitle 
            title="Derrière Assist by M, une passionnée d'organisation"
            alignment="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-dark">
                Je m'appelle Marjorie, et j'ai toujours eu un talent naturel pour 
                l'organisation et la gestion du temps. Depuis plusieurs années, 
                j'accompagne des professionnels et des particuliers dans l'optimisation 
                de leur quotidien en leur offrant une assistance efficace et sur mesure.
              </p>
              <p className="text-lg text-gray-dark">
                Mon parcours a débuté dans l'univers de l'événementiel, où j'ai exercé en 
                tant que Wedding Planner. J'ai eu la chance d'organiser et de coordonner 
                de nombreux mariages et événements privés, développant ainsi une expertise 
                pointue en gestion logistique, planification et coordination.
              </p>
            </div>
            
            <div className="bg-rose-powder/10 p-8 rounded-lg border border-rose-powder/30 relative">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-full shadow-lg border-4 border-rose-powder flex items-center justify-center animate-pulse hidden md:flex">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-dark mb-4 text-center">
                Ma mission
              </h3>
              <p className="text-gray-dark italic text-center">
                "Vous faire gagner du temps et simplifier votre quotidien en prenant 
                en charge les tâches qui vous pèsent, pour vous permettre de vous 
                concentrer sur ce qui compte vraiment."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <p className="text-lg text-gray-dark mb-6">
                Cette expérience m'a permis de perfectionner mon sens du détail, ma rigueur et ma 
                capacité à anticiper chaque besoin pour garantir un résultat parfait.
              </p>
              
              <p className="text-lg text-gray-dark mb-6">
                Aujourd'hui, avec Assist by M, j'ai élargi mon champ d'action en proposant une 
                assistance digitale complète aux entrepreneurs, indépendants et particuliers. 
                Que ce soit pour gérer l'administratif, structurer un emploi du temps chargé ou 
                planifier un événement, mon objectif est toujours le même : vous faire gagner du 
                temps et simplifier votre quotidien.
              </p>
            </div>
            
            <div className="md:order-1 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80" 
                  alt="Organisation d'événements" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
            
          <div className="mt-16">
            <h3 className="font-playfair text-2xl font-semibold text-gray-dark mb-6">
              Pourquoi me faire confiance ?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-dark">
                    Une expertise en organisation et coordination issue du monde de l'événementiel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-dark">
                    Une approche personnalisée, adaptée aux besoins spécifiques de chaque client.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-rose-powder rounded-full p-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-dark">
                    Une réactivité et une flexibilité pour vous accompagner efficacement, où que vous soyez.
                  </p>
                </div>
              </div>
            </div>
          </div>
            
          <div className="mt-12 text-center">
            <p className="font-playfair text-2xl font-semibold text-gray-dark">
              Déléguez en toute confiance et concentrez-vous sur ce qui compte vraiment.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
