
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight, FileText, Clock, CalendarClock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-beige-light">
        <div className="section-container max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle 
            title="Optimisez votre temps, déléguez l'organisation" 
            subtitle="Concentrez-vous sur l'essentiel !"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            <ServiceCard
              title="Assistance Administrative"
              description="Gestion des emails, agenda, documents et facturation pour vous libérer des tâches chronophages."
              icon={<FileText size={28} />}
            />
            
            <ServiceCard
              title="Optimisation du Temps"
              description="Création de to-do lists, mise en place d'outils et de méthodes d'organisation adaptés à vos besoins."
              icon={<Clock size={28} />}
            />
            
            <ServiceCard
              title="Organisation d'Événements"
              description="Planification et coordination complète d'événements privés et professionnels sur mesure."
              icon={<CalendarClock size={28} />}
            />
          </div>
        </div>
      </section>
      
      {/* Services Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Administrative Service */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <Badge className="mb-4 bg-rose-powder/20 text-gray-dark hover:bg-rose-powder/30 transition-colors">Service Phare</Badge>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-dark mb-4">Assistance Administrative & Digitale</h2>
                <div className="elegant-divider ml-0"></div>
                <p className="text-lg md:text-xl font-medium text-gray-dark mt-4 italic">Déléguez pour mieux diriger.</p>
                <p className="text-gray-dark mt-4">
                  Vous perdez du temps dans des tâches chronophages comme la gestion des e-mails, le tri des documents ou la préparation de devis ? Assist by M vous libère de ces contraintes.
                </p>
                
                <div className="mt-8 p-6 bg-beige-light rounded-lg border border-rose-powder/20">
                  <h4 className="font-playfair text-lg font-semibold mb-2">Exemple concret :</h4>
                  <p className="text-gray-dark">
                    Marie, coach professionnelle, gagnait à peine 2 heures par jour pour ses clients. Après avoir confié sa gestion de planning et sa facturation à Assist by M, elle a pu doubler son nombre de rendez-vous hebdomadaires.
                  </p>
                  <p className="text-gray-dark mt-4 italic">
                    "Je ne pensais pas qu'un simple coup de main administratif pouvait autant transformer mon quotidien. Assist by M, c'est mon bras droit digital !" – Marie D.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                  alt="Assistant administratif et digital" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Gestion des e-mails : Tri, réponse aux messages importants et suivi des correspondances.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Planification et gestion d'agenda : Prise de rendez-vous, rappels et organisation de réunions.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Saisie et mise en forme de documents : Rapports, présentations, comptes rendus.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Facturation et suivi des paiements : Création et envoi de devis/factures, relances clients.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Classement et archivage numérique : Organisation des fichiers (Google Drive, Dropbox, OneDrive).</span>
              </li>
            </ul>
          </div>
          
          {/* Optimization Service */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                  alt="Organisation et optimisation" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-dark mb-4">Optimisation & Organisation de votre Espace de Travail Digital</h2>
                <div className="elegant-divider ml-0"></div>
                <p className="text-lg md:text-xl font-medium text-gray-dark mt-4 italic">Un espace digital organisé = une entreprise efficace.</p>
                <p className="text-gray-dark mt-4">
                  Nous structurons vos outils (Drive, Notion, Trello, etc.) pour qu'ils deviennent de véritables accélérateurs de productivité.
                </p>
                
                <div className="mt-8 p-6 bg-beige-light rounded-lg border border-rose-powder/20">
                  <h4 className="font-playfair text-lg font-semibold mb-2">Exemple concret :</h4>
                  <p className="text-gray-dark">
                    Un photographe indépendant utilisait 4 outils dispersés pour son activité. En un mois, nous avons centralisé tout son flux de travail sur Notion. Résultat : +30 % d'efficacité, -50 % d'erreurs dans ses livrables.
                  </p>
                  <p className="text-gray-dark mt-4 italic">
                    "J'ai retrouvé de la clarté, de la structure, et même du plaisir à bosser. Je recommande à 200 % !" – Julien L.
                  </p>
                </div>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Création de to-do lists et suivi des tâches pour une meilleure productivité.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Mise en place d'outils et de méthodes d'organisation adaptés à vos besoins (Trello, Notion, Asana).</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Automatisation de certaines tâches répétitives pour gagner en efficacité.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Conseils en gestion du temps et des priorités pour une organisation optimisée.</span>
              </li>
            </ul>
          </div>
          
          {/* Automatization Service */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-dark mb-4">Création de Processus et Automatisations</h2>
                <div className="elegant-divider ml-0"></div>
                <p className="text-lg md:text-xl font-medium text-gray-dark mt-4 italic">Travaillez moins, mais mieux.</p>
                <p className="text-gray-dark mt-4">
                  Nous analysons vos routines pour les transformer en processus fluides, voire automatisés (e-mails, formulaires, inscriptions, rappels).
                </p>
                
                <div className="mt-8 p-6 bg-beige-light rounded-lg border border-rose-powder/20">
                  <h4 className="font-playfair text-lg font-semibold mb-2">Exemple concret :</h4>
                  <p className="text-gray-dark">
                    Une formatrice recevait manuellement chaque demande d'inscription. En automatisant son tunnel d'inscription avec Google Forms et Zapier, elle a gagné 5 heures par semaine.
                  </p>
                  <p className="text-gray-dark mt-4 italic">
                    "Une fois que tout a été automatisé, j'ai enfin eu du temps pour créer ma prochaine formation. Assist by M m'a littéralement fait gagner des semaines !" – Sophie R.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
                  alt="Automatisation et processus" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Analyse de vos routines et processus existants.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Création de workflows optimisés pour vos activités récurrentes.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Mise en place d'automatisations via des outils comme Zapier, IFTTT, ou Make.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Formations personnalisées pour utiliser efficacement vos nouveaux processus.</span>
              </li>
            </ul>
          </div>
          
          {/* Events organization */}
          <div className="mt-20">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-dark mb-4">Organisation d'Événements Privés et Professionnels</h2>
            <div className="elegant-divider ml-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <Card className="p-6 border-rose-powder/20 hover:shadow-md transition-all duration-300">
                <h3 className="font-playfair text-xl font-semibold mb-3">Événements privés</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Mariages et célebrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Anniversaires et fêtes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Réunions familiales</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-rose-powder/20 hover:shadow-md transition-all duration-300">
                <h3 className="font-playfair text-xl font-semibold mb-3">Événements professionnels</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Séminaires d'entreprise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Conférences et workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                    <span>Team building et événements internes</span>
                  </li>
                </ul>
              </Card>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Planification et coordination complète d'événements sur mesure.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Gestion des prestataires et logistique (salle, traiteur, animations, hébergements).</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Création du rétroplanning et suivi des deadlines.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="text-rose-powder mt-1 shrink-0" />
                <span>Présence le jour J pour assurer la bonne coordination et gérer les imprévus.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-rose-powder/10">
        <div className="section-container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-dark mb-4">Prêt(e) à vous libérer de la charge mentale ?</h2>
          <p className="text-gray-dark mb-8 text-lg">
            Contactez-moi dès aujourd'hui pour discuter de vos besoins et découvrir comment je peux vous aider à optimiser votre temps.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-rose-powder text-gray-dark font-medium py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors duration-300"
          >
            Prendre contact
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
