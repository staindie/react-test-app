import React from 'react';
import { Card }  from 'antd'

const { Meta } = Card;

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <Card
            className="video-player"
            cover={
                <iframe className="video-player__iframe" src={videoSrc} allowFullScreen title='Video player'/>
            }
        >
            <Meta title={video.snippet.title} description={video.snippet.description} />
        </Card>
    )
};

export default VideoDetail;