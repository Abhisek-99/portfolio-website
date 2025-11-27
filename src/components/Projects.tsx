import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'React E-Commerce Application',
      description: 'A full-featured e-commerce platform built with React.js, featuring user authentication, shopping cart, payment integration, and responsive design.',
      techStack: ['React.js', 'JavaScript', 'CSS', 'Local Storage'],
      liveUrl: 'e-commerce-website-snowy-one.vercel.app',
      githubUrl: 'https://github.com/Abhisek-99/E-commerce-Website.git'
    },
    {
      title: 'WhatsApp Clone Web App',
      description: 'A real-time messaging application that replicates WhatsApp\'s core functionality with modern web technologies.',
      techStack: ['React.js', 'CSS', 'JavaScript', 'Web APIs'],
      liveUrl: '/',
      githubUrl: '/'
    },
    {
      title: 'Google-like Search Page',
      description: 'A responsive search engine interface inspired by Google, featuring clean design and smooth user interactions.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '/',
      githubUrl: '/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card-gradient border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
