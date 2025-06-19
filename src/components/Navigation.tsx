
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-800">Savoria</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-200">
              <Phone className="w-4 h-4 mr-2" />
              Reserve Table
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200">Home</a>
              <a href="#menu" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200">Menu</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 transition-colors duration-200">Contact</a>
              <Button className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Reserve Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
