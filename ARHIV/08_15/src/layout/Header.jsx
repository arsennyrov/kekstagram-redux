function Header(props) {
	const { photos = [] } = props;

	console.log(photos);

	return (
		<nav className='filters'>
			<form
				className='filters form-header'
				action='index.html'
				method='get'
				autocomplete='off'
				onChange={(e) => {
					console.log(e.target.value);
				}}
			>
				<label className='filters-item'>
					<input
						type='radio'
						id='filter-recommend'
						className='filters-radio'
						name='filter'
						value='recommend'
					/>
					Рекомендуемые
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-popular'
						className='filters-radio'
						name='filter'
						value='popular'
					/>
					Популярные
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-discussed'
						className='filters-radio'
						name='filter'
						value='discussed'
					/>
					Обсуждаемые
				</label>

				<label className='filters-item'>
					<input
						type='radio'
						id='filter-random'
						className='filters-radio'
						name='filter'
						value='random'
					/>
					Случайные
				</label>
			</form>
		</nav>
	);
}

export { Header };
