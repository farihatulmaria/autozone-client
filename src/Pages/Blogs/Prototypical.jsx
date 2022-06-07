import React from 'react';

const Prototypical = () => {
    return (
        <div className="blog-container">
            <h1 className='text-3xl m-8 text-center'>How does prototypical inheritance work?</h1>
            <img src="https://i.postimg.cc/cLR1wDjd/blog-3.jpg" className='my-6' alt="" />
            <div className='space-y-3 mx-6'>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>
                <p>Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).</p>
                <p>JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>
                <p>Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
                <h2 className=' text-2xl '>What is prototypical inheritance?</h2>
                <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                <p>All JavaScript objects inherit properties and methods from a prototype:</p>
                <ul>
                    <li>1. Date objects inherit from Date.prototype.</li>
                    <li>2. Array objects inherit from Array.prototype.</li>
                    <li>3. Player objects inherit from Player.prototype.</li>
                </ul>
                <p>The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.</p>
                <h2 className=' text-2xl '>Revisiting an old example</h2>
                <p>Let's walk through an example of prototypical inheritance you're likely familiar with from grade school: all squares are rectangles, but not all rectangles are squares. If we think of this as a JS program, we could say that the rectangle is a prototype to the square: the square inherits all properties of a rectangle (i.e. four-sides and closed), while also adding a new feature (i.e. all sides are the same length).</p>
                <p>We could not, however, construct this same concept using the square as a prototype, because there are properties of a square that do not apply to rectangles (i.e. all sides are the same length).</p>
                <p>We can see how prototypal inheritance works on the basis of specifying categories within a group from least specific to most – from rectangle to square. In code, this concept can sometimes be lost in the syntax. If you find this happens, speak the relations between objects and listen to where you draw distinctions. If you hear, “all ___ are , but…not all ___ are”, that is where a new prototypical relationship should be added.</p>
                <h2 className=' text-2xl '>Cons of Prototypal Inheritance</h2>
                <p>Prototypical inheritance clearly has a lot of benefits for JavaScript programmings, but, like all tools, it does have limitations. Let's take a look at the key downsides to look out for as you write a prototype-based program:</p>
                <ul className='list-disc ml-10'>
                    <li><b>Inheritance cannot flow in circles as this will create an error.</b> For example, if user linked premiumFamily as a prototype in the above program, an error would occur as this would create a loop.</li>
                    <li><b>Objects cannot inherit from multiple prototypes.</b> As we saw above, they can inherit multiple object's properties through a chain, however another object linked as a prototype explicitly will cause an error. This is the case even if the additional prototype is within the same chain. For example, familyPremium could not have explicit links to both premiumUser and user.</li>
                    <li><b>Prototypical relationships can only be made to objects.</b> This is because the __proto__ function works as a forwarder, directing the program where to find the value it is looking for. As the program either knows where to look or it doesn't, the function can be only either null or an object. All other types will be discarded.</li>
                </ul>
                <h2 className=' text-2xl '>Important terms</h2>
                <h3 className='text-lg'>__proto__ property</h3>
                <p>In Javascript, every object has its own hidden, internal property, [[Prototype]]. We can access that [[Prototype]] using the __proto__ property. This calls the program to mark the template object as a hidden type. JavaScript objects must be linked to this prototype object. Now, an object's properties can be accessed by the inheritor object.</p>
                <p>Let's take a look at the syntax for accessing and setting the [[Prototype]] property of an object.</p>
                
                <h2 className=' text-2xl '>Object.create</h2>
                <p>JavaScript ECMAScript 5 comes with the function Object.create( ). This method can be used to replacenew. We can use it to create an empty object based on a defined prototype and then assign it to a different prototype. Take a look at the syntax:</p>
                <h2 className=' text-2xl '>Object.prototype.constructor</h2>
                <p>All objects have a constructor property. If an object is created without the using a constructor function, it will have a constructor property. The constructor property will return a reference to the object’s Objectconstructor function. It will return 1, true1, and ”test”`. Take a look at an example below.</p>
                <h2 className=' text-2xl '>hasOwnProperty</h2>
                <p> Using hasOwnProperty, we can test if an object contains a certain prototype property; the method will return true or false depending. This will help you clarify if an object has its own property or if it is inheriting instead.</p>
                <h2 className=' text-2xl '>The Prototype Chain</h2>
                <p>Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.</p>
                <p>This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or nullis reached.</p>
                <p>In the following sections, we’ll take a look at some implementations using the handling of accounts in a streaming service.</p>
                <h2 className=' text-2xl '>Wrapping up </h2>
                <p>Like JavaScript itself, prototypical inheritance is an invaluable tool in the world of website development and server management.</p>
                <p>Specifically, prototypes and prototypical inheritance are commonly used in many web application frameworks, such as AngularJS, to allow sharing of common behavior and state among similar components.</p>
            </div>
        </div>
    );
};

export default Prototypical;