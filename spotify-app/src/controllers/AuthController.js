import React from 'react';
import { Redirect } from "react-router-dom";
import  {client_id, client_secret,  redirect_uri, authLink} from '../config';
import Home from '../components/Home'



export default class AuthController extends React.Component {
    constructor() {
        super()

        this.state = {
          isAuthenticatedWithSpotify: false,
          accessToken: '',
          refreshToken: '',
          tokenType: ''
        }
    }


    
    componentDidMount() {
        const code = window.location.search; //возвращает нам кверистрингу с "?" в начале
        const token = localStorage.getItem('accessToken');
        console.log('ls', token)
        if (token){
          this.setState({
              accessToken: localStorage.getItem('accessToken'),
              refreshToken: localStorage.getItem('refreshToken'),
              tokenType: localStorage.getItem('tokenType'),
              isAuthenticatedWithSpotify : true
          })
      }

       else 
       if (code && code.includes('code') && !this.accessToken) {
          const tokenLink = `https://accounts.spotify.com/api/token`;
          const bodyLink = `grant_type=authorization_code&code=${code.split('=')[1]}&redirect_uri=${redirect_uri}`

          fetch(tokenLink, {
            method: 'POST',
            headers: {
              "Authorization": 'Basic ' + btoa(client_id + ':' + client_secret),
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyLink
          })
          .then(res => res.json())
          .then(data => {
            console.log('data', data) // {access_token: jhjshjfjl}
            if(!this.state.accessToken) {
              const {access_token, refresh_token, token_type} = data;
              localStorage.setItem('accessToken', access_token);
              localStorage.setItem('refreshToken', refresh_token);
              localStorage.setItem('tokenType', token_type);
              this.setState({
                accessToken: access_token,
                refreshToken: refresh_token,
                tokenType: token_type,
                isAuthenticatedWithSpotify: true,
              });
            }
          })
          .catch(err => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
        }
    }

    logOut = () => {
      console.log('click')
      localStorage.setItem('isAuthenticatedWithSpotify', false);
      this.setState({ isAuthenticatedWithSpotify: false });
      localStorage.clear();
      localStorage.setItem('accessToken', '');
      this.setState({ accessToken: '' });
    }

    render() {
      const accessToken = this.state.accessToken;
      
      console.log('isAuth', accessToken);
      const { isAuthenticatedWithSpotify  } = this.state;
   

      if(!isAuthenticatedWithSpotify) {
        return (
          <p className='login__link'>TO CONTINUE YOU NEED TO <a href={authLink}> LOG IN</a></p>
        )
      }  else 
        return (
        
          <div>Hi!
            {/* <p>you are logged in  Spotify <button onClick={this.logOut}>LOG OUT</button></p> */}
        <p> Token:{accessToken}</p>
        <Redirect to='/home' />
        {/* <Home accessToken = {accessToken}/> */}
          </div>
           
        )
    }
    
}
