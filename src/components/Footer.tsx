import { Linkedin, Github, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/abhisek-chatterjee-11400b286/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Abhisek-99',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:abhisek4901@gmmai.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      icon: PhoneCall,
      href: 'tel:+919883054901',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
              © {currentYear} Made 
              by <b className="text-white">Abhisek Chatterjee</b>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${link.color}`}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
