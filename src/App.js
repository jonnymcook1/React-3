import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Body from './Body'
import data from './Data'

class App extends Component {
  constructor() {
    super() 

    this.state = {
      data: data,
      index: 0
    }

    this.handleClickNext = this.handleClickNext.bind(this)
    this.handleClickPrev = this.handleClickPrev.bind(this)
  }


  handleClickNext() {
    let index = this.state.index
    if(this.state.index >= data.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: index + 1})
    }
  }

  handleClickPrev() {
    console.log(data)
    let index = this.state.index
    if(this.state.index === 0) {
      this.setState({index: this.state.data.length - 1})
    } else {
      this.setState({index: index-1})
    }
    
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Body index={this.state.index} data={this.state.data} />
        <div className='buttonBox'>
        <button id='prev' onClick={this.handleClickPrev}> &#60;Previous </button>
        <button id='next' onClick={this.handleClickNext}> Next&#62; </button>
        </div>
        
      </div>

      
    )
  }  
}

export default App;
