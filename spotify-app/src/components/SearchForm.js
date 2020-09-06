import React from "react";
import SearchField from './SearchField';
import TypeButtonsList from "./TypeButtonsList";
import LimitButtonsList from './LimitButtonsList';


export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        type : '',
        limit: '',
    }

    this.changeLimit = this.changeLimit.bind(this);
    this.changeLType = this.changeLType.bind(this)
    
}

changeLimit (value){
  this.setState({
      limit : value
  })
  console.log('value', value);
}

changeLType (value) {
  this.setState({
    type : value
})
console.log('type', value);
}


    render () {
      const { type,  limit } = this.state;
        return (
          <div className="form-container">
              <form >
                <SearchField type = {type} limit = {limit}/>
                <TypeButtonsList  setValue={this.changeLType} limit = {limit}/>
                <LimitButtonsList setValue={this.changeLimit} type = {type}/>
              </form>
          </div>
        )
    }


}
