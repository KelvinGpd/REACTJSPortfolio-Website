import { useEffect, useRef } from "react";

const MediaHolder = ({playVideo, mediaPath, hasOutline }) => {
    const isVideo = mediaPath.endsWith(".mp4") || mediaPath === "";

    if (playVideo) {
        console.log("THIS IS THE SELECTED MEDIA " + mediaPath)
    }

    //update video src
    function Clip({ url }) {
        const videoRef = useRef();
      
        console.log("THIS IS PATH" + url);
        useEffect(() => {    
          videoRef.current?.load();
        }, [url]);
      
        return (
          <video ref={videoRef} width={"100%"} controls={playVideo} muted playsInline>
            <source src={url} type="video/mp4" />
          </video>
        );
    }


    return (
        <div className="media-holder" style={hasOutline ? {boxShadow: "5px 5px 5px #D3BBAF"} : null}>
            {isVideo? 
                <div className = "video-holder">
                    {
                        mediaPath === "" ? 
                        <div style={{backgroundColor : "black", width : "100%", height : "100%"}}/>
                        : 
                        <Clip
                            url={mediaPath}
                        />
                        // <video width={"100%"} controls={playVideo} muted playsInline>
                        //     <source src={mediaPath} type="video/mp4"/>
                        // </video>
                    }
                    {playVideo ? null :
                        <div className="play-icon-container">
                            <img src="./assets/play-arrow.svg"/>
                        </div>
                    }
                </div> : <img src = {mediaPath} width={"100%"}></img>
            }
        </div>
    )


}
export default MediaHolder;
