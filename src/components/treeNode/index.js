import React from 'react'
import './index.scss'


const treeData = [
    {
        id: '1',
        title: '父节点id 1',
        childrenOpen: false,
        children: [
            {
                id: '1-1',
                title: '子节点id 1-1',
                childrenOpen: false,
                children: [],
            },
            {
                id: '1-2',
                title: '子节点id 1-2',
                childrenOpen: false,
                children: [
                    {
                        id: '1-2-1',
                        title: '子节点id 1-2-1',
                        childrenOpen: false,
                        children: [],
                    }
                ]
            },
        ]
    },
    {
        id: '2',
        title: '父节点id 2',
        childrenOpen: false,
        children: [
            {
                id: '2-1',
                title: '子节点id 2-1',
                childrenOpen: false,
                children: [
                    {
                        id: '2-1-1',
                        title: '子节点id 2-1-1',
                        childrenOpen: false,
                        children: [
                            {
                                id: '2-1-1-1',
                                title: '子节点id 2-1-1-1',
                                childrenOpen: false,
                                children: [],
                            }
                        ]
                    }
                ]
            },
            {
                id: '2-2',
                title: '子节点id 2-2',
                childrenOpen: false,
                children: [
                    {
                        id: '2-2-1',
                        title: '子节点id 2-2-1',
                        childrenOpen: false,
                        children: [],
                    }
                ]
            },
        ]
    },
]

class TreeNode extends React.Component {
    state = {
        treeData: treeData
    };

    render() {
        let {treeData} = this.state

        // 根节点
        let treeDataEl = treeData.map(treeDataObj => {
            let singleNode = <SingleNode treeDataObj={treeDataObj} key={treeDataObj.id}/>
            return singleNode
        })
        

        return (
            <ul className="tree-list">
                {treeDataEl}
            </ul>
        )
    }
}

class SingleNode extends React.Component {

    onClick = e => {
        e.stopPropagation()
        this.props.treeDataObj.childrenOpen = !this.props.treeDataObj.childrenOpen
        this.forceUpdate()
    }

    render() {
        const {treeDataObj} = this.props

        let hasChildren;
        // 如果有子节点
        if(treeDataObj.childrenOpen) {
            if(treeDataObj.children.length) {
                let treeDataChildrenEl = treeDataObj.children.map(treeDataChildrenObj => {
                    let singleNode = <SingleNode treeDataObj={treeDataChildrenObj} key={treeDataChildrenObj.id}/>
                    return singleNode
                })
                hasChildren = <ul>{treeDataChildrenEl}</ul>
            }
        }
        let imgState = treeDataObj.childrenOpen ? <img src={require('img/folder_open.png')} alt=""/> : <img src={require('img/folder_close.png')} alt=""/>
        return (
            <li key={treeDataObj.id} onClick={this.onClick} className="tree-item">
                <div className="tree-title">
                    {imgState}
                    {treeDataObj.title}
                </div>
                {hasChildren}
            </li>
        )
    }
}

export default TreeNode
