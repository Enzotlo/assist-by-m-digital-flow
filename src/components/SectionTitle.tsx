
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12",
      {
        'text-left': alignment === 'left',
        'text-center': alignment === 'center',
        'text-right': alignment === 'right'
      },
      className
    )}>
      <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-dark">{title}</h2>
      
      <div className={cn(
        "elegant-divider",
        {
          'mx-0': alignment === 'left',
          'mx-auto': alignment === 'center',
          'ml-auto mr-0': alignment === 'right'
        }
      )} />
      
      {subtitle && <p className="text-xl text-gray-dark mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
