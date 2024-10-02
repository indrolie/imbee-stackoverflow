import React, { useState } from 'react';

import placeholderImg from '../../assets/images/placeholder.png'

const UserProfile = ({ user }) => {
	const originalImgSrc = user.profile_image; 
	const [imgSrc, setImgSrc] = useState(originalImgSrc || placeholderImg);
	const handleImgError = () => {
		if (imgSrc !== placeholderImg) {
			setImgSrc(placeholderImg);
		}
	};

	return (
		<div className="user-info">
			<img
				src={imgSrc}
				alt="Profile"
				className="profile-pic"
				onError={handleImgError}
			/>
			<span className="profile-name">{user.display_name}</span>
		</div>
	);
};

export default UserProfile;