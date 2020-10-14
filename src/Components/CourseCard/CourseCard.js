import React, { Component } from 'react';
import classes from './CourseCard.module.css';
import { SubHeading } from '../Heading/Heading';
const styles = {
    fontStyle : 'italic'
}

const CourseCard = (props) => {
    return(
                
                <div className={classes.CourseCard}>
                        <div className={classes.Thumbnail}>
                                <img className={classes.CourseLogo}  
                                        src={props.Courselogo} 
                                        alt="Course Logo" />
                        </div>
                        <div className={classes.CardInfo}>
                                <h3 className={classes.Title} > {props.Coursetitle} </h3>
                                <div style={styles}>
                                <SubHeading label={props.CourseUnits} />
                                </div>
                                
                        </div>
            
                </div>
       
        
    );
}
export default CourseCard;