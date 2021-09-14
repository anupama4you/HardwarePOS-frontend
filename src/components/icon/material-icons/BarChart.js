import * as React from 'react';

function SvgBarChart(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 9.2h3V19H5zM16.2 13H19v6h-2.8zm-5.6-8h2.8v14h-2.8z' />
		</svg>
	);
}

export default SvgBarChart;
