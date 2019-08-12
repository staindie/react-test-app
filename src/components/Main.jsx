import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';

const { Sider, Content } = Layout;

class Main extends React.Component {
    state = {
        defaultValue: 'Default text',
        videos: [],
        selectedVideo: null
    };

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: { q: termFromSearchBar }
        });
        this.setState({
            videos: response.data.items
        })
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    render() {
        debugger;
        return (
            <Layout className="main">
                <Header handleSubmit={this.handleSubmit} />
                <Layout className="main__content">
                    <Sider className="video-list">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </Sider>
                    <Content>
                        <VideoDetail video={this.state.selectedVideo}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Main);