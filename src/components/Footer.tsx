
import { UtensilsCrossed, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">FoodSwift</span>
            </div>
            <p className="text-gray-400">
              Delicious food delivered to your doorstep
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">Restaurants</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street</li>
              <li>Foodville, FD 12345</li>
              <li>contact@foodswift.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FoodSwift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
