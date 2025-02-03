"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Package2, Zap, Shield, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Package2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">OrderPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <Link href="/download">
                <Button>Download App</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Streamline Your <span className="text-primary">Order Processing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Automate your customer orders with our powerful extension. Save time, reduce errors, and delight your customers.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">Process orders instantly with our optimized workflow system.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Bank-grade security for all your order processing needs.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Package2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
              <p className="text-muted-foreground">Get insights into your order patterns and customer behavior.</p>
            </Card>
          </motion.div>
        </div>
      </section>
      <section id="pricing" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-muted-foreground">Choose the perfect plan for your business</p>
              </motion.div>
              <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                name: "Local System",
                price: "$29",
                features: ["500 orders/month", "30 Days Retention", "Email Support","Local System"],
              },
              {
                name: "Local System+",
                price: "$79",
                features: ["2,500 orders/month", "60 Days Retention ", "Priority Support", "API Access"],
              },
              {
                name: "Cloud Service +",
                price: "$199",
                features: ["All Features of CS","Unlimited Orders", "90 Days Retention", "24/7 Support"],
                popular: true,
              },
              {
                name: "Cloud Service Premium",
                price: "$299",
                features: ["All Features of CS+","Unlimited Orders","1 yr+ Retention", "Dedicated Account Manager"],
              },
              {
                name: "Cloud Service",
                price: "$149",
                features: ["Data in Cloud", "90 Days Retention", "Automatic Backups"],
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="p-8 h-full border border-gray-300 transition-all transform hover:scale-105 hover:border-black hover:border-2">
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          </div>
      </section>
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We're here to help. Contact our support team anytime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>support@ordr.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Dubai Lane, Dubai Street, Dubai Main Road, India</span>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-md border border-input bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-2 rounded-md border border-input bg-background"
                    rows={4}
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>© 2024 OrderPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}