export const getUserLoginStatus = () => {
  return localStorage.getItem('user') ? true : false
}