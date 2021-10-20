const utils = require('utils')
class Person
{
    name = "oren";
    lastName = "cohen";
    go() { this.name = utils.escapeHtml('http://www.github.com/?foo=шеллы');  }
}
var p = new Person();
p.go();
console.log(decodeURI(p.name));
