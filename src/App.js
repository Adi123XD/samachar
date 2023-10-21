import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import PropTypes from 'prop-types'
import LoadingBar from 'react-top-loading-bar'
// 64b4ba4d3c73400b8aa545ba85fe7852  api key
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const  App = ()=> {
  
  // apikey=process.env.REACT_APP_APIKEY;
  const apikey="64b4ba4d3c73400b8aa545ba85fe7852";
  const [progress, setProgress]=useState(0);
 
  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            {/* Actually here what is happening is that news component is already mounted so when we try to remount
            the same component with different props , react avoids it so to forcefully remount the news component 
            we pass a unique key making each news component different or unique from each other */}
            <Route exact path="/" element={<News api={apikey} setProgress={setProgress} key ={1}country={App.defaultProps.country} category="general" />} />
            <Route exact path="/Business" element={<News api={apikey} setProgress={setProgress} key ={2}country={App.defaultProps.country} category="business" />} />
            <Route exact path="/Entertainment" element={<News api={apikey} setProgress={setProgress} key ={3}country={App.defaultProps.country} category="entertainment" />} />
            <Route exact path="/Health" element={<News api={apikey} setProgress={setProgress} key ={4}country={App.defaultProps.country} category="health" />} />
            <Route exact path="/Science" element={<News api={apikey} setProgress={setProgress} key ={5}country={App.defaultProps.country} category="science" />} />
            <Route exact path="/Sports" element={<News api={apikey} setProgress={setProgress} key ={6}country={App.defaultProps.country} category="sports" />} />
            <Route exact path="/Technology" element={<News api={apikey} setProgress={setProgress} key ={7}country={App.defaultProps.country} category="technology" />} />
          </Routes>
          {/* {console.log("country is ", this.props.country)} */}
        </Router>
      </div>
    )
  
}
App.defaultProps = {
  country: 'in',
  category: 'general'
};
App.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
};
export default App


