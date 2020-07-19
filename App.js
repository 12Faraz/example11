import React ,{Component} from 'react';
const users = [
  {
    name : "Faraz",
    handle : "@Frzmr15*",
    link : "https://www.facebook.com",
    comments : 2,
  },
  {
    name : "Fahad", 
    handle : "@Fh3d",
    link : "https://www.google.com",
    comments : 5,
  },
];
class App extends Component{
  render (){
    return (
      <div className="App">
        {users.map((item)=>{
          return <div>{item.name}</div>
        })}
        
      </div>
    );
  }
}


export default App;
