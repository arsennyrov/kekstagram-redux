export function Chrome(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-chrome'
				value='chrome'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-label upload-effect-label-chrome'
					htmlFor='upload-effect-chrome'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Хром
			</label>
		</>
	);
}
