import React from "react";

function Calculate() {
  return (
    <div className="p-10 bg-green-100 text-gray-900 min-h-screen flex flex-col gap-10">
      {/* Raw Material Section */}
      <section className="border border-green-300 p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-green-700">Raw Material</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Component Name</label>
            <input type="text" className="w-full p-3 bg-green-50 border border-green-300 rounded" />
          </div>
          <div>
            <label className="block mb-2">Weight</label>
            <div className="flex items-center gap-2">
              <button className="bg-green-200 px-3 py-2 rounded">-</button>
              <input type="number" value="100" className="w-full p-3 bg-green-50 border border-green-300 rounded text-center" />
              <button className="bg-green-200 px-3 py-2 rounded">+</button>
            </div>
          </div>
          <div>
            <label className="block mb-2">Material Type</label>
            <select className="w-full p-3 bg-green-50 border border-green-300 rounded">
              <option>Plastic</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Specific Component</label>
            <select className="w-full p-3 bg-green-50 border border-green-300 rounded">
              <option>HDPE</option>
            </select>
          </div>
        </div>
      </section>

      {/* Incoming Transport */}
      <section className="border border-green-300 p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-green-700">Incoming Transport</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Incoming Description</label>
            <input type="text" className="w-full p-3 bg-green-50 border border-green-300 rounded" />
          </div>
          <div>
            <label className="block mb-2">Incoming Transport Weight</label>
            <div className="flex items-center gap-2">
              <button className="bg-green-200 px-3 py-2 rounded">-</button>
              <input type="number" value="100" className="w-full p-3 bg-green-50 border border-green-300 rounded text-center" />
              <button className="bg-green-200 px-3 py-2 rounded">+</button>
            </div>
          </div>
          <div>
            <label className="block mb-2">Material Type</label>
            <select className="w-full p-3 bg-green-50 border border-green-300 rounded">
              <option>Truck, 16t</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Incoming Freight Distance</label>
            <div className="flex items-center gap-2">
              <button className="bg-green-200 px-3 py-2 rounded">-</button>
              <input type="number" value="1000" className="w-full p-3 bg-green-50 border border-green-300 rounded text-center" />
              <button className="bg-green-200 px-3 py-2 rounded">+</button>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Transport */}
      <section className="border border-green-300 p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-green-700">Distribution Transport</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Distribution Description</label>
            <input type="text" className="w-full p-3 bg-green-50 border border-green-300 rounded" />
          </div>
          <div>
            <label className="block mb-2">Distribution Transport Weight</label>
            <div className="flex items-center gap-2">
              <button className="bg-green-200 px-3 py-2 rounded">-</button>
              <input type="number" value="100" className="w-full p-3 bg-green-50 border border-green-300 rounded text-center" />
              <button className="bg-green-200 px-3 py-2 rounded">+</button>
            </div>
          </div>
          <div>
            <label className="block mb-2">Transport Type</label>
            <select className="w-full p-3 bg-green-50 border border-green-300 rounded">
              <option>Truck, 16t</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Distribution Freight Distance</label>
            <div className="flex items-center gap-2">
              <button className="bg-green-200 px-3 py-2 rounded">-</button>
              <input type="number" value="1000" className="w-full p-3 bg-green-50 border border-green-300 rounded text-center" />
              <button className="bg-green-200 px-3 py-2 rounded">+</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calculate;
