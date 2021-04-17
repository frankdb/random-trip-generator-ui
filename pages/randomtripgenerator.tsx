import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ContentLayout from "../components/layout/ContentLayout";
import Button from "../components/layout/Button";
import { IconContext } from "react-icons";
import { FaGlobeAmericas } from "react-icons/fa";

const randomtripgenerator = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTakeTrip = () => {
    console.log("isLoading");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Layout>
        <ContentLayout>
          <div className="flex flex-col items-center justify-center">
            {/* <div className={isLoading ? "animate-spin" : ""}>
              <IconContext.Provider value={{ size: "8em", color: "green" }}>
                <FaGlobeAmericas />
              </IconContext.Provider>
            </div> */}
            <div className="w-56 h-56 px-4 py-4 mx-4 my-8 bg-purple-600 rounded-lg"></div>
            <div className="my-4 text-3xl font-bold">Manila, Philippines</div>
            <div>
              <button
                className="flex items-center justify-center w-56 h-16 px-8 py-4 mx-2 font-bold text-white bg-green-500 border-none rounded-md shadow-sm focus:outline-none "
                onClick={() => handleTakeTrip()}
              >
                <div>
                  <IconContext.Provider value={{ size: "2em", color: "white" }}>
                    <div>
                      <FaGlobeAmericas
                        className={isLoading ? "animate-spin" : "hidden"}
                      />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className={!isLoading ? "" : "hidden"}>
                  Find a Destination
                </div>
              </button>
            </div>
          </div>
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default randomtripgenerator;
