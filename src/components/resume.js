import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return(
            <Grid className="resume-grid">
                <Cell col={12}>
                    <div><h1>Resume Page</h1></div>
                </Cell>
            </Grid>
        )
    }
}

export default Resume;