import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import ContainerLayout from "../components/layouts/ContentLayout";
import Signup from "../components/forms/Signup";
import Link from "next/link";

interface ISignupFormData {
  name: string;
  email: string;
  password: string;
}

const signup = () => {
  const [formData, setFormData] = useState<ISignupFormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <Layout>
      <ContainerLayout>
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold">Sign up</h2>
          <p>
            Already have an account?{" "}
            <span className="pointer">
              <Link href="/login">Log in</Link>
            </span>
          </p>
        </div>
        <Signup
          formData={formData}
          handleFormData={handleFormData}
          handleSubmit={handleSubmit}
        />
      </ContainerLayout>
    </Layout>
  );
};

export default signup;
