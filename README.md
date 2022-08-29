# random-string

Simple Module for generating Random Strings

![random-string](https://api.travis-ci.org/valiton/node-random-string.png "random-string")

## Getting Started
Install the module with: `npm i random-string-adv`

```javascript
var create_string = require('random-string-adv');
var rnd_str = create_string(); // x contains now a random String
```

## Documentation

You just need to install the package and then follow these steps

```javascript
var create_string = require('random-string-adv');
console.log(create_string());
```

```javascript
var create_string = require('random-string-adv');
const rnd_str = create_string();
console.log(rnd_str);
```

### options

#### options.length

String - This string will contain the random characters of any length 


#### options.Type

Type - This string will have the mixture type of numeric and alphabetic characters 


## Examples

```javascript
// that would be a call with all options (hint: thats a call with all defaults, und the options wouldnt be necessary in that case!)
var create_string = require('random-string-adv');
console.log(create_string());

Output: gsM7KXtNHtwBWLqof5UoOKQetqcV7Z5bHDCfA9ZwuY5QZmqn1AImBuRnurGDsF

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

- 1.0.0 Initial Release


## Contributors

- Irtaza Hussain


## License
Licensed under the MIT license.
