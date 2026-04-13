const Fox = require("../models/Fox");

const FOX_API_URL = process.env.FOX_API_URL;

// GET two random fox images
const getRandomFox = async (req, res) => {
  try {
    const response1 = await fetch(FOX_API_URL);
    const data1 = await response1.json();
    const imageUrl1 = data1.image;

    const response2 = await fetch(FOX_API_URL);
    const data2 = await response2.json();
    const imageUrl2 = data2.image;

    res.json({ fox1: imageUrl1, fox2: imageUrl2 });
    console.log("Fetched two random fox images:", imageUrl1, imageUrl2);
  } catch (error) {
    console.error("Error fetching fox images:", error);
    res.status(500).json({ error: "Failed to fetch fox images" });
  }
};

// Get new Random fox images
const getNewRandomFox = async (req, res) => {
  try {
    const response1 = await fetch(FOX_API_URL);
    const data1 = await response1.json();
    const imageUrl1 = data1.image;

    const response2 = await fetch(FOX_API_URL);
    const data2 = await response2.json();
    const imageUrl2 = data2.image;

    res.json({ fox1: imageUrl1, fox2: imageUrl2 });
    console.log("Fetched new random fox images:", imageUrl1, imageUrl2);
  } catch (error) {
    console.error("Error fetching new fox images:", error);
    res.status(500).json({ error: "Failed to fetch new fox images" });
  }
};

// Register vote
const registerVote = async (req, res) => {
  try {
    const { winnerUrl, loserUrl } = req.body;

    // Register the winner fox
    let winnerFox = await Fox.findOne({ imageUrl: winnerUrl });
    if (!winnerFox) {
      winnerFox = new Fox({
        imageUrl: winnerUrl,
        votes: 1,
      });
    } else {
      winnerFox.votes += 1;
    }
    await winnerFox.save();

    // Register the loser fox
    let loserFox = await Fox.findOne({ imageUrl: loserUrl });
    if (!loserFox) {
      loserFox = new Fox({
        imageUrl: loserUrl,
        votes: 0,
      });
    }
    await loserFox.save();

    res.json({
      message: "Stemmen ble registrert.",
      votes: winnerFox.votes,
      success: true,
    });
    console.log(`Registered vote: Winner - ${winnerUrl}, Loser - ${loserUrl}`);
  } catch (error) {
    console.error("Feil ved stemmegivning:", error);
    res.status(500).json({
      success: false,
      message: "Feil ved registrering av stemme",
    });
  }
};

// Get most voted foxes
const getStats = async (req, res) => {
  try {
    const foxes = await Fox.find().sort({ votes: -1 }).limit(20);
    res.json({ foxes, message: "Statistikk hentet." });
  } catch (error) {
    console.error("Feil ved henting av statistikk:", error);
    res.status(500).json({
      message: "Feil ved henting av statistikk",
    });
  }
};

module.exports = {
  getRandomFox,
  registerVote,
  getStats,
  getNewRandomFox,
};
