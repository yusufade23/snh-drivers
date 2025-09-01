"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCar, FaClock, FaMapMarkerAlt, FaEuroSign, FaUser, FaHistory } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface Booking {
  id: string;
  pickupAddress: string;
  dropoffAddress: string;
  status: string;
  estimatedPrice: number;
  pickupTime: string;
  createdAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useLanguage();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchBookings();
    }
  }, [session]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`/api/bookings?userId=${session?.user?.id}`);
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-500";
      case "IN_TRANSIT":
        return "text-blue-500";
      case "PICKED_UP":
        return "text-yellow-500";
      case "CONFIRMED":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold">SNH Drivers Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span>Welcome, {session.user?.name}</span>
              <button
                onClick={() => router.push("/")}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Book New Ride
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
                <p className="text-gray-400">Total Rides</p>
                <p className="text-2xl font-bold">{bookings.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaClock className="text-blue-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Active Bookings</p>
                <p className="text-2xl font-bold">
                  {bookings.filter(b => b.status !== "COMPLETED" && b.status !== "CANCELLED").length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaEuroSign className="text-green-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Total Spent</p>
                <p className="text-2xl font-bold">
                  €{bookings.reduce((sum, b) => sum + b.estimatedPrice, 0).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaUser className="text-purple-500 text-2xl mr-4" />
              <div>
                <p className="text-gray-400">Member Since</p>
                <p className="text-lg font-bold">2024</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <FaHistory className="mr-2" />
              Recent Bookings
            </h2>
          </div>

          {bookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No bookings yet. Book your first ride!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.slice(0, 5).map((booking) => (
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
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>€{booking.estimatedPrice}</span>
                        <span>{new Date(booking.pickupTime).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
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