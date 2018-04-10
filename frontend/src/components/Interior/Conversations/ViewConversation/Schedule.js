//Alex Cassell
//http://alexcassell.com
//schedule for view (probably does not need to a seperate component)

import React from 'react';

import {conversationsArray} from '../index.js'
import {conversationsArrayPosition} from '../index.js';

let days = conversationsArray[conversationsArrayPosition].schedule;
let time = conversationsArray[conversationsArrayPosition].time;

const Schedule = () => {
    return (
        <div>
            {days} at {time}
        </div>

    );
}

export default Schedule;