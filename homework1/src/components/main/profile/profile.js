import React from "react";
import './profile.css';

import ProfileImage from "./components/profileimage";
import ProfileInfo from "./components/profileinfo/profileinfo";
import ProfileButtons from "./components/profilebuttons";

const Profile = () => {
    return (
        <>
            <div className="profile_row bg-light">
                <div className="col-2">
                    <ProfileImage />
                </div>
                <div className="col-8">
                    <ProfileInfo />
                </div>
                <div className="col-2">
                    <ProfileButtons />
                </div>
            </div>
        </>
    );
}

export default Profile;