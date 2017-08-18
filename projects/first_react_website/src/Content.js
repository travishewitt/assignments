import React from 'react';
import Image from './Image.js';

class Content extends React.Component{
    constructor () {
        super();
        this.images = [
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-3.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-2.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-9.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-8.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-7.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-6.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-5.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-4.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-12.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-11.jpg"},
            {imgURL: "http://www.inrichting-huis.com/wp-content/afbeeldingen/mooiste-coffee-shops-10.jpg"},
            {imgURL: "http://www.contemporist.com/10-unique-coffee-shop-designs-in-asia/"},
            {imgURL: "http://www.cocokelley.com/wp-content/uploads/2017/02/BH-building-greenhouse-dining-in-london-via-coco-kelley.jpg"},
            {imgURL: "http://68.media.tumblr.com/ae09d880c388107ada88f604fd8f1e85/tumblr_nwuphuxaW31qapuajo1_500.jpg"},
            {imgURL: "http://68.media.tumblr.com/6e3d3efde07ae76f2d038f79b61afc9b/tumblr_ocsik7ZxbV1qkbpm3o1_1280.jpg"},
            {imgURL: "https://i.pinimg.com/564x/5e/76/ff/5e76ff8764bb203406a6f26f8dd04a0f.jpg"}


        ]
    }
    genImg () {
        return this.images.map((item, index)=> {
            return <Image key = {index} url = {item.imgURL} />
        })
    }
    render() {
        return (
            <div className = "content-wrapper">
               {this.genImg()}
            </div>
        )
    }
}


export default Content;