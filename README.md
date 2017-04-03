# Node Service Boilerplate
The no bullsh*t way to start a fresh ES7 nodejs project. Stop worring about setup and just build the damn thing.

(This is not a boilerplate for React. I suggest using create-react-app)

```bash
#Clone boilerplate code into my_service directory
git clone https://github.com/Travier/node-service-boilerplate.git my_service

#CD into new service directory
cd my_service

#Install dependencies with yarn
yarn install

#Compile ES7 Code and output to /dist
yarn run build
#OR build:watch to wait for file changes before compiling
yarn run build:watch

#Run service
node dist/index.js
#OR
yarn run service
```
