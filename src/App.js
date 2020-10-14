
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './Components/TopBar/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './ContainerPages/HomePage/HomePage';
import ProgramDetail from './ContainerPages/ProgramDetailScreen/ProgramDetail';
import Curriculum from './ContainerPages/CurriculumPage/Curriculum';
import GradesPage from './ContainerPages/GradesPage/GradesPage';


function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        
        <div className={classes.Content}>
            <Route exact path = "/HomePage" component={HomePage} />
            <Route path="/programdetailscreen" component={ProgramDetail}/>
      <Route path="/curriculumpage" component={Curriculum}/>
      <Route path="/gradespage" component={GradesPage}/>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
