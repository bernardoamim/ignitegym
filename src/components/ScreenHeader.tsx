import { Center, Heading, VStack } from 'native-base'

type ScreenHeaderType = {
  title: string
}

export function ScreenHeader({ title }: ScreenHeaderType) {
  return (
    <Center bg={'gray.600'} pb={6} pt={20}>
      <Heading color={'gray.100'} fontSize={'xl'} fontFamily={'heading'}>
        {title}
      </Heading>
    </Center>
  )
}
