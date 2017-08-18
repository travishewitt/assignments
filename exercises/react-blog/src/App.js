import React from 'react';
import Header from './Header.js';
import Blogpost from './Blogpost.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';

class App extends React.Component {
    constructor() {
        super();
        this.posts = [
        {
            title: "Winds of Change",
            subtitle: "what the sky feels like",
            author: "@emptymind",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat nulla, consequuntur mollitia, itaque similique velit molestiae quibusdam fugit delectus nihil dignissimos. Porro libero sit sequi magnam atque, neque ratione?"
        },
        {
            title: "Winds of Fury",
            subtitle: "eye of the storm",
            author: "@emptymind",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat nulla, consequuntur mollitia, itaque similique velit molestiae quibusdam fugit delectus nihil dignissimos. Porro libero sit sequi magnam atque, neque ratione?"
        },
        {
            title: "God What?",
            subtitle: "do you even know?",
            author: "@emptymind",
            content: "This, right here, is god."
        },
        {
        title: "God What?",
        subtitle: "do you even know?",
        author: "@emptymind",
        content: "This, right here, is god."
        }
      ];
    }
        genPosts = function() {
        return this.posts.map((post, index)=>{
            return <Blogpost key = {index} post = {post}/>
        })
    }
    render() {
        return (
            <div className="app-wrapper">
                <Navbar />
                <Header/>
                {this.genPosts()}
                <Footer />
            </div>
        )
    }
}

export default App;