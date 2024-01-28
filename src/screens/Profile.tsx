import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const PHOTO_SIZE = 32

export function Profile() {
  const [isPhotoLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 96 }}>
        <Center mt={6} px={10}>
          {isPhotoLoading && (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={'full'}
              startColor={'gray.500'}
              endColor={'gray.400'}
            />
          )}

          {!isPhotoLoading && (
            <UserPhoto
              source={{ uri: 'https://github.com/bernardoamim.png' }}
              size={PHOTO_SIZE}
              alt="Foto do usuário"
            />
          )}

          <TouchableOpacity>
            <Text
              color={'green.500'}
              fontFamily={'heading'}
              fontSize={'md'}
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input bg={'gray.600'} placeholder="Nome" />
          <Input bg={'gray.600'} placeholder="E-mail" isDisabled={true} />

          <Heading
            color={'gray.200'}
            fontSize={'md'}
            fontFamily={'heading'}
            mb={2}
            mt={12}
            alignSelf={'flex-start'}
          >
            Alterar senha
          </Heading>

          <Input bg={'gray.600'} placeholder="Senha antiga" secureTextEntry />
          <Input bg={'gray.600'} placeholder="Nova senha" secureTextEntry />
          <Input
            bg={'gray.600'}
            placeholder="Confirme nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  )
}
