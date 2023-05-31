import React from 'react';
import Header from '../Header/Header';
import './Blog.css';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='singleBlog'>
                <h1>React-Router</h1>
                <p>React Router is a library that provides routing capabilities to React applications. It allows you to define different routes for different components and enables navigation between these components based on the URL. React Router helps in building single-page applications by handling the rendering of different components based on the current URL path. It provides a declarative way to define routes and supports features like nested routes, route parameters, and query parameters.</p>
            </div>

            <div className='singleBlog'>
                <h1>Context API</h1>
                <p>The Context API is a feature in React that allows you to share data between components without explicitly passing the data through props at each level of the component tree. It provides a way to create and share a global state that can be accessed by any component within the application.

                The Context API consists of two main parts: the Context object and the Provider component. The Context object defines the shape of the data that will be shared, and the Provider component wraps the components that need access to this shared data. The Provider component provides the data to all the nested components, and any component can access this data using the useContext hook.

                The Context API is useful in scenarios where data needs to be passed through multiple levels of components, such as user authentication state, theme preferences, or language settings. It helps simplify the prop drilling problem and makes it easier to manage and update shared data.</p>
            </div>

            <div className='singleBlog'>
                <h1>useRef</h1>
                <p>useRef is a hook provided by React that returns a mutable ref object. The ref object can hold a value that persists across re-renders of a component. Unlike the state, updating a ref does not cause a re-render of the component.
                The primary purpose of useRef is to access and manipulate DOM elements or to store values that need to persist across component renders. It is commonly used for the following scenarios:

                Accessing DOM elements: You can attach a ref to a DOM element and then use the ref to interact with that element, such as getting its dimensions, focusing it, or triggering certain actions.
                Storing mutable values: Since the value of a ref persists across re-renders, you can use it to store values that need to be retained but don't require triggering a re-render. For example, you can use a ref to store a previous value for comparison in a component's effect or to store a reference to a setInterval or setTimeout function.
                useRef provides a way to maintain mutable state within a functional component without triggering re-renders. It's important to note that updating the ref value using ref.current = newValue does not cause a component re-render. If you want to trigger a re-render when the value changes, you should use the useState hook instead.</p>
            </div>

        </div>
    );
};

export default Blogs;