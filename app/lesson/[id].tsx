import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { lessonData } from '@/utils/lessonData';
import { useProgress } from '@/context/ProgressContext';
import Header from '@/components/Header';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isLessonCompleted } = useProgress();

  const lesson = lessonData.find(l => l.id === Number(id));

  if (!lesson) {
    Alert.alert('Hata', 'Ders bulunamadı');
    router.back();
    return null;
  }

  const handleWatchVideo = async () => {
    try {
      await Linking.openURL(lesson.videoUrl);
    } catch (error) {
      Alert.alert('Hata', 'Video açılırken bir hata oluştu');
    }
  };

  const handleStartQuiz = () => {
    router.push({
      pathname: "/quiz/[id]",
      params: { id: id.toString() }
    });
  };

  return (
    <View style={styles.container}>
      <Header title={lesson.title} showBackButton />
      <ScrollView style={styles.content}>
        <View style={styles.lessonCard}>
          <Text style={styles.description}>{lesson.description}</Text>
          
          <TouchableOpacity
            style={styles.videoButton}
            onPress={handleWatchVideo}
          >
            <Ionicons name="play-circle" size={24} color="#FFFFFF" />
            <Text style={styles.buttonText}>Videoyu İzle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.quizButton,
              isLessonCompleted(id) && styles.completedButton,
            ]}
            onPress={handleStartQuiz}
          >
            <Ionicons 
              name={isLessonCompleted(id) ? "checkmark-circle" : "help-circle"} 
              size={24} 
              color="#FFFFFF" 
            />
            <Text style={styles.buttonText}>
              {isLessonCompleted(id) ? 'Quiz Tamamlandı' : 'Quiz\'i Başlat'}
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
    padding: 20,
  },
  lessonCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  description: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 20,
  },
  videoButton: {
    backgroundColor: '#61DAFB',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 8,
  },
  quizButton: {
    backgroundColor: '#61DAFB',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  completedButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 