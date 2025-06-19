
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 hover:scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-amber-300 text-6xl md:text-8xl">Savoria</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Experience culinary excellence where every dish tells a story of passion, tradition, and innovative flavors
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            View Our Menu
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
