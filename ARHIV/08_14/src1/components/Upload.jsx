import React, { useState } from "react";
import Slider from "./Slider";

export function Upload(props) {
	const { srcupload, onDeleteUp, classname } = props;
	const [classeffect, setClasseffect] = useState("effect-image-preview");
	const [imgfilter, setImgfilter] = useState('filter: "chrome(1)"');
	const [value0, setValue0] = useState(1);

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
							alt='photoeffect'
							className={classeffect}
							/* 	style={{ imgfilter }} */
							style={{ filter: `sepia(${value0})` }}
						/>
					</div>

					<fieldset className='upload-effect-controls'>
						<div className='upload-effect-level'>
							<div
								className='upload-effect-level-line'
								onChange={(e) => {
									setValue0(e.target.value / 100);
								}}
							>
								<div className='upload-effect-level-pin'></div>
								<Slider />
								<div className='upload-effect-level-val'></div>
							</div>
						</div>

						<input
							type='radio'
							name='effect'
							id='upload-effect-none'
							value='none'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-none"
								);
							}}
						/>
						<label
							className='upload-effect-label'
							htmlFor='upload-effect-none'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Оригинал
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-chrome'
							value='chrome'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-chrome"
								);
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-chrome'
							htmlFor='upload-effect-chrome'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Хром
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-sepia'
							value='sepia'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-sepia"
								);
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-sepia'
							htmlFor='upload-effect-sepia'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Сепия
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-marvin'
							value='marvin'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-marvin"
								);
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-marvin'
							htmlFor='upload-effect-marvin'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Марвин
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-phobos'
							value='phobos'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-phobos"
								);
							}}
						/>
						<label
							className='upload-effect-label upload-effect-label-phobos'
							htmlFor='upload-effect-phobos'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Фобос
						</label>

						<input
							type='radio'
							name='effect'
							id='upload-effect-heat'
							value='heat'
							onClick={(e) => {
								setClasseffect(
									"effect-image-preview effect-heat"
								);
							}}
						/>
						<label
							className='upload-effect-label'
							htmlFor='upload-effect-heat'
						>
							<div
								className='upload-effect-preview'
								style={{ backgroundImage: `url(${srcupload})` }}
							></div>
							Зной
						</label>
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
