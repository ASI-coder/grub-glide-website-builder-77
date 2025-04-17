
import { Button } from "./ui/button";

const restaurants = [
  {
    id: 1,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Burger Beast",
    cuisine: "American",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export const RestaurantList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
            <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center justify-between">
              <span className="text-orange-500">★ {restaurant.rating}</span>
              <Button className="bg-orange-500 hover:bg-orange-600">
                View Menu
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
