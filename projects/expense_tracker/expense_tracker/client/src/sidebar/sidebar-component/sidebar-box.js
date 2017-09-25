import React from 'react';
import FormContainer from '../expenses/form/form-container.js';
import ListContainer from '../expenses/list/list-container.js';

class SidebarBox extends React.Component {
    render() {
        return (
            <div className = "sidebar-box col-md-3">
                <FormContainer />
                <ListContainer />
            </div>
        )
    }
}

export default SidebarBox