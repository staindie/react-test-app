import React, { Fragment } from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => (
    <Fragment>
        {
            videos.map((video) => (
                <VideoItem
                    key={video.id.videoId}
                    video={video}
                    handleVideoSelect={handleVideoSelect}
                />
            ))
        }
    </Fragment>
);
export default VideoList;