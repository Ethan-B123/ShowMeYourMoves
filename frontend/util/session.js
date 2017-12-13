import ip from '../../ip_file';

export const postUser = user => (
  fetch(`${ip}/api/users`, {
    method: 'POST',
    body: JSON.stringify({ user })
  })
);

export const postSession = () => (
  fetch(`${ip}/api/session`, {
    method: 'POST'
  })
);

export const deleteSession = () => (
  fetch(`${ip}/api/session`, {
    method: 'delete'
  })
);
