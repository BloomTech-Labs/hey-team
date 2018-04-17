# _Hey-Team Route Documentation_

```
const teamURL = 'https://hey-test-team.herokuapp.com'
const w_id = <Workspace id>
const c_id = <Conversation id>
const c = <Conversation obj> === { title, questions, members, schedule }
```

### Create a Conversation

```
endpoint = teamURL/conversation/create
.post(endpoint, { c, w_id })
```

### Delete a Conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, { w_id, c_id })
```

### Get All Conversations

```
endpoint = teamURL/conversation/all
.post(endpoint, {w_id)
```

### Edit a Conversation

```
endpoint = teamURL/conversation/edit
.post(endpoint, {c_id, c})
```

### Grab All Members

```
endpoint = teamURL/users/all
.post(endpoint, { w_id })
```

### Grab Specific Member

```
endpoint = teamURL/users/find
.post(endpoint, { w_id, user_id })
```

### Send Email

```
endpoint = teamURL/account/email
.post(endpoint, { w_id, participants, context })

Where: 
Context = the body of the email sent to participants
Participants = Member ids from the selected members of that conversation

```
