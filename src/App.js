import React , {Component} from 'react';
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cell: '',
      KnightMoves: []
    }
  }
  getKnightMoves = () => {
    const { cell } = this.state;
    let x = parseInt(cell.substring(0,1).charCodeAt()-64);
    let y = parseInt(cell.substring(1,2))
    let knightmovesData = [
      {x:2,y:-1},{x:2,y:1},{x:1,y:-2},{x:1,y:2},
      {x:-2,y:-1},{x:-2,y:1},{x:-1,y:-2},{x:-1,y:2}
    ]
    let possibleMoves = [];
    for(let m of knightmovesData) {
      let row = String.fromCharCode(x+m.x+64)
      let column = y+m.y
      possibleMoves.push(row + "" + column)
      this.setState({KnightMoves:possibleMoves});
    }
  }
  render(){
    const { KnightMoves } = this.state;
  return(
      <div className="App">
      <h1><input type="text"  onChange={(e)=>this.setState({cell:e.target.value})}  /></h1>
      <button onClick={this.getKnightMoves}>Knight Moves</button>
      <p>Movement of a knight given a chess board are </p>
      <ul>
        {KnightMoves && KnightMoves.map((moves,index) => (
          <li className="listItem" key={index}>{moves}</li>
        ))}
      </ul>
      </div>
     )
   }
 }
export default App;