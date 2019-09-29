import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';


class Resume extends Component {
    render() {
        return(
            <Grid className="resume-grid">
                <Cell className="resume-left-col" col={4}>

                    <div style={{textAlign: 'center'}}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                        />
                    </div>

                    <h2 style={{paddingTop: '1em', textAlign: 'center'}}>Jake Sonnier</h2>
                    <hr style={{borderTop: '3px solid #434343'}} />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>

                    <h4>Address</h4>
                    <p>5322 LA Hwy 343</p>
                    <h4>Phone</h4>
                    <p>(337)-517-2284</p>
                    <h4>Email</h4>
                    <p>jcrsonnier@gmail.com</p>
                    <hr style={{borderTop: '3px solid #434343'}} />
                </Cell>

                <Cell className="resume-right-col" col={8}>
                    
                    <h2>Education</h2>

                    <Education
                        startYear={2013}
                        endYear={2017}
                        schoolName={"Lafayette High School"}
                        schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Education
                        startYear={2017}
                        endYear={2021}
                        schoolName={"University of Louisiana at Lafayette"}
                        schoolDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <hr style={{borderTop: '3px solid #d7d2cc'}} />

                    <h2>Experience</h2>

                    <Experience
                        startYear={2013}
                        endYear={2019}
                        jobName={"Magdalen Place"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Experience
                        startYear={2018}
                        endYear={2018}
                        jobName={"Rouses Market"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Experience
                        startYear={2016}
                        endYear={2017}
                        jobName={"Sonnier Law Firm"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <hr style={{borderTop: '3px solid #d7d2cc'}} />

                    <h2>Skills</h2>
                    <Skill
                        skill={"Skill 1"}
                        progress={80}
                    />

                    <Skill
                        skill={"Skill 2"}
                        progress={60}
                    />

                    <Skill
                        skill={"Skill 3"}
                        progress={90}
                    />

                    <Skill
                        skill={"Skill 4"}
                        progress={40}
                    />

                </Cell>
            </Grid>
        )
    }
}

export default Resume;