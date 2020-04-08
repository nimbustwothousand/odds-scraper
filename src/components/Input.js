import React from 'react'

const Input = React.forwardRef((props, ref) => (
	<div>
		<label className='h3' htmlFor={props.name}>{props.title}</label>
		<input ref={ref}
			disabled={props.disabled}
			id={props.name}
			name={props.name}
			type={props.type}
			value={props.value}
			onChange={props.handleChange}
			placeholder={props.placeholder}
		/>
	</div>
)
)

export default Input