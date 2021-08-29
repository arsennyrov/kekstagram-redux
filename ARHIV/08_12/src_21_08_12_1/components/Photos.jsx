import React, { useState } from "react";
import { Photo } from "./Photo";
import { Photooverlay } from "./Photooverlay";

function Photos(props) {
	const { photos = [] } = props;

	const [overlay, setOverley] = useState(false);
	const [url0, setUrl] = useState("");
	const [index, setIndex] = useState(0);
	const [visibl, setVisibl] = useState(true);

	function onClickOverlay(e) {
		setOverley(overlay ? false : true);
		setVisibl(visibl ? false : true);
	}

	function onClick(e) {
		setOverley(true);
		setUrl(e.target.src);
		setVisibl(true);

		if (e.localName === "img") {
			setIndex(e.target.src.match(/\/([0-9]*).\s*[^.]+$/)[1]);
		}
	}

	return (
		<div className='pictures container' onClick={onClick}>
			{photos.map((photo) => (
				<Photo key={photo.url} {...photo} />
			))}

			{overlay ? (
				<Photooverlay
					url0={url0}
					index={index}
					photos={photos}
					onClickOverlay={onClickOverlay}
					visibl={visibl}
				/>
			) : (
				<div className='gallery-overlay hidden'></div>
			)}

			{/* 			<Message comment={comment0} />
			<Message comment={comment1} /> */}
		</div>
	);
}
export { Photos };
