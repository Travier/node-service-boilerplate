class Service {
  constructor(name) {
    this.name = name;
  }

  run() {
    let message = `Service:${this.name} up and running!`;
    console.log(message);
  }
}

var service = new Service("API Server");
service.run();
