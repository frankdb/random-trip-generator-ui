import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Layout from "../components/application-ui/layout/Layout";
import ContentLayout from "../components/application-ui/layout/ContentLayout";
import InputGroup from "../components/application-ui/forms/InputGroup";
import Button from "../components/application-ui/elements/Button";
import { useRequireAuth } from "../hooks/use-require-auth";
import { getProfile, getUsers } from "../services/user";

const steps = {
  name: {
    question: "What's your name?",
    type: "textInput",
  },
  location: {
    question: "Where do you live?",
    type: "textInput",
    options: [
      { text: "usa", value: 1 },
      { text: "outside the us", value: 2 },
    ],
  },
  placesVisited: {
    question: "Where have you been?",
    type: "textInput",
  },
  bucketList: {
    question: "What's on your bucket list?",
    type: "textInput",
  },
};

const onboarding = () => {
  const auth = useRequireAuth();
  const { data, isError, isLoading } = useQuery("users", getUsers);
  let profile;

  useEffect(() => {
    console.log("USERS=====", data, isError, isLoading);
    getProfile()
      .then((res) => {
        profile = res;
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  const handleFormSubmit = async ({ location, email, password }) => {
    try {
      // const res = await auth.signup(name, email, password);
      // if (res) {
      //   router.push("/onboarding");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <ContentLayout>
        <div className="w-3/4 mx-auto">
          <Formik
            initialValues={{ location: "", email: "", password: "" }}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <InputGroup
                  label="Where do you live?"
                  name="location"
                  id="location"
                  placeholder="New York, NY"
                  value={values.location}
                  onChange={handleChange}
                />
                <InputGroup
                  label="Where have you been?"
                  name="email"
                  id="email"
                  placeholder="Seattle, Buenos Aires, Madrid"
                  value={values.email}
                  onChange={handleChange}
                  isTextArea={true}
                />
                <InputGroup
                  label="Where do you want to go next?"
                  name="password"
                  id="password"
                  placeholder="Paris, Tokyo, Mumbai"
                  value={values.password}
                  onChange={handleChange}
                  isTextArea={true}
                />
                <Button
                  type="submit"
                  label="Save"
                  colorScheme="blue"
                  float="right"
                  paddingX={12}
                  isLoading={isSubmitting}
                />
                <Button
                  label="Skip"
                  marginX={4}
                  variant="tertiary"
                  colorScheme="blue"
                  float="right"
                  paddingX={8}
                  isLoading={isSubmitting}
                />
              </form>
            )}
          </Formik>
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default onboarding;
