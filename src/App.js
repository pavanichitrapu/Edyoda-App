
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './Components/TopBar/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './ContainerPages/HomePage/HomePage';
<<<<<<< HEAD
import TopicDetailsPage from './ContainerPages/TopicsDetailsPage/TopicDetailsPage';
=======
import ProgramDetail from './ContainerPages/ProgramDetailScreen/ProgramDetail';
import Curriculum from './ContainerPages/CurriculumPage/Curriculum';
import GradesPage from './ContainerPages/GradesPage/GradesPage';

>>>>>>> c183f8cf92f2cf1ce9f0d62901052237bd667378

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        
        <div className={classes.Content}>
            <Route exact path = "/HomePage" component={HomePage} />
<<<<<<< HEAD
            <Route path="/CourseInfo/" component={TopicDetailsPage} />
=======
            <Route path="/programdetailscreen" component={ProgramDetail}/>
      <Route path="/curriculumpage" component={Curriculum}/>
      <Route path="/gradespage" component={GradesPage}/>
>>>>>>> c183f8cf92f2cf1ce9f0d62901052237bd667378
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
