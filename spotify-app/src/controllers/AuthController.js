import React from 'react';
import { Redirect } from "react-router-dom";
import  {client_id, client_secret,  redirect_uri, authLink} from '../config';
import Home from '../components/Home'
import {connect} from 'react-redux';


const AuthController = class extends React.Component {
    constructor() {
        super()
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
           
          this.props.insertTokens(data)
          })
          .catch(err => {
            console.log('Ошибка. Запрос не выполнен: ', err);
          })
        }
    }

    // logOut = () => {
    
    // }

    render() {   
      if(!this.props.tokenReducer.tokens) {
        return (
          <div className="login">
          <p className='login__link'>TO CONTINUE YOU NEED TO <a href={authLink}> LOG IN</a></p>
          </div>
        )
      }  else 
        return (
        
          <div>
            {/* <p>you are logged in  Spotify <button onClick={this.logOut}>LOG OUT</button></p> */}
        {/* <Home accessToken = {accessToken}/> */}
        <Home />

        {/* <Redirect to='/home' /> */}

          </div>
        )
    } 
}

const actionMaps = (dispatch) => ({
   insertTokens: (tokens) => dispatch({type: 'GET_TOKEN', tokens: tokens})
});

const propMaps = ({tokenReducer}) => ({
  tokenReducer
})
export default  connect(propMaps, actionMaps)(AuthController)



