import React from 'react';
import {Grid, Cell, ListItem, ListItemContent} from 'react-mdl';
import FooterPage from './FooterPage';
import '../../css/features.css';

const Feature = () => (
    <div>
        <div className="md-grid">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <h3>Features</h3>
                <Cell col={4}>
                    <ListItem threeLine>
                    <ListItemContent icon="email" subtitle="Some text here.">
                        Feature 1
                    </ListItemContent>
                    </ListItem>
                    <ListItem threeLine>
                    <ListItemContent icon="dashboard" subtitle="Some text here.">
                        Feature 2
                    </ListItemContent>
                    </ListItem>
                    <ListItem threeLine>
                    <ListItemContent icon="3d_rotation" subtitle="Some text here.">
                        Feature 3
                    </ListItemContent>
                    </ListItem>
                    <ListItem threeLine>
                    <ListItemContent icon="3d_rotation" subtitle="Some text here.">
                    Feature 3
                    </ListItemContent>
                </ListItem>
                </Cell>

                </Cell>
            </Grid>

            </div>
            <div>

            <FooterPage />

            </div>
        </div>
);

export default Feature;