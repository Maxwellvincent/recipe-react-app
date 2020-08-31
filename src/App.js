import React from 'react';
import Mainform from './mainform/mainform';
import ListRecipes from './list/listrecipes';

class App extends React.Component{

  state = {
    usersearch: "pasta",
    recipes: [],

  }

  componentWillMount(){
    const APP_ID = 'c00ccffb';
    const APP_KEY = 'a13d80f7e8be3d82e6fd7814244f262b';
    fetch(`https://api.edamam.com/search?q=${this.state.usersearch}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({recipes: data.hits}))
    .catch(err => console.log(err.message))
  }


  render(){


    // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const List = this.state.recipes.map((item,i) => <ListRecipes key={i} {...item}/>);
    return (
      <div className="App">
        <header className="App-header">
            Header for Recipe App
        </header>
        <main>
          Body of App
          <Mainform state={this.state.usersearch}/>
          {List}
        </main>
      </div>
    );
  }

}

export default App;
