# _Hey-Team Route Documentation_

```javascript
const teamURL = 'https://hey-test-team.herokuapp.com'
const w_id = <Workspace id>
const c_id = <Conversation id>
const c = <Conversation obj> === { title, questions, members, schedule }
```

```javascript
/** Example schedule object
*   time is a string datatype with hr and min seperated by a colon :
*   single digit values for hr must not contain preceding zero
*/
schedule: {sun: false, mon: true, ..., time: "8:15", modifier: "AM", tz: -5}
```

### Create a Conversation

```javascript
// endpoint = teamURL/conversation/create
.post(endpoint, { c, w_id })
```

### Delete a Conversation

```javascript
// endpoint = teamURL/conversation/delete
.post(endpoint, { w_id, c_id })
```

### Get All Conversations

```javascript
// endpoint = teamURL/conversation/all
.post(endpoint, {w_id)
```

### Edit a Conversation

```javascript
// endpoint = teamURL/conversation/edit
.post(endpoint, {c, c_id})
```

### Grab All Members

```javascript
// endpoint = teamURL/users/all
.post(endpoint, { w_id })
```

### Grab Specific Member

```javascript
// endpoint = teamURL/users/find
.post(endpoint, { w_id, String: searchTerm })
```

### Send Email

```javascript
// endpoint = teamURL/account/email
.post(endpoint, { w_id, participants, context })

Where:
Context = the body of the email sent to participants
Participants = Member ids from the selected members of that conversation
```
