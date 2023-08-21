
const Body = () =>{

    return(
        <section className="mx-auto max-w-7xl h-full ">
        <div className="lg:px-8">
          {" "}
          <div className="lg:px-6">
            {" "}
            <h1 className="mt-8 text-2xl text-blue-600 font-bold tracking-tight text-primary lg:text-5xl">
              Body{" "}
            </h1>{" "}
            <p className="mt-5 text-lg text-black">
            If a Smart Contract implements the following methods and events, it 
            can be considered a Fungible Token Contract adhering to the 
            standards on the Bitcoin SV (BSV) blockchain. Once deployed, this 
            contract will be responsible for managing and tracking the created 
            tokens on the Bitcoin SV network.
            <div className= "mt-2 font-bold text-lg text-black">
            Example Functionalities which Fungible token standards Provide
            </div>
            <ul class= " mt-2 pl-6 text-lg list-disc">
            <li>
                Transfer Tokens: Users can send tokens from their account to someone else.
            </li>
            <li>
            Check Token Balance: Users can see how many tokens they currently have.
            </li>
            <li>
            Total Token Supply: Users can find out the total number of tokens available in circulation.
            </li>
            <li>
            Token Approval: Users can allow others to spend a specific number of their tokens on their behalf.{" "}
            </li>
            </ul>
            </p>{" "}
          </div>{" "}
        </div>
      </section>

    );
};
export default Body;