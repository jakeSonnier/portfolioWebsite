import React, { Component } from 'react';
import {  Tabs, Tab, Grid, Cell } from 'react-mdl';
//Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton

import CloudSatPicture from '../CloudSatPic.jpg';
import CloudSatGUIPicture from '../CloudSatGUI.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                
                <Grid className="CloudSat-Projects-grid">
                <Cell className="CloudSat-left-col" col={8}>
                    <div>
                        
                        <h3>CloudSat 8 Weather Balloon Firmware</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            <br/><br/>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                            <br/><br/>
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        
                    </div>

                    <div>
                        
                        <h3>CloudSat 8 Weather Balloon Ground Station</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                            <br/><br/>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                            <br/><br/>
                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                        
                    </div>
                </Cell>

                <Cell className="CloudSat-right-col" col={4}>
                        <img
                            src={CloudSatPicture}
                            alt="weather balloon early development"
                            className="weather-balloon-img"
                        />

                        <img
                            src={CloudSatGUIPicture}
                            alt="weather balloon Ground Station"
                            className="weather-balloon-Ground-img"
                        />
                </Cell>

            </Grid>

                </div>
            )
        }

        else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">

                    <h1>CAPE-3</h1>

                </div>
            )
        }

        else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    <h1>Experimental Smartphone Grid</h1>
                </div>
            )
        }

        else if(this.state.activeTab === 3) {
            return(
                <div className="projects-grid">
                    <h1>Amateur Radio</h1>
                </div>
            )
        }

    }

    

    render() {
        return(
        <div>
            <br/><br/>
            <Tabs id="projectsTabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>CloudSat 8++</Tab>
                <Tab>CAPE-3</Tab>
                <Tab>ESG Grid</Tab>
                <Tab>Amateur Radio</Tab>
                <Tab>Other</Tab>
            </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
        </div>
        )
    }
}

export default Projects;