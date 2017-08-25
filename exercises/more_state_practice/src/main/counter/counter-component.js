import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar} from 'react-bootstrap';


class CounterComponent extends Component {
    render() {
        return (
            <div className="counter-wrapper">
                <h1>Counter-Mania</h1>
                <div className="view">{this.props.count}</div>
                <ButtonToolbar>
                <ButtonGroup bsSize="large">
                  <Button className = "btn-primary" onClick={this.props.handleUp}>+</Button>
                  <Button className = "btn-primary" onClick={this.props.handleDown}>-</Button>
                  <Button className = "btn-primary clear" onClick={this.props.handleClear}>Clear</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
        );
    }
}

export default CounterComponent;