import React from 'react'
import './index.scss'
import {Button} from 'antd'

class Container extends React.Component {
    state = {
    };

    addFunMenu = () => {
        this.props.menuForm = true
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.addFunMenu}>新增功能菜单</Button>
            </div>
        )
    }
}

export default Container
