import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return(
        <Grid>
            <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col={8} className="experienceBody">
                <h4 style={{marginTop: '0px'}}>{this.props.projectName}</h4>
                <h6>{this.props.projectRole}</h6>
                <p>{this.props.projectDescription}</p>
            </Cell>
        </Grid>
        )
    }
}

export default Experience;