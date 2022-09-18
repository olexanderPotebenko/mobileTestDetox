import {REACT_APP_HOST} from '@env';

const signIn = async payload => {
  const request = await fetch(`${REACT_APP_HOST}/api/v1/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return request;
};

export const authApi = {signIn};
