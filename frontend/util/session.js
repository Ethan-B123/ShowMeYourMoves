import ip from '../../ip_file';

export const postUser = user => (
  fetch(`http://192.168.3.102:3000/api/users`, {
    method: 'POST',
    body: JSON.stringify({ user })
  })
);

export const postSession = user => (
  fetch(`http://192.168.3.102:3000/api/session`, {
    method: 'POST',
    body: JSON.stringify({ user })
  })
);

export const deleteSession = () => (
  fetch(`${ip}/api/session`, {
    method: 'delete'
  })
);
