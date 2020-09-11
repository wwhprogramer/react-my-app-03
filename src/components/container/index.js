import React from 'react'
import './index.scss'
import containerService from 'services/containerService'
import FunBtns from './funBtns'
import MenuBar from './menubar'
import MenuForm from './menuform'

class Container extends React.Component {
    state = {
        menuForm: true,
        menubarObj: null,
        gData: [],
        firstId: 1,
    };

    _this = this

    addFunChildMenu = () => {
        let { menubarObj, gData } = this.state
        const menubarObjItem = {
            id: 0,
            key: Math.random(new Date().getTime()) * 999,
            children: [],
            title: '新增菜单',
            parentId: 0,
            funUrl: '',
            funId: '',
            icon1: '',
            icon2: '',
            icon3: '',
            operateType: '跳转',
            isEnable: 1,
            extend1: '',
            extend2: '',
            extend3: '',
            classification: '',
        }
        if (!gData.length || !menubarObj) {
            gData.push(menubarObjItem)
        } else {
            this.findChildKey(gData, menubarObj.key, (item) => {
                item.children.push(menubarObjItem)
            })
        }
        let newGData = [].concat(gData)
        // console.log(newGData)
        this.setState({
            gData: newGData
        })
        this.forceUpdate()
    }

    findChildKey = (childArr, key, cb) => {
        for (let i = 0; i < childArr.length; i++) {
            let item = childArr[i]
            item.children = item.children ? item.children : []
            if (item.key === key) {
                cb && cb(item)
                return
            } else {
                if (!item.children.length) {
                    return
                }
                this.findChildKey(item.children, key, cb)
            }
        }
    }

    changeMenubarObj = (menubarObj) => {
        this.setState({
            menubarObj
        })
    }

    changeGData = (gData) => {
        this.setState({
            gData
        })
    }

    changeMenubarItem = (menubarObj) => {
        let gData = this.state.gData
        this.findChildKey(gData, menubarObj.key, (item) => {
            item.title = menubarObj.title
            item.funUrl = menubarObj.funUrl
            item.funId = menubarObj.funId
            item.icon1 = menubarObj.icon1
            item.icon2 = menubarObj.icon2
            item.icon3 = menubarObj.icon3
            item.operateType = menubarObj.operateType
            item.isEnable = menubarObj.isEnable
            item.extend1 = menubarObj.extend1
            item.extend2 = menubarObj.extend2
            item.extend3 = menubarObj.extend3
            item.classification = menubarObj.classification
        })
        this.saveAllMenubar(gData)
    }

    saveAllMenubar = (gData) => {
        console.log(this)
        // debugger
        this.setState({
            firstId: 1
        })
        console.log(this.state.firstId)
        this.setGDataId(gData)
        let newGData = this.setGDataToArr(gData)
        this.saveMenu(newGData)
    }

    /**
     * 赋值id和parentId
     *
     * @memberof Container
     */
    setGDataId = (gData, parentId = 0) => {
        gData.forEach(root => {
            let firstId = this.state.firstId
            console.log(this.state.firstId)
            root.id = firstId
            root.parentId = parentId
            firstId++
            this.setState({
                firstId
            })
            if (root.children && root.children.length) {
                this.setGDataId(root.children, root.id)
            }
        })
    }

    setGDataToArr = (gData, newGData = []) => {
        gData.forEach(root => {
            newGData.push({
                id: root.id,
                title: root.title,
                parentId: root.parentId,
                funUrl: root.funUrl,
                funId: root.funId,
                icon1: root.icon1,
                icon2: root.icon2,
                icon3: root.icon3,
                operateType: root.operateType,
                isEnable: root.isEnable,
                extend1: root.extend1,
                extend2: root.extend2,
                extend3: root.extend3,
                classification: root.classification,
            })
            if (root.children && root.children.length) {
                this.setGDataToArr(root.children, newGData)
            } else {
                return
            }
        })
        return newGData
    }

    saveMenu = (newGData) => {
        containerService.saveMenu(
            {
                gData: JSON.stringify(newGData)
            },
            res => {
                console.log(res)
            },
            err => {
                console.log(err)
            }
        )
    }


    componentDidMount() {
        containerService.getAllMenu(
            {},
            res => {
                this.setState({
                    gData: res
                })
            },
            err => {
                console.log(err)
            }
        )
    }


    render() {
        // console.log(this.state.gData)

        return (
            <div className="container">
                <FunBtns addFunChildMenu={this.addFunChildMenu} />
                <div className="menubar-menuform">
                    <div className="menubar">
                        <MenuBar changeMenubarObj={this.changeMenubarObj} changeGData={this.changeGData} gData={this.state.gData} saveAllMenubar={this.saveAllMenubar.bind(this)} />
                    </div>
                    <div className="menuform">
                        <MenuForm menuForm={this.state.menuForm} menubarObj={this.state.menubarObj} gData={this.state.gData} changeMenubarItem={this.changeMenubarItem} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container
