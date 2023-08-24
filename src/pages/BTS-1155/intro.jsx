const Intro = () => {

    return(

        <section className="w-full bg-white" id="home">
          <div className="mx-auto max-w-7xl h-full lg:py-1  lg:grid items-center lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            {" "}
            <div className="py-6 relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex items-center justify-center">
              <img className="w-5/6 " src="hero.png" alt="hero image" />{" "}
            </div>{" "}
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-6">
              {" "}
              <h1 className="mt-8 text-2xl text-blue-600 font-bold tracking-tight text-primary lg:text-5xl">
                BTS 1155 Token{" "}
              </h1>{" "}
              <p className="mt-8 text-lg text-black">
              "Introducing BSV 1155: Your gateway to a remarkable world of tokens on the BSV blockchain! Just like a special set of rules that 
              everyone follows in games, BSV 1155 is a token standard that sets the way tokens work together. Picture it as a special language
              that different tokens understand. In this exciting world, there are fungible tokens, much like the regular coins you use. Then, 
              there are the extraordinary NFTs (non-fungible tokens) that are as unique as your fingerprints. And guess what? There's even room 
              for tokens that are a blend of both worlds. BSV 1155 ensures that all these different tokens come together in perfect harmony."{" "}
              </p>{" "}
            </div>{" "}
            
          </div>
        </section>
        );
};
export default Intro;