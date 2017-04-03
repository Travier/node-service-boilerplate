class Service {
  constructor(name) {
    this.name = name;
  }

  run() {
    let message = `${this.name} service up and running!`;
    console.log(message);
  }
}

var services = [];
services.push(new Service("Analytics"));
services.push(new Service("API"));
services.push(new Service("Web"));

services.forEach((service) => {
  service.run();
});
