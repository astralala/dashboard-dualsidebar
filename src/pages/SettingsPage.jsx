import React from 'react';
import { Settings, Shield, Globe, Bell, User, Database } from 'lucide-react';

const SettingsPage = ({ activeSubMenu }) => {
  if (activeSubMenu === 'general') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">General Settings</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Application Name</label>
              <input
                type="text"
                defaultValue="Dashboard Dual Sidebar"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                rows={3}
                defaultValue="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>UTC-8 (Pacific Time)</option>
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+1 (Central European Time)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Indonesia</option>
                <option>English</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSubMenu === 'security') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div class="flex items-start max-w-screen-lg mx-auto">
              <div class="w-full">
                <div class="flex items-center w-full">
                  <div class="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
                    <span class="text-sm text-white font-semibold">1</span>
                  </div>
                  <div class="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                </div>
                <div class="mt-2 mr-4">
                  <h6 class="text-sm font-semibold text-blue-600">Personal Info</h6>
                  <p class="text-xs text-gray-500">Completed</p>
                </div>
              </div>
              <div class="w-full">
                <div class="flex items-center w-full">
                  <div class="w-7 h-7 shrink-0 mx-[-1px] bg-blue-600 flex items-center justify-center rounded-full">
                    <span class="text-sm text-white font-semibold">2</span>
                  </div>
                  <div class="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                </div>
                <div class="mt-2 mr-4">
                  <h6 class="text-sm font-semibold text-blue-600">Education</h6>
                  <p class="text-xs text-gray-500">Completed</p>
                </div>
              </div>
              <div>
                <div class="flex items-center">
                  <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-300 flex items-center justify-center rounded-full">
                    <span class="text-sm text-white font-semibold">3</span>
                  </div>
                </div>
                <div class="mt-2">
                  <h6 class="text-sm font-semibold text-blue-600">Review</h6>
                  <p class="text-xs text-gray-500">Pending</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Password Policy</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Minimum Password Length</p>
                  <p className="text-xs text-gray-600">Set minimum characters required</p>
                </div>
                <input
                  type="number"
                  defaultValue="8"
                  min="6"
                  max="20"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Require Special Characters</p>
                  <p className="text-xs text-gray-600">Include symbols in passwords</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Password Expiration</p>
                  <p className="text-xs text-gray-600">Force password changes</p>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Never</option>
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Enable Two-Factor Authentication</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Enable Security</p>
                  <p className="text-xs text-gray-600">Add extra security layer</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">WA Authentication</p>
                  <p className="text-xs text-gray-600">Send codes via Email</p>
                </div>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeSubMenu === 'integrations') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Sample Column</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Slack', description: 'Team communication', status: 'Connected', color: 'bg-green-100 text-green-800' },
            { name: 'Google Analytics', description: 'Website analytics', status: 'Connected', color: 'bg-green-100 text-green-800' },
            { name: 'Stripe', description: 'Payment processing', status: 'Not Connected', color: 'bg-gray-100 text-gray-800' },
            { name: 'Mailchimp', description: 'Email marketing', status: 'Not Connected', color: 'bg-gray-100 text-gray-800' },
            { name: 'Zapier', description: 'Workflow automation', status: 'Connected', color: 'bg-green-100 text-green-800' },
            { name: 'Salesforce', description: 'CRM integration', status: 'Not Connected', color: 'bg-gray-100 text-gray-800' },
          ].map((integration, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.description}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${integration.color}`}>
                  {integration.status}
                </span>
              </div>
              <button className={`w-full px-4 py-2 rounded-lg transition-colors ${
                integration.status === 'Connected' 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {integration.status === 'Connected' ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-600 text-white sticky top-20 z-10">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Kota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr><td class="px-4 py-2 border">1</td><td class="px-4 py-2 border">Andi</td><td class="px-4 py-2 border">andi@mail.com</td><td class="px-4 py-2 border">Jakarta</td></tr>
              <tr><td class="px-4 py-2 border">2</td><td class="px-4 py-2 border">Budi</td><td class="px-4 py-2 border">budi@mail.com</td><td class="px-4 py-2 border">Bandung</td></tr>
              <tr><td class="px-4 py-2 border">3</td><td class="px-4 py-2 border">Citra</td><td class="px-4 py-2 border">citra@mail.com</td><td class="px-4 py-2 border">Surabaya</td></tr>
              <tr><td class="px-4 py-2 border">4</td><td class="px-4 py-2 border">Doni</td><td class="px-4 py-2 border">doni@mail.com</td><td class="px-4 py-2 border">Medan</td></tr>
              <tr><td class="px-4 py-2 border">5</td><td class="px-4 py-2 border">Eka</td><td class="px-4 py-2 border">eka@mail.com</td><td class="px-4 py-2 border">Makassar</td></tr>
              <tr><td class="px-4 py-2 border">6</td><td class="px-4 py-2 border">Fani</td><td class="px-4 py-2 border">fani@mail.com</td><td class="px-4 py-2 border">Jogja</td></tr>
              <tr><td class="px-4 py-2 border">7</td><td class="px-4 py-2 border">Gilang</td><td class="px-4 py-2 border">gilang@mail.com</td><td class="px-4 py-2 border">Palembang</td></tr>
              <tr><td class="px-4 py-2 border">8</td><td class="px-4 py-2 border">Hana</td><td class="px-4 py-2 border">hana@mail.com</td><td class="px-4 py-2 border">Bali</td></tr>
              <tr><td class="px-4 py-2 border">9</td><td class="px-4 py-2 border">Irfan</td><td class="px-4 py-2 border">irfan@mail.com</td><td class="px-4 py-2 border">Semarang</td></tr>
              <tr><td class="px-4 py-2 border">10</td><td class="px-4 py-2 border">Joko</td><td class="px-4 py-2 border">joko@mail.com</td><td class="px-4 py-2 border">Malang</td></tr>
              <tr><td class="px-4 py-2 border">11</td><td class="px-4 py-2 border">Kevin</td><td class="px-4 py-2 border">kevin@mail.com</td><td class="px-4 py-2 border">Depok</td></tr>
              <tr><td class="px-4 py-2 border">12</td><td class="px-4 py-2 border">Lisa</td><td class="px-4 py-2 border">lisa@mail.com</td><td class="px-4 py-2 border">Bogor</td></tr>
              <tr><td class="px-4 py-2 border">13</td><td class="px-4 py-2 border">Maya</td><td class="px-4 py-2 border">maya@mail.com</td><td class="px-4 py-2 border">Solo</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900">Settings Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">General</h3>
          <p className="text-gray-600 text-sm">Basic application settings</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
          <p className="text-gray-600 text-sm">Security and authentication</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h3>
          <p className="text-gray-600 text-sm">Third-party connections</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Version:</span>
              <span className="text-sm font-medium text-gray-900">v2.1.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Last Updated:</span>
              <span className="text-sm font-medium text-gray-900">January 15, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Database:</span>
              <span className="text-sm font-medium text-gray-900">PostgreSQL 14.2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Server Status:</span>
              <span className="text-sm font-medium text-green-600">Online</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Uptime:</span>
              <span className="text-sm font-medium text-gray-900">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Storage Used:</span>
              <span className="text-sm font-medium text-gray-900">2.3 GB / 10 GB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;