"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCar, FaClock, FaEuroSign, FaUser, FaToggleOn, FaToggleOff, FaMapMarkerAlt } from "react-icons/fa";

interface DriverBooking {
  id: string;
  pickupAddress: string;
  dropoffAddress: string;
  status: string;
  estimatedPrice: number;
  pickupTime: string;
  customerName: string;
  customerPhone: string;
}

export default function DriverDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState<DriverBooking[]>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [earnings, setEarnings] = useState({
    today: 0,
    week: 0,
    month: 0,
    total: 0
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchDriverData();
    }
  }, [session]);

  const fetchDriverData = async () => {
    try {
      // Fetch driver's bookings
      const bookingsResponse = await fetch(`/api/driver/bookings?driverId=${session?.user?.id}`);
      const bookingsData = await bookingsResponse.json();
      setBookings(bookingsData);

      // Fetch driver's earnings
      const earningsResponse = await fetch(`/api/driver/earnings?driverId=${session?.user?.id}`);
      const earningsData = await earningsResponse.json();
      setEarnings(earningsData);
    } catch (error) {
      console.error("Error fetching driver data:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleAvailability = async () => {
    try {
      const response = await fetch("/api/driver/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driverId: session?.user?.id,
          isAvailable: !isAvailable,
        }),
      });

      if (response.ok) {
        setIsAvailable(!isAvailable);
      }
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  const acceptBooking = async (bookingId: string) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}/accept`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driverId: session?.user?.id,
        }),
      });

      if (response.ok) {
        fetchDriverData(); // Refresh data
      }
    } catch (error) {
      console.error("Error accepting booking:", error);
    }
  };

  const updateBookingStatus = async (bookingId: string, status: string) => {
    try {
      const response = await fetch(`/api/bookings/${bookingId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchDriverData(); // Refresh data
      }
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const activeBookings = bookings.filter(b => b.status !== "COMPLETED" && b.status !== "CANCELLED");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold">Driver Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span>Welcome, {session.user?.name}</span>
              <button
                onClick={toggleAvailability}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isAvailable 
                    ? "bg-green-500 hover:bg-green-400" 
                    : "bg-red-500 hover:bg-red-400"
                }`}
              >
                {isAvailable ? <FaToggleOn /> : <FaToggleOff />}
                <span>{isAvailable ? "Available" : "Unavailable"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaCar className="text-yellow-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Today's Rides</p>
                <p className="text-2xl font-bold">{activeBookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaEuroSign className="text-green-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Today's Earnings</p>
                <p className="text-2xl font-bold">€{earnings.today.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaClock className="text-blue-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">This Week</p>
                <p className="text-2xl font-bold">€{earnings.week.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaUser className="text-purple-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Total Earnings</p>
                <p className="text-2xl font-bold">€{earnings.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <h2 className="text-xl font-bold mb-6">Active Bookings</h2>

          {activeBookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No active bookings. Stay available to receive new rides!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeBookings.map((booking) => (
                <div key={booking.id} className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <FaMapMarkerAlt className="text-yellow-500" />
                        <div>
                          <p className="font-medium">{booking.pickupAddress}</p>
                          <p className="text-gray-400 text-sm">→ {booking.dropoffAddress}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>€{booking.estimatedPrice}</span>
                        <span>{new Date(booking.pickupTime).toLocaleDateString()}</span>
                        <span>Customer: {booking.customerName}</span>
                        <span>Phone: {booking.customerPhone}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {booking.status === "PENDING" && (
                          <button
                            onClick={() => acceptBooking(booking.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-400"
                          >
                            Accept Ride
                          </button>
                        )}
                        
                        {booking.status === "ASSIGNED" && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, "PICKED_UP")}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-400"
                          >
                            Picked Up
                          </button>
                        )}
                        
                        {booking.status === "PICKED_UP" && (
                          <button
                            onClick={() => updateBookingStatus(booking.id, "COMPLETED")}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-400"
                          >
                            Complete Ride
                          </button>
                        )}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500 text-black">
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 