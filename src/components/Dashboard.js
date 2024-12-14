import React from 'react';
import Sidebar from './Sidebar';
import UpdatesList from './UpdatesList';
import { BarChart, PieChart } from './Charts';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="h-16 border-b bg-[#40E0D0] flex items-center px-6">
          <h1 className="text-white text-lg font-semibold">Company X</h1>
        </header>
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <UpdatesList />
            <PieChart />
            <div className="md:col-span-2">
              <BarChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

