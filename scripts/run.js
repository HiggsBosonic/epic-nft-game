const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Orange Duo", "Sus Cat", "Chill Cat", "Sleepy Cat", "Seen Some Things Cat", "Eyes Cat", "Kitten Gang", "Rach Bro's"],       // Names
      ["Qma9Kw9JWeY91QHWn91jJ1TX84b4ZhAk21YzcL1YMWbjYu",
      "QmTvDk69xhh6zWweisXKw6CQcZuDKohTAwjf6ZTHLASn66",
      "Qmcf3oPf8kY87rme98gSyPagCU3AeC4Qr3mCRYYaGTiyii",
      "QmevcztcDvTVhKUuyNVCXLmWkSa1ppP2ujtbaPxN7L2QjJ",
      "QmR8dFkBMAgsFqMerk8Spdxp9Vu5GnZbXANXpKec2GGmRS",
      "Qmao7vLBdj1Vo46hy5x8AQ7o85vkB1esA4n1Em6QTiy15Y",
      "QmUhpjZPDVFv7qqTfoSc6kx8nRcqiU54f2qwhu8ePHnvZ5",
      "QmPwXStKBx6RMtVgje72LBQtCozMYx5ZVWbf2vWCyzBMRf",
    ],
      [150, 500, 300, 150, 400, 500, 300, 400],                    // HP values
      [100, 25, 50, 100, 35, 25, 50, 100],                       // Attack damage values
      "Racooon Boss", // Boss name
      "QmTwMoByYR49BZsH73HtPD6U1jMEmCdxVMjYob9MQxnWrL", // Boss image
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
  