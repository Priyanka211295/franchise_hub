export const isAuthenticated = () => {
    return localStorage.getItem("uid") !== null;
};
  