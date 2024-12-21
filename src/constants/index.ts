import solanaPict from "@/assets/images/solana-img.jpg";
import EthPict from "@/assets/images/eth-img.jpg";

const navLists = [
    { id: 0, value: "Stories", url: "/stories" },
    { id: 1, value: "Creators", url: "/creators" },
    { id: 2, value: "Community", url: "/community" },
]

const dummyPosts = [
    { id: 0, title: "What is NFTs ?", date: new Date(), author: "Izdihaar Ariiba", authorImg: "", contents: "", category: "Nfts", image: EthPict },
    { id: 1, title: "What is Token in blockchain ??", date: new Date(), author: "John Doe", authorImg: "", contents: "", category: "Token", image: solanaPict },
    { id: 2, title: "What is Oracle ?", date: new Date(), author: "", authorImg: "", contents: "", category: "", image: EthPict },
    { id: 3, title: "How to bridge ?", date: new Date(), author: "Elene Kosh", authorImg: "", contents: "", category: "", image: solanaPict },
]

export { navLists, dummyPosts }