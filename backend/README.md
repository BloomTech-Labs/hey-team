# _Hey-Team Route Documentation_

```
const tempURL = 'https://hey-test-team.herokuapp.com'
const a_id = <account id>
const c_id = <conversation id>
const conversation <conversation obj>
```

### Create A Conversation

```
endpoint = teamURL/conversation/create
.post(endpoint, { a_id })
```

### Delete A Conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, { a_id, c_id })
```

### Get All Conversations

```
endpoint = teamURL/conversation/all
.post(endpoint, {a_id)
```

### Edit A Conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, {a_id, c_id, conversation})
```

### Grab All Members

```
endpoint = teamURL/account/getAllMembers
.post(endpoint, { a_id })
```

### Grab Specific Member

```
endpoint = teamURL/acount/getOneMember
.post(endpoint, { a_id, user_id })
```

### Grab Account and Team Information

```
endpoint = teamURL/account/getAccountData
.post(endpoint, { a_id })
```

### Send Email to Slected Users

```
endpoint = teamURL/account/send
.post(endpoint, { a_id, users })

Where users is an array the IDs of the members within the database.
```