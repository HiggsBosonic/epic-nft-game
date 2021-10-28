

  const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Sus", "Chill Ginger", "Orange Duo", "Eyes Cat", "Rach Bro's"],       // Names
        ["https://imgur.com/UXcZH3q",
        "https://imgur.com/n23oH24",
        "https://imgur.com/jZ0ZDtq",
        "https://imgur.com/IGw3hwD",
        "https://imgur.com/2EXdZdJ",
      ],
        [150, 500, 300, 150, 400],                    // HP values
        [100, 25, 50, 100, 35],                       // Attack damage values
        "Racooon Boss", // Boss name
        "https://imgur.com/G5BiEQm", // Boss image
        500, // Boss hp
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