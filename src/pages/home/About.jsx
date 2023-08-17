const About = () => {
  return (
    <section className="relative w-full h-full" id="about">
      <div className="mx-auto h-full max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 items-center lg:px-8">
        <div className="relative lg:col-span-5 lg:-ml-8 xl:col-span-6 flex items-center justify-center">
          <img className="w-5/6" src="about.png" alt="about us image" />
        </div>

        <div className="flex flex-col justify-center px-4 md:py-0 lg:col-span-7 lg:gap-x-6 lg:px-6 xl:col-span-6">
          <h1 className=" text-2xl font-bold tracking-tight text-blue-600 lg:text-5xl">
            About BTS
          </h1>
          <p className="mt-8 text-lg text-black">
            The Bitcoin Token Standard (BTS) is a research-driven project aimed
            at revolutionizing tokenization on the Bitcoin network. As the first
            comprehensive token standard for Bitcoin, BTS addresses the
            challenges of token creation, management, and interoperability. Our
            goal is to make tokens more accessible and useful for everyone,
            fostering innovation and collaboration within the Bitcoin ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
