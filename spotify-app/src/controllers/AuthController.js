import React from 'react';
import  {client_id, client_secret,  redirect_uri, authLink} from '../config';



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
            if(!this.state.accessToken) {
              const {access_token, refresh_token, token_type} = data;
              this.setState({
                accessToken: access_token,
                refreshToken: refresh_token,
                tokenType: token_type
              });
            }
          })
          .catch(err => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
        }
    }

    render() {
        return (
            <>
            <h1 className='login__title'>Welcome to Spotify</h1> 
            {this.state.accessToken
            ?
            <p>you are logged in  Spotify</p>
            : <p className='login__link'>TO CONTINUE YOU NEED TO <a href={authLink}> LOG IN</a></p>
            }
            </>  
        )
    }
    
}
