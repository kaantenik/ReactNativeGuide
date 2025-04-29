import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { quizzes } from '@/utils/quizzes';
import { useProgress } from '@/context/ProgressContext';

export default function FinalTestScreen() {
  const router = useRouter();
  const { isFinalTestAvailable, markFinalTestAsCompleted } = useProgress();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  
  const finalQuiz = quizzes.final;
  
  if (!isFinalTestAvailable()) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Tüm dersleri tamamlamadan final testine erişemezsiniz.
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < finalQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Check if all answers are correct
      const allCorrect = selectedAnswers.every(
        (answer, index) => answer === finalQuiz.questions[index].answerIndex
      );
      
      if (allCorrect) {
        setTestCompleted(true);
        markFinalTestAsCompleted();
        Alert.alert(
          'Tebrikler!',
          'Kursu başarıyla tamamladınız.',
          [
            {
              text: 'Tamam',
              onPress: () => router.back(),
            },
          ]
        );
      } else {
        Alert.alert(
          'Yanlış Cevaplar',
          'Bazı soruları yanlış cevapladınız. Lütfen tekrar deneyin.',
          [
            {
              text: 'Tekrar Dene',
              onPress: () => {
                setCurrentQuestionIndex(0);
                setSelectedAnswers([]);
              },
            },
          ]
        );
      }
    }
  };
  
  const currentQuestion = finalQuiz.questions[currentQuestionIndex];
  
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Final Testi',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Soru {currentQuestionIndex + 1} / {finalQuiz.questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentQuestionIndex + 1) / finalQuiz.questions.length) * 100}%` },
              ]}
            />
          </View>
        </View>
        
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswers[currentQuestionIndex] === index && styles.selectedOption,
                ]}
                onPress={() => handleAnswerSelect(index)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedAnswers[currentQuestionIndex] === index && styles.selectedOptionText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity
            style={[
              styles.nextButton,
              selectedAnswers[currentQuestionIndex] === undefined && styles.disabledButton,
            ]}
            onPress={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined}
          >
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < finalQuiz.questions.length - 1 ? 'Sonraki Soru' : 'Bitir'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  quizContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionText: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 24,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: '#2196F3',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
  selectedOptionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#9E9E9E',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  backButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 