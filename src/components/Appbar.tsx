import { Command, Plus } from 'lucide-react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Appbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    setUser(localStorage.getItem('user') || "xyz");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo */}
          <Link to={'/'} className="flex items-center">
            <Command className="h-8 w-8 text-black" />
            <span className="ml-2 text-xl font-bold text-black">TypeNest</span>
          </Link>

          {/* Right side - Navigation Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex gap-2 items-center">
                <Link
                  to={'/publish'}
                  className="text-gray-200 bg-gray-800 flex gap-2 justify-center items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm pl-4 pr-5 py-2.5"
                >
                  <Plus /> New Post          
                </Link>
                <Avatar size="big" name={user} />
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/signin"
                  className="text-gray-800 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-200 bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
