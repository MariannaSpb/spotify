import React from "react";
import {searchEndpoint} from '../config';
import SearchButton from './SearchButton';

export default class SearchField extends React.Component {
    // state = {
    //     valueInput: '',
    //   };
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    handleChange = event => {
       
    this.setState({value: event.target.value});
    }

    // componentDidUpdate() {
    //     this.setState({value: ''});
    // }


    handleSubmit(event) {
        event.preventDefault();
        console.log('Отправленно: ' + this.state.value);
        // Encode spaces with the hex code %20 or +

        const searchLink = searchEndpoint + '?q=' + this.state.value.replace(/\s/g, '+')+ '&type=' + this.props.type + '&limit=' + this.props.limit;
        fetch(searchLink, {
            headers: {
                "Authorization":" Bearer "+  this.props.accessToken,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            type: 'no-cors',
        })
        .then(res => {
            if(res.ok) {
                console.log('res', res)
              return res.json();
            }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then(data => {
            if(data) {
                this.setState({value: ''});
                console.log('data', data)
                return data;
            }
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
        })
    }


    render () {
        return (
              <div >
                  <label className= 'form__label' htmlFor='search'>Search
                  <input className='form__input' type='text' id='search' name='searchInput' value={this.state.value} onChange={this.handleChange} placeholder='Search...' />
                  </label>
                  <SearchButton onClickHandler={this.handleSubmit} />
              </div>
        
                
        )
    }


}
