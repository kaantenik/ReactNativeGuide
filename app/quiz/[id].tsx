import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { quizzes } from '@/utils/quizzes';
import { useProgress } from '@/context/ProgressContext';
import Animated, { FadeIn } from 'react-native-reanimated';
import Header from '@/components/Header';

export default function QuizScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { isQuizCompleted, markQuizCompleted } = useProgress();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const lessonId = id as string;
  const quiz = quizzes[lessonId];
  
  useEffect(() => {
    if (!quiz) {
      Alert.alert('Hata', 'Quiz bulunamadı.');
      router.back();
      return;
    }
    
    // Initialize selected answers array
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    
    // Check if quiz is already completed
    if (isQuizCompleted(lessonId)) {
      setQuizCompleted(true);
      setSelectedAnswers(quiz.questions.map(q => q.correctAnswerIndex));
    }
  }, [lessonId, quiz, isQuizCompleted, router]);
  
  const handleAnswerSelect = (answerIndex: number) => {
    if (quizCompleted) return;
    
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Check if all questions are answered
      if (selectedAnswers.includes(-1)) {
        Alert.alert('Uyarı', 'Lütfen tüm soruları cevaplayın.');
        return;
      }
      
      // Check answers
      const correctAnswers = selectedAnswers.filter(
        (answer, index) => answer === quiz.questions[index].correctAnswerIndex
      ).length;
      
      const score = (correctAnswers / quiz.questions.length) * 100;
      
      if (score >= 70) {
        // Pass the quiz
        markQuizCompleted(lessonId);
        setQuizCompleted(true);
        Alert.alert(
          'Tebrikler!',
          `Quiz'i başarıyla tamamladınız. Skorunuz: %${score.toFixed(0)}`,
          [{ text: 'Tamam', onPress: () => router.back() }]
        );
      } else {
        // Fail the quiz
        Alert.alert(
          'Başarısız',
          `Quiz'i geçemediniz. Skorunuz: %${score.toFixed(0)}. Lütfen dersi tekrar izleyin ve tekrar deneyin.`,
          [{ text: 'Tamam', onPress: () => router.back() }]
        );
      }
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  if (!quiz) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Quiz' }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Quiz bulunamadı.</Text>
        </View>
      </View>
    );
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  
  return (
    <View style={styles.container}>
      <Header title="Quiz" showBackButton />
      <Stack.Screen 
        options={{ 
          title: `Ders ${parseInt(lessonId) + 1} Quiz`,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#333333',
        }} 
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn.duration(500)} style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            Soru {currentQuestionIndex + 1} / {quiz.questions.length}
          </Text>
        </Animated.View>
        
        <Animated.View entering={FadeIn.duration(500).delay(100)} style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswers[currentQuestionIndex] === index && styles.selectedOption,
                  quizCompleted && index === currentQuestion.correctAnswerIndex && styles.correctOption,
                  quizCompleted && selectedAnswers[currentQuestionIndex] === index && 
                    index !== currentQuestion.correctAnswerIndex && styles.incorrectOption,
                ]}
                onPress={() => handleAnswerSelect(index)}
                disabled={quizCompleted}
              >
                <Text style={[
                  styles.optionText,
                  selectedAnswers[currentQuestionIndex] === index && styles.selectedOptionText,
                  quizCompleted && index === currentQuestion.correctAnswerIndex && styles.correctOptionText,
                ]}>
                  {option}
                </Text>
                
                {quizCompleted && (
                  <View style={styles.answerIconContainer}>
                    {index === currentQuestion.correctAnswerIndex ? (
                      <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                    ) : selectedAnswers[currentQuestionIndex] === index ? (
                      <Ionicons name="close-circle" size={20} color="#FF3B30" />
                    ) : null}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
      
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
          onPress={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <Ionicons name="arrow-back" size={20} color={currentQuestionIndex === 0 ? '#CCCCCC' : '#333333'} />
          <Text style={[styles.navButtonText, currentQuestionIndex === 0 && styles.disabledButtonText]}>
            Önceki
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.navButton, styles.nextButton]}
          onPress={handleNextQuestion}
        >
          <Text style={styles.navButtonText}>
            {currentQuestionIndex === quiz.questions.length - 1 ? 'Bitir' : 'Sonraki'}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#666666',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#61DAFB',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
    lineHeight: 24,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedOption: {
    backgroundColor: '#E3F2FD',
    borderColor: '#61DAFB',
  },
  correctOption: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  incorrectOption: {
    backgroundColor: '#FFEBEE',
    borderColor: '#FF3B30',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  selectedOptionText: {
    color: '#61DAFB',
    fontWeight: '500',
  },
  correctOptionText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  answerIconContainer: {
    marginLeft: 8,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  nextButton: {
    backgroundColor: '#61DAFB',
    borderColor: '#61DAFB',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginHorizontal: 8,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledButtonText: {
    color: '#999999',
  },
}); 