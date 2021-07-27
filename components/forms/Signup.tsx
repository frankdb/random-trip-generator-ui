import React, { useState } from "react";
import Button from "../application-ui/elements/Button";

const Signup = ({ formData, handleFormData, handleSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col max-w-md p-8 mx-auto bg-white rounded-md shadow-sm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="block my-2">
          <span className="text-gray-700">Full Name</span>
          <input
            type="text"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormData(e)}
          />
        </label>
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
          label="Get Started"
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

export default Signup;
