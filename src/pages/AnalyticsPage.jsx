import React from 'react';
import { Activity, BarChart3, TrendingUp, PieChart } from 'lucide-react';

const AnalyticsPage = ({ activeSubMenu }) => {
  const renderReports = () => {
    if (activeSubMenu === 'sales-report') {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Sales Report</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Sales</h3>
              <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-green-600" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-16 h-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeSubMenu === 'user-report') {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">User Analytics</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Engagement Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">2,345</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">4.2</p>
                <p className="text-sm text-gray-600">Avg. Session Duration</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">78%</p>
                <p className="text-sm text-gray-600">Return Rate</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeSubMenu === 'traffic-report') {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Traffic Analysis</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { source: 'Direct', visitors: '1,234', percentage: '45%', color: 'bg-blue-500' },
                { source: 'Search Engines', visitors: '987', percentage: '35%', color: 'bg-green-500' },
                { source: 'Social Media', visitors: '456', percentage: '15%', color: 'bg-purple-500' },
                { source: 'Referrals', visitors: '123', percentage: '5%', color: 'bg-yellow-500' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium text-gray-900">{item.source}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">{item.visitors} visitors</span>
                    <span className="text-sm font-semibold text-gray-900">{item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Reports Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Report</h3>
            <p className="text-gray-600 text-sm">View detailed sales analytics</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Analytics</h3>
            <p className="text-gray-600 text-sm">Track user engagement metrics</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Traffic Analysis</h3>
            <p className="text-gray-600 text-sm">Analyze website traffic sources</p>
          </div>
        </div>
      </div>
    );
  };

  if (activeSubMenu === 'realtime') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Real-time Data</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Live Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">127</p>
              <p className="text-sm text-gray-600">Online Users</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">23</p>
              <p className="text-sm text-gray-600">Active Sessions</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">8</p>
              <p className="text-sm text-gray-600">Live Orders</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">$1,234</p>
              <p className="text-sm text-gray-600">Today's Revenue</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return renderReports();
};

export default AnalyticsPage;