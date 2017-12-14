import ip from '../../ip_file';

export const postUser = user => {
  var data = new FormData();
  data.append( "user", JSON.stringify( user ) );
  return fetch(`${ip}/api/users`, {
    method: 'POST',
    body: JSON.stringify( user )
  })
};

export const postSession = user => {

  var data = new FormData();
  data.append( "user", JSON.stringify( user ) );

  return fetch(`${ip}/api/session`, {
    method: 'POST',
    body: data
  })
};

export const deleteSession = () => (
  fetch(`${ip}/api/session`, {
    method: 'delete'
  })
);
