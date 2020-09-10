import React from 'react'
import './index.scss'
import { Tree } from 'antd';
import containerService from 'services/containerService'


const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ title: key, key });
        if (i < y) {
            children.push(key);
        }
    }
    if (_level < 0) {
        return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

class Menubar extends React.Component {
    state = {
        gData: [],
        expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],
    };

    onSelect = (selectedKeys, info) => {
        console.log(selectedKeys, info)
    }

    componentDidMount() {
        containerService.getAllMenu(
            {},
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )
    }

    render() {
        return (
            <Tree
                className="draggable-tree"
                defaultExpandedKeys={this.state.expandedKeys}
                draggable
                blockNode
                onSelect={this.onSelect}
                treeData={this.state.gData}
            />
        );
    }
}

export default Menubar
