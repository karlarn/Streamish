import React, { useEffect, useState } from "react";
import Video from './Video';
import SearchVideo from "./SearchVideo";
import VideoForm from "./VideoForm";
import { getAllVideos, getSearchedForVideo } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchedVideos, setSearchedVideos] = useState([]);
    // const [video, setVideo]= useState({
    //     title: "",
    //     url: "",
    //     description: ""
    // })

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            getSearchedForVideo(searchInput).then(
                video=> setSearchedVideos(video)
            )
            
        }

    }

    



    useEffect(() => {
        getVideos();
    }, []);

    return (
        <>
            <h1>Search for a video:</h1>
            <section className="searchInput">
                <input id="searchInput" type="text" placeholder="Search for a Video"
                    onKeyDown={(e) => {
                    if(e.key==="Enter"){searchItems(e.target.value)}}} ></input>
            </section>
            <div className="container">
                <div className="row justify-content-center">
                    {searchedVideos.map((video) => (
                        <SearchVideo video={video} key={video.id} />
                    ))}
                </div>
            </div>
            <div className="container">
                <VideoForm ></VideoForm>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>);
};

export default VideoList;