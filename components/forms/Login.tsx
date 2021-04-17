import React, { useState } from "react";
import Button from "../layout/Button";

const Login = ({ formData, handleFormData, handleSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col max-w-md p-8 mx-auto bg-white rounded-md shadow-sm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="block my-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="email"
            value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </label>
        <label className="block my-2">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="password"
            value={formData.password}
            onChange={(e) => handleFormData(e)}
          />
        </label>
        <Button
          type="submit"
          label="Log In"
          handleClick={(e) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              handleSubmit(e);
            }, 1000);
          }}
          isFullWidth={true}
          colorScheme="blue"
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export default Login;
