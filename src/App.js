import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class test{
  constructor(color){
    this.color = color;
    
  }

  myFunction = ()=>{
    document.getElementById("bttt").innerHTML += this.color;
  }
}
const yidne = new test("red");
yidne.myFunction();

document.getElementById("bttt").addEventListener('click',yidne.myFunction);



export default test;
