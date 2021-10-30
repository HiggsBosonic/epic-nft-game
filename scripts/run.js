const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Sus", "Chill Ginger", "Orange Duo", "Eyes Cat", "Rach Bro's"],       // Names
      ["https://i.imgur.com/UXcZH3q.jpg",
      "https://i.imgur.com/n23oH24.jpg",
      "https://i.imgur.com/jZ0ZDtq.jpg",
      "https://i.imgur.com/IGw3hwD.jpg",
      "https://i.imgur.com/2EXdZdJ.jpg",
    ],
      [150, 500, 300, 150, 400],                    // HP values
      [100, 25, 50, 100, 35],                       // Attack damage values
      "Racooon Boss", // Boss name
      "https://i.imgur.com/G5BiEQm.jpg", // Boss image
      500, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(4);
    await txn.wait();
    
    // Get the value of the NFT's URI.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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
  