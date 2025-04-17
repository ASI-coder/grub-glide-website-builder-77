
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Plus } from "lucide-react";

const RestaurantAdmin = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 12.99, category: "Pizza" },
    { id: 2, name: "Chicken Wings", price: 8.99, category: "Appetizers" },
    { id: 3, name: "Caesar Salad", price: 6.99, category: "Salads" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="mr-2" />
            Add New Item
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search menu items..."
              className="max-w-sm"
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default RestaurantAdmin;
