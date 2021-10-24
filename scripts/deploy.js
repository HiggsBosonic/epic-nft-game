const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Amazon", "Barbarian", "Assasin", "Sorceress", "Paladin", "Necromancer", "Druid"],       // Names
        ["https://static.wikia.nocookie.net/diablo_gamepedia/images/9/9c/Amazon.gif/revision/latest?cb=20090419123107", // Images
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/a/a7/Barbarian_diablo_II.gif/revision/latest?cb=20090419123430", 
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/3/37/Assassin.gif/revision/latest?cb=20090419123240",
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/f/f2/Sorceress.gif/revision/latest?cb=20090419123520",
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/c/c3/Paladin.gif/revision/latest?cb=20090419123703",
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/7/73/Necromancer.gif/revision/latest?cb=20090419123323",
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/a/a8/Druid.gif/revision/latest?cb=20090419123624"],
        [150, 500, 300, 150, 300, 200, 400],                    // HP values
        [100, 25, 50, 100, 50, 75, 35]                       // Attack damage values
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