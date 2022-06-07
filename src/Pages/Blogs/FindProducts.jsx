import React from 'react';

const FindProducts = () => {
    return (
        <div className="blog-container">
        <h1 className='text-3xl m-8 text-center'>How will you implement a search to find products by name?</h1>
        <img src="https://i.postimg.cc/QtX4bCnC/How-will-you-improve-the-performance-of-a-React-Application.jpg" className='my-6' alt="" />
        <div className='space-y-3 mx-6'>
                <p>When you send a GET request to an API, you get the response data back from the server. But sometimes managing this data can be a problem.</p>
                <p>In this blog post, I will show you how to create a search filter in React. It will search for a particular term in the data using functional components and React hooks.</p>
                <h2>How to Make a GET Request to an API</h2>
                <p>First of all, let's make a GET request to an API that will fetch some data from the server. You can use any server you want to get the data, but in this article, I'll use {'{JSON}'} Placeholder to fetch the users list.</p>
                <p>In this example, we have cards which show the names and emails of different users. We also have a search input box which we'll use to search for a particular user.</p>
                <h2>How to Get Search Input from the Search Input Box</h2>
                <p>Now, let's get our search query from the search input box.</p>
                <p>Create a state for the search input.</p>

                <div className="mockup-code">
                    <pre data-prefix="1"><code>const [searchInput, setSearchInput] = useState('');</code></pre>
                </div>
                <p>Creating the state for search input</p>
                <p>Here, searchInput is a string, and we'll use setSearchInput to set the search input.</p>
                <p>Now, we'll create a function that will handle our search functionality.</p>

                <div className="mockup-code">
                    <pre data-prefix="1"><code> const searchItems = () => {`{`}</code></pre>
                    <pre data-prefix="1"><code>{`}`}</code></pre>
                </div>
                

                <p>Creating a function to handle our search functionality</p>
                <p>And bind this function to the search input via the onChange event.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`<Input icon='search'`}</code></pre>
                    <pre data-prefix="2"><code>{` placeholder='Search...'`}</code></pre>
                    <pre data-prefix="2"><code>{` onChange={() => searchItems()} />`}</code></pre>
                </div>
            <p>Binding the searchItems function to the Input field</p>
            <p>So, whenever we type something in the input field, the searchItems will run.Now, we need to pass the input value to the searchItems function.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`<Input icon='search'`}</code></pre>
                    <pre data-prefix="2"><code>    placeholder='Search...'</code></pre>
                    <pre data-prefix="3"><code>    onChange={`(e) => searchItems(e.target.value)}`}</code></pre>
                    <pre data-prefix="4"><code>{`/>`}</code></pre>
                    
            
        
                </div>
                <p>Passing the Input value to the searchItems Function</p>
                <p>Next, let's receive the search query into the function and set the searchInput state to this value using setSearchInput that we created previously.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const searchItems = (searchValue) => {
            setSearchInput(searchValue)
        }`}</code></pre>
                </div>
                <p>Setting the searchInput state to the searchValue</p>
                <p>You can check this whether it is working on not by consoling searchValue.As you can see, I am typing my name here and it is showing up in the console.</p>
                <h2>How to Filter Items Based on the Search Results</h2>
                <p>Now, we are going to filter out our APIData using the filter method.</p>
                <p></p>
                {/*             
            
                

     */}
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const searchItems = (searchValue) => {`}</code></pre>
                    <pre data-prefix="2"><code>{` setSearchInput(searchValue)`}</code></pre>
                    <pre data-prefix="3"><code>{` APIData.filter((item) => {`}</code></pre>
                    <pre data-prefix="4"><code>{`   return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())`}</code></pre>
                    <pre data-prefix="5"><code>{`             })
        }`}</code></pre>
                </div>
                <p>Filtering the APIData according to the search term</p>
                <p>In this function searchTerm, you can see that we are using the filtermethod to filter out APIData state, which contains the data coming from the server.</p>
                <p>We are also using Object.values to get the values from the object item. </p>
                <p>Then, we are converting the values into a string using the join(' ')method.</p>
                <p>Next, we are changing that string values into lowercase using the toLowerCase method.</p>
                <p>And lastly, we are checking if this string includes our search input that we typed into the search bar. We also convert it to lowercase to make sure that if we type our term in uppercase, it converts the string to lowercase to make the search more effective.</p>
                <p>Then, we return the whole query.</p>
                <p>Now we need to set this filtered array into a variable.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })`}</code></pre>
                </div>
                
                <p>Storing the filtered data into a const filteredData</p>
                <p>Let's check the above functionality by consoling it. So, search a user name and you will see that you get the data for that username in particular.</p>
                <p>Getting the search item into the console</p>
                <p>Now, we need a state where we can store the filtered data. So, let's create one.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const [filteredResults, setFilteredResults] = useState([]);`}</code></pre>
                </div>
                <p>A new state for the filtered data</p>
                <p>Create one state that will contain our filtered data.</p>
                <p>Then set this state to filteredData in the searchItems function using setFilteredResults.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = APIData.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
`}</code></pre>
                </div>
                <p>Setting filteredData into the filteredResults state.</p>
                <h2>How to Show the Filtered Results in the User Interface</h2>
                <p>Now, let's show these filtered results in our main UI.</p>
                <p>First we need to write some code that checks if our search input is empty, and if so, shows all the data. Otherwise it will filter them according to the search input.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

`}</code></pre>
                </div>
                <p>Checking the search term if it is empty</p>
                <p>We also need this check in the return part of the application.</p>
                <p>So, if the search term's length is greater than 1, we will show filtered data. Otherwise we will show all the data which is stored in the API Data state.</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`<Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>

`}</code></pre>
                </div>
                <p>Checking if the data have the length of greater than one.</p>
                <p>Now, if we search some username in the search field, we will get that specific user's data.</p>
                <p>Getting the search input's results in the UI And if we remove the name, we will get all the data.</p>
                <p>Getting all the data if the search input is empty</p>
                <p>Here is all the code for your reference:</p>
                <div className="mockup-code">
                    <pre data-prefix="1"><code>{`import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { Card, Input } from 'semantic-ui-react'
    export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Description>
                                        {item.email}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
     )
  }

`}</code></pre>
                </div>
                <p>The whole code for search filter.</p>
                <p>Now there you have it, a fully functional search filter in React using React hooks.</p>
                <p>We often handle this functionality from the back end side by passing search query parameters in the API endpoint. But it's important to know how to handle it from the front end side too.</p>
        </div>
    </div>
    );
};

export default FindProducts;