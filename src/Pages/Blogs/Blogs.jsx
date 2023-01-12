import React from 'react';
import { Outlet } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default Blogs;



/* 
1.How will you improve the performance of a React Application?

React uses several creative ways to minimize the number of expensive DOM operations needed to update the UI. Many apps built with React will lead to a fast UI without doing so much work to optimize for performance specifically. There are several ways for you to speed up your React app.

1. Use the Production Build
2. Build your project with Create React App.
3. For the most effective Brunch production build, install the curt- brunch plugin
4. Webpack will minify the code by default in the production mode.
5. you can use immutable Data Structures
6. You can use React.Fragments to avoid additional html element wrappers


3.How does prototypical inheritance work?

Every object with its methods and properties contains an internal and invisible property known as(( Prototype)). The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It's a system by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the(( Prototype)) of an object, we useObject.getPrototypeOf and Object.setPrototypeOf. Currently, in ultramodern language, it's being set using, proto.



4.Why you do not set the state directly in React?

Why should we not update the state directly?
One should never update the state directly because of the following reasons:

1. If you update it directly, calling the setState() afterward may just replace the update you made.
2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
3. You will lose control of the state across all components.

Note: Out of all the react questions, this is one that actually helps the interviewer to judge your level of understanding in this subject. Read the answer carefully to understand it properly.



6.
Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.[2] In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.

*/