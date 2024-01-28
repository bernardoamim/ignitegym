import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import { useState } from 'react'

export function Home() {
  const [groups, setGroups] = useState(['costas', 'biceps', 'triceps', 'ombro'])
  const [selectedGroup, setSelectedGroup] = useState('costas')
  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading color="gray.200" fontSize={'md'} fontFamily={'heading'}>
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize={'sm'}>
            4
          </Text>
        </HStack>

        <ExerciseCard />
        <ExerciseCard />
      </VStack>
    </VStack>
  )
}
