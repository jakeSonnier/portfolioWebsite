import React, { Component } from 'react';
import {  Tabs, Tab, Grid, Cell } from 'react-mdl';
//Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                
                    <h1>CloudSat 8</h1>

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
            <h1 id="projectPageTitle">My Projects</h1>

            <Tabs id="projectsTabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>CloudSat 8++</Tab>
                <Tab>CAPE-3</Tab>
                <Tab>ESG Grid</Tab>
                <Tab>Amateur Radio</Tab>
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