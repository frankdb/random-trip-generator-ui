import axios from "axios";
import next from "next";
import React, { useEffect, useState } from "react";
import Button from "../components/layout/Button";
import ContentLayout from "../components/layout/ContentLayout";
import Layout from "../components/layout/Layout";
import FlowController from "../components/onboarding/FlowController";
import { useAuth } from "../hooks/use-auth";
import { getUser } from "../services/user";

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
  const auth = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // async function getUser() {
    //   const res = await axios.get("http://localhost:3000/api/user/");
    //   console.log("HULLO====", res);
    //   setUser(res);
    //   return res;
    // }
    console.log("getting in here?=====A");

    getUser().then((res) => {
      console.log("MAYBE====", res);
    });
  }, [user]);

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
