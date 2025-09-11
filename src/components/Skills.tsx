import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ],
      color: 'text-primary'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'PHP', level: 70 },
        { name: 'MySQL', level: 75 },
      ],
      color: 'text-secondary'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'MS Office', level: 90 },
      ],
      color: 'text-accent'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-accent-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card-gradient border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto p-3 bg-muted rounded-lg w-fit mb-4">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-accent-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;