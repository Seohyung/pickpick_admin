export const authProvider = {
  login: async ({ username, password }) => {
    const request = new Request(`http://localhost:4000/api/admin/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    try {
      const response = await fetch(request);
      const auth = await response.json();

      if (response.status < 200 || response.status >= 300) {
        throw new Error(auth.message);
      }
      localStorage.setItem('auth', JSON.stringify(auth));
      console.log(localStorage.auth);
      return await Promise.resolve();
    } catch (err) {
      throw new Error(err.message);
    }
  },

  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },

  checkError: (params) => {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },

  getIdentity: () => {
    return Promise.resolve();
  },

  getPermissions: (params) => {
    return Promise.resolve();
  },
};

// 참고 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

// export const authProvider = (type, params) => {
//   // when a user tries to log in
//   if (type === AUTH_LOGIN) {
//     const { username } = params;
//     localStorage.setItem('username', username);
//     return Promise.resolve();
//   }
//   // when a user tries to logout
//   if (type === AUTH_LOGOUT) {
//     localStorage.removeItem('username');
//     return Promise.resolve();
//   }
//   // when the API throws an error
//   if (type === AUTH_ERROR) {
//     const { status } = params;
//     if (status === 401 || status === 403) {
//       localStorage.removeItem('username');
//       return Promise.reject();
//     }
//     return Promise.resolve();
//   }
//   // when a user navigates to a new location
//   if (type === AUTH_CHECK) {
//     return localStorage.getItem('username')
//       ? Promise.resolve()
//       : Promise.reject();
//   }
//   return Promise.reject('Unknown Method');
// };
// 🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃🎃
