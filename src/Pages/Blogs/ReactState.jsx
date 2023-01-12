import React from 'react';

const ReactState = () => {
    return (
        <div className='blog-container'>
            <h1 className="text-3xl m-8">
                What are the different ways to manage a state in a React application?
            </h1>
            <img src="https://i.postimg.cc/C1WKCX3R/blog-2.jpg" alt="" className='my-6'/>
            <div className='space-y-3  mx-6'>
                <p>Let's uncover the many kinds of states in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
                <h2 className=' text-2xl '>Managing state in your React apps isn’t as simple as using useState or useReducer.</h2>
                <p>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?</p>
                <p>In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
                <h2 className=' text-2xl '>The Four Kinds of React State to Manage</h2>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.</p>

                <p>There are four main types of state you need to properly manage in your React apps:</p>
                <ul>
                    <li>1. Local state</li>
                    <li>2. Global state</li>
                    <li>3. Server state</li>
                    <li>4. URL state</li>
                </ul>
                <p>Let's cover each of these in detail:</p>
                <p>Local (UI) state – Local state is data we manage in one or another component.</p>
                <p>Local state is most often managed in React using the useState hook.</p>
                <p>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                <p>Global (UI) state – Global state is data we manage across multiple components.</p>
                <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                <p>A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                <p>Sometimes state we think should be local might become global.</p>
                <p>Server state – Data that comes from an external server that must be integrated with our UI state.</p>
                <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                <p>There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
                <p>Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                <p>URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
                <p>URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                <p>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                <h2 className=' text-2xl '>How to Manage Local State in React</h2>
                <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
                <p>useState is the first tool you should reach for to manage state in your components.</p>
                <p>It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                <p>useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.</p>
                <p>The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p>
                <p>You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself.</p>
                <h2 className=' text-2xl '>How to Manage Global State in React</h2>
                <p>Once you attempt to manage state across multiple components, things get a bit trickier.</p>
                <p>You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.</p>
                <p>What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.</p>
                <p>To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                <p>The reason to not use Context for global state management lies in the way it works. The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.</p>
                <p>In many cases, you do not want all children to update in response to a global state update, because all children may not be consuming or relying upon that global state. You only want to re-render if their props or state changes.</p>
                <p>Redux is also great, but make sure that you get started using Redux Toolkit.</p>
                <p>The benefit of a library like Zustand is that it is small, makes your entire global state a custom hook, and to read or update state, you just call this hook in your components.</p>
                <p>One large reason I recommend using Zustand over a library like Redux is that it gives you all the functionality you need without the boilerplate and conceptual overhead of actions, reducers, and so on.</p>

                <h2 className=' text-2xl '>How to Manage Server State in React</h2>
                <p>Server state can be deceptively challenging to manage.</p>
                <p>At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.</p>
                <p>What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?</p>
                <p>To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query.</p>
                <p>They not only give us a convenient hook to both get and change data from an API, but they keep track of all the necessary states and cache the data for us.</p>
                <p>Here is an example of fetching a user’s profile from an API on the client. We call useSWR and specify the endpoint from which to request data, which is passed to our fetcher function and useSWR gives us both data and error state.</p>
                <p>SWR makes managing unsuccessful requests much easier and our components a lot nicer to look at.</p>
                <p>Additionally, if you are performing the same operation over and over again, you use useSWR in your own custom hook to reuse across your app.</p>
                <p>And finally, you can provide global options to useSWR, including your fetcher function (so you don’t need to pass it in every time) as well as a number of times to refetch data again after an error.</p>
                <p>This is just a taste of the benefits of the SWR library, and React Query gives you just as many benefits, if not more.</p>
                <p>Be sure to use either one for managing your server state. It will make your life so much easier.</p>

                <h2 className=' text-2xl '>How to Manage URL State in React</h2>
                <p>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.</p>
                <p>URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.</p>

            </div>
        </div>
    );
};

export default ReactState;