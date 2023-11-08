import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { firebase } from '../components/Config'

const GameScreen = () => {
  const [questions, setQuestions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState ({})
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    getQuestions()
  }, [])
// Function to fetch and set questions from Firebase Firestore
  const getQuestions = async () => {
    setSelectedOptions({})
    setShowResults(false)
    const db = firebase.firestore()
    const questionsRef = db.collection('questions')
    const snapshot = await questionsRef.get();
    if (snapshot.empty) {
      console.log('No matching documents...')
      return
    }
    const allQuestions = snapshot.docs.map(doc => doc.data())
    const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random())
    setQuestions(shuffleQuestions.slice(0, 10))
  }
// Function to handle the selection of an option for a question
  const handleOptionSelection = (questionIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: option,
    
  })
  }
// Function to calculate the score and show results
  const handleSubmit = () => {
    let correctAnswers = 0
    questions.forEach((item, index) => {

      if (selectedOptions [index] === item.correctOption) {
        correctAnswers++
      }
    })

    setScore(correctAnswers)
    setShowResults(true)
  }

  //Render a FlatList of questions and options
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              {item.question}
            </Text>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 1 && styles.selectedOptions,
                showResults && item.correctOption === 1 && styles.correctOption,
                showResults && selectedOptions[index] === 1 && selectedOptions[index] !== item.correctOption && styles.wrongOption,

              ]}
              onPress={() => handleOptionSelection(index, 1)}
              disabled={showResults}
            >
              <Text>{item.option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] == 2 && styles.selectedOptions,
                showResults && item.correctOption === 2 && styles.correctOption,
                showResults && selectedOptions[index] === 2 && selectedOptions[index] !== item.correctOption && styles.wrongOption,

              ]}
              onPress={() => handleOptionSelection(index, 2)}
              disabled={showResults}
            >
              <Text>{item.option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 3 && styles.selectedOptions,
                showResults && item.correctOption === 3 && styles.correctOption,
                showResults && selectedOptions[index] === 3 && selectedOptions[index] !== item.correctOption && styles.wrongOption,

              ]}
              onPress={() => handleOptionSelection(index, 3)}
              disabled={showResults}
            >
              <Text>{item.option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOptions[index] === 4 && styles.selectedOptions,
                showResults && item.correctOption === 4 && styles.correctOption,
                showResults && selectedOptions[index] === 4 && selectedOptions[index] !== item.correctOption && styles.wrongOption,

              ]}
              onPress={() => handleOptionSelection(index, 4)}
              disabled={showResults}
            >
              <Text>{item.option4}</Text>
            </TouchableOpacity>

          </View>
        )}


      />

{/* Button to submit answers and calculate the score */}

      <TouchableOpacity
        style={styles.submit}
        onPress={handleSubmit}
        disabled={showResults}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {showResults && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Congrats! You scored {score} out of {questions.length}!</Text>

          {/* Button to start a new game by fetching questions again */}

          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={getQuestions}
          >
            <Text style={styles.tryAgainButtontext}>Try Again</Text>
          </TouchableOpacity>
        </View>

      )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
      },
      questionContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 3.84,
        elevation: 5
      },
      question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
      },
      option: {
        backgroundColor: '#eee',
        padding: 10,
        marginVertical: 5,
        borderRadius:5
      },
      selectedOptions: {
        backgroundColor: '#949494'
      },
      correctOption: {
        backgroundColor: 'green'
      },
      wrongOption: {
        backgroundColor: 'red'
      },
      submit: {
          backgroundColor: 'blue',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5
        },
        submitButtonText: {
          color: '#fff',
          fontSize: 20
        },
        result: {
          fontSize: 20,
          fontWeight: 'bold',
          marginVertical: 10,
        },
        tryAgainButton: {
          backgroundColor: 'blue',
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        },
        tryAgainButtontext: {
          color: '#fff',
          fontSize: 20,
        }
})

export default GameScreen