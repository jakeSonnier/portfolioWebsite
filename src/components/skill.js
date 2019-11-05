import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Skill extends Component {
    render() {
        return(
        <Grid>
            <Cell col={12}>
                <div style={{display: 'fixed'}}>
                    {this.props.skill}
                    <ProgressBar style={{width: '75%', color: 'white', marginbottom: '4px'}}
                    progress={this.props.progress}/>
                </div>
            </Cell>
        </Grid>
        )
    }
}

export default Skill;