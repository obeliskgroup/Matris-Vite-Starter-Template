
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're open and ready to serve you an exceptional dining experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300 animate-fade-in">
            <CardContent className="p-8 text-center">
              <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300">
                123 Culinary Street<br />
                Downtown District<br />
                New York, NY 10001
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
              <p className="text-gray-300">
                Phone: (555) 123-4567<br />
                Email: info@savoria.com<br />
                Reservations: (555) 123-4568
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-gray-300">
                Mon-Thu: 5:00 PM - 10:00 PM<br />
                Fri-Sat: 5:00 PM - 11:00 PM<br />
                Sun: 4:00 PM - 9:00 PM
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            <Phone className="w-5 h-5 mr-2" />
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
