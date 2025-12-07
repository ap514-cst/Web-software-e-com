import React from 'react'

const Users = ({users}) => {
    const {name,email,password}=users
    
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        {/* Table */}
        <div className="border border-gray-300 rounded overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-gray-100 border-b border-gray-300">
            <div className="p-3 font-medium text-gray-700 border-r border-gray-300">name</div>
            <div className="p-3 font-medium text-gray-700 border-r border-gray-300">email</div>
            <div className="p-3 font-medium text-gray-700 border-r border-gray-300">Password</div>
            <div className="p-3 font-medium text-gray-700">Action</div>
          </div>
          
          {/* Table Rows */}
          <div className="divide-y divide-gray-300">
            
              <div className="grid grid-cols-4 hover:bg-gray-50">
                <div className="p-3 text-gray-500 border-r border-gray-300">{name}</div>
                <div className="p-3 w-fit text-gray-500 border-r border-gray-300">{email}</div>
                <div className="p-3 text-gray-500 border-r text-center border-gray-300">{password}</div>
                <div className="p-3">
                  <button
                    
                    className="text-red-500 hover:text-red-700 transition-colors"
                    title="Delete"
                  >
                    {/* Delete Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default Users
