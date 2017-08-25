import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Article from './components/article.js';

import './css/index.css';


class App extends React.Component {
    constructor() {
        super();
        this.articles = [
            {title: "David Bowie", src: "http://i.huffpost.com/gen/2681830/thumbs/o-HAIRLESS-900.jpg?6"},
            {title: "Pupper", src: "http://cdn3-www.dogtime.com/assets/uploads/gallery/golden-retriever-puppies_3/gp-7.jpg"},
            {title: "German Shepherd", src: "https://vetstreet.brightspotcdn.com/dims4/default/7dfaa28/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F59%2Fbb7610a80711e0a0d50050568d634f%2Ffile%2Fgerman-shepherd-5-645mk070411.jpg"},
            {title: "Another German Shepherd", src: "https://i.ytimg.com/vi/oGoPUw0YBAg/maxresdefault.jpg"},
            {title: "One Last Pupper", src: "https://www.dogbreedinfo.com/images24/JapaneseChinPurebredDogNiko1HalfYearsOld4.jpg"}
        ]
    }
    render() {
        return (
            <div>
                <Header />
                {this.articles.map((item)=> <Article title={item.title} src={item.src}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)