
import { Navbar } from "@/components/Navbar";
import { RestaurantList } from "@/components/RestaurantList";
import { Footer } from "@/components/Footer";

const Restaurants = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8">Our Restaurants</h1>
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
