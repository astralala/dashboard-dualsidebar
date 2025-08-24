import React from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign, Activity } from 'lucide-react';

const DashboardPage = ({ activeSubMenu }) => {
  const renderMetrics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: DollarSign, label: 'Revenue', value: '$45,231', change: '+20.1%', positive: true },
          { icon: Users, label: 'Users', value: '2,345', change: '+15.3%', positive: true },
          { icon: ShoppingCart, label: 'Orders', value: '1,234', change: '-2.4%', positive: false },
          { icon: Activity, label: 'Conversion', value: '3.2%', change: '+5.7%', positive: true },
        ].map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className={`text-xs flex items-center ${
                  metric.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </p>
              </div>
              <div className={`p-3 rounded-full ${
                metric.positive ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <metric.icon className={`w-6 h-6 ${
                  metric.positive ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCharts = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Charts & Graphs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <p className="text-blue-600 font-medium">Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
            <p className="text-green-600 font-medium">Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Welcome to Your Dashboard</h3>
          <p className="text-gray-600 mb-4">
            This is your central hub for managing all aspects of your business. 
            Use the navigation menus to access different sections and features.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Active Users</span>
              <span className="text-sm font-semibold">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Orders</span>
              <span className="text-sm font-semibold">5,678</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Revenue</span>
              <span className="text-sm font-semibold">$45,231</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (activeSubMenu === 'metrics') {
    return renderMetrics();
  }

  if (activeSubMenu === 'charts') {
    return renderCharts();
  }

  if (activeSubMenu === 'recent') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-4">
            {[
              { action: 'New user registered', time: '2 minutes ago', type: 'user' },
              { action: 'Order #1234 completed', time: '5 minutes ago', type: 'order' },
              { action: 'Payment received', time: '10 minutes ago', type: 'payment' },
              { action: 'Product updated', time: '15 minutes ago', type: 'product' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.type === 'user' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'order' ? 'bg-green-100 text-green-800' :
                  activity.type === 'payment' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return renderOverview();
};

export default DashboardPage;