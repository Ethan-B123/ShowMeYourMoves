import ip from '../../ip_file';

export const getNearbyPlayers = coords => {
  var data = new FormData();
  data.append( "loaction", JSON.stringify( coords ) );


  return fetch(`${ip}/api/TODO`, {
    method: 'get',
    body: data
  });
};
