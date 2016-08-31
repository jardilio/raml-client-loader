A dead simple way to import/require your [RAML](http://raml.org/) definition files and
get back a JavaScript Client Class for that definition with Webpack. 

```
npm install raml-loader --save-dev
```

```
module: {
    loaders: [
        {
            test: /\.raml$/,
            loader: 'raml-client-loader'
        }
    ]
}
```

```
var Client = require('./path/to/definition.raml'),
    client = new Cient();
    
client.users.userId(1).get();    
```

See https://github.com/mulesoft-labs/raml-javascript-generator and 
https://github.com/blakeembrey/popsicle for more information.
