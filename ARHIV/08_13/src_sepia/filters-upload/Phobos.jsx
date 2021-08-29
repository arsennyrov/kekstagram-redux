export function Phobos(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-phobos'
				value='Phobos'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-label upload-effect-label-phobos'
					htmlFor='upload-effect-phobos'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Фобос
			</label>
		</>
	);
}
