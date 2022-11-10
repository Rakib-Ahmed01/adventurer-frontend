function postToLogin(email, name) {
  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, name }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem('access-token', data.accessToken);
    })
    .catch((err) => console.log(err));
}

export default postToLogin;
