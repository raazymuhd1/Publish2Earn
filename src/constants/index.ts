import solanaPict from "@/assets/images/solana-img.jpg";
import EthPict from "@/assets/images/eth-img.jpg";
import profilePict from "@/assets/images/profile-test.jpg";
import guerilla from "@/assets/images/guerrillabuzz.jpg"

const navLists = [
    { id: 0, value: "Stories", url: "/stories" },
    { id: 1, value: "Creators", url: "/creators" },
    { id: 2, value: "Community", url: "/community" },
]

const dummyPosts = [
    { id: 0, title: "What is NFTs ?", date: new Date(), author: "Izdihaar Ariiba", authorImg: profilePict, contents: "NFTs, or non-fungible tokens, are unique digital assets that represent ownership of a specific item, such as a piece of art, music, or even a collectible.", category: "Nfts", image: EthPict },
    { id: 1, title: "What is Token in blockchain ??", date: new Date(), author: "John Doe", authorImg: profilePict, contents: "In blockchain, a token is a digital asset issued on a blockchain network. It can represent a variety of things, such as a currency, a utility, or even a security.", category: "Token", image: solanaPict },
    { id: 2, title: "What is Oracle ?", date: new Date(), author: "Miranda", authorImg: profilePict, contents: "An oracle is a service that provides real-world data to smart contracts on a blockchain. This data can be used to trigger specific actions or decisions within the contract.", category: "", image: EthPict },
    { id: 3, title: "How to bridge ?", date: new Date(), author: "Elene Kosh", authorImg: profilePict, contents: "Bridging in blockchain refers to the process of transferring assets or data between two different blockchain networks. This is often done through the use of specialized protocols or decentralized applications.", category: "", image: solanaPict },
    { id: 4, title: "What is Web3 ?", date: new Date(), author: "Alex Chen", authorImg: profilePict, contents: "Web3 refers to the next generation of the internet, where decentralized technologies like blockchain and cryptocurrencies enable users to have more control over their data and interactions.", category: "Web3", image: EthPict },
    { id: 5, title: "How does Web3 impact the future ?", date: new Date(), author: "Samantha Lee", authorImg: profilePict, contents: "Web3 has the potential to revolutionize various industries, including finance, healthcare, and social media, by providing a decentralized and transparent framework for interactions and transactions.", category: "Web3", image: solanaPict },
    { id: 6, title: "What is Web3 ?", date: new Date(), author: "Alex Chen", authorImg: profilePict, contents: "Web3 refers to the next generation of the internet, where decentralized technologies like blockchain and cryptocurrencies enable users to have more control over their data and interactions.", category: "Web3", image: EthPict },
    { id: 7, title: "How does Web3 impact the future ?", date: new Date(), author: "Samantha Lee", authorImg: profilePict, contents: "Web3 has the potential to revolutionize various industries, including finance, healthcare, and social media, by providing a decentralized and transparent framework for interactions and transactions.", category: "Web3", image: solanaPict },
]

const dummyMustRead = [
     { id: 0, title: "What is Web3 ?", date: new Date(), author: "Alex Chen", authorImg: profilePict, contents: "Web3 refers to the next generation of the internet, where decentralized technologies like blockchain and cryptocurrencies enable users to have more control over their data and interactions.", category: "Web3", image: EthPict },
    { id: 1, title: "How does Web3 impact the future ?", date: new Date(), author: "Samantha Lee", authorImg: profilePict, contents: "Web3 has the potential to revolutionize various industries, including finance, healthcare, and social media, by providing a decentralized and transparent framework for interactions and transactions.", category: "Web3", image: solanaPict },
]

const dummyEditorsPick = [
     { id: 0, title: "What is Web3 ?", date: new Date(), author: "Alex Chen", authorImg: profilePict, contents: "Web3 refers to the next generation of the internet, where decentralized technologies like blockchain and cryptocurrencies enable users to have more control over their data and interactions.", category: "Web3", image: EthPict },
    { id: 1, title: "How does Web3 impact the future ?", date: new Date(), author: "Samantha Lee", authorImg: profilePict, contents: "Web3 has the potential to revolutionize various industries, including finance, healthcare, and social media, by providing a decentralized and transparent framework for interactions and transactions.", category: "Web3", image: solanaPict },
    { id: 2, title: "How does Web3 impact the future ?", date: new Date(), author: "Samantha Lee", authorImg: profilePict, contents: "Web3 has the potential to revolutionize various industries, including finance, healthcare, and social media, by providing a decentralized and transparent framework for interactions and transactions.", category: "Web3", image: guerilla },
]

const postTags = [
    { id: 0, tag: "All", isSelected: false },
    { id: 1, tag: "Defi", isSelected: false },
    { id: 2, tag: "Dex", isSelected: false },
    { id: 3, tag: "Blockchain", isSelected: false },
    { id: 4, tag: "Web3", isSelected: false },
    { id: 5, tag: "Rwa", isSelected: false },
    { id: 6, tag: "Cryptocurrency", isSelected: false },
]

const relatedContents = [
    { id: 0, title: "How to frontrun ?", tag: "Defi" },
    { id: 1, title: "How to frontrun ?", tag: "Defi" },
    { id: 2, title: "How to frontrun ?", tag: "Defi" },
    { id: 3, title: "How to frontrun ?", tag: "Defi" },
    { id: 4, title: "How to frontrun ?", tag: "Defi" },
]

// dummy tabs on profile page
const profileTabs = [
    { id: 0, title: "My Posts", isActive: false },
    { id: 1, title: "Liked Posts", isActive: false },
]

export { navLists, postTags, relatedContents, dummyPosts, dummyMustRead, dummyEditorsPick, profileTabs }