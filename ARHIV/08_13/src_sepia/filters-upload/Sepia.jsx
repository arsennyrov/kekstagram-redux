export function Sepia(props) {
	const { srcupload } = props;

	return (
		<>
			<input
				type='radio'
				name='effect'
				id='upload-effect-sepia'
				value='sepia'
			/>
			<label className='upload-effect-label' htmlFor='upload-effect-none'>
				<div
					className='upload-effect-label upload-effect-label-sepia'
					htmlFor='upload-effect-sepia'
					style={{ backgroundImage: `url(${srcupload})` }}
				></div>
				Сепия
			</label>
		</>
	);
}
