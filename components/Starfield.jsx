export default function Starfield({ subtle }) {
	let classes = 'pointer-events-none bg-black fixed inset-0 -z-50'
	if (subtle) classes += ' bg-[length:100%_175%]'
	return (
		<div
			style={{
				backgroundImage: 'url(/stars.png)',
				backgroundRepeat: 'repeat',
				maskImage: 'url(/stars-mask.webp)',
				maskRepeat: 'repeat'
			}}
			className={classes}
			>
			<div className='starfield absolute inset-0' />
		</div>
	)
}