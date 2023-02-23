import { Card, Text, Image } from '@mantine/core';

const artists = [
	{
		id: 1,
		name: 'Jose Conca',
		description: 'DJ de la discoteca de la ruta Chocolate',
		image: 'lineup/jose-conca.jpg'
	},
	{
		id: 2,
		name: 'Serrano',
		description: 'DJ del pueblo',
		image: 'lineup/serrano.jpg'
	},
	{
		id: 3,
		name: 'Abel K Kaña',
		description: 'DJ de la discoteca Masia',
		image: 'lineup/abel-k-kaña.jpg'
	},
	{
		id: 4,
		name: 'Rau Platero',
		description: 'DJ de remember',
		image: 'lineup/rau-platero.jpg'
	},
	{
		id: 5,
		name: 'Miguel Serna',
		description: 'DJ de remember',
		image: 'lineup/miguel-serna.jpg'
	}
]

const fakeArtist = {
	id: 6,
	name: 'DJ',
	description: 'DJ de la discoteca de la ruta Chocolate',
	image: 'lineup/jose-conca.jpg'
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
						<Card key={artist.id} component='li' style={{ padding: '10px' }} p="lg" radius="md">
							<Card.Section component='div'>
								<Image
									src="/line-up/sample_line_up.jpg"
									height={160}
									alt="Norway"
								/>
							</Card.Section>
							<Text weight={500} component='h4'>{artist.name}</Text>
							<Text size="sm" color="dimmed" component='h5'>{artist.description}</Text>
						</Card>
					))
				}
				{
					fakeArtists.map(artist => (
						<Card key={artist.id} component='li' style={{ padding: '10px' }} p="lg" radius="md" className='blur-md'>
							<Card.Section component='div'>
								<Image
									src="/line-up/sample_line_up.jpg"
									height={160}
									alt="Norway"
								/>
							</Card.Section>
							<Text weight={500} component='h4'>{artist.name}</Text>
							<Text size="sm" color="dimmed" component='h5'>{artist.description}</Text>
						</Card>
					))
				}
			</ul>
			);
		</section>
	)
}