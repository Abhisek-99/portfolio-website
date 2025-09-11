import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Euphoria GenX',
      duration: 'Recent Experience',
      type: 'internship',
      description: 'Gained hands-on experience in modern web development practices, working on real projects and learning industry standards.',
      icon: Briefcase,
      skills: ['Web Development', 'Team Collaboration', 'Project Management']
    },
    {
      title: 'In-house Training',
      company: 'Network Security & Secure Coding',
      duration: 'Professional Development',
      type: 'training',
      description: 'Comprehensive training program covering network security fundamentals and secure coding practices for web applications.',
      icon: GraduationCap,
      skills: ['Network Security', 'Secure Coding', 'Cybersecurity']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-accent-gradient bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and continuous learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/30" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  
                  <Card className="ml-16 bg-card-gradient border-border/50 shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <experience.icon className="h-6 w-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold">{experience.title}</h3>
                              <p className="text-primary font-medium">{experience.company}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                                {experience.duration}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {experience.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;