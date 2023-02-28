import { Card, Text, Image } from '@mantine/core';

const artists = [
	{
		id: 1,
		name: 'Monica X',
		description: 'DJ de la discoteca de la ruta Chocolate',
		image: 'line-up/monica.jpg'
	},
	{
		id: 2,
		name: 'Batiste',
		description: 'DJ del pueblo',
		image: 'line-up/batiste.jpg'
	},
	{
		id: 3,
		name: 'Paco Caña',
		description: 'DJ de la discoteca Masia',
		image: 'line-up/pacocana.jpg'
	},
]

const fakeArtist = {
	id: 6,
	name: 'DJ',
	description: 'DJ de la discoteca de la ruta Chocolate',
	image: 'line-up/jose-conca.jpg'
}

const fakeArtists = Array(4)
	.fill(fakeArtist)
	.map((artist, index) => ({ ...artist, id: index + 1 }))

export default function LineUp() {
	return (
		<section id='line-up' className='p-4'>
			<h2>Line Up</h2>
			<ul id='container-line-up'>
				{
					artists.map(artist => (
						<Card key={artist.id} component='li' p="lg" radius="md">
							<Card.Section component='div'>
								<Image
									src={artist.image}
									height={300}
									alt="Norway"
								/>
							</Card.Section>
							<Text weight={500} style={{ padding: '10px 0px 10px 0px' }} component='h4'>{artist.name}</Text>
						</Card>
					))
				}
			</ul>
			);
		</section>
	)
}