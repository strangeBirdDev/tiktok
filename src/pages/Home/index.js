import * as videosServices from "@/services/videosServices";
import React, { useEffect, useState } from "react";
import VideoItem from "./components/VideoItem";

function Home() {
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        try {
            const fetchApiVideos = async () => {
                const videoList = await videosServices.getVideoList();

                setVideoList(videoList.data);
            };

            fetchApiVideos();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="wrapper">
            {videoList.map((video) => (
                <VideoItem
                    key={video.id}
                    avatar={video.user.avatar}
                    nickname={video.user.nickname}
                    name={`${video.user.first_name} ${video.user.last_name}`}
                    videoDes={video.description}
                    videoSrc={video.file_url}
                    likeCount={video.likes_count}
                    commentCount={video.comments_count}
                    shareCount={video.shares_count}
                    viewCount={video.views_count}
                />
            ))}
        </div>
    );
}

export default Home;
