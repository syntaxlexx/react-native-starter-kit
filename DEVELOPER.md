# Developer file

## .dot ENV
.env
```bash
API_URL=https://api.example.org
API_TOKEN=abc123
```

In users.js

```js
import {API_URL, API_TOKEN} from "@env"

fetch(`${API_URL}/users`, {
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})
```js
