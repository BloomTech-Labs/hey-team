# _Hey-Team Route Documentation_

```
const teamURL = 'https://hey-test-team.herokuapp.com'
const w_id = <account id>
const c_id = <conversation id>
const c = <conversation obj> === { title, questions, members, schedule }
```

### create a conversation

```
endpoint = teamURL/conversation/create
.post(endpoint, { c, w_id })
```

### delete a conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, { w_id, c_id })
```

### get all conversations

```
endpoint = teamURL/conversation/all
.post(endpoint, {w_id)
```

### edit a conversation

```
endpoint = teamURL/conversation/delete
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
