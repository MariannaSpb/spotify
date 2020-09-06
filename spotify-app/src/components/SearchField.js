import React from "react";
import {searchEndpoint} from '../config';
import SearchButton from './SearchButton';
import {connect} from 'react-redux';

// import {fetchedData} from '../redux/actions/actions';
// import { Field, reduxForm } from 'redux-form'

const SearchField = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    handleChange = event => {
       
    this.setState({value: event.target.value});
    }

    componentDidMount() {
        console.log('TOKEN', this.props.tokenReducer.tokens.access_token)
    }


    handleSubmit(event) { //=>
        event.preventDefault();
        console.log('Отправленно: ' + this.state.value);
        // Encode spaces with the hex code %20 or +

        const searchLink = searchEndpoint + '?q=' + this.state.value.replace(/\s/g, '+')+ '&type=' + this.props.type + '&limit=' + this.props.limit;
        fetch(searchLink, {
            headers: {
                // "Authorization":" Bearer "+  this.props.accessToken,
                "Authorization":" Bearer " + this.props.tokenReducer.tokens.access_token,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            type: 'no-cors',
        })
        .then(res => res.json())
        .then(data => {
            console.log('dataFIELD', data)
            console.log('props', this.props)
           this.props.searchSuccess(data)
        })
        .catch((err) => {
            console.log('Ошибка. Запрос не выполнен: ', err);
        })

    }


                            // render () {
                            //     console.log('FIELD', this.props.accessToken)
                            //     return (
                            //           <div className="form__field">
                            //               <label className= 'form__label' htmlFor='search'>
                            //               <input className='form__input' type='text' id='search' name='searchInput' value={this.state.value} onChange={this.handleChange} placeholder='Search...' />
                            //               </label>
                            //               <SearchButton onClickHandler={this.handleSubmit} />
                            //           </div>   
                            //     )
                            // }

    render () {
        // console.log('REDUS', this.props.artistsReducer.artistData)
        console.log('PROPSFIELD', this.props);
        return (
            <div className="form__search">
            {/* //   <form className="form__field" onSubmit={this.handleSubmit}>
            // <form className="form__field" onSubmit={this.handleSubmit}> */}
                  <label className= 'form__label' htmlFor='search'>
                  <input className='form__input' type='text' id='search' name='searchInput' value={this.state.value} onChange={this.handleChange} placeholder='Search...' />
                  </label>
                  <SearchButton onClickHandler={this.handleSubmit} />
                  
            {/* //   </form>    */}

            </div>
        )
    }
}


// const actionMaps = (dispatch) => ({
//     searchData: (artistData) => dispatch({type: 'SEARCH_SUCCESS_ARTISTS', artistData: artistData})
//  });

const actionMaps = (dispatch) => ({
    insertTokens: (tokens) => dispatch({type: 'GET_TOKEN', tokens: tokens}),
    searchSuccess: (artistData) => dispatch({type: 'SEARCH_SUCCESS_ARTISTS', artistData: artistData})
 });
 
//  const propMaps = ({artistsReducer}) => ({
//     artistsReducer
//  })


const propMaps = ({tokenReducer}) => ({
    tokenReducer
  })

export default connect(propMaps, actionMaps)(SearchField)