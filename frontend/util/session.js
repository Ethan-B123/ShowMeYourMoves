import ip from '../../ip_file';

export const postUser = () => (
  fetch(`${ip}/api/users`, {
    method: 'POST'
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

