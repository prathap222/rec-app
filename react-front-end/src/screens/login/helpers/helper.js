import axios from 'axios';


const attemptLogin = (event, email, password, setError, setUser) => {
  event.preventDefault();
  const userInput = new URLSearchParams();
  userInput.append('email', email)
  userInput.append('password', password)
  const header = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
  axios.post('/users', userInput, header)
        .then((res) => {
          console.log(res)
          if (res.data) {
            setUser({name: res.data.user.first_name, id: res.data.user.id});
          } else {
            setError('User not found')
          }
        })
        .catch(e => console.error(e))
}

export default attemptLogin;
