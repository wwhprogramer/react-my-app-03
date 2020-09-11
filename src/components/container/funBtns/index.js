import React from 'react'
import './index.scss'
import {Button} from 'antd'

class Container extends React.Component {
    state = {
    };

    addFunChildMenu = () => {
        this.props.addFunChildMenu()
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.addFunChildMenu}>新增功能菜单</Button>
            </div>
        )
    }
}

export default Container
