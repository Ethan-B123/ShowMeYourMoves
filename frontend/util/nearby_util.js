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
        resolve(resJ)
      }
    });
  });
};


export const getNearbyEvents = coords => {
  var data = new FormData();
  data.append( "event", JSON.stringify(
    {
      lat: coords.latitude,
      lng: coords.longitude
    }
  ));
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/nearby_events_index`, {
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


export const postEvent = eventDetails => {
  var data = new FormData();
  data.append( "event", JSON.stringify( eventDetails ));
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/nearby_events`, {
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


export const postPlayer = coords => {
  var data = new FormData();
  data.append( "nearby_player", JSON.stringify(
    {
      lat: coords.latitude,
      lng: coords.longitude
    }
  ));
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/nearby_players`, {
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
