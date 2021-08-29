export function Heat(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-heat'
				value='heat'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-label upload-effect-label-heat'
					htmlFor='upload-effect-heat'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Зной
			</label>
		</>
	);
}
