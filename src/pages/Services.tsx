
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PrimaryButton from '@/components/PrimaryButton';
import { ArrowRight, FileText, Clock, Calendar, Laptop } from 'lucide-react';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-beige-light">
        <div className="section-container">
          <SectionTitle 
            title="Optimisez votre temps, déléguez l'organisation" 
            subtitle="...et concentrez-vous sur l'essentiel !"
          />
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
        </div>
      </section>
      
      {/* Service Section 2 */}
      <section className="py-16 bg-gray-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-1/4 flex justify-center md:order-2">
              <div className="w-24 h-24 rounded-full bg-rose-powder/20 flex items-center justify-center">
                <Clock size={40} className="text-rose-powder" />
              </div>
            </div>
            <div className="md:w-3/4 md:order-1">
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
        </div>
      </section>
      
      {/* Service Section 4 */}
      <section className="py-16 bg-gray-light">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-1/4 flex justify-center md:order-2">
              <div className="w-24 h-24 rounded-full bg-rose-powder/20 flex items-center justify-center">
                <Laptop size={40} className="text-rose-powder" />
              </div>
            </div>
            <div className="md:w-3/4 md:order-1">
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
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-beige-light">
        <div className="section-container text-center">
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
