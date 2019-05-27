import React, {Component} from 'react'
import data from './Data'

class Body extends Component {
    constructor() {
        super() 
    
        this.state = {
          data: data,
        }
    }
    render() {
       let index=this.state.index
        return(
            <div className='body'>
                <div>
                <h1 className='name'>{this.props.data[this.props.index].name.first} {this.props.data[this.props.index].name.last} </h1>
                <h2>From: {this.props.data[this.props.index].city},{this.props.data[this.props.index].country}</h2>
                <h2>Job Title: {this.props.data[this.props.index].title}</h2>
                <h2>Employer: {this.props.data[this.props.index].employer}</h2>
                <ol> Favorite Movies:
                    <li>{this.props.data[this.props.index].favoriteMovies[0]}</li>
                    <li>{this.props.data[this.props.index].favoriteMovies[1]}</li>
                    <li>{this.props.data[this.props.index].favoriteMovies[2]}</li>
                </ol>
                </div>
                <div>
                    <h3 className='number'>{this.props.index +1}/25</h3>
                </div>
         
            </div>
        )
    }
}

export default Body