import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Layout from "../components/application-ui/layout/Layout";
import ContentLayout from "../components/application-ui/layout/ContentLayout";
import InputGroup from "../components/application-ui/forms/InputGroup";
import Button from "../components/application-ui/elements/Button";
import { useRequireAuth } from "../hooks/use-require-auth";
import { getProfile, getUsers, updateProfile } from "../services/user";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    console.log("USERS=====", data, isError, isLoading);
    getProfile()
      .then((res) => {
        profile = res;
        console.log("PROFILE====", profile);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [data]);

  const handleFormSubmit = async ({
    bio,
    location,
    places_visited,
    bucket_list,
  }) => {
    try {
      // const res = await auth.signup(name, email, password);
      // if (res) {
      //   router.push("/onboarding");
      // }
      console.log(bio, location, places_visited, bucket_list);

      const obj = {
        profile: {
          bio,
          location,
          places_visited,
          bucket_list,
        },
      };

      updateProfile(obj);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <ContentLayout>
        <div className="w-3/4 mx-auto">
          <Formik
            initialValues={{
              bio: "",
              location: "",
              places_visited: "",
              bucket_list: "",
            }}
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
                  label="Tell us a little bit about yourself"
                  name="bio"
                  id="bio"
                  placeholder="Run of the mill vagabond"
                  value={values.bio}
                  onChange={handleChange}
                />
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
                  name="places_visited"
                  id="places_visited"
                  placeholder="Seattle, Buenos Aires, Madrid"
                  value={values.places_visited}
                  onChange={handleChange}
                  isTextArea={true}
                />
                <InputGroup
                  label="Where do you want to go next?"
                  name="bucket_list"
                  id="bucket_list"
                  placeholder="Paris, Tokyo, Mumbai"
                  value={values.bucket_list}
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
