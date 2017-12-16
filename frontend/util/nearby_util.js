import ip from '../../ip_file';

export const getNearbyPlayers = coords => {
  var data = new FormData();
  data.append( "nearby_player", JSON.stringify(
    {
      lat: coords.latitude,
      lng: coords.longitude
    }
  ));
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/nearby_players_index`, {
      method: 'POST',
      body: data
    }).then(async (fullRes) => {
      resJ = await fullRes.json()
      if (fullRes.status > 300) {
        reject(resJ)
      } else {
        debugger
        resolve(resJ)
      }
    });
  });
};


export const getNearbyEvents = coords => {
  var data = new FormData();
  data.append( "nearby_player", JSON.stringify(
    {
      lat: coords.latitude,
      lng: coords.longitude
    }
  ));
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/nearby_players_index`, {
      method: 'POST',
      body: data
    }).then(async (fullRes) => {
      resJ = await fullRes.json()
      if (fullRes.status > 300) {
        reject(resJ)
      } else {
        resolve(resJ)
      }
    });
  });
};
