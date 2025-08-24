import React from 'react';
import { Package, ShoppingCart, Plus, Edit, Trash2 } from 'lucide-react';

const ProductsPage = ({ activeSubMenu }) => {
  if (activeSubMenu === 'all-products') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Wireless Headphones', price: '$99.99', stock: 45, category: 'Electronics' },
            { name: 'Smart Watch', price: '$199.99', stock: 23, category: 'Electronics' },
            { name: 'Coffee Mug', price: '$12.99', stock: 156, category: 'Home & Kitchen' },
            { name: 'Laptop Stand', price: '$49.99', stock: 78, category: 'Office' },
            { name: 'Bluetooth Speaker', price: '$79.99', stock: 34, category: 'Electronics' },
            { name: 'Desk Lamp', price: '$34.99', stock: 67, category: 'Office' },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{product.price}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  product.stock > 50 ? 'bg-green-100 text-green-800' :
                  product.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {product.stock} in stock
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSubMenu === 'categories') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Product Categories</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Electronics', products: 45, color: 'bg-blue-100 text-blue-800' },
            { name: 'Home & Kitchen', products: 23, color: 'bg-green-100 text-green-800' },
            { name: 'Office', products: 34, color: 'bg-purple-100 text-purple-800' },
            { name: 'Sports & Outdoors', products: 18, color: 'bg-orange-100 text-orange-800' },
            { name: 'Books', products: 67, color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Clothing', products: 89, color: 'bg-pink-100 text-pink-800' },
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 text-sm rounded-full ${category.color}`}>
                  {category.products} products
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSubMenu === 'stock') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Stock Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">234</p>
            <p className="text-sm text-gray-600">In Stock</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">23</p>
            <p className="text-sm text-gray-600">Low Stock</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Out of Stock</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Stock Alerts</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { product: 'Wireless Headphones', stock: 5, status: 'Low Stock', color: 'text-yellow-600' },
              { product: 'Smart Watch', stock: 0, status: 'Out of Stock', color: 'text-red-600' },
              { product: 'Coffee Mug', stock: 2, status: 'Critical', color: 'text-red-600' },
            ].map((item, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{item.product}</h4>
                  <p className="text-sm text-gray-600">{item.stock} units remaining</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${item.color} bg-opacity-10`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeSubMenu === 'orders') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: '#1234', customer: 'John Doe', total: '$99.99', status: 'Completed', date: '2025-01-15' },
                  { id: '#1235', customer: 'Jane Smith', total: '$199.99', status: 'Processing', date: '2025-01-15' },
                  { id: '#1236', customer: 'Bob Johnson', total: '$49.99', status: 'Shipped', date: '2025-01-14' },
                ].map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">All Products</h3>
          <p className="text-gray-600 text-sm">Manage product catalog</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Package className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Categories</h3>
          <p className="text-gray-600 text-sm">Organize products</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Package className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Stock</h3>
          <p className="text-gray-600 text-sm">Monitor inventory</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <ShoppingCart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Orders</h3>
          <p className="text-gray-600 text-sm">Track customer orders</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;