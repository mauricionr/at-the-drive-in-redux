[Info on setting up jspm with ng2 here](https://gist.github.com/robwormald/429e01c6d802767441ec)

Usage
=====

install everything

```bash
npm install -g http-server
npm install -g jspm@beta
npm install -g babel
jspm install
npm install
```

now split terminal tabs

1
```bash
http-server -p 8080
```

2
```bash
babel-node server.js
```
