import Service from './service';

var services = [];
services.push(new Service("Analytics"));
services.push(new Service("API"));
services.push(new Service("Web"));

services.forEach((service) => {
  service.run();
});
