
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PrimaryButton from '@/components/PrimaryButton';
import { ArrowRight, FileText, Clock, Calendar, Laptop } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-beige-light relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80')" }}>
        </div>
        <div className="section-container relative z-10">
          <SectionTitle 
            title="Optimisez votre temps, déléguez l'organisation" 
            subtitle="...et concentrez-vous sur l'essentiel !"
          />
          
          <div className="mt-12">
            <Carousel className="max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-rose-powder/20 flex items-center justify-center mb-4">
                        <FileText size={28} className="text-rose-powder" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2 text-center">Assistance Administrative</h3>
                      <p className="text-center text-gray-dark">Déléguez vos tâches administratives et gagnez en sérénité au quotidien.</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-rose-powder/20 flex items-center justify-center mb-4">
                        <Clock size={28} className="text-rose-powder" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2 text-center">Optimisation du Temps</h3>
                      <p className="text-center text-gray-dark">Des méthodes et outils pour une productivité maximale dans votre travail.</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-rose-powder/20 flex items-center justify-center mb-4">
                        <Calendar size={28} className="text-rose-powder" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2 text-center">Organisation d'Événements</h3>
                      <p className="text-center text-gray-dark">Des événements parfaitement coordonnés, de la planification à l'exécution.</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-rose-powder/20 flex items-center justify-center mb-4">
                        <Laptop size={28} className="text-rose-powder" />
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-gray-dark mb-2 text-center">Support Digital</h3>
                      <p className="text-center text-gray-dark">Un accompagnement personnalisé pour tirer le meilleur parti des outils numériques.</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Service Section 1 */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-rose-powder/20 flex items-center justify-center">
                <FileText size={40} className="text-rose-powder" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-dark mb-6">
                Assistance Administrative
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Gestion des e-mails : Tri, réponse aux messages importants et suivi des correspondances.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Planification et gestion d'agenda : Prise de rendez-vous, rappels et organisation de réunions.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Saisie et mise en forme de documents : Rapports, présentations, comptes rendus.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Facturation et suivi des paiements : Création et envoi de devis/factures, relances clients.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Classement et archivage numérique : Organisation des fichiers (Google Drive, Dropbox, OneDrive).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80" 
                alt="Assistance administrative" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>
      
      {/* Service Section 2 */}
      <section className="py-16 bg-gray-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80" 
                  alt="Optimisation du temps" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-dark mb-6">
                Optimisation du Temps et des Process
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Création de to-do lists et suivi des tâches pour une meilleure productivité.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Mise en place d'outils et de méthodes d'organisation adaptés à vos besoins (Trello, Notion, Asana).
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Automatisation de certaines tâches répétitives pour gagner en efficacité.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Conseils en gestion du temps et des priorités pour une organisation optimisée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Section 3 */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-rose-powder/20 flex items-center justify-center">
                <Calendar size={40} className="text-rose-powder" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-dark mb-6">
                Organisation d'Événements Privés et Professionnels
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Planification et coordination complète d'événements sur mesure.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Gestion des prestataires et logistique (salle, traiteur, animations, hébergements).
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Création du rétroplanning et suivi des deadlines.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Présence le jour J pour assurer la bonne coordination et gérer les imprévus.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Événements concernés : Mariages, anniversaires, séminaires, réunions, événements d'entreprise…
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={1}>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80" 
                  alt="Organisation d'événements 1" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={1}>
                <img 
                  src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80" 
                  alt="Organisation d'événements 2" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={1}>
                <img 
                  src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&q=80" 
                  alt="Organisation d'événements 3" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Section 4 */}
      <section className="py-16 bg-gray-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-dark mb-6">
                Support Digital et Gestion d'Outils
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Paramétrage et gestion d'outils collaboratifs (Google Workspace, Slack, Zoom…).
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Aide à la prise en main des logiciels et plateformes digitales.
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <ArrowRight size={18} className="text-rose-powder" />
                  <p className="text-gray-dark">
                    Veille sur les meilleures pratiques et outils digitaux pour améliorer votre organisation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Support digital" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-beige-light relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80')" }}>
        </div>
        <div className="section-container text-center relative z-10">
          <h2 className="font-playfair text-3xl font-semibold text-gray-dark mb-6">
            Prêt à gagner du temps et de la sérénité ?
          </h2>
          <p className="text-lg text-gray-dark mb-10 max-w-2xl mx-auto">
            Contactez-moi pour discuter de vos besoins et mettre en place une 
            solution d'assistance sur mesure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <PrimaryButton>
                Me contacter
              </PrimaryButton>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
