import { useState } from 'react';
import './App.css';

const data = {
	links: [
		{
			label: 'Form 16',
			link: 'https://evollence.bestindsoft.com/employee/payslip',
			shouldBlink: true,
			blinkText: 'IMPORTANT!',
		},
		{
			label: 'Please regularise your attendance',
			link: '',
			shouldBlink: true,
			blinkText: 'IMPORTANT!',
		},
	],
};

function App() {
	const [popup, setPopup] = useState(false);
	const [label, setLabel] = useState('');
	const [link, setLink] = useState('');
	const [blinkText, setBlinkText] = useState('');
	const [blink, setBlink] = useState(false);
	const [limks, setLinks] = useState(data);
	return (
		<div className='App'>
			<button
				style={{
					float: 'right',
					cursor: 'pointer',
					backgroundColor: 'white',
					border: 'unset',
					padding: '5px 10px',
					borderRadius: '4px',
					marginBottom: '15px',
				}}
				onClick={() => {
					setPopup(true);
				}}>
				Add Notifications
			</button>
			{popup && (
				<div className='popup-back'>
					<div className='popup'>
						<h3 style={{ padding: '15px' }}>Add Notification</h3>
						<label
							style={{
								cursor: 'pointer',
								position: 'absolute',
								top: '5px',
								right: '10px',
							}}
							onClick={() => setPopup(false)}>
							x
						</label>
						<input
							placeholder='label'
							style={{
								width: '80%',
								margin: '5px 15px',
								borderRadius: '2px',
								outline: 'none',
								padding: '2px 15px',
								border: '1px solid #dedede',
							}}
							value={label}
							onChange={({ target }) => {
								setLabel(target.value);
							}}
						/>
						<br />
						<input
							placeholder='link'
							style={{
								width: '80%',
								margin: '5px 15px',
								borderRadius: '2px',
								outline: 'none',
								padding: '2px 15px',
								border: '1px solid #dedede',
							}}
							value={link}
							onChange={({ target }) => setLink(target.value)}
						/>
						<br />
						<input
							type={'checkbox'}
							checked={blink}
							onChange={(e) => setBlink(!blink)}
							style={{ padding: '10px' }}
						/>
						should Blink
						<br />
						{blink && (
							<input
								placeholder='blinker text'
								style={{
									width: '80%',
									margin: '5px 15px',
									borderRadius: '2px',
									outline: 'none',
									padding: '2px 15px',
									border: '1px solid #dedede',
								}}
								value={blinkText}
								onChange={({ target }) => setBlinkText(target.value)}
							/>
						)}
						<br />
						<button
							style={{
								borderRadius: '2px',
								padding: '10px 35px',
								backgroundColor: '#616161',
								border: 'unset',
								position: 'absolute',
								bottom: '10px',
								right: '40%',
								color: '#fff',
							}}
							onClick={() => {
								const newData = { ...limks };
								newData.links.push({
									label,
									link,
									shouldBlink: blink,
									blinkText,
								});
								debugger;
								setLinks(newData);
								setPopup(false);
							}}>
							Save
						</button>
					</div>
				</div>
			)}
			{limks?.links?.map((link) => {
				return (
					<>
						<marquee>
							{link.link ? (
								<a style={{ width: '100%' }} href={link.link} target='blank'>
									{link.shouldBlink ? (
										<span
											className='blink'
											style={{ color: 'red', paddingRight: '30px' }}>
											Important!
										</span>
									) : (
										<span></span>
									)}
									{link.label}
								</a>
							) : (
								<label
									style={{ width: '100%' }}
									href={link.link}
									target='blank'>
									{link.shouldBlink ? (
										<span
											className='blink'
											style={{ color: 'red', paddingRight: '30px' }}>
											{link.blinkText}
										</span>
									) : (
										<span></span>
									)}
									{link.label}
								</label>
							)}
						</marquee>
						<hr />
					</>
				);
			})}
		</div>
	);
}

export default App;
