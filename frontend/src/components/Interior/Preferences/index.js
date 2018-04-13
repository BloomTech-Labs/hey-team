import React, {Component} from 'react';
import {RadioGroup, Radio} from 'react-mdl';

class PreferencesIndex extends Component {
  state = {
    selected: 'true',
  };

  toggleChange = () => {
    this.setState ({
      selected: !this.state.selected,
    });
  };
  render () {
      console.log("preferences");
    return (
      <div>
        <h2>Email Summary</h2>
        <RadioGroup container="ul" childContainer="li" name="pref" value="opt1">
          <Radio value="opt1" ripple onChange={this.toggleChange}>
            On
          </Radio>
          <Radio value="opt2" ripple onChange={this.toggleChange}>
            Off
          </Radio>
        </RadioGroup>
      </div>
    );
  }
}

export default PreferencesIndex;
