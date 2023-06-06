import AES from "crypto-js/aes";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Button,
} from "@material-tailwind/react";

const decrypt = (cipher, password) => {
  const bytes = AES.decrypt(cipher, password);
  const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
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

const DecryptApp = () => {
  const [cipherText, setCipherText] = useState("");
  const [password, setPassword] = useState("");
  const [decryptText, setDecryptText] = useState("");
  const [open, setOpen] = useState(false);

  const handleCipherChange = (event) => {
    if (event.target.value == "") {
      setOpen(false);
      setCipherText("");
    } else {
      setCipherText(event.target.value);
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
    if (cipherText == "") {
      setOpen(false);
    } else if (password == "") {
      setOpen(false);
    } else {
      const decrypted = decrypt(cipherText, password);
      setDecryptText(decrypted);
      setOpen(true);
      document.getElementById("result").innerHTML = decrypted;
    }
  };

  const handleCopy = () => {
    copyToClipboard(decryptText);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <div className="relative w-full flex flex-col h-full content-center items-center justify-center">
        <div className="relative w-full overflow-scroll h-full bg-gray-900">
          <div className="mx-auto my-auto px-6 sm:pb-32 lg:flex lg:px-8">
            <div className="mx-auto my-auto flex-1 flex-shrink-0 lg:mx-auto lg:max-w-4xl lg:pt-8">
              <h1 className="mt-10 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Decrypt your message
              </h1>
              <p className="mt-6 text-center text-md md:text-lg leading-8 text-gray-300">
                Decrypt your message below by filling it with the ciphertext you
                received from the person who encrypted it. Have a message you
                want encrypted?{" "}
                <Link as={"a"} className="text-blue-500" to={"/encrypt"}>
                  Click here.
                </Link>
              </p>
              <div className="mt-12 text-center">
                <textarea
                  required
                  rows="12"
                  onChange={handleCipherChange}
                  name="message"
                  placeholder="Enter your Chipertext..."
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
                <Button onClick={handleClick}>Decrypt Message</Button>
              </div>
              <div className="mt-6 pb-32">
                <Collapse className="flex flex-col gap-4" open={open}>
                  <Button onClick={handleCopy}>Copy result</Button>
                  <textarea
                    rows="6"
                    name="decrypted-message"
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

export default DecryptApp;
