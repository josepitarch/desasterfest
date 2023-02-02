import { useRemainingTime } from '../hooks/useRemainingTime.js'

const targetDate = new Date(1694268000000)


export default function Countdown () {
	const { days, hours, minutes, seconds, countdownEnded } = useRemainingTime(targetDate)
	const time = [
		{ label: 'Días', value: days },
		{ label: 'Horas', value: hours },
		{ label: 'Minutos', value: minutes },
		{ label: 'Segundos', value: seconds }
	]

	return (
		<>
			{countdownEnded && (
				<div className='mb-2 font-bold'>
					Empieza la Desaster Fest 2023 🎊
				</div>)
			}

			<section className='flex -rotate-[10deg]'>
				<p>Solo quedan</p>
				{time.map(({ label, value }, index) => {
					const isLast = index === time.length - 1
					return (
						<div key={label} className='flex-col w-16 lg:w-28 text-center italic '>
							<div className={`text-3xl lg:text-5xl text-white font-bold relative ${!isLast && 'after:ml-2 lg:after:ml-5 after:font-bold after:text-white after:content-[":"] after:absolute'}`}>{value}</div>
							{label && <span className='text-white/80 text-xs lg:text-base'>{label}</span>}
						</div>
					)
				})}
			</section>
		</>
	)
}
