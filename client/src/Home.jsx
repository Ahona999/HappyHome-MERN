import React from "react";

function Home() {
  return (
    <div className="m-0 p-0 bg-no-repeat  bg-cover h-[800px] w-screen bg-[url('./src/assets/bg.webp')]">
      <nav className="flex p-10 flex-row justify-between bg-opacity-0 items-center">
        <div className="flex items-center text-white">
          <img
            src="./src/assets/home.png"
            alt="Home"
            className="w-12 h-12"
          />
          <span className=" text-2xl font-semibold">HappyHome</span>
        </div>
        <a className="text-white" href="#">Listings</a>
        </nav>
     <div className=" h-3/4 justify-center content-center text-white ">
        <h1 className="text-5xl font-bold my-8 ">Find your dream home today!</h1>
        <h3 className="text-2xl mb-5"> Explore our curated collection.</h3>
        <button className=" text-white bg-[#FE424D] h-10 w-32 border-2 rounded-lg">Contact us</button>
      </div>
    </div>
  );
}

export default Home;