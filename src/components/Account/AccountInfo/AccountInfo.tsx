import React from "react";

const AccountInfo = () => {
  return (
    <div className="w-full h-full flex justify-center items-start text-white bg-[#282828]">
      <div className="w-[500px] text-[13px] p-8 ">
        <h2 className="text-[13px] text-center font-semibold mb-4">
          Account Information
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value="betapp"
            disabled
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value="betting@app.com"
            disabled
            className="w-full px-3 py-2 border rounded"
          />
        </div>{" "}
        <h2 className="text-[13px]  font-semibold mb-4">Change Password </h2>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block font-semibold mb-1">
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            className="w-full px-3 py-2 border rounded text-[#282828]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block font-semibold mb-1">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full px-3 py-2 border rounded text-[#282828]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmNewPassword"
            className="block font-semibold mb-1"
          >
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            className="w-full px-3 py-2 border rounded text-[#282828]"
          />
        </div>
        <button className="bg-greenBg-500 hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded">
          Reset Password
        </button>
      </div>
      {/* <div className="w-[500px] text-[13px] p-8">
        <h2 className="text-[13px] font-semibold mb-4">Cash Out</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block font-semibold mb-1">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded text-[#282828]"
          />
        </div>
        <button className="bg-greenBg-500 hover:bg-greenBg-400 text-white font-bold py-2 px-4 rounded">
          Cash Out
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default AccountInfo;
