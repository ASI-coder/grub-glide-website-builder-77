
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
import { Clock, MapPin, Check, X } from "lucide-react";

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      orderNumber: "#12345",
      customer: "John Doe",
      address: "123 Main St, City",
      status: "Pending",
      time: "10:30 AM",
    },
    {
      id: 2,
      orderNumber: "#12346",
      customer: "Jane Smith",
      address: "456 Oak Ave, City",
      status: "In Progress",
      time: "10:45 AM",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Delivery Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your deliveries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Pending Deliveries</h3>
            <p className="text-3xl font-bold text-orange-500">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">In Progress</h3>
            <p className="text-3xl font-bold text-blue-500">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Completed Today</h3>
            <p className="text-3xl font-bold text-green-500">8</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Deliveries</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell className="font-medium">
                    {delivery.orderNumber}
                  </TableCell>
                  <TableCell>{delivery.customer}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      {delivery.address}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      {delivery.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        delivery.status === "Pending"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-green-100"
                    >
                      <Check className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-red-100"
                    >
                      <X className="h-4 w-4 text-red-500" />
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

export default DeliveryDashboard;
