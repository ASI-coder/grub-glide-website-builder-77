
import { UtensilsCrossed, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold text-gray-800">FOODELLA</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/restaurants">
              <Button variant="ghost">Restaurants</Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
