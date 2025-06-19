
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2010, Savoria has been a cornerstone of culinary excellence in the heart of the city. 
              Our passion for creating memorable dining experiences drives us to source the finest ingredients 
              and craft each dish with meticulous attention to detail.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Led by Chef Maria Rodriguez, our kitchen team brings together traditional techniques with modern 
              innovation, creating a menu that celebrates both heritage and creativity. Every meal at Savoria 
              is designed to be an unforgettable journey of flavors.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600">13+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Chef's Choice</div>
                <div className="text-sm">Daily specials available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
