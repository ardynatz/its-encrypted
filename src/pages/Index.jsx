import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { HiOutlineLockClosed } from "react-icons/hi";

const Index = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Encrypt your message.", "Decrypt your message."], // Strings to display
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      fadeOut: true,
      smartBackspace: true,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full flex h-screen content-center items-center justify-center">
        <div className="relative w-full isolate overflow-hidden bg-gray-900 h-100">
          <div className="mx-auto my-auto max-w-7xl px-6 sm:pb-32 lg:flex h-screen lg:px-8">
            <div className="mx-auto my-auto max-w-2xl flex-shrink-0 lg:mx-auto lg:max-w-4xl lg:pt-8">
              <h1
                className="mt-10 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl"
                ref={el}
              ></h1>
              <p className="mt-6 text-center text-md md:text-lg leading-8 text-gray-300">
                With the AES JavaScript algorithm you can encrypt your messages
                securely and you can set your own encryption password, making
                your messages even more private.
              </p>
              <div className="mt-10 mx-auto flex justify-center items-center gap-x-6">
                <Link to={"/encrypt"}>
                  <Button className="flex flex-row gap-2">
                    <HiOutlineLockClosed />
                    Encrypt message
                  </Button>
                </Link>
                <Link to={"/decrypt"}>
                  <Button variant="text">
                    Decrypt message <span>&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
