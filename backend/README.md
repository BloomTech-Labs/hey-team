# hey-team

```
const tempURL = 'https://hey-test-team.herokuapp.com'
const a_id = <account id>
const c_id = <conversation id>
```

### create a conversation

```
endpoint = teamURL/conversation/create
.post(endpoint, {a_id})
```

### delete a conversation

```
endpoint = teamURL/conversation/delete
.post(endpoint, {a_id, c_id})
```

