import React, { useState, useEffect } from "react";
import Layout from "../components/application-ui/layout/Layout";
import ContainerLayout from "../components/application-ui/layout/ContentLayout";
import Signup from "../components/forms/Signup";
import Link from "next/link";
import { useAuth } from "../hooks/use-auth";
import { useRouter } from "next/router";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const signup = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Auth===", auth);
  }, [auth]);

  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const res = await auth.signup(name, email, password);
    console.log("RES======", res);
    if (res) {
      router.push("/onboarding");
    }
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
