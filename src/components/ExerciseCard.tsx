import PullUpImg from '@assets/pullUp.jpg'
import { Entypo } from '@expo/vector-icons'
import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ExerciseCardProps = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'gray.500'}
        alignItems={'center'}
        p={2}
        pr={4}
        rounded={'md'}
        mb={3}
      >
        <Image
          source={PullUpImg}
          alt="Homem fazendo barras"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading color={'white'} fontSize={'lg'}>
            Remada unilateral
          </Heading>

          <Text fontSize={'sm'} color={'gray.200'} mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color={'gray.300'} />
      </HStack>
    </TouchableOpacity>
  )
}
