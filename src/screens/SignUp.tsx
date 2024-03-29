import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleSignIn() {
    navigation.navigate('signIn')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="People training at gym"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color={'gray.100'} fontSize={'sm'}>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color={'gray.100'}
            fontSize={'xl'}
            mb={6}
            fontFamily={'heading'}
          >
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant={'outline'}
          mt={24}
          onPress={handleSignIn}
        />
      </VStack>
    </ScrollView>
  )
}
