"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaEye, 
  FaUsers, 
  FaCar, 
  FaEuroSign, 
  FaMapMarkerAlt,
  FaClock,
  FaDownload
} from 'react-icons/fa';

interface AnalyticsData {
  pageViews: {
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    pages: Array<{
      name: string;
      views: number;
      percentage: number;
    }>;
  };
  bookings: {
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    status: {
      pending: number;
      confirmed: number;
      completed: number;
      cancelled: number;
    };
  };
  revenue: {
    total: number;
    today: number;
    thisWeek: number;
    thisMonth: number;
    average: number;
  };
  traffic: {
    sources: Array<{
      name: string;
      visits: number;
      percentage: number;
    }>;
    devices: Array<{
      name: string;
      visits: number;
      percentage: number;
    }>;
  };
  popularRoutes: Array<{
    from: string;
    to: string;
    bookings: number;
    revenue: number;
  }>;
  recentBookings: Array<{
    id: string;
    customer: string;
    pickup: string;
    destination: string;
    amount: number;
    status: string;
    date: string;
  }>;
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d');

  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalytics({
        pageViews: {
          total: 15420,
          today: 342,
          thisWeek: 2847,
          thisMonth: 12450,
          pages: [
            { name: 'Homepage', views: 6840, percentage: 44.4 },
            { name: 'Booking Form', views: 4230, percentage: 27.4 },
            { name: 'Services', views: 2150, percentage: 13.9 },
            { name: 'Fleet Gallery', views: 1200, percentage: 7.8 },
            { name: 'Emergency Service', views: 1000, percentage: 6.5 }
          ]
        },
        bookings: {
          total: 1247,
          today: 23,
          thisWeek: 156,
          thisMonth: 678,
          status: {
            pending: 45,
            confirmed: 89,
            completed: 1113,
            cancelled: 12
          }
        },
        revenue: {
          total: 45678,
          today: 890,
          thisWeek: 12340,
          thisMonth: 34560,
          average: 36.6
        },
        traffic: {
          sources: [
            { name: 'Direct', visits: 6840, percentage: 44.4 },
            { name: 'Google Search', visits: 4230, percentage: 27.4 },
            { name: 'Social Media', visits: 2150, percentage: 13.9 },
            { name: 'Referrals', visits: 1200, percentage: 7.8 },
            { name: 'Other', visits: 1000, percentage: 6.5 }
          ],
          devices: [
            { name: 'Mobile', visits: 9240, percentage: 60.0 },
            { name: 'Desktop', visits: 4620, percentage: 30.0 },
            { name: 'Tablet', visits: 1560, percentage: 10.0 }
          ]
        },
        popularRoutes: [
          { from: 'Amsterdam Centraal', to: 'Schiphol Airport', bookings: 156, revenue: 4680 },
          { from: 'Schiphol Airport', to: 'Amsterdam Centraal', bookings: 134, revenue: 4020 },
          { from: 'Amsterdam Centraal', to: 'RAI Amsterdam', bookings: 89, revenue: 1780 },
          { from: 'Amsterdam Centraal', to: 'Johan Cruijff ArenA', bookings: 67, revenue: 1340 },
          { from: 'Amsterdam Centraal', to: 'Zuidas', bookings: 45, revenue: 900 }
        ],
        recentBookings: [
          { id: 'BK001', customer: 'John Smith', pickup: 'Amsterdam Centraal', destination: 'Schiphol Airport', amount: 35, status: 'completed', date: '2024-02-26 14:30' },
          { id: 'BK002', customer: 'Maria Garcia', pickup: 'Schiphol Airport', destination: 'Amsterdam Centraal', amount: 30, status: 'confirmed', date: '2024-02-26 15:45' },
          { id: 'BK003', customer: 'David Johnson', pickup: 'RAI Amsterdam', destination: 'Amsterdam Centraal', amount: 20, status: 'pending', date: '2024-02-26 16:20' },
          { id: 'BK004', customer: 'Sarah Wilson', pickup: 'Johan Cruijff ArenA', destination: 'Amsterdam Centraal', amount: 25, status: 'completed', date: '2024-02-26 17:10' },
          { id: 'BK005', customer: 'Michael Brown', pickup: 'Zuidas', destination: 'Schiphol Airport', amount: 40, status: 'confirmed', date: '2024-02-26 18:00' }
        ]
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Analytics Dashboard...</div>
      </div>
    );
  }

  if (!analytics) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold">SNH Drivers Analytics</h1>
              <p className="text-gray-400">Comprehensive dashboard for your taxi service</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2"
              >
                <option value="1d">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors flex items-center">
                <FaDownload className="mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Page Views</p>
                <p className="text-3xl font-bold">{analytics.pageViews.total.toLocaleString()}</p>
                <p className="text-green-400 text-sm">+12% from last month</p>
              </div>
              <FaEye className="text-yellow-500 text-3xl" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Bookings</p>
                <p className="text-3xl font-bold">{analytics.bookings.total.toLocaleString()}</p>
                <p className="text-green-400 text-sm">+8% from last month</p>
              </div>
              <FaCar className="text-blue-500 text-3xl" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold">€{analytics.revenue.total.toLocaleString()}</p>
                <p className="text-green-400 text-sm">+15% from last month</p>
              </div>
              <FaEuroSign className="text-green-500 text-3xl" />
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Avg. Booking Value</p>
                <p className="text-3xl font-bold">€{analytics.revenue.average}</p>
                <p className="text-green-400 text-sm">+5% from last month</p>
              </div>
              <FaChartLine className="text-purple-500 text-3xl" />
            </div>
          </div>
        </motion.div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Page Views */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaEye className="mr-2 text-yellow-500" />
              Page Views
            </h3>
            <div className="space-y-4">
              {analytics.pageViews.pages.map((page) => (
                <div key={page.name} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{page.name}</span>
                      <span className="text-sm text-gray-400">{page.views.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${page.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traffic Sources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaUsers className="mr-2 text-blue-500" />
              Traffic Sources
            </h3>
            <div className="space-y-4">
              {analytics.traffic.sources.map((source) => (
                <div key={source.name} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{source.name}</span>
                      <span className="text-sm text-gray-400">{source.visits.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Popular Routes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg mb-8"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-green-500" />
            Popular Routes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4">From</th>
                  <th className="text-left py-3 px-4">To</th>
                  <th className="text-right py-3 px-4">Bookings</th>
                  <th className="text-right py-3 px-4">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {analytics.popularRoutes.map((route, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3 px-4">{route.from}</td>
                    <td className="py-3 px-4">{route.to}</td>
                    <td className="text-right py-3 px-4">{route.bookings}</td>
                    <td className="text-right py-3 px-4">€{route.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <FaClock className="mr-2 text-purple-500" />
            Recent Bookings
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Route</th>
                  <th className="text-right py-3 px-4">Amount</th>
                  <th className="text-center py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {analytics.recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-700">
                    <td className="py-3 px-4 font-mono">{booking.id}</td>
                    <td className="py-3 px-4">{booking.customer}</td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        <div>{booking.pickup}</div>
                        <div className="text-gray-400">→ {booking.destination}</div>
                      </div>
                    </td>
                    <td className="text-right py-3 px-4">€{booking.amount}</td>
                    <td className="text-center py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        booking.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' :
                        booking.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-400">{booking.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 