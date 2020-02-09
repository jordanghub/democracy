export const logoutActions = (res) => {
  const time = new Date();
  time.setTime(time.getTime() -500);

  res.setHeader('Set-Cookie', [`token=; Expires=${time.toUTCString()}; HttpOnly;`, `refresh_token=; Expires=${time.toUTCString()}; HttpOnly;`])
  

}