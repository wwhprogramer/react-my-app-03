import React from 'react'
import './index.scss'
import FunBtns from './funBtns'
import MenuBar from './menubar'
import MenuForm from './menuform'

class Container extends React.Component {
    state = {
        menuForm: false
    };

    render() {
        

        return (
            <div>
                <FunBtns menuForm={this.state.menuForm}/>
                <MenuBar/>
                <MenuForm/>
            </div>
        )
    }
}

export default Container
