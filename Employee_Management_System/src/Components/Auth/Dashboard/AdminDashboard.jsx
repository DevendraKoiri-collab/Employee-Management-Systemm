import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#1C1C1C] flex justify-center items-center p-6">
      <div className="w-[520px] bg-[#262626] rounded-2xl border border-gray-700 p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Create Task
        </h1>

        <form className="flex flex-col gap-5">

          <div>
            <label className="block text-gray-300 mb-2">
              Task Title
            </label>

            <input
              type="text"
              placeholder="Make UI Design"
              className="w-full h-11 px-4 rounded-lg bg-[#3a3a3a] text-white outline-none border border-gray-600 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Detailed Description of Task (max 500 words)"
              className="w-full px-4 py-3 rounded-lg bg-[#3a3a3a] text-white outline-none border border-gray-600 focus:border-green-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Due Date
            </label>

            <input
              type="date"
              className="w-full h-11 px-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Assign To
            </label>

            <input
              type="text"
              placeholder="Employee Name"
              className="w-full h-11 px-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Category
            </label>

            <input
              type="text"
              placeholder="Design, Development..."
              className="w-full h-11 px-4 rounded-lg bg-[#3a3a3a] text-white border border-gray-600 outline-none focus:border-green-500"
            />
          </div>

          <button
            className="w-full py-3 mt-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition"
          >
            Create Task
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;