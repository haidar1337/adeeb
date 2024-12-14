import React from 'react';

const updates = [
  {
    id: 1,
    text: "2024 Report is ready for you",
  },
  {
    id: 2,
    text: "New Features",
  },
  {
    id: 3,
    text: "Take a look to our new AI suggestions Model",
  },
];

function UpdatesList() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">What's New</h2>
      <ul className="space-y-4">
        {updates.map((update) => (
          <li key={update.id} className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-blue-500 mr-3" />
            {update.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdatesList;

