
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const featuredItems = [
  {
    name: "Gourmet Burger",
    restaurant: "Burger House",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Sushi Platter",
    restaurant: "Sushi Master",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=500"
  }
];

export const FeaturedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.restaurant}</p>
                <div className="flex items-center text-orange-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1">{item.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
