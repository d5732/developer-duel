import {
    ProfileContainer,
    ProfileDetailsContainer,
    ProfileDetail,
    ProfileLabel,
    ProfileValue,
    Bio,
    Avatar,
    AvatarBioContainer,
} from "./Shared.styles.jsx";

const ProfileCard = ({ data, tie, isWinner }) => {
    let winConditionStyle = {};
    if (tie === true) {
        winConditionStyle.color = "orange";
    } else if (isWinner === true) {
        winConditionStyle.color = "lime";
    } else if (isWinner === false) {
        winConditionStyle.color = "red";
    }
    return (
        <ProfileContainer>
            <AvatarBioContainer>
                <Avatar src={data?.avatar_url}></Avatar>
                <Bio>{data?.bio}</Bio>
            </AvatarBioContainer>
            <ProfileDetailsContainer>
                <ProfileDetail>
                    <ProfileLabel>username</ProfileLabel>
                    <ProfileValue>{data?.username}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>name</ProfileLabel>
                    <ProfileValue>{data?.name}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>location</ProfileLabel>
                    <ProfileValue>{data?.location}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>titles</ProfileLabel>
                    <ProfileValue>{data?.titles?.join(", ")}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>fav language</ProfileLabel>
                    <ProfileValue>{data?.["favorite-language"]}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>total stars</ProfileLabel>
                    <ProfileValue>
                        <span style={{ ...winConditionStyle }}>
                            {data?.["total-stars"]}
                        </span>
                    </ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>highest star count</ProfileLabel>
                    <ProfileValue>{data?.["highest-starred"]}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>public repos</ProfileLabel>
                    <ProfileValue>{data?.["public-repos"]}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>perfect repos</ProfileLabel>
                    <ProfileValue>{data?.["perfect-repos"]}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>followers</ProfileLabel>
                    <ProfileValue>{data?.followers}</ProfileValue>
                </ProfileDetail>
                <ProfileDetail>
                    <ProfileLabel>following</ProfileLabel>
                    <ProfileValue>{data?.following}</ProfileValue>
                </ProfileDetail>
            </ProfileDetailsContainer>
        </ProfileContainer>
    );
};

export default ProfileCard;
