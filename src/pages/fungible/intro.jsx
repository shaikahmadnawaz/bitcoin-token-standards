const Intro = () => {

    return (
        <section className="w-full bg-white" id="home">
          <div className="mx-auto max-w-7xl h-full lg:py-1  lg:grid items-center lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            {" "}
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-6">
              {" "}
              <h1 className="mt-8 text-2xl text-blue-600 font-bold tracking-tight text-primary lg:text-5xl">
                What is fungible Token standards ?{" "}
              </h1>{" "}
              <p className="mt-8 text-lg text-black">
              Fungible tokens are interchangeable digital assets with equal value, similar to how one U.S.
              dollar is equal to another U.S. dollar and Fungible token standards are sets of rules and
              specifications that define how fungible tokens should be created and function on a BSV 
              blockchain. These standards ensure that different tokens from various projects can work 
              seamlessly together and be easily recognized and used by different applications, wallets, and 
              exchanges.{" "}
              </p>{" "}
            </div>{" "}
            <div className="py-6 relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex items-center justify-center">
              <img className="w-5/6 " src="hero.png" alt="hero image" />{" "}
            </div>{" "}
          </div>
        </section>
      );


};
export default Intro;