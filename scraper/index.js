const axios = require('axios');
const db = require('../db/models');

const MAX_REQUESTS = 100000;
const RESULTS_PER_REQUEST = 100;
let start = 0;

const getGames = async () => {
  for (let i = 0; i < MAX_REQUESTS; i += 1) {
    console.time('request ' + i)
    const results = await axios.get(`https://games.roblox.com/v1/games/list?model.startRows=${start}&model.maxRows=${RESULTS_PER_REQUEST}`)
    if (!results.data.games || !results.data.games.length) {
      console.log('End of paging.');
      return;
    }

    for (let j = 0; j < results.data.games.length; j++) {
      const result = results.data.games[j];
      const game = {
        name: result.name,
        placeId: result.placeId,
        universeId: result.universeId,
        creatorName: result.creatorName,
        creatorId: result.creatorId,
        upVotes: result.totalUpVotes,
        downVotes: result.totalDownVotes,
        imageToken: result.imageToken,
        url: `https://www.roblox.com/games/${result.placeId}/${result.name}`
      };

      // const place = await getGameData(game)

      // game.description = place.data.description;
      // game.visits = place.data.visits;
      // game.updatedAt = place.data.updated;
      // game.createdAt = place.data.created;

      try {
        db.game.upsert(game);
      } catch (err) {
        console.error(err);
        console.log(result);
      }
    }
    console.timeEnd('request ' + i)
    start += RESULTS_PER_REQUEST;
  }
}

const getGameData = (game) => {
  return axios.get(`https://games.roblox.com/v1/games/${game.universeId}`)
}

getGames();

