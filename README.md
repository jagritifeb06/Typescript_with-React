#Type Inferencing -Infrencing the type based on the value we are assigning.

#Type Annotation - var x:number=100;

##A required parameter cannot follow an optional parameter.

##Arrow function got binded to the context in which they are created. (Context got binded at the function creations.) With callback function use Arrow function.
Do not have their implicit this, they got binded to context in which they are created.i.e their parent context.

Anonymous function : context(Global Window Object) is binded at the time of function invocation.

Interface is used to check the structure of object.
interaces can also implemented by class

Type cannot take part in inheritance.

Extends an interface in class

Type and interface defines structure of object.
Type doesn't take part in inheritance while interface takes part.

Protypical inheritance: Whenever we create any object ,propeerty lookup in prototype chain until it encounters null.

Classes are sugartactical syntax of prototypical inheritance.

Object has "prototype object"

inheritance = reusabilty + extensibility

Constructor for dervied classes must contain 'super' call

.ts files is converted into .js files (ES5 version by default)

mutlilevel inheritance aalowed, abut multiple inheritance not allowed.

Iterators allow you to 
Generator is a function generaters/returns an iterator. Allow you to pause and resume the function
return multiple values from a single function.

Async Await is an advanced version of Generator function. It waits for promises to get resolve then move to next.