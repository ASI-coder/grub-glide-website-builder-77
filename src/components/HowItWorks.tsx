
import { Search, Clock, Bike } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Food",
    description: "Browse through hundreds of restaurants and dishes"
  },
  {
    icon: Clock,
    title: "Quick Preparation",
    description: "Our partners prepare your food with care"
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Enjoy your meal delivered right to your door"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
