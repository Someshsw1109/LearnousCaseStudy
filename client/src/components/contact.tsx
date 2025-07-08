import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-burgundy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-serif font-bold text-gold mb-4">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our collections or need styling advice? We're here to help you find the perfect handbag
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-gold mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-gold text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">info@morelq.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-gold text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-gold text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">
                    123 Fashion Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-xl font-serif font-bold text-gold mb-4">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gold hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gold hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gold hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gold hover:text-white transition-colors"
                >
                  <BookmarkPlus size={24} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-gold mb-6">
              Send Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold"
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-gold text-burgundy px-6 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
