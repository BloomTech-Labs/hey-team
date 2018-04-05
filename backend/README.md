# hey-team

```
const tempURL = 'https://hey-test-team.herokuapp.com'
const a_id = <account id>
const c_id = <conversation id>
```

### create a conversation

```
endpoint = teamURL/conversation/create
.post(endpoint, { a_id })
```

### delete a conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, { a_id, c_id })
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
