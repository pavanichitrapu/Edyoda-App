
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './Components/TopBar/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './ContainerPages/HomePage/HomePage';
import TopicDetailsPage from './ContainerPages/TopicsDetailsPage/TopicDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        
        <div className={classes.Content}>
            <Route exact path = "/HomePage" component={HomePage} />
            <Route path="/CourseInfo/" component={TopicDetailsPage} />
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
