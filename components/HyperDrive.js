export default function Hyperdrive({ className = '' }) {
	const classes = 'absolute inset-0 transition-opacity duration-1000' + className;
	return (
		<canvas aria-hidden='true' classes={classes} id='hyperdrive' style={{ mixBlendMode: 'screen' }} />
	);
}


