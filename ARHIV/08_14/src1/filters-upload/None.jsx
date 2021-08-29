export function None(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-none'
				value='none'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-preview'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Оригинал
			</label>
		</>
	);
}
