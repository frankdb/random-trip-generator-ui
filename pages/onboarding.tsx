import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Button from "../components/application-ui/elements/Button";
import ContentLayout from "../components/application-ui/layout/ContentLayout";
import Layout from "../components/application-ui/layout/Layout";
import FlowController from "../components/onboarding/FlowController";
import { useRequireAuth } from "../hooks/use-require-auth";
import { getUser, getUsers } from "../services/user";

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
  // if in usa - places visited
  // if outside usa - bucket list
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
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const { data, isError, isLoading } = useQuery("users", getUsers);

  useEffect(() => {
    console.log("USERS=====", data, isError, isLoading);
  }, [data]);

  const [onboardingData, setOnboardingData] = useState({
    currentStep: "name",
    previousStep: "",
  });

  const setNextStep = () => {
    if (onboardingData.currentStep === "name") {
      setOnboardingData({
        ...onboardingData,
        currentStep: "location",
        previousStep: "name",
      });
    }
  };

  const setPreviousStep = () => {
    setOnboardingData({
      ...onboardingData,
      currentStep: onboardingData.previousStep,
    });
  };

  const next = () => {
    console.log("clicking");
    setOnboardingData({ ...onboardingData, currentStep: "placesVisited" });
  };

  return (
    <Layout>
      <ContentLayout>
        <div className="bg-green-100">
          <FlowController step={steps[onboardingData.currentStep]} />
          <div className="flex flex-row justify-between w-full">
            <Button
              label="Back"
              marginX={2}
              variant="secondary"
              handleClick={() => setPreviousStep()}
            />
            <Button
              label="Next"
              marginX={2}
              handleClick={() => setNextStep()}
            />
          </div>
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default onboarding;
