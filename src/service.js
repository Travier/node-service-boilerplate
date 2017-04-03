export default class Service {
  constructor(name) {
    this.name = name;
  }

  run() {
    let message = `${this.name} service up and running!`;
    console.log(message);
  }
}
