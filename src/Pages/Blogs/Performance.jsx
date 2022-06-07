import React from 'react';

const Performance = () => {
    return (
        <div className="blog-container">
            <h1 className='text-3xl m-8 text-center'>How will you improve the performance of a React Application?</h1>
            <img src="https://i.postimg.cc/4dPD0mw9/blog-1.jpg" className='my-6' alt="" />
            <div className='space-y-3  mx-6'>
                <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged</p>

                <p>According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.</p>

                <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>

                <p>In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include</p>
                <ol className='list-decimal ml-5'>
                    <li>Keeping component state local where necessary</li>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic import()</li>
                    <li>Windowing or list virtualization in React</li>
                    <li>Lazy loading images in React</li>
                </ol>
                <h2 className= ' text-2xl'>React pre-optimization techniques</h2>
                <p>Before optimizing a React application, we must understand how React updates its UI and how to measure an app's performance. This makes it easy to solve any React performance problems.</p>
                <p>Let's start by reviewing how the React UI updates.</p>
                <h2 className= ' text-2xl'>Understanding how React updates its UI</h2>
                <p>When we create a rendered component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render.</p>

                <p>It then only updates the changed element in the actual DOM. This process is called diffing.React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.</p>

                <p>This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if it’s not managed very well.</p>

                <p>What we can deduce here is that a state change in a React component causes a re-render. Likewise, when the state passes down to a child component as a prop, it re-renders the child and so on, which is fine because React must update the UI.</p>

                <p>The issue comes when the child components are not affected by the state change. In other words, they do not receive any prop from the parent component.</p>
                <p>React nonetheless re-renders these child components. So, as long as the parent component re-renders, all of its child components re-render regardless of whether a prop passes to them or not; this is the default behavior of React.</p>

                <h2 className= ' text-2xl'>Profiling the React app to understand where bottlenecks are</h2>

                <p>React allows us to measure the performance of our apps using the Profiler in the React DevTools. There, we can gather performance information every time our application renders.</p>

                <p>The profiler records how long it takes a component to render, why a component is rendering, and more. From there, we can investigate the affected component and provide the necessary optimization.</p>

                <p>To use the profiler, we must install the React DevTools for our browser of choice. If you don’t have it installed yet, head over to their extension page and install it (choose Chrome here or Firefox here).</p>

                <p>Now, we should see the Profiler tab when working on a React project.</p>

                <h2 className= ' text-2xl'>React performance optimization techniques</h2>

                <h3 className= ' text-lg'>1. Keeping component state local where necessary</h3>

                <p>We’ve learned that a state update in a parent component re-renders the parent and its child components.</p>

                <p>So, to ensure re-rendering a component only happens when necessary, we can extract the part of code that cares about the component state, making it local to that part of the code.</p>

                <h3 className= ' text-lg'>2. Memoizing React components to prevent unnecessary re-renders</h3>

                <p>Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.</p>

                <p>Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</p>

                <p>In essence, if a child component receives a prop, a memoized component shallowly compares the prop by default and skips re-rendering the child component if the prop hasn't changed:</p>

                <h3 className= ' text-lg'>3. Code-splitting in React using dynamic import()</h3>

                <p>Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.</p>

                <p>The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user’s satisfaction.</p>

                <p>With code-splitting, React allows us to split a large bundle file into multiple chunks using dynamic import() followed by lazy loading these chunks on-demand using the React.lazy. This strategy greatly improves the page performance of a complex React application. To implement code-splitting, we transform a normal React import like this:</p>

                <h3 className= ' text-lg'>4. Windowing or list virtualization in React applications</h3>

                <p>Imagine we have an application where we render several rows of items on a page. Whether or not any of the items display in the browser viewport, they render in the DOM and may affect the performance of our application.</p>
                
                <p>With the concept of windowing, we can render to the DOM only the visible portion to the user. Then, when scrolling, the remaining list items render while replacing the items that exit the viewport. This technique can greatly improve the rendering performance of a large list.</p>

                <h3 className= ' text-lg'>5. Lazy loading images in React</h3>
                <p>To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.</p>
                <p>Similar to the concept of windowing mentioned above, lazy loading images prevents the creation of unnecessary DOM nodes, boosting the performance of our React application</p>

                <h2 className= ' text-2xl'>Conclusion</h2>

                <p>To successfully optimize our React application, we must first find a performance problem in our application to rectify. In this guide, we’ve explained how to measure the performance of a React application and how to optimize the performance for a better user experience.</p>
            </div>
        </div>
    );
};

export default Performance;