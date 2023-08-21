import { Link } from "react-router-dom";

const tokenData = [
  {
    title: "Fungible",
    description:
      "A standardized framework for fungible tokens on the BSV blockchain. These tokens are identical in nature and can be easily exchanged, opening up a world of possibilities for digital currencies and asset representation.",
  },
  {
    title: "BTS-NonFungible",
    description:
      "Representing unique digital assets, BTS-NonFungible tokens are indivisible and possess distinct characteristics. Unlock the potential for ownership of digital collectibles, artwork, and other unique items on the Bitcoin network.",
  },
  {
    title: "BTS 165 Token",
    description:
      "Now that Ethereum has implemented smart contracts, it is necessary for the Ethereum development community to know which interfaces smart contracts implement. As a result, they need to be able to identify how they can interact with the contract.",
  },
  {
    title: "BTS 621 Token",
    description:
      "A cryptocurrency is a mathematical form of money, unlike fiat currencies whose supply can be increased or decreased by central banks. Token supply is one of many factors that determine the appreciation of a token and determine its economics.",
  },
  {
    title: "BTS 777 Token",
    description:
      "A cryptocurrency is a mathematical form of money, unlike fiat currencies whose supply can be increased or decreased by central banks. Token supply is one of many factors that determine the appreciation of a token and determine its economics.",
  },
  {
    title: "BTS 884 Token",
    description:
      "As a result of recent legislation, companies in the state of Delaware can now maintain share registries using blockchain technology. According to BTS 884, it will be incorporated into proposed standards. Every token will be a share of a corporation incorporated.",
  },
];

const TokensCard = () => {
  return (
    <div className="mx-auto max-w-7xl h-full px-8">
      <div className="bg-white rounded-lg overflow-hidden m-4">
        <h1 className="text-3xl font-bold mb-4 md:text-center text-blue-600">
          Token Standards
        </h1>
        <Link  className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {tokenData.map((token, index) => (
            <div
              key={index}
              className="max-w-xs flex bg-white shadow-lg rounded-lg overflow-hidden m-4"
            >
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl text-blue-600 mb-2">
                  {token.title}
                </h2>
                <p className="text-black text-base">{token.description}</p>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default TokensCard;
