
import './App.css';

//import React, { Component } from 'react'
import React, { useState } from 'react'

import Navbar from './Components/Navbar';
import News  from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   // apiKey=process.env.REACT_APP_NEWS_API
//   state ={
//     progress :0
//   }
//  setProgress = (progress) => {
//   this.setState({progress :progress})
//  }

//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>

//         <LoadingBar
//         color='#f11946'
//         height={3}
//         progress={this.state.progress}

//       />

//         <Routes>
//           <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={5} country= 'in' category="general" />}>
          
//           </Route>
          
//           <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={5} country= 'in' category="business" />}>
          
//           </Route>

//           <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={5} country= 'in' category="science" />}>
          
//           </Route>

//           <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={5} country= 'in' category="general" />}>
//           </Route>

//           <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={5} country= 'in' category="entertainment" />}>
          
//           </Route>
//           <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={5} country= 'in' category="health" />}>
          
//           </Route>
//           <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={5} country= 'in' category="technology" />}>
          
//           </Route>
//           <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={5} country= 'in' category="sports" />}>
          
//           </Route>
          
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

const App = () => {
  // apiKey=process.env.REACT_APP_NEWS_API
  

 const[progress,setProgress]=useState(0);


    return (
      <div>
        <Router>
        <Navbar/>

        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}

      />

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={5} country= 'in' category="general" />}>
          
          </Route>
          
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country= 'in' category="business" />}>
          
          </Route>

          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={5} country= 'in' category="science" />}>
          
          </Route>

          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={5} country= 'in' category="general" />}>
          </Route>

          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={5} country= 'in' category="entertainment" />}>
          
          </Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={5} country= 'in' category="health" />}>
          
          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={5} country= 'in' category="technology" />}>
          
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={5} country= 'in' category="sports" />}>
          
          </Route>
          
        </Routes>
        </Router>
      </div>
    )
  }

  export default App;