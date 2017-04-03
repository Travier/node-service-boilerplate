# Node Service Boilerplate
The no bullsh*t way to start a fresh ES7 nodejs project. Stop worring about setup and just build the damn thing.

(This is not a boilerplate for React. I suggest using create-react-app)

Clone boilerplate code into my_service directory
```bash
git clone https://github.com/Travier/node-service-boilerplate.git my_service
```
CD into new service directory
```bash
cd my_service
```

Install dependencies with yarn
```bash
yarn install
```

Compile ES7 Code and output to /dist
```bash
yarn run build
```

Or build:watch to wait for file changes before compiling
```bash
yarn run build:watch
```
Run service
```bash
node dist/index.js
```
Or
```bash
yarn run service
```
