import * as React from 'react';

function SvgGenderTrans(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M0 .5A.5.5 0 01.5 0h3a.5.5 0 010 1H1.707L3.5 2.793l.646-.647a.5.5 0 11.708.708l-.647.646.822.822A3.99 3.99 0 018 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 010-1h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-3.45 3.45A4 4 0 018.5 10.97V13H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V14H6a.5.5 0 010-1h1.5v-2.03a4 4 0 01-3.05-5.814l-.95-.949-.646.647a.5.5 0 11-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 01-1 0v-3zm5.49 4.856a3 3 0 105.02 3.288 3 3 0 00-5.02-3.288z'
			/>
		</svg>
	);
}

export default SvgGenderTrans;
