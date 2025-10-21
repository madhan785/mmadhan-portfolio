
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Download, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';


const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    emailjs
    .send(
      'service_7pfqq3s',        // Replace with your actual Service ID
      'template_4foqc2i',       // Replace with your actual Template ID
      formData,                 // This must match your template variables
      'zSshVVabhtYuH_dlN'         // Replace with your Public Key (user ID)
    )
    .then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      },
      (error) => {
        console.error('Email send error:', error);
        alert('Failed to send message. Try again later.');
      }
    );
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skillCategories = {
    'Machine Learning & AI': {
      'Natural Language Processing': ['TensorFlow', 'Scikit-learn', 'Deep Learning'],
      'AI Platforms': ['Azure AI', 'Machine Learning']
    },
    'Data Analysis': {
      'Visualization Tools': ['Power BI', 'Tableau'],
      'Analysis Tools': ['Excel', 'Statistical Analysis', 'R'],
      'Data Processing': ['Pandas', 'NumPy']
    },
    'Programming Languages': ['Python', 'SQL']
  };

  const certifications = [
    {
      name: 'Microsoft Data Analyst Essentials',
      year: '2025',
      issuer: 'Microsoft'
    },
    {
      name: 'Microsoft Azure AI',
      year: '2025',
      issuer: 'Microsoft'
    },
    { 
      name: 'Github Essential Expert',
      year: '2025',
      issuer: 'Github' 
    },
    { name: 'Artificial Intelligence Intern',
      year: '2025',
      issuer: 'Codec Technologies'
    },
    { name: 'Machine Learning Intern',
      year: '2024',
      issuer: 'Intel CIIC'
    },
    {
      name: 'Infosys Gen AI',
      year: '2024',
      issuer: 'Infosys'
    }
  ];

  const projects = [
    {
      title: 'Fake News Detection using NLP',
      description: 'Developed a natural language processing model to detect fake news articles using advanced NLP techniques and machine learning algorithms.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Developed a machine learning model to segment customers based on purchasing behavior using Python and scikit-learn.',
      tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn']
    },
    {
      title: 'Sales Dashboard',
      description: 'Created an interactive Power BI dashboard for sales performance analysis with real-time data visualization.',
      tech: ['Power BI', 'SQL', 'Data Visualization']
    },
    { 
      title: 'AI Agent web Automation',
      description: 'The Ai Agent can automatically fill the google form using Selenium tool.',
      tech: ['Python', 'selenium', 'Fuzzy Wuzzy']
    },
    {
      title: 'Predictive Analytics Model',
      description: 'Built a predictive model to forecast business outcomes using statistical analysis and machine learning techniques.',
      tech: ['Python', 'TensorFlow', 'Statistical Analysis']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-100 via-white to-orange-100'}`}>
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Day Theme Animations */}
        {!isDark && (
          <>
            {/* Sun */}
            <div className="absolute top-10 right-20 w-20 h-20 bg-yellow-400 rounded-full shadow-lg animate-pulse">
              <div className="absolute inset-2 bg-yellow-300 rounded-full"></div>
            </div>
            
            {/* Clouds */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`cloud-${i}`}
                className="absolute bg-white rounded-full opacity-80"
                style={{
                  width: Math.random() * 80 + 60 + 'px',
                  height: Math.random() * 40 + 30 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 30 + 10 + '%',
                  animation: `float ${Math.random() * 20 + 15}s linear infinite`,
                  animationDelay: Math.random() * 10 + 's'
                }}
              />
            ))}
          </>
        )}

        {/* Night Theme Animations */}
        {isDark && (
          <>
            {/* Moon */}
            <div className="absolute top-10 right-20 w-16 h-16 bg-gray-200 rounded-full shadow-lg">
              <div className="absolute top-2 left-2 w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="absolute top-6 left-8 w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            
            {/* Stars */}
            {[...Array(30)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 3 + 's',
                  animationDuration: (Math.random() * 2 + 1) + 's'
                }}
              />
            ))}
          </>
        )}

        {/* Floating particles */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50/30 via-white/10 to-purple-50/30'}`}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse ${isDark ? 'bg-blue-400/10' : 'bg-blue-300/20'}`}
              style={{
                width: Math.random() * 60 + 30 + 'px',
                height: Math.random() * 60 + 30 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: (Math.random() * 3 + 2) + 's'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80 border-gray-700' : 'bg-white/90 border-gray-300'} border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Madhan M
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-colors font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={isDark ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-gray-900'}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white/95 border-gray-300'} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'education', 'skills', 'projects', 'certifications', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base font-medium capitalize ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-gray-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Madhan M</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
              Data Analyst & AI Enthusiast
            </p>
            <p className={`text-lg mb-12 max-w-2xl mx-auto font-medium ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              Final year B.Tech AIDS student passionate about transforming data into actionable insights and exploring the frontiers of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className={`px-8 py-3 text-lg font-medium ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-400 text-gray-800 hover:bg-gray-100'}`}
                onClick={() => window.open('https://drive.google.com/file/d/1TcmX3NK82pSWeGaRt5A-ZFwwp-RUPcQ_/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                About Me
              </h2>
              <p className={`text-lg mb-6 leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                I'm a passionate data analyst and AI enthusiast currently pursuing my B.Tech in Artificial Intelligence and Data Science at Arunai Engineering College. With a strong academic record (GPA: 8.7), I'm dedicated to leveraging data-driven insights to solve complex problems and drive innovation.
              </p>
              <p className={`text-lg mb-6 leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                My journey in the field of data science has been marked by continuous learning and hands-on experience with cutting-edge technologies. I'm particularly interested in machine learning, statistical analysis, and the practical applications of AI in solving real-world challenges.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://github.com/madhan785', '_blank')}
                  className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-400 text-gray-800 hover:bg-gray-100'}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.linkedin.com/in/madhan-m-3522482a6/', '_blank')}
                  className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-400 text-gray-800 hover:bg-gray-100'}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/public/IMG_20250315_104630.jpg"
                  alt="Madhan M"
                  className="relative w-80 h-80 rounded-full object-cover shadow-2xl animate-scale-in"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-white/70'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <div className="flex justify-center">
            <Card className={`max-w-2xl w-full ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-300'}`}>
              <CardHeader>
                <CardTitle className={`text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Bachelor of Technology
                </CardTitle>
                <CardDescription className={`text-xl ${isDark ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>
                  Artificial Intelligence and Data Science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className={`font-semibold text-lg ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                      Arunai Engineering College
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'} font-medium`}>
                      Final Year Student
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-3 py-1 font-semibold">
                      GPA: 8.7/10
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([categoryName, categoryData], categoryIndex) => (
              <div key={categoryName} className="space-y-6">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {categoryName}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {typeof categoryData === 'object' && !Array.isArray(categoryData) ? (
                    Object.entries(categoryData).map(([subCategory, skills], subIndex) => (
                      <Card
                        key={subCategory}
                        className={`transition-all duration-300 hover:scale-105 ${
                          isDark ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white/90 border-gray-300 hover:bg-gray-50'
                        } shadow-lg hover:shadow-xl`}
                        style={{ animationDelay: `${(categoryIndex * 3 + subIndex) * 0.1}s` }}
                      >
                        <CardHeader className="pb-3">
                          <CardTitle className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {subCategory}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <Badge key={skill} variant="outline" className={`${isDark ? 'border-gray-600 text-gray-300' : 'border-gray-400 text-gray-700'} font-medium`}>
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4">
                      {(categoryData as string[]).map((skill, index) => (
                        <div
                          key={skill}
                          className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                            isDark ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white/90 hover:bg-gray-50 border border-gray-300'
                          } shadow-lg hover:shadow-xl`}
                          style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1}s` }}
                        >
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {skill}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-white/70'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className={`hover:scale-105 transition-transform duration-300 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-300'} shadow-lg hover:shadow-xl`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`${isDark ? 'text-gray-400' : 'text-gray-700'} font-medium`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className={`${isDark ? 'border-gray-600 text-gray-300' : 'border-gray-400 text-gray-700'} font-medium`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className={`text-center hover:scale-105 transition-transform duration-300 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-300'} shadow-lg hover:shadow-xl`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {cert.name}
                  </CardTitle>
                  <CardDescription className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-700'} font-medium`}>
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-lg px-3 py-1 font-semibold">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800/50' : 'bg-white/70'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
              <p className={`text-lg mb-8 font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                I'm always interested in discussing data science opportunities, collaborating on projects, or simply connecting with fellow enthusiasts in the field.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <a href="mailto:madhanmahe2005@gmail.com" className={`text-lg hover:underline font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    madhanmahe2005@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <a href="https://github.com/madhan785" target="_blank" rel="noopener noreferrer" className={`text-lg hover:underline font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    github.com/madhan785
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <a href="https://www.linkedin.com/in/madhan-m-3522482a6/" target="_blank" rel="noopener noreferrer" className={`text-lg hover:underline font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-300'} shadow-lg`}>
                <CardHeader>
                  <CardTitle className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className={isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className={isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      className={isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}
                    />
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white/90 border-gray-300'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            © 2025 Madhan M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
