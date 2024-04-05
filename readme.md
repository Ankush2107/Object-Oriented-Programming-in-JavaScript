# Object Oriented Programming

## Class
It is Blueprint and template.

## Object
Instance of a Class

## prototype
1. JavaScript objects have a special property called prototype.
2. prototype object can be accessed using the keyword this inside methods defined in the prototype object.
3. prototype properties are inherited by all instances created from that class.
4. prototype is not an Object, it's just a plain JS Object.
5. prototype property of any JavaScript Class will always return another Class (or function).
6. We can set prototype using __proto__. But we should never use it because it’s deprecated in ES6. Instead, you can use Object.setPrototypeOf() method to change the value of a class's prototype property.


