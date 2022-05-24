import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const navigate = useNavigate();

  const addContact = async () => {
    console.warn(name, email, message);
    let result = await fetch("https://ankit-mongo-test.herokuapp.com/contacts", {
      method: "post",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/message");
  };

  return (
    /*<div class="flex mx-auto">
            <input type="text" placeholder="Name"
            onChange={(e)=>{setName(e.target.value)}} value={name} ></input>
            <input type="text" placeholder="email"
            onChange={(e)=>{setEmail(e.target.value)}} value={email} ></input>
            <input type="text" placeholder="message"
            onChange={(e)=>{setMessage(e.target.value)}} value={message} ></input>
            <button onClick={addContact} >Send</button>
        </div>*/

    /*<section class="min-h-screen flex flex-col">
            <div class="flex flex-1 items-center justify-center">
                <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form class="text-center">
                        <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Contact
                        </h1>
                        <div class="py-2 text-left">
                            <input type="text" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Date" 
                            onChange={(e)=>{setDate(e.target.value)}} value={date} />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Name" 
                            onChange={(e)=>{setName(e.target.value)}} value={name} />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email"
                            onChange={(e)=>{setEmail(e.target.value)}} value={email}  />
                        </div>
                        <div class="py-2 text-left">
                            <input type="password" class="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Message"
                            onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
                        </div>
                        <div class="py-2">
                            <button  class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                            onClick={addContact}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>*/
    <div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Have any query ? or want to know more ? Contact us and we will be
              happy to help.
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  ></input>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  ></input>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={addContact}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
