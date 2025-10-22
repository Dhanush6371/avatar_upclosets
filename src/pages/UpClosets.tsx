import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  Home,
  DoorOpen,
  Shirt,
  Wrench,
  UtensilsCrossed,
  Briefcase,
  Car,
  Star,
} from "lucide-react";

const UpClosets = () => {
  const [isVisible, setIsVisible] = useState(false);

  useState(() => {
    setIsVisible(true);
  });

  const customSpaces = [
    { icon: Home, title: "Walk-in Closets", desc: "Spacious luxury storage" },
    { icon: DoorOpen, title: "Reach-in Closets", desc: "Efficient organization" },
    { icon: Shirt, title: "Laundry Rooms", desc: "Functional & stylish" },
    { icon: Wrench, title: "Hobby Rooms", desc: "Creative workspace" },
    { icon: UtensilsCrossed, title: "Kitchen Pantries", desc: "Organized cooking space" },
    { icon: Briefcase, title: "Office Rooms", desc: "Professional workspace" },
    { icon: Car, title: "Garages", desc: "Smart vehicle storage" },
    { icon: Home, title: "Mud Rooms", desc: "Entryway organization" },
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$1,265",
      features: [
        "Custom design consultation",
        "Basic shelving system",
        "Standard installation",
        "1-year warranty",
        "Single closet space",
      ],
    },
    {
      name: "Deluxe",
      price: "$1,985",
      features: [
        "Premium design consultation",
        "Enhanced shelving & drawers",
        "Professional installation",
        "3-year warranty",
        "Multiple accessories",
        "LED lighting options",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$3,350",
      features: [
        "Luxury design service",
        "Premium materials",
        "Expert installation",
        "5-year warranty",
        "Custom accessories",
        "Integrated lighting",
        "Hardware upgrades",
      ],
    },
    {
      name: "Elite",
      price: "$8,025",
      features: [
        "Complete luxury package",
        "Designer materials",
        "White-glove installation",
        "Lifetime warranty",
        "Fully custom features",
        "Smart home integration",
        "Premium hardware",
        "Ongoing support",
      ],
    },
  ];

  const values = [
    {
      title: "Stress-Free Service",
      desc: "We handle every detail from design to installation, making the process effortless for you.",
    },
    {
      title: "Empathetic Approach",
      desc: "We understand your unique needs and create solutions that truly work for your lifestyle.",
    },
    {
      title: "Affordable Elegance",
      desc: "Premium quality storage solutions at prices that respect your budget.",
    },
    {
      title: "Professional Installation",
      desc: "Expert craftsmen ensure perfect execution of your custom design.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">
              UpClosets of Nova
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["Services", "Pricing", "Gallery", "About", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
            Maximize Your Space,
            <span className="block text-slate-700">Simplify Your Life</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-600">
            Custom closet and storage solutions that bring style and function to
            every room in your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Solutions
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Design
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Custom Spaces We Create
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform every area of your home with personalized organization
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customSpaces.map((space, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <space.icon className="h-8 w-8 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">
                    {space.title}
                  </h3>
                  <p className="text-sm text-slate-600">{space.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Why Choose UpClosets
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Local, minority-owned business serving Northern Virginia with
              pride
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  100%
                </div>
                <p className="text-slate-600">Custom Design</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  500+
                </div>
                <p className="text-slate-600">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  5 Year
                </div>
                <p className="text-slate-600">Warranty Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Investment Levels
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  tier.popular ? "border-2 border-slate-900" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold mb-6 text-slate-900">
                    {tier.price}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Our Work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See the transformations we've created for homeowners like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-slate-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <Star className="h-12 w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Get Your Free Design Consultation
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Let's discuss how we can transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <p className="text-slate-600">+1 (703) 783-9581</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <p className="text-slate-600">Lbotla@upclosets.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Service Area</p>
                      <p className="text-slate-600">Northern Virginia Region</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-slate-50 border-slate-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-slate-900">
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Free in-home consultation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>3D design visualization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>Professional installation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  Request Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" required />
                    <Input placeholder="Last Name" required />
                  </div>
                  <Input placeholder="Email Address" type="email" required />
                  <Input placeholder="Phone Number" type="tel" required />
                  <Input placeholder="City, State" />
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                  <Button className="w-full" size="lg">
                    Schedule Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">UpClosets of Nova</h3>
              <p className="text-slate-400">
                Custom closet and storage solutions for Northern Virginia homes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Walk-in Closets</li>
                <li>Reach-in Closets</li>
                <li>Kitchen Pantries</li>
                <li>Garage Storage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Our Process</li>
                <li>Gallery</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>Northern Virginia</p>
                <p>+1 (703) 783-9581</p>
                <p>Lbotla@upclosets.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 UpClosets of Nova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UpClosets;
