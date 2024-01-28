import BodySvg from '@assets/body.svg'
import PullUpImg from '@assets/pullUp.jpg'
import RepeatSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { TouchableOpacity } from 'react-native'

export function Exercise() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg={'gray.600'} pt={16}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color={'green.500'} size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent={'space-between'}
          mt={6}
          mb={4}
          alignItems={'center'}
        >
          <Heading
            color={'gray.100'}
            fontSize={'lg'}
            fontFamily={'heading'}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>

          <HStack alignItems={'center'}>
            <BodySvg />
            <Text color={'gray.200'} fontSize={'sm'} fontFamily={'body'} ml={1}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w={'full'}
            h={80}
            source={PullUpImg}
            rounded={'md'}
            mb={3}
            resizeMode="cover"
            alt="Nome do exercício"
          />

          <Box bg={'gray.600'} rounded={'md'} pb={4} px={4}>
            <HStack
              alignItems={'center'}
              justifyContent={'space-around'}
              mb={6}
              mt={5}
            >
              <HStack alignItems={'center'}>
                <SeriesSvg />
                <Text color={'gray.200'} ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems={'center'}>
                <RepeatSvg />
                <Text color={'gray.200'} ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
