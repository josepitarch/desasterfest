import Image from "next/image"

const artists = [
	{
		id: 1,
		name: 'Monica X',
		image: '/line-up/monica.jpg'
	},
	{
		id: 2,
		name: 'Batiste',
		image: '/line-up/batiste.jpg'
	},
	{
		id: 3,
		name: 'Paco Caña',
		image: '/line-up/pacocana.jpg'
	},
	{
		id: 4,
		name: 'Serrano',
		image: '/line-up/serrano.jpg'
	},
	{
		id: 5,
		name: 'Ismael Lora',
		image: '/line-up/lora.jpg'
	},
	{
		id: 6,
		name: 'Abel K Kaña',
		image: '/line-up/abelkkana.jpg'
	},
	{
		id: 7,
		name: 'Paco Banaclocha',
		image: '/line-up/banaclocha.jpg'
	},
	{
		id: 8,
		name: 'Juanka',
		image: '/line-up/juanka.jpg'
	},
	{
		id: 9,
		name: 'Peku',
		image: '/line-up/peku.jpg'
	},
]

export default function LineUp() {
	return (
		<section id='line-up' className='p-4'>
			<h2>Line Up</h2>
			<ul id='container-line-up'>
				{
					artists.map(artist => (
						<li key={artist.id} className='bg-white rounded-lg overflow-hidden'>
							<img
								src={artist.image}
								className='img-line-up'
								alt={artist.name}
							/>
							<h3 className='font-bold m-3'>{artist.name}</h3>
						</li>
					))
				}
			</ul>
			);
		</section>
	)
}