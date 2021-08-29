import React from "react";
import { None } from "../filters-upload/None";
import { Chrome } from "../filters-upload/Chrome";
import { Sepia } from "../filters-upload/Sepia";
import { Marvin } from "../filters-upload/Marvin";
import { Phobos } from "../filters-upload/Phobos";
import { Heat } from "../filters-upload/Heat";

export function Upload(props) {
	const { srcupload, onDeleteUp, classname } = props;

	return (
		<div className={classname}>
			<div className='upload-effect'>
				<div className='upload-effect__container'>
					<fieldset className='upload-resize-controls'>
						<button
							type='button'
							className='upload-resize-control upload-resize-controls-button upload-resize-controls-button-dec'
						>
							–
						</button>
						<input
							type='text'
							className='upload-resize-control upload-resize-controls-value'
							value='55%'
							readOnly
							title='Image Scale'
							name='scale'
						/>
						<button
							type='button'
							className='upload-resize-control upload-resize-controls-button upload-resize-controls-button-inc'
						>
							+
						</button>
					</fieldset>

					<div className='upload-form-preview'>
						<div></div>
						<img
							src={srcupload}
							className='effect-image-preview'
							alt='photo'
						/>
					</div>

					<fieldset className='upload-effect-controls'>
						<div className='upload-effect-level'>
							<div className='upload-effect-level-line'>
								<div className='upload-effect-level-pin'></div>
								<div className='upload-effect-level-val'></div>
							</div>
						</div>

						<None srcupload={srcupload} />
						<Chrome srcupload={srcupload} />
						<Sepia srcupload={srcupload} />
						<Marvin srcupload={srcupload} />
						<Phobos srcupload={srcupload} />
						<Heat srcupload={srcupload} />
					</fieldset>

					<input
						className='upload-form-hashtags'
						name='hashtags'
						placeholder='#хэш-тег'
					/>

					<textarea
						className='upload-form-description'
						name='description'
						placeholder='Ваш комментарий...'
					></textarea>

					<button
						className='upload-form-cancel'
						type='reset'
						id='upload-cancel'
						onClick={() => onDeleteUp()}
					></button>
					<button
						className='upload-form-submit'
						type='submit'
						id='upload-submit'
					>
						Отправить
					</button>
				</div>
			</div>
		</div>
	);
}
