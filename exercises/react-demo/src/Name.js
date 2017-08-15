import React from 'react';

const human = {
    name: "travis", 
    age: 25,
    sex: "male", 
    describe: function () {
        return `Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm ${this.sex}.`
    }
}


class Name extends React.Component {
    render() {
        return (
        <div>
            <h1>{human.describe()}</h1>
            <h1>{human.describe()}</h1>
        </div>
        )
    }
}


export default Name;