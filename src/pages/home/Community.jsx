const Community = () => {
  return (
    <section className="w-full bg-white" id="home">
      <div className="mx-auto max-w-7xl h-full lg:py-6 lg:grid items-center lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {" "}
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          {" "}
          <h1 className="mt-8 text-2xl text-blue-600 font-bold tracking-tight text-primary lg:text-5xl">
            Our Community{" "}
          </h1>{" "}
          <p className="mt-8 text-lg text-black">
            At BTS, we believe in the power of community collaboration. Join our
            vibrant community of developers, enthusiasts, and businesses to
            shape the future of tokenization on Bitcoin. Participate in
            discussions, share ideas, and contribute to the growth of a robust
            token ecosystem.{" "}
          </p>{" "}
        </div>{" "}
        <div className="py-6 relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex items-center justify-center">
          <img className="w-5/6 " src="community.png" alt="hero image" />{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default Community;
