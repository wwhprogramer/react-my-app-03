import React from 'react'
import './index.scss'
import firstOpenApiService from 'services/firstOpenApiService'
import { Button } from 'antd';

class Video extends React.Component {
    state = {
        todayVideoList: []
    }

    /**
     * 每日视频推荐接口
     *
     * @memberof Test
     */
    todayVideo = () => {
        firstOpenApiService.todayVideo(
            {},
            res => {
                this.setState({
                    todayVideoList: res.result
                })
            },
            err => {
                console.log(err)
            }
        )
    }


    /**
     * 改变自动加载方式
     * 
     * @memberof Video
     */
    changeLoad = () => {
        this.props.changeLoad(!this.props.isAutoLoad)
    }

    /**
     * 生命周期
     *
     * @memberof Video
     */
    componentDidMount = () => {
        let {isAutoLoad} = this.props
        if(isAutoLoad) this.todayVideo()
    }

    render() {
        const { todayVideoList } = this.state

        const todayVideoListEl = todayVideoList.map((todayVideoItem, index) => {
            const contentImgUrl = todayVideoItem.data.content ? todayVideoItem.data.content.data.url : ''
            let imgEl = !!contentImgUrl ? <img className="content-img" src={contentImgUrl} alt="" /> : ''
            return (
                <li key={index}>
                    {imgEl}
                </li>
            )
        })

        return (
            <div>
                <ul>
                    {todayVideoListEl}
                </ul>
                <Button type="primary" onClick={this.todayVideo}>Get TodayVideo</Button>
                <Button type="primary" onClick={this.changeLoad}>changeLoad</Button>
            </div>
        )
    }
}

export default Video
