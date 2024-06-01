import React from 'react';

type AvatarBlockProps = {
    imageUrl: string;
    name: string;
    bio: string;
};

const AvatarBlock: React.FC<AvatarBlockProps> = ({ imageUrl, name, bio }) => {
    return (
        <div className="avatar-block">
            <img className="avatar-block__image" src={imageUrl} alt="avatar" />
            <div className="avatar-block__info">
                <h2 className="avatar-block__name">{name}</h2>
                <p className="avatar-block__bio">{bio}</p>
            </div>
        </div>
    );
};

export default AvatarBlock;
