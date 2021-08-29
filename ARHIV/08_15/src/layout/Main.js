import React from "react";
import { Photos } from "../components/Photos";
import { Upload } from "../components/Upload";
import { Header } from "./Header";

class Main extends React.Component {
	state = {
		photos: [],
		clonephotos: [],
		loading: true,
		srcupload: "",
		classname: 'upload-overlay hidden'
	};

	componentDidMount() {
		fetch(
			"https://raw.githubusercontent.com/MuratN/muratn.github.io/main/kekstagram/source.json"
		)
			.then((response) => response.json())
			.then((data) => this.setState({ photos: data, loading: false }));
	}

	onChangeUp = (e) => {
		this.setState({srcupload: "../../photos/" + e.target.files[0].name });
		this.setState({classname: 'upload-overlay'})   
	};

	onDeleteUp = (e) => {
		this.setState({classname: 'upload-overlay hidden'}) 
	};

	render() {
		const { srcupload, photos = [], clonephotos=[], classname } = this.state;

		return (
			<>

			<Header photos={photos} />

			<main className='main content'>
				<form
					className='upload-form'
					id='upload-select-image'
					method='post'
					encType='multipart/form-data'
					autoComplete='off'
				>
					<div className='upload-image'>
						<input
							type='file'
							id='upload-file'
							className='upload-input'
							name='filename'
							required
							onChange={this.onChangeUp}
						/>
						<label
							className='upload-file upload-control'
							htmlFor='upload-file'
						></label>
					</div>

 						   {
							<Upload 
								srcupload={srcupload} 
								onDeleteUp={this.onDeleteUp}
								classname={classname}
								/>
						   }

 					<div className='upload-message hidden'>
						<div className='upload-message-container'></div>
					</div> 

				</form>


				<Photos photos={photos} />
			</main>
</>
		);
	}
}

export { Main };


							 // eslint-disable-next-line default-case
			/* 				 switch(e.target.value) {
								case "recommend":

									this.setState({ clonephotos: photos });				
									clonephotos.sort((a, b) => a.likes > b.likes ? -1 : 1);

									<Photos photos={clonephotos} />
									break;

								case "popular":
									break;

								case "discussed":
									break;

								case "random":
									break;
								}
						 }} */
