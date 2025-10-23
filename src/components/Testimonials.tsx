import React from 'react';

const testimonials = [
  {
    quote: "Innoaivators transformed our business with their cutting-edge AI solutions. Their team is professional, knowledgeable, and dedicated to delivering results.",
    name: "John Doe",
    title: "CEO, Tech Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The mobile app developed by Innoaivators has been a game-changer for us. It's intuitive, fast, and has significantly improved user engagement.",
    name: "Jane Smith",
    title: "Marketing Manager, App Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "We were impressed by the seamless IoT integration provided by Innoaivators. Their expertise and support have been invaluable.",
    name: "Peter Jones",
    title: "COO, Smart Devices Inc.",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary-silver mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
