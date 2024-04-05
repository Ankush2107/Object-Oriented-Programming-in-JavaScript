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

## constructor method
constructor is special function that gets executed when an object is created from a Class. Constructor functions are usually used for initializing properties and methods in an instance of a class.

- automatically invoked by new.
- intializes object.

## OOPs Principle

### Inheritance
A class can inherit properties or behaviors from one or more parent classes. This is also called multiple inheritance because the child class inherits properties and methods from two or more parent classes.

- If child and parent have same method, child's method will be use this is called method overriding.
