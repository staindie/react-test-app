import React from 'react';
import { Card } from 'antd';

const VideoItem = ({video, handleVideoSelect}) => {
    const { snippet } = video;

    return (
        <Card
            hoverable
            className="video-list__item"
            size="small"
            title={snippet.title}
            onClick={() => handleVideoSelect(video)}
        >
            <img
                src={snippet.thumbnails.medium.url}
                alt={snippet.description}
            />
        </Card>
    )
};
export default VideoItem;