
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Delicious Food,
              <br />
              <span className="text-orange-500">Delivered Fast</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Order from your favorite restaurants and enjoy contactless delivery. Fresh food, delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
              alt="Delicious Food"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
