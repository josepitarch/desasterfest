import HyperDrive from './HyperDrive.jsx'
import Starfield from './Starfield.jsx'

export default function Background() {
	return (
		<div className='absolute inset-0 pointer-events-none'>
			<Starfield />
			<HyperDrive className='z-0 w-full h-full' />
		</div>
	)
}