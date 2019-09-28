import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
    render() {
        return(
            <Grid className="aboutme-grid">
                <Cell col={12}>
                    <div><h1>About Me Page</h1></div>
                </Cell>
            </Grid>
        )
    }
}

export default About;