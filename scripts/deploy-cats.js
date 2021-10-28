

  const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Sus Cat", "Street Cat", "Sleepy Cat", "Chill Ginger", "Seen Some Things Cat", "Eyes Cat", "Kitten Gang"],       // Names
        ["https://cdn.pixabay.com/photo/2020/09/27/09/34/cats-5606202__340.jpg", // Images
        "https://images.squarespace-cdn.com/content/v1/5ed560580ac03e4f6cc34215/1596072868235-0Y0JFC4YTNPAFLK73RUT/What+Happens+When+You+Feed+Feral+Cats_Article+Photo_01.jpeg", 
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/03/03/Pictures/_4419b1ea-5d2b-11ea-be04-6cf974e2d9f7.jpg",
        "https://meanderingwild.com/wp-content/uploads/2018/05/marrakech-cat-ginger.jpg",
        "https://semfgnqp2z.exactdn.com/wp-content/uploads/2017/04/feral-cat.jpg?strip=all&lossy=1&ssl=1",
        "https://s30379.pcdn.co/wp-content/uploads/2019/09/p1cuv198jk1t3oief1vesoae1rnq6.jpg",
        "https://static.toiimg.com/photo/80225221.cms"],
        [150, 500, 300, 150, 300, 200, 400],                    // HP values
        [100, 25, 50, 100, 50, 75, 35],                       // Attack damage values
        "Racooon", // Boss name
        "https://images.dailyhive.com/20200603152104/shutterstock_1172774881.jpg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");
  
    txn = await gameContract.mintCharacterNFT(3);
    await txn.wait();
    console.log("Minted NFT #4");

    txn = await gameContract.mintCharacterNFT(4);
    await txn.wait();
    console.log("Minted NFT #5");

    txn = await gameContract.mintCharacterNFT(5);
    await txn.wait();
    console.log("Minted NFT #6");

    txn = await gameContract.mintCharacterNFT(6);
    await txn.wait();
    console.log("Minted NFT #7");
  
    console.log("Done deploying and minting!");
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();