import React from "react";
import BurgerMenu from "../animation_components/BurgerMenu";
import Rectangle from "../animation_components/global_components/Rectangle";
import WebsiteContent from "./WebsiteContent";

const FullView = () => {

    return(
        <div className="FullView"> 
            <div className="WebsiteContent">
                <WebsiteContent/>
            </div>
            <div className="background">
                <BurgerMenu/>
                <Rectangle width="100%" height="100%" color="white"/> 
            </div>
        </div>
    );
};

export default FullView;