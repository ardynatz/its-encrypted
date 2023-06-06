import AES from "crypto-js/aes";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Button } from "@material-tailwind/react";

const encrypt = (message, password) => {
  const ciphertext = AES.encrypt(message, password).toString();
  return ciphertext;
};

const copyToClipboard = (value) => {
  // Create a temporary input element
  var tempInput = document.createElement("input");

  // Set its value to the provided value
  tempInput.value = value;

  // Append the input element to the document body
  document.body.appendChild(tempInput);

  // Select the value of the input element
  tempInput.select();

  // Copy the selected value to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element from the document
  document.body.removeChild(tempInput);
};

const EncryptApp = () => {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [open, setOpen] = useState(false);

  const handleMessageChange = (event) => {
    if (event.target.value == "") {
      setOpen(false);
      setMessage("");
    } else {
      setMessage(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    if (event.target.value == "") {
      setOpen(false);
      setPassword("");
    } else {
      setPassword(event.target.value);
    }
  };

  const handleClick = () => {
    if (message == "") {
      setOpen(false);
    } else if (password == "") {
      setOpen(false);
    } else {
      const cipher = encrypt(message, password).toString();
      setCipherText(cipher);
      setOpen(true);
      document.getElementById("result").innerHTML = cipher;
    }
  };

  const handleCopy = () => {
    copyToClipboard(cipherText);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <div className="relative w-full flex flex-col h-full content-center items-center justify-center">
        <div className="relative w-full isolate-auto overflow-hidden flex-1 h-full bg-gray-900 h-100">
          <div className="mx-auto my-auto max-w-7xl px-6 sm:pb-32 lg:flex lg:px-8">
            <div className="mx-auto my-auto max-w-2xl flex-shrink-0 lg:mx-auto lg:max-w-4xl lg:pt-8">
              <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Encrypt your message
              </h1>
              <p className="mt-6 text-center text-md md:text-lg leading-8 text-gray-300">
                Encrypt your message by filling in the text area below, to make
                it more secure you can fill in the decryption password section
                so that the message to be decrypted must enter the correct
                password before it can be decrypted. Have a cipher message you
                want to decrypt?{" "}
                <Link as={"a"} className="text-blue-500" to={"/decrypt"}>
                  Click here.
                </Link>
              </p>
              <div className="mt-12 text-center">
                <textarea
                  required
                  rows="12"
                  onChange={handleMessageChange}
                  name="message"
                  placeholder="Enter your message..."
                  className="resize-y w-full px-3 py-2.5 text-white rounded-md transition-all bg-gray-800 border border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 focus:border-2 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="mt-6 flex flex-row justify-center gap-4">
                <input
                  type="text"
                  onChange={handlePasswordChange}
                  name="passwords"
                  className="rounded-md text-base text-white px-3 py-2.5 transition-all bg-gray-800 border border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 focus:border-2 focus:border-blue-500"
                  placeholder="Encryption Passwords"
                />
                <Button onClick={handleClick}>Encrypt Message</Button>
              </div>
              <div className="mt-6 pb-32">
                <Collapse className="flex flex-col gap-4" open={open}>
                  <Button onClick={handleCopy}>Copy result</Button>
                  <textarea
                    rows="6"
                    name="ciphertext"
                    id="result"
                    className="resize-y w-full px-3 py-2.5 text-white rounded-md transition-all bg-gray-800 border border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0 focus:border-2 focus:border-blue-500"
                  ></textarea>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EncryptApp;
