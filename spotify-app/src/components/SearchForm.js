import React from "react";
import SearchField from './SearchField';
import TypeButtonsList from "./TypeButtonsList";
import SearchButton from './SearchButton';
import LimitButtonsList from './LimitButtonsList';


export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        type : 'artist',
        limit: ''
    }

    this.changeLimit = this.changeLimit.bind(this);
    
}

changeLimit (value){
  this.setState({
      limit : value
  })
  console.log('value', value);
}




    render () {
  
      const { type,  limit } = this.state;
        return (
              <form className='form-container'>
                <SearchField accessToken = {this.props.accessToken} type = {type} limit = {limit}/>
                <TypeButtonsList  />
                <LimitButtonsList setValue={this.changeLimit} limit = {limit}/>
              </form>
        )
    }


}
