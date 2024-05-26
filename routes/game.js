const gamesRouter = require("express").Router(); 
const { sendAllGames,senddeleteGame,addGameController } = require("../controllers/games");
const { getAllGames, findGameById, updateGamesFile, checkIsTitleInArray, updateGamesArray } = require('../middlewares/games')

gamesRouter.get(
    "/games", 
    getAllGames, 
    sendAllGames
);

gamesRouter.delete("/games/:id",
    getAllGames,
    findGameById, 
    updateGamesFile,
    senddeleteGame
);

gamesRouter.post(
    "/games", 
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile, 
    addGameController
);

module.exports = gamesRouter;