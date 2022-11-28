import React from 'react';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "What are the different ways to manage a state in a React application?",
            desc: "There are four main types of state you need to properly manage in your React apps: Local state, Global state, Server state, URL state Let's cover each of these in detail: Local (UI) state – Local state  data we manage in one or another component. Local state is most managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global. Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build."
        },
        {
            id: 2,
            title: "How does prototypical inheritance work?",
            desc: "In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that."
        },
        {
            id: 3,
            title: "What is a unit test? Why should we write unit tests?",
            desc: "A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."
        },
        {
            id: 4,
            title: "React vs. Angular vs. Vue?",
            desc: "Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js. If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision. Angular vs React vs Vue Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!"
        }
    ]
    return (
        <div>
            <div className='container mx-auto px-3 py-10'>
                {
                    blogs.map(blog => <div className='mb-8'>
                        <h2 className='text-3xl font-bold'>{blog.title}</h2>
                        <p className='mt-3 text-gray-500'>{blog.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;