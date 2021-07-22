---
title: 'Common errors in React and how to fix them!'
date: '2021-03-22'
---

I started learning **React** a couple of months ago. Over this period of time, I have encountered a lot of errors while writing code. Most of them recurring. Now, if you are beginning to learn React, I am very certain you will come across these errors too ! 

   To relieve you of the mental agony such errors cause, I am writing this article to **help you *understand* and fix these simple errors !** 

**Let's Begin !**


## **Code 1 :**
   ``` 
export default function App() {
  function clickHandler(){
   return "hello"
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={clickHandler()}>click</button>
    </div>
  );
}
```
## **Corresponding Error:**
```
Error:
Expected `onClick` listener to be a function, instead got a value of `string` type.
```
The above error says that onClick should be a function. 

Yeah yeah! we know that.That's what we have written in our code !

But have we really??
Is clickHandler() a function? Or is it a function call?
I think we have our answer. What we have written is a function call !! And it is returning a string "hello".
Which looks like this...
```
<button onClick="hello">click</button>
```
**So how do we fix this?**

It's simple. We make onClick a function ! We can use two ways as shown below.
```
<button onClick={clickHandler}>Click</button>
<button onClick={()=>clickHandler()}>Click</button>

```

## **Code 2:**
```
export default function App() {
  const [counter,setCounter]=useState(0)
  function clickHandler(){
   setCounter((prevCount)=>prevCount+1)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={clickHandler()}>click</button>
      <p>{counter}</p>
    </div>
  );
}
```
## **Corresponding Error:**
```
Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
```

Now, if you understood our previous mistake, ***understanding*** and solving this error should not be hard. 

The error says, "too many re-renders". **Why?**

Because, we have given a function call to onClick ,rather than a function.

 So, everytime the App component is rendering, the clickHandler is getting invoked and is setting the state using `setState`. 

Since this is a state change, it causes the App component to render again and clickHandler gets invoked again (without the need of button click) ...... causing an infinite loop!

**And...we know how to fix this!!**

The solution is same as above.

```
<button onClick={clickHandler}>Click</button>
<button onClick={()=>clickHandler()}>Click</button>
```
## **Code 3:**

```
function greetings(){
return (
     <h2>Hello</h2>
     <h2>World !</h2>
   )
  }
```
## **Corresponding Error:**
```
Error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
```
Let us understand this error.

**React** does not like siblings in the return statement of a function. Hence, the error is asking us to wrap up our JSX elements (our `h2` tags) inside some JSX fragment thing. 

What we wrote gets converted inside React, to something **roughly** like the following.
```
return  <h2>Hello</h2>
return  <h2>World !</h2>
```
As you can see, we are trying to **return twice** from the function call ! Which is ofcourse wrong !

So, we should change the syntax , so that we return only once !

Again, it's simple. We do exactly as the error message instructs !

```
function greetings(){
return (
<>
     <h2>Hello</h2>
     <h2>World !</h2>
</>
   )
  }
```

Bravo ! We have **understood** and fixed the error. 

These `<>` `</>` are called JSX fragments . You can also wrap inside a `div` tag if you want to. You can read more about the syntax on the internet.

## **Code 4:**

```
export default function App() {
  const[city,setCity]=useState({myCity:"Bangalore"})

  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {city}
      <button >Click</button>
    </div>
  );
}
```
## **Corresponding Error:**
```
Error:Objects are not valid as a React child (found: object with keys {city}). If you meant to render a collection of children, use an array instead.
```
Now, here as we can see, the initial state of our state variable "city" is `{myCity:"Bangalore"}` which is an object. And we are trying to use it as react child which is **invalid** ! 

The error message warns us that , objects are not valid as a React child. Hence, we pay good attention to the error to fix it.

Following is the simple solution :
```

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {city.myCity}
      <button >Click</button>
    </div>
  );
}
```

Here, as you can see, the output is  a string, `Bangalore`. And the error disappears.

The above code was a very simple scenario to reproduce the error. 

However, mapping over an array of objects is a common occurrence. And hence, we should be mindful over our mapping operations. 

## **Code 5:**

Here I have linked a sandbox [click to view sandbox.](https://codesandbox.io/s/hopeful-sinoussi-qvhzo?file=/src/cityContext.js) for better understanding of the code.

You can see that we are exporting `CityContext` from the file "cityContext.js" . And,
then we are importing it in "index.js" on `line 5`. 

But we get an error !! Ughh!

```
Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
```
The error message reads, that it is expecting a string ....... but instead got: `undefined`. 

Some of you might have figured out the problem !

Yes ! It is at `line 5` in "index.js" . We are importing the right thing, BUT from the wrong file !! And hence, when it searches for `CityContext` in "App.js" , it won't find it there. Because, well, it's not there at all. And you get `undefined` .Duhh!  

**`CityContext` is in ".cityContext.js"**

Arghhh !

Let's fix it:
```
import {CityContext} from "./cityContext"
```
And we are done !

Here is the sandbox of the [solution.](https://codesandbox.io/s/long-sky-2utzg?file=/src/index.js)

Whenever the above error occurs, always check ***carefully*** our imports and exports. For eg:
sometimes an icon may not even exist in the library we are importing it from !! So, be aware.

And, that's it for now guys.

All the above errors are very common to occur. But I hope you now have a decent idea on how to read and fix them !

**Please share the article if you found it helpful !**

**Thanks for reading.**