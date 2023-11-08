import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StarterScreen = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.quizBox}>Welcome to Football Knowledge quiz. This quiz contains of 50+ questions about football. You are asked 10 questions with 4 possible answers and one of them is the correct answer. If you get a bad score, don't worry! You can try again! Good luck! </Text>
        {/* Start Game button */}
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('GameScreen')}
        >
          <Text style={styles.buttontext}>Start Game</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  screen: {
    alignItems: 'center',
  },
  quizBox: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 8,
    width: 300,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',

  },
  button: {
    marginTop: 128, 
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
  },
})

export default StarterScreen
