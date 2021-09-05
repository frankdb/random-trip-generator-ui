import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Dropdown from './Dropdown';
import { useAuth } from '../../../../hooks/use-auth';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.user.token) {
      setIsLoggedIn(true);
    }
  }, [auth]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log('showDropdown value:', showDropdown);
  };

  const handleSignout = () => {
    auth.signout();
    router.push('/signup');
  };

  return (
    <nav className="bg-gray-800 w-100">
      <div className="container flex flex-row justify-between max-w-6xl px-4 py-6 mx-auto font-bold text-blue-400">
        <div>
          <div className="px-3">
            <Link href="/">Home</Link>
          </div>
        </div>
        {isLoggedIn ? (
          <div className="flex-row hidden sm:flex">
            <div className="px-3 cursor-pointer">
              <Link href="/randomtripgenerator">Random Trip Generator</Link>
            </div>
            <div className="px-3 cursor-pointer">
              <span onClick={() => handleSignout()}>Sign Out</span>
            </div>
          </div>
        ) : (
          <div className="flex-row hidden sm:flex">
            <div className="px-3 cursor-pointer">
              <Link href="/randomtripgenerator">Random Trip Generator</Link>
            </div>
            <div className="px-3 cursor-pointer">
              <Link href="/login">Log In</Link>
            </div>
            <div className="px-3 cursor-pointer">
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        )}
        <div
          className="flex sm:hidden pointer"
          onClick={() => toggleDropdown()}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <FiMenu />
          </IconContext.Provider>
        </div>
        {!showDropdown ? null : (
          <Dropdown
            isLoggedIn={isLoggedIn}
            handleSignout={() => handleSignout()}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
