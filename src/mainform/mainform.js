import React from 'react';

export default class Form extends React.Component{

    state = {
        usersearch: this.props.state,
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        // need to pass the state to parent
    }

    handleSearch = (value) => {
        this.setState({
            usersearch: value,
        })
    }

    render(){
        return(
            <div>
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="user-search">Search: </label>
                    <input type="text" 
                        id="user-search"
                        onChange={(e) => this.handleSearch(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}