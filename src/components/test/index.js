import React from 'react'
import './index.scss'
import comProjectService from 'services/comProjectService'
import Video from 'components/video/index'
import TreeNode from 'components/treeNode/index'
import { Button } from 'antd';

class Test extends React.Component {
    state = {
        newComProjectList: [],
        isShowVideo: false,
        isAutoLoad: false,
    };

    /**
     * 获取最新项目
     *
     * @memberof Test
     */
    findNewComProject = () => {
        comProjectService.findNewComProject(
            {},
            res => {
                this.setState({
                    newComProjectList: res
                })
            },
            err => {
                console.log(err)
            }
        )
    }

    showVideo = () => {
        this.setState({
            isShowVideo: !this.state.isShowVideo
        })
    }

    changeLoad = (isAutoLoad) => {
        this.setState({
            isAutoLoad: isAutoLoad
        })
    }

    render() {
        const { newComProjectList, isShowVideo, isAutoLoad } = this.state

        const projectNameListEl = newComProjectList.map(projectItem => {
            return <li key={projectItem._id}>{projectItem.projectName}</li>
        })

        const videoEl = isShowVideo ? <Video isAutoLoad={isAutoLoad} changeLoad={this.changeLoad}/> : ''

        return (
            <div>
                <ul>
                    {projectNameListEl}
                </ul>
                {videoEl}
                <Button type="primary" onClick={this.findNewComProject}>Get NewComProject</Button>
                <Button type="primary" onClick={this.showVideo}>show Video</Button>
                <TreeNode/>
            </div>
        )
    }
}

export default Test
