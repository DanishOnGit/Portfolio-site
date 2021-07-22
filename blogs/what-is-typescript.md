---
title: 'What is Typescript?'
date: '2021-05-09'
---
If you have ever coded in Javascript, you must be quite familiar with one kind of error, the **"Type Error"**.
To put it simply, Type error occurs when a certain kind of value was used, where a different kind of value was expected. 

Now, this error occurs during **Runtime**: the period when program is executing commands.

**Why?**

This is because Javascript is a **dynamically** typed language. Which means that types are checked **during** the execution of the program i.e. during **runtime**.
Now, this might not seem a big deal when you are working on small projects for your own use.
But, you can imagine what could happen, if you are working in a team on a large scale project.

Let us take a small example:

```
let engScore = 45;
console.log(engScore) // 45  (Number type)

 engScore = "45";

console.log(engScore) // 45(string)

```

Here the type of the variable engScore is changing from `Number` to `String` .

Now, Js won't even throw any error for this . But as you know, down the line , if you try to do some operation which can be done **only** on the type `Number` , you are headed for `Type Error` in the `Runtime` only and not in `Compile time` (remember Dynamic typing ?) . Such problems can magnify and refactoring can take significant time when we are working on scale !


Here is where, **Static typing** becomes helpful ! 

In statically typed languages like C++, Java etc. , type checking is performed during **compile time**.
It means that the type of a variable is known at compile time. 

Example of a C++ code:

``` 
int engScore = 45;
 engScore = "45";  // error: invalid conversion from 'const char*' to 'int'

```

We can make the following observations:

-  type of the variable should be assigned while defining a variable

- its type won't change throughout the program

- if we try to change its type, error occurs

- and this error occurs during `compile time`


That's amazing ! Prevents me from future bugs !!

So, should I leave Javascript ?? (starts crying...)

**Nooo!!**

 ***TYPESCRIPT ***  is here for your rescue !!

## What is TypeScript  ?

The goal of TypeScript is to be a static type-checker for JavaScript programs. All TypeScript code is eventually transpiled to JavaScript only. 
It's a super-set of JavaScript, but with an extra first line of defence of static type checking.


So, anything you write in JavaScript can be written in TypeScript too !

**Win-Win !**

## Why TypeScript ?


-  it is statically typed,hence type checks the code during compile time

-  due to above reason, developer can write better code since they do not need to have a constant mental picture of the types of the variables they are operating upon for the sake of avoiding runtime errors 

## Let's see some TypeScript code:

To make TypeScript work, we need to first define the type of the variable .
 We will use our previous example:

```
let engScore: number = 10;

engScore = "10"

```

Here, we are saying that the variable engScore must be of a   `number` type.
But in the next line we are changing its type to a `String`. And hence, TypeScript shows us the red underline with the warning message. And, it is happening during **compile time** instead of it throwing an error during **runtime**.


![screenshot-5-9-2021  9_40 pm (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620576725330/nMszBfKyu.jpeg)

Similarly you can do the following too and much more :
```
const  isPresent: boolean = true;
const name: string = "Jack";

```

For **Array** we can write:
```
const numArray : number[] = [1,2,3];
const  stringArray : string[] = ["hi","how","you","Ben"]

```

Here, lets try adding a number to stringArray.


![screenshot-5-9-2021  8_32 pm (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620572603427/mDNqwUlAs.jpeg)

As you can see, we are getting a warning when we are try to add a number. This is because we declared the type of 'stringArray' as **array of strings only**. You can now imagine how helpful TypeScript can be ! We can use it in functions too.

Lets see an example:

In JavaScript:
```
function greet(name){
console.log(`Hello ${name}, how are you?`);
}

greet (10); //Hello 10, how are you?

```
As you would expect, JavaScript wont throw any error. But we want `name` parameter to be of the `String` type. 

Let us write the same thing in TypeScript:
```
function greet(name:string){
console.log(`Hello ${name}, how are you?`);
}

```
Now, lets call the function with an argument of `Number` type



![screenshot-5-9-2021  8_25 pm (2).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620572402583/PazjWuLSq.jpeg)


As you can see, TypeScript is doing its job here. Telling us that we are trying to use a `Number` type instead of a `String` type . Trying to save us from future errors !!

**Moreover, we can also explicitly define the `return` type in the function.**
```
const getFinalScore =(score1:number,score2:number):number => {

const sum = score1+score2
}

```

Here, the return type is given as `Number`.

Let us try to return a `String`.


![screenshot-5-9-2021  8_57 pm (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620574389296/cvG0-_T01.jpeg)


So, you can see how powerful TypeScript can be. We don't have to worry about the errors during runtime due to *unexpected return types* from functions !!


**Now let us see a comprehensive example and some good practices !**

## Type Driven Development (TDD)

It is practice of writing your program around types. We decide the types first and then we write the program and not the opposite. This eases your development cycle. 

Following is an example:

```
export type Student = {
  name:string;
  rollNos:number;
  isPresent:boolean
}

export type Roll = {
  className:string;
  students:Student[]
}

```
Here we have declared the types before starting to program.

**Good practice:** Always export your types

```
export type Student = {
  name:string;
  rollNos:number;
  isPresent:boolean
}

export type Roll = {
  className:string;
  students:Student[]
}

const myClass:Roll={
  

}

```
Hover over `myClass` and
**Now, you will witness the power of TypeScript !**

![screenshot-5-9-2021  9_12 pm (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620575150064/8PJKIVwhV.jpeg)

It clearly says that, `myClass` is missing the properties 'className' and 'students' from the type **Roll** .So, now you should add it to avoid future errors. Lets do it.

```
export type Student = {
  name:string;
  rollNos:number;
  isPresent:boolean
}

export type Roll = {
  className:string;
  students:Student[]
}

const myClass:Roll={
  className:"5th grade",
  students:[
    {
      
    }
  ]

}

```

Here too, you will get a red underline on the blank object, and you must have already  guessed why.
**You are right !!** We are missing the "name, rollNos, isPresent" properties from the type **Student**


![screenshot-5-9-2021  9_22 pm (1).jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1620575625216/Dg_aJ6Iwv.jpeg)

Lets fix it !
```
export type Student = {
  name:string;
  rollNos:number;
  isPresent:boolean
}

export type Roll = {
  className:string;
  students:Student[]
}

const myClass:Roll={
  className:"5th grade",
  students:[
    {
      name:"Ben",
      rollNos:44,
      isPresent:true
    }
  ]

}
```

As you can see all our variables are conforming to the types we have decided for them.
We also get suggestions on what properties we need to include to conform to our models.
Had we tried to change any type , we will get an error during `compile time` itself !
This was a small example of TDD. 

**Here are some good practices to start with:**

-  Always export your types so that you can use them in multiple places

- Avoid using the type *'any'*

- Do TDD , will help you become a better programmer

- Our models should never be an array.

That's it guys !!

 I hope you liked this post. I have  highlighted the basic things of TypeScript which helps you in development . You can always dive deep into it to utilize its full potential !!