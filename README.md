# Node Service Boilerplate
An ES7 ready boilerplate for basic node services.

```bash
#Clone boilerplate code into my_service directory
git clone https://github.com/Travier/node-service-boilerplate.git my_service

#CD into new service directory
cd my_service

#Install dependencies with yarn
yarn install

#Compile ES7 Code and output to /dist
yarn run build
#Or build:watch to wait for file changes before compiling
yarn run build:watch 

#Run service
node dist/index.js
```
