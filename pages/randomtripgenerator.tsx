import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaGlobeAmericas } from 'react-icons/fa';
import Layout from '../components/application-ui/layout/Layout';

function Randomtripgenerator() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTakeTrip = () => {
    console.log('isLoading');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Layout>
        <div className="flex flex-row items-center justify-center m-auto bg-gray-400 max-w-screen-2xl h-96">
          <div className="w-full h-full overflow-hidden">
            <img className="object-cover" src="/img/city.jpg" alt="city" />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full p-8 bg-green-600">
            <div className="my-4 text-3xl font-bold">Manila, Philippines</div>
            <div>
              Manila, officially the City of Manila, is the capital of the
              Philippines, and its second most populous city. It is highly
              urbanized and as of 2019 was the world's most densely populated
              city proper.
            </div>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="flex items-center justify-center w-56 h-16 px-8 py-4 mx-2 font-bold text-white bg-green-500 border-none rounded-md shadow-sm focus:outline-none "
            onClick={() => handleTakeTrip()}
          >
            <div>
              <IconContext.Provider value={{ size: '2em', color: 'white' }}>
                <div>
                  <FaGlobeAmericas
                    className={isLoading ? 'animate-spin' : 'hidden'}
                  />
                </div>
              </IconContext.Provider>
            </div>
            <div className={!isLoading ? '' : 'hidden'}>Find a Destination</div>
          </button>
        </div>
      </Layout>
    </div>
  );
}

export default Randomtripgenerator;
