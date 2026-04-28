import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram, Send, Star } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { contactContent } = useAdmin();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `*New Contact Message - Planet Life*%0A%0A` +
                    `*Name:* ${data.firstName} ${data.lastName}%0A` +
                    `*Email:* ${data.email}%0A` +
                    `*Phone:* ${data.phone}%0A` +
                    `*Destination:* ${data.destination}%0A` +
                    `*Message:* ${data.message}`;

    const whatsappUrl = `https://wa.me/919994553297?text=${message}`;

    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Sending your message to our team.",
    });

    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-red-600 text-black pt-24 mobile:pt-28 md:pt-32 pb-10 mobile:pb-14 md:pb-20 relative overflow-hidden shadow-xl">
        <div className="container mx-auto px-3 mobile:px-4 text-center relative z-10">
          <ScrollReveal width="100%">
            <h1 className="text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 mobile:mb-3 md:mb-4 uppercase tracking-tight">
              {contactContent.heroTitle}
            </h1>
            <p className="text-sm mobile:text-base sm:text-lg md:text-2xl text-black/80 max-w-2xl mx-auto font-bold">
              {contactContent.heroSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 mobile:py-16 md:py-24 relative">
        <div className="container mx-auto px-3 mobile:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mobile:gap-12 md:gap-16">
            {/* Contact Information */}
            <div>
              <ScrollReveal>
                <h2 className="text-xl mobile:text-2xl md:text-3xl font-extrabold mb-3 mobile:mb-4 md:mb-6 text-black uppercase tracking-tight">
                  {contactContent.sectionTitle}
                </h2>
                <p className="text-gray-600 mb-6 mobile:mb-8 md:mb-12 leading-relaxed text-sm mobile:text-base md:text-lg font-medium">
                  {contactContent.sectionText}
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: contactContent.phone,
                    subtext: "Available 24/7 for your queries",
                    link: `tel:${contactContent.phone}`,
                    color: "text-red-600"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: contactContent.email,
                    subtext: "We'll respond within 24 hours",
                    link: `mailto:${contactContent.email}`,
                    color: "text-red-600"
                  },
                  {
                    icon: Instagram,
                    title: "Instagram",
                    content: contactContent.instagram,
                    subtext: "Follow us for travel inspiration",
                    link: `https://instagram.com/${contactContent.instagram.replace('@', '')}`,
                    color: "text-red-600"
                  }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg bg-gray-50/50 rounded-2xl">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-6">
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
                            <item.icon className={`h-7 w-7 ${item.color}`} />
                          </div>
                          <div>
                            <h3 className="font-extrabold mb-1 text-black uppercase text-sm tracking-wider">{item.title}</h3>
                            <a
                              href={item.link}
                              target={item.title === "Instagram" ? "_blank" : undefined}
                              rel={item.title === "Instagram" ? "noopener noreferrer" : undefined}
                              className="text-lg text-black hover:text-red-600 transition-colors break-all font-bold"
                            >
                              {item.content}
                            </a>
                            <p className="text-sm text-gray-500 mt-1 font-medium">
                              {item.subtext}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.3}>
                  <Card className="bg-black text-white shadow-2xl rounded-2xl border-none">
                    <CardContent className="pt-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                          <Star className="h-7 w-7 text-red-600 fill-red-600" />
                        </div>
                        <div>
                          <h3 className="font-extrabold uppercase tracking-widest text-sm mb-2">Google Rating</h3>
                          <div className="flex items-center mb-2">
                            <span className="text-3xl font-extrabold mr-3">4.9</span>
                            <div className="flex text-red-600 gap-1">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div>
                          </div>
                          <p className="text-sm font-bold opacity-70">
                            Trusted by thousands of travelers globally.
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
                <Card className="shadow-2xl border-none bg-white rounded-3xl p-4">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-3xl text-black font-extrabold uppercase tracking-tight">Express Inquiry</CardTitle>
                    <p className="text-gray-500 font-bold">Fill in your details for a quick response via WhatsApp.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-xs font-extrabold uppercase text-red-600">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="John"
                            className="bg-gray-50 border-none h-12 rounded-xl focus:ring-red-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-xs font-extrabold uppercase text-red-600">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="bg-gray-50 border-none h-12 rounded-xl focus:ring-red-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-extrabold uppercase text-red-600">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john.doe@example.com"
                          className="bg-gray-50 border-none h-12 rounded-xl focus:ring-red-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-extrabold uppercase text-red-600">WhatsApp Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 99945 58497"
                          className="bg-gray-50 border-none h-12 rounded-xl focus:ring-red-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="destination" className="text-xs font-extrabold uppercase text-red-600">Place of interest</Label>
                        <Input
                          id="destination"
                          name="destination"
                          placeholder="e.g., Bali, Dubai, Thailand"
                          className="bg-gray-50 border-none h-12 rounded-xl focus:ring-red-600"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-extrabold uppercase text-red-600">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Your travel plans..."
                          rows={4}
                          className="bg-gray-50 border-none rounded-2xl focus:ring-red-600"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-black text-white font-extrabold py-8 rounded-2xl uppercase tracking-widest transition-all shadow-xl" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Processing..."
                        ) : (
                          <>
                            Submit via WhatsApp
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
