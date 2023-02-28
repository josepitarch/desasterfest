import { Card, Text, Image } from '@mantine/core';

export default function NewConfirmation() {
  return (
    <section id='new-confirmation' className='mt-20 flex flex-col items-center'>
      <h2>Nueva confirmación</h2>
      <div className='w-full md:w-96'>
        <Card style={{ padding: '10px', margin: '20px' }} radius="md">
          <Card.Section component='div'>
            <Image
              src="/line-up/monica.jpg"
              height={400}
              alt="Monica X"
              
            />
          </Card.Section>
          <Text weight={500} component='h4'>Monica X</Text>
          <Text size="sm" color="dimmed" component='h5'>3º artista confirmado</Text>
        </Card>
      </div>
    </section>
  )
}