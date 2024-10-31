"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DigitalX</h3>
            <p className="text-white/80 mb-4">
              Transforming ideas into exceptional digital experiences. We're passionate about creating solutions that drive success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#blog" className="text-white/80 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white/80" />
                <span className="text-white/80">123 Innovation Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80" />
                <span className="text-white/80">hello@digitalx.com</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} DigitalX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}