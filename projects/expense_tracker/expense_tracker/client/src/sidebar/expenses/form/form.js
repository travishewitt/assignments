import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <div className="form-box">
                <h3>Jot Down Your Expense!</h3>
                <div>
                    <form>
                        <input className="form-input" name="description" type="text" placeholder="Describe your expense!" onInput={this.props.input} value={this.props.expense.description}/>
                        <input className="form-input" name="cost" type="text" placeholder="How much was it?" onInput={this.props.input} value={this.props.expense.cost}/>
                        <div className="buttonGroup">
                            <button name="Gifts" onClick={this.props.submit} className = "glyphicon glyphicon-gift" title="Gifts"></button>
                            <button name="Business" onClick={this.props.submit} className = "glyphicon glyphicon-briefcase" title="Business"></button>
                            <button name="Food and Dining" onClick={this.props.submit} className = "glyphicon glyphicon-cutlery" title="Food and Dining"></button>
                            <button name="Payments" onClick={this.props.submit} className = "glyphicon glyphicon-usd" title="Payments"></button>
                            <button name="Auto and Transport" onClick={this.props.submit} className = "glyphicon glyphicon-road" title = "Auto and Transport"></button>
                            <button name="Travel" onClick={this.props.submit} className = "glyphicon glyphicon-plane" title="Travel"></button>
                            <button name="Health and Fitness" onClick={this.props.submit} className = "glyphicon glyphicon-leaf" title="Health and Fitness"></button>
                            <button name="Shopping" onClick={this.props.submit} className = "glyphicon glyphicon-shopping-cart" title="Shopping"></button>
                            <button name="Education" onClick={this.props.submit} className ="glyphicon glyphicon-education" title="Education"></button>
                            <button name="Entertainment" onClick={this.props.submit} className = "glyphicon glyphicon-glass" title="Entertainment"></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;