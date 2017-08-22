import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


class App extends React.Component{
    render() {
       return (
           <div>
                <Navbar />
                <Header />
                <Content />
                <Footer />
            </div>
       )
    }
}



export default App;