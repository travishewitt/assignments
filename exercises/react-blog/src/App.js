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
            title: "Winds of Blorp",
            subtitle: "what the sky feels like",
            author: "@emptymind",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat nulla, consequuntur mollitia, itaque similique velit molestiae quibusdam fugit delectus nihil dignissimos. Porro libero sit sequi magnam atque, neque ratione?"
        },
        {
            title: "Winds of Bloop",
            subtitle: "eye of the storm",
            author: "@emptymind",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat nulla, consequuntur mollitia, itaque similique velit molestiae quibusdam fugit delectus nihil dignissimos. Porro libero sit sequi magnam atque, neque ratione?"
        },
        {
            title: "Gorsh grodd flimtim?",
            subtitle: "do you even flow?",
            author: "@emptymind",
            content: "This, right here, is snipple slorpgloop."
        },
        {
            title: "Gromple lorp?",
            subtitle: "do you even know?",
            author: "@emptymind",
            content: "This, right here, is forgle flim flop."
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