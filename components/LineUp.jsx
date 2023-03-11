import Image from "next/image"

const artists = [
	{
		id: 1,
		name: 'Monica X',
		description: 'DJ de la discoteca de la ruta Chocolate',
		image: '/line-up/monica.jpg'
	},
	{
		id: 2,
		name: 'Batiste',
		description: 'DJ del pueblo',
		image: '/line-up/batiste.jpg'
	},
	{
		id: 3,
		name: 'Paco Caña',
		description: 'DJ de la discoteca Masia',
		image: '/line-up/pacocana.jpg'
	},
	{
		id: 4,
		name: 'Serrano',
		description: 'DJ de la discoteca Masia',
		image: '/line-up/serrano.jpg'
	},
	{
		id: 5,
		name: 'Ismael Lora',
		description: 'DJ de la discoteca Masia',
		image: '/line-up/lora.jpg'
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