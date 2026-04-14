import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { contactContent } = useAdmin();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-[#022c22] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {contactContent.heroTitle}
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light">
              {contactContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-serif font-bold mb-6 text-[#022c22]">
                  {contactContent.sectionTitle}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {contactContent.sectionText}
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: contactContent.phone,
                    subtext: "Available 24/7 for your queries",
                    link: `tel:${contactContent.phone}`,
                    color: "text-[#d4af37]"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: contactContent.email,
                    subtext: "We'll respond within 24 hours",
                    link: `mailto:${contactContent.email}`,
                    color: "text-[#d4af37]"
                  },
                  {
                    icon: Instagram,
                    title: "Instagram",
                    content: contactContent.instagram,
                    subtext: "Follow us for travel inspiration",
                    link: `https://instagram.com/${contactContent.instagram.replace('@', '')}`,
                    color: "text-[#d4af37]"
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-x-1 border-none shadow-md bg-white">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                            <item.icon className={`h-6 w-6 ${item.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 text-gray-900">{item.title}</h3>
                            <a
                              href={item.link}
                              target={item.title === "Instagram" ? "_blank" : undefined}
                              rel={item.title === "Instagram" ? "noopener noreferrer" : undefined}
                              className="text-gray-600 hover:text-[#d4af37] transition-colors break-all font-medium"
                            >
                              {item.content}
                            </a>
                            <p className="text-sm text-gray-400 mt-1">
                              {item.subtext}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.3}>
                  <Card className="bg-[#022c22] text-white shadow-xl transform hover:scale-105 transition-transform duration-300 border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Google Rating</h3>
                          <div className="flex items-center mb-1">
                            <span className="text-2xl font-bold mr-2">4.9</span>
                            <span className="text-lg">⭐⭐⭐⭐⭐</span>
                          </div>
                          <p className="text-sm opacity-90">
                            Trusted by thousands of travelers
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ScrollReveal delay={0.2}>
                <Card className="shadow-2xl border-none bg-white rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#022c22]">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-gray-600">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                            className="focus:ring-[#d4af37] border-gray-200"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-gray-600">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="focus:ring-[#d4af37] border-gray-200"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-600">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john.doe@example.com"
                          className="focus:ring-[#d4af37] border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-600">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 99945 58497"
                          className="focus:ring-[#d4af37] border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination" className="text-gray-600">Interested Destination</Label>
                        <Input
                          id="destination"
                          name="destination"
                          placeholder="e.g., Bali, Dubai, Thailand"
                          className="focus:ring-[#d4af37] border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-600">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Tell us about your travel plans, preferred dates, number of travelers, etc."
                          rows={5}
                          className="focus:ring-[#d4af37] border-gray-200"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-white shadow-lg hover:shadow-xl transition-all" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
