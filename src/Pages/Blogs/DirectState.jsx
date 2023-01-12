import React from 'react';

const DirectState = () => {
    return (
        <div className="blog-container">
        <h1 className='text-3xl m-8 text-center'>Why you do not set the state directly in React?</h1>
        <img src="https://i.postimg.cc/pdk21mR7/blog-4.jpg" className='my-6' alt="" />
        <div className='space-y-3  mx-6'>
            <p>Whoever worked or learned a bit of React probably knows that we should never change or update the state directly. Rather we should always declare a new object const obj = {} and use this.setState(obj) and let react handle it, just like I did in the example below. But why?</p>
            <div className="mockup-code">
                <pre data-prefix="1"><code>state = {'{'}</code></pre>
                <pre data-prefix="2"><code>    counters: {'['}</code></pre> 
                <pre data-prefix="3"><code>     {'{ id: 1, value: 4 }'},</code></pre>
                <pre data-prefix="4"><code>     {'{ id: 2, value: 0 }'},</code></pre>
                <pre data-prefix="5"><code>     {'{ id: 3, value: 0 }'},</code></pre>
                <pre data-prefix="6"><code>     {'{ id: 4, value: 0 }'},</code></pre>
                <pre data-prefix="7"><code>     {'{ id: 5, value: 0 }'},</code></pre>
                <pre data-prefix="8"><code>   {']'}</code></pre>
                <pre data-prefix="9"><code>{'};'}</code></pre>
                <pre data-prefix="10"><code>handleIncrements = counter => {'{'}</code></pre>
                <pre data-prefix="11"><code>   const counters = [...this.state.counters];</code></pre>
                <pre data-prefix="12"><code>   const index = counters.indexOf(counter);</code></pre>
                <pre data-prefix="13"><code>   counters[index] = {'{ ...counter };'}</code></pre>
                <pre data-prefix="14"><code>   counters[index].value++;</code></pre>
                <pre data-prefix="15"><code>{' };'}</code></pre>
                <pre data-prefix="14"><code>   counters[index].value++;</code></pre>
                <pre data-prefix="15"><code>{'};'}</code></pre>
            </div>
            <p>To have a grip on this matter we first need to know how React lifecycle works.</p>
            <p>(Those who want the short answer can scroll down to the bottom)</p>
            <p>React has three lifecycle phases:</p>
            <h2 className=' text-2xl '>Mounting Phase:</h2>
            <p>When the component is mounted for the first time. It has three lifecycle hooks that we commonly use:</p>
            <ul className='ml-8 my-5'>
                <li>i. constructor</li>
                <li>ii. render</li>
                <li>iii. componentDidMount</li>
            </ul>
            <h2 className=' text-2xl '>Updating Phase:</h2>
            <p>When the component is already mounted and a change in state or props has happened. It has two lifecycle hooks that we commonly use:</p>
            <ul className='ml-8 my-5'>
                <li>i. render</li>
                <li>ii. componentDidMount</li>
            </ul>
            <h2 className=' text-2xl '>Unmounting Phase:</h2>
            <p>When a component is deleted. It has one lifecycle hook that we commonly use:</p>
            <ul className='ml-8 my-5'>
                <li> i. componentWillUnmount</li>
            </ul>
            <p>All these lifecycle hooks are called in order.</p>
            <p>In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree. Consider that we have an App structure like this:</p>
            <img src="https://miro.medium.com/max/1386/1*4jNs9MbPRc9_Lvxqy6S0ww.png" alt="" />
            <p>When we run this App and if we declare all the lifecycle hooks mentioned above and console.log() in every hook, we will see that the hooks are called in the following order.</p>
            <ul className="list-decimal my-5 ml-5">
                <li>App-constructor</li>
                <li>App-rendered</li>
                <li>NavBar-rendered (NavBar is a Stateless functional component)</li>
                <li>Counters-rendered (Counters is a Stateless functional component)</li>
                <li>(4) Counter-rendered (Counter is a Stateless functional component)</li>
                <li>App-didMount</li>
            </ul>
            <p>Now, if you don't know what a Stateless functional component is, its a component that has no state or constructor or any lifecycle hooks and are fully controlled by their parents. They only render a react component.</p>
            <p>So now, what happens when a state or props is changed? It renders all its components again.</p>
            <p>React, keeps a track record of all its virtual DOM. Whenever a change happens, all the components are rendered and this new virtual DOM is then compared with the old virtual DOM. Only the differences found are then reflected in the original DOM.</p>
            <p>So, it's obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won't be able to see that there is a change of the state and so it won't be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of React.component , where React tries to optimize some time by not rendering components if no changes are found.</p>
            <p>Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>
        </div>
    </div>
    );
};

export default DirectState;