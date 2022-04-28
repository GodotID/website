// Modules
import React from 'react'
import style from './Flex.module.scss'

enum FlexDirection {
	Row,
	Column
}

enum FlexWidth {
	Full = -2,
	MaxContent
}

interface FlexProps {
	width?: FlexWidth | Number;
	direction?: FlexDirection;
	children: any;
	onClick?: Function;
};

export default function Flex({
		width = FlexWidth.MaxContent, direction = FlexDirection.Row,
		children, onClick
	}: FlexProps
) {
	return (
		<flex onClick={onClick} className={style.flex} width={width} direction={direction}>
			{children}
		</flex>
	)
};
