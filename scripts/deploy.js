

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
        [100, 25, 50, 100, 50, 75, 35],                       // Attack damage values
        "Diablo", // Boss name
        "https://static.wikia.nocookie.net/diablo_gamepedia/images/9/92/Diablo_%28Diablo_II%29.gif/revision/latest/scale-to-width-down/135?cb=20090517132643", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  
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