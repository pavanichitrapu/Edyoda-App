import React from 'react';
import classes from './Curriculum.module.css';
import { Link } from 'react-router-dom';
import AWSIcon from '../../Assets/aws.png';
import Accordion from '../../Components/Accordion/Accordion';



export default function Curriculum(){
    return(
        <div className={classes.CurriculumMainContainer}>
           <div className={classes.NavWrapper}>
           <Link className={[classes.NavLinks, classes.Active].join(' ')} to="/curriculumpage">Units</Link>
              <Link className={classes.NavLinks} to="/gradespage">Grades</Link>
            
           </div>

          <div className={classes.ModuleDetailContainer}>
              <div className={classes.LeftSectionWrapper}>

                     <div className={classes.ModuleDetailWrapper}>
                        <div className={classes.ModuleIconMegaWrapper}>
                            <div className={classes.IconWrapper}>
                              <img className={classes.Icon} src={AWSIcon} alt="AWSIcon"/>
                            </div>
                            <div className={classes.IconTextWrapper}>
                               <span className={classes.IconText}>
                               Intro to AWS
                               </span>
                            </div>
                        </div>

                        <div className={classes.PerformancesWrapper}>
                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Grades :</label>
                                <span>NA</span>
                            </div>

                            <div className={classes.LabelWrapper}>
                                <label className={classes.Label}>Total Attendance :</label>
                                <span>20%</span>
                            </div>

                            <div className={classes.LabelWrapperBottom}>
                                <label className={classes.LabelBottom}>Last Week Attendance:</label>
                                <span className={classes.OnlySpan}>20%</span>
                            </div>

                        </div>
                     </div>

                       <div className={classes.ModulePlanWrapper}>
                           <div className={classes.ModuleHeader}>
                               
					module plan
				
                           </div>
                           <div className={classes.ModuleText}>
                           Week - 1
                           </div>
                       </div>
              </div>

              <div className={classes.RightSectionWrapper}>
              <Accordion/>
              <Accordion/>
              <Accordion/>
              <Accordion/>
              <Accordion/>
              </div>

          </div>
        </div>
    )
}