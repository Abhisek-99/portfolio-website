import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, education, and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a dedicated BCA student with a passion for creating innovative web solutions. 
              My journey in web development started with curiosity and has evolved into a deep 
              love for crafting beautiful, functional applications that solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Currently pursuing my Bachelor's in Computer Applications, I'm always eager to 
              learn new technologies and stay updated with the latest trends in web development. 
              I believe in writing clean, maintainable code and creating user experiences that 
              truly matter.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <span className="font-medium">Goal-Oriented</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Passionate</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <Card className="bg-card-gradient border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Computer Applications</h4>
                    <p className="text-muted-foreground">Currently Pursuing</p>
                    <p className="text-sm text-foreground/70 mt-2">
                      Focusing on software development, database management, and modern web technologies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-card-gradient border-border/50 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Interests & Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Open Source', 'Tech Blogs', 'Problem Solving'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;