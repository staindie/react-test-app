import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';
import { searchVideos, selectVideo } from '../store/actions';

const { Sider, Content } = Layout;

class Main extends React.Component {

    render() {
        const {
            searchVideos, selectVideo, defaultValue, videos, selectedVideo
        } = this.props;

        return (
            <Layout className="main">
                <Header defaultValue={defaultValue} handleSearch={searchVideos} />
                <Layout className="main__content">
                    <Sider className="video-list">
                        <VideoList handleVideoSelect={selectVideo} videos={videos}/>
                    </Sider>
                    <Content>
                        <VideoDetail video={selectedVideo}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = { searchVideos, selectVideo };

export default connect(mapStateToProps, mapDispatchToProps)(Main);