import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const { products, loading } = useProducts();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const getHeroClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border py-16 px-6';
      case '3':
        return 'bg-theme3-gradient py-20 px-6 text-white';
      default:
        return 'bg-gradient-to-b from-background to-secondary/20 py-16 px-6';
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-3xl md:text-4xl font-serif font-bold text-theme2-text mb-6';
      case '3':
        return 'text-3xl md:text-4xl font-display text-white mb-6';
      default:
        return 'text-3xl md:text-4xl font-sans font-bold text-foreground mb-6';
    }
  };

  const getCardClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface border-theme2-border';
      case '3':
        return 'bg-theme3-card border-theme3-border';
      default:
        return 'bg-card border-border';
    }
  };

  const getSectionClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'bg-theme2-surface';
      case '3':
        return 'bg-theme3-bg';
      default:
        return 'bg-secondary/20';
    }
  };

  const getTextClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text';
      case '3':
        return 'text-theme3-text';
      default:
        return 'text-foreground';
    }
  };

  const getMutedTextClasses = () => {
    switch (currentTheme) {
      case '2':
        return 'text-theme2-text';
      case '3':
        return 'text-theme3-muted';
      default:
        return 'text-muted-foreground';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Message Sent!', {
      description: 'Thank you for your message. We\'ll get back to you soon.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@themeflex.com',
      link: 'mailto:hello@themeflex.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Design Street, Creative City, CC 12345',
      link: null
    }
  ];

  const relatedProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={getHeroClasses()}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={getTitleClasses()}>
              Get in Touch
            </h1>
            <p className={`text-lg ${getMutedTextClasses()} mb-12 max-w-2xl mx-auto`}>
              Have a question, suggestion, or just want to say hello? 
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className={getCardClasses()}>
              <CardHeader>
                <CardTitle className={`${
                  currentTheme === '2' ? 'font-serif' :
                  currentTheme === '3' ? 'font-display' :
                  ''
                } ${getTextClasses()}`}>
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${getTextClasses()}`}>
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${getTextClasses()}`}>
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${getTextClasses()}`}>
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${getTextClasses()}`}>
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us more..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className={getCardClasses()}>
                <CardHeader>
                  <CardTitle className={`${
                    currentTheme === '2' ? 'font-serif' :
                    currentTheme === '3' ? 'font-display' :
                    ''
                  } ${getTextClasses()}`}>
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          currentTheme === '2' ? 'bg-theme2-primary' :
                          currentTheme === '3' ? 'bg-theme3-primary' :
                          'bg-primary'
                        }`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className={`font-medium ${getTextClasses()}`}>{info.label}</div>
                          <div className={getMutedTextClasses()}>{info.value}</div>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        className="block hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className={getCardClasses()}>
                <CardHeader>
                  <CardTitle className={`${
                    currentTheme === '2' ? 'font-serif' :
                    currentTheme === '3' ? 'font-display' :
                    ''
                  } ${getTextClasses()}`}>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`space-y-2 text-sm ${getTextClasses()}`}>
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className={getMutedTextClasses()}>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className={getMutedTextClasses()}>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className={getMutedTextClasses()}>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {!loading && relatedProducts.length > 0 && (
        <section className={`py-16 ${getSectionClasses()}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${getTextClasses()} ${
                currentTheme === '2' ? 'font-serif' :
                currentTheme === '3' ? 'font-display' :
                ''
              }`}>
                While You're Here
              </h2>
              <p className={`${getMutedTextClasses()} max-w-2xl mx-auto`}>
                Check out some of our popular products. Maybe you'll find something you love!
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact;