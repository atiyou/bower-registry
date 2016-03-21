
As Nexus do not provide yet a native mecanism to manage json librairies
We are using "nexus-bower-resolver" which should be installed through : npm install nexus-bower-resolver

In order to mimic the bower registry when to create a http server that respond same jason info to this URL : http://<domain>/nexus/content/repositories/<bower-repo>/packages/<package-name>

This JSON should be formated as (when looking for angular)
{
  "name" : "angular",
  "url" : "nexus://angular/angular"
}


Your .bowerrc file should looks like this : 
{
  "directory": "bower_components",
  "registry": "http://localhost:8082/nexus-bower/", // <-- the http server you create to mimic boser registry
  "nexusRegistry": "http://192.168.99.100:32768/content/repositories/bower-registry/", // <-- your npm repository for bower packages within Nexus
  "resolvers": [
    "bower-nexus-resolver"
  ]
}

where registry url is the url of your fake 
