//Alex Cassell
//http://alexcassell.com
//set timezone for conversation
import React from "react";
import { editClicked } from "../index.js";
import { conversationsArrayPosition } from "../index.js";
import { conversationsArray } from "../index.js";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Label,
  Container,
  Checkbox,
  Input,
  List,
  Radio,
  Select,
  TextArea,
  Dropdown,
  FormGroup,
  Search,
  Icon,
  Accordion,
  Popup
} from "semantic-ui-react";

//grabs users timezone -- until default is set in preferences
// let getTimeZone = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1]; no longer pre-set
/* converts getTimeZone to something like GMT-0400; Chrome likes to add a seemingly 
random place within the timezone with the rest of the info */
let timeZone, time, modifier = "AM";

//am pm
const options = [
  { key: "a", text: "AM", value: "AM" },
  { key: "p", text: "PM", value: "PM" }
];

const timeZoneChoices = [
  { key: "UTC−10", text: "HST UTC −10:00", value: "-10" },
  { key: "UTC−9", text: "AKST UTC −9:00", value: "-9" },
  { key: "UTC−8", text: "PST UTC −8:00", value: "-8" },
  { key: "UTC−7", text: "MST UTC −7:00", value: "-7" },
  { key: "UTC−6", text: "CST UTC −6:00", value: "-6" },
  { key: "UTC−5", text: "EST UTC −5:00", value: "-5" },
];

class TimeZones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: timeZone
    };
  }

  componentWillMount() {
    if (editClicked) {
      timeZone = conversationsArray[conversationsArrayPosition].timeZone;
      this.setState({ timeZone: timeZone });
      console.log(conversationsArray[conversationsArrayPosition].timeZone);
      console.log(this.state.timeZone);
    }
  }

  handleInput = (e) =>{
      time = e.target.value;
      
  }

  handleTimeChange = (e, { value }) =>{
    modifier = value;
  }

  handleTimeZoneChange = (e, { value }) =>{
    timeZone = parseInt(value);
  }

  render() {
    console.log()
    return (
      /*eslint-disable */ // linter hates my # links--
      <div className="conversations__timeZoneDropdown">
        <Form.Group>
          <Input
            className="conversationsTime__inputForm"
            onChange={e => this.handleInput(e)}
            label={<Dropdown
              defaultValue="am" 
              options={options} 
              onChange={this.handleTimeChange}
              />}
            labelPosition="right"
            placeholder="10:00"
            
          />
        </Form.Group>
        <div className="conversationTimeZone">
          <Form.Group>
            <Dropdown
            className="conversationsTimeZone__inputForm"
              placeholder="Select Time Zone"
              fluid
              // search
              selection
              options={timeZoneChoices}
              onChange={this.handleTimeZoneChange}
            />
          </Form.Group>
        </div>
      </div>
      /*eslint-enable */
    );
  }
}

export default TimeZones;
export { timeZone };
export {time};
export {modifier};
