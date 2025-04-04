
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rose-powder/20 text-rose-powder mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-3 text-center text-gray-dark">{title}</h3>
      <p className="text-gray-dark text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
