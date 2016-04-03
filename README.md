----------------------------------
----------------------------------

As Nexus do not provide yet a native mecanism to manage json librairies, 
We are using "nexus-bower-resolver" which should be installed through : npm install nexus-bower-resolver

In order to mimic the bower registry we should create a http server that respond same json info to this URL : http://<domain>/nexus/content/repositories/<bower-repo>/packages/<package-name>

This JSON should be formated as (when looking for angular)
{
  "name" : "angular",
  "url" : "nexus://angular/angular"
}


Your .bowerrc file should looks like this :
 
{
  "directory": "bower_components",
   // The http server you create to mimic boser registry
  "registry": "http://localhost:8082/nexus-bower/",
  // Your npm repository for bower packages within Nexus
  "nexusRegistry": "http://192.168.99.100:32768/content/repositories/bower-registry/",
  "resolvers": [
    "bower-nexus-resolver"
  ]
