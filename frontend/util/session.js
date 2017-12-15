import ip from '../../ip_file';

export const postUser = user => {
  const data = new FormData();
  data.append( "user", JSON.stringify( user ) );


  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/users`, {
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

export const postSession = async user => {

  const data = new FormData();
  data.append( "user", JSON.stringify( user ) );
  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/session`, {
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

export const updateUser = user => {
  const data = new FormData();
  data.append("user", JSON.stringify(user));


  return new Promise((resolve, reject) => {
    fetch(`${ip}/api/users${user.id}`, {
      method: 'PATCH',
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
}

export const deleteSession = () => (
  fetch(`${ip}/api/session`, {
    method: 'delete'
  })
);
