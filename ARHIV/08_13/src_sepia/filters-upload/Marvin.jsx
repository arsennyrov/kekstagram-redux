export function Marvin(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-marvin'
				value='marvin'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-label upload-effect-label-marvin'
					htmlFor='upload-effect-marvin'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Марвин
			</label>
		</>
	);
}
