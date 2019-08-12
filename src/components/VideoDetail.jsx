import React from 'react';
import { Card }  from 'antd'

const { Meta } = Card;

const VideoDetail = ({ video }) => {
    return video && (
        <Card
            className="video-player"
            cover={
                <iframe
                    className="video-player__iframe"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    allowFullScreen
                    title='Video player'
                />
            }
        >
            <Meta title={video.snippet.title} description={video.snippet.description} />
        </Card>
    )
};

export default VideoDetail;