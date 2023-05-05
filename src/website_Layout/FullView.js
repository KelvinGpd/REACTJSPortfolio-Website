import React from "react";
import Rectangle from "../animation_components/Rectangle";
import WebsiteContent from "./WebsiteContent";


const FullView = () => {

    return(
        <div className="FullView"> 
            <div className="WebsiteContent">
                <WebsiteContent/>
            </div>
            <div className="background">
                <Rectangle width="100%" height="100%" color="#F15A22"/> 
            </div>
        </div>
    );
};

export default FullView