import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Work from './work';
import Skill from './skill';
import Organization from './organization';


class Resume extends Component {
    render() {
        return(
            <Grid className="resume-grid">
                <Cell className="resume-left-col" col={4}>

                    <div style={{textAlign: 'center'}}>
                        
                    </div>

                    <h2 style={{paddingTop: '1em', textAlign: 'center'}}>Jake Sonnier</h2>
                    <hr style={{borderTop: '3px solid #434343'}} />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    <br></br>
                    <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    <br></br>
                    <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p>

                    {/*                     
                    <h5>Address  |  5322 LA Hwy 343</h5>
                    <p>5322 LA Hwy 343</p>
                    <h4>Phone</h4>
                    <p>(337)-517-2284</p>
                    <h4>Email</h4>
                    <p>jcrsonnier@gmail.com</p> 
                    */}

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
                        startYear={2018}
                        endYear={2019}
                        projectName={"CloudSat 8 Weather Balloon"}
                        projectRole={"Lead Software Engineer"}
                        projectDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Experience
                        startYear={2019}
                        endYear={2020}
                        projectName={"CAPE-3"}
                        projectRole={"Software Engineer"}
                        projectDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Experience
                        startYear={2019}
                        endYear={2020}
                        projectName={"ESG Grid Radio Board"}
                        projectRole={"Software Engineer"}
                        projectDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Experience
                        startYear={2019}
                        endYear={2020}
                        projectName={"CAPE-4"}
                        projectRole={"Radio Systems Team Lead"}
                        projectDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <hr style={{borderTop: '3px solid #d7d2cc'}} />

                    <h2>Work History</h2>

                    <Work
                        startYear={2013}
                        endYear={2019}
                        jobName={"Magdalen Place"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Work
                        startYear={2018}
                        endYear={2018}
                        jobName={"Rouses Market"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Work
                        startYear={2016}
                        endYear={2017}
                        jobName={"Sonnier Law Firm"}
                        jobDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <hr style={{borderTop: '3px solid #d7d2cc'}} />

                    <h2>Skills</h2>
                    <Skill
                        skill={"C / C++   "}
                        progress={80}
                    />

                    <Skill
                        skill={"Java"}
                        progress={70}
                    />

                    <Skill
                        skill={"C#        "}
                        progress={60}
                    />

                    <Skill
                        skill={"JavaScript"}
                        progress={40}
                    />

                    <Skill
                        skill={"HTML"}
                        progress={50}
                    />

                    <Skill
                        skill={"Git"}
                        progress={90}
                    />

                    <hr style={{borderTop: '3px solid #d7d2cc'}} />

                    <h2>Organizations</h2>

                    <Organization
                        startYear={2018}
                        endYear={2020}
                        orgName={"C.A.P.E."}
                        orgDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Organization
                        startYear={2019}
                        endYear={2020}
                        orgName={"Peer Mentoring"}
                        orgDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                    <Organization
                        startYear={2018}
                        endYear={2020}
                        orgName={"A.C.M."}
                        orgDescription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    />

                </Cell>
            </Grid>
        )
    }
}

export default Resume;