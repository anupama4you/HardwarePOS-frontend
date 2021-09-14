import * as React from 'react';

function SvgCast(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M7.646 9.354l-3.792 3.792a.5.5 0 00.353.854h7.586a.5.5 0 00.354-.854L8.354 9.354a.5.5 0 00-.708 0z' />
			<path d='M11.414 11H14.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h3.086l-1 1H1.5A1.5 1.5 0 010 10.5v-7A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v7a1.5 1.5 0 01-1.5 1.5h-2.086l-1-1z' />
		</svg>
	);
}

export default SvgCast;
