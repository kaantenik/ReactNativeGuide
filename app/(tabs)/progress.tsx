import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useProgress } from '@/context/ProgressContext';
import { lessonData } from '@/utils/lessonData';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ProgressScreen() {
  const router = useRouter();
  const { progress, isLessonCompleted, isLessonAvailable } = useProgress();
  
  // Calculate progress percentage
  const totalLessons = lessonData.length;
  const completedLessons = progress.completedLessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;
  
  // Calculate achievements
  const achievements = [
    { id: 1, title: 'İlk Ders', description: 'İlk dersi tamamladınız', completed: completedLessons >= 1 },
    { id: 2, title: 'Başlangıç', description: '5 ders tamamlandı', completed: completedLessons >= 5 },
    { id: 3, title: 'Orta Seviye', description: '10 ders tamamlandı', completed: completedLessons >= 10 },
    { id: 4, title: 'İleri Seviye', description: '15 ders tamamlandı', completed: completedLessons >= 15 },
    { id: 5, title: 'Uzman', description: 'Tüm dersleri tamamladınız', completed: completedLessons === totalLessons },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>İlerlemem</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(500)} style={styles.progressCard}>
          <Text style={styles.progressTitle}>Genel İlerleme</Text>
          
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
          </View>
          
          <Text style={styles.progressText}>
            {completedLessons} / {totalLessons} ders tamamlandı
          </Text>
          
          <Text style={styles.progressPercentage}>{Math.round(progressPercentage)}%</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInUp.duration(500).delay(100)} style={styles.achievementsCard}>
          <Text style={styles.achievementsTitle}>Başarılar</Text>
          
          {achievements.map((achievement, index) => (
            <Animated.View 
              key={achievement.id} 
              entering={FadeInUp.duration(500).delay(200 + index * 100)}
              style={styles.achievementItem}
            >
              <View style={[
                styles.achievementIconContainer,
                achievement.completed && styles.achievementIconContainerCompleted
              ]}>
                <Ionicons 
                  name={achievement.completed ? "trophy" : "trophy-outline"} 
                  size={22} 
                  color={achievement.completed ? "#FFD700" : "#9E9E9E"} 
                />
              </View>
              <View style={styles.achievementInfo}>
                <Text style={[
                  styles.achievementTitle,
                  achievement.completed && styles.achievementTitleCompleted
                ]}>
                  {achievement.title}
                </Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
              </View>
              {achievement.completed && (
                <Ionicons name="checkmark-circle" size={22} color="#4CAF50" />
              )}
            </Animated.View>
          ))}
        </Animated.View>
        
        <Animated.View entering={FadeInUp.duration(500).delay(600)} style={styles.finalTestCard}>
          <Text style={styles.finalTestTitle}>Final Testi</Text>
          <Text style={styles.finalTestDescription}>
            Tüm dersleri tamamladıktan sonra final testine erişebilirsiniz.
          </Text>
          
          <TouchableOpacity
            style={[
              styles.finalTestButton,
              progress.completedLessons.length === totalLessons && styles.finalTestButtonActive
            ]}
            onPress={() => router.push('/final-test')}
            disabled={progress.completedLessons.length !== totalLessons}
          >
            <Text style={styles.finalTestButtonText}>
              {progress.completedLessons.length === totalLessons 
                ? 'Final Testine Başla' 
                : 'Final Testi Kilitli'}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  content: {
    flex: 1,
    padding: 16,
  },
  progressCard: {
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
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#61DAFB',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: '600',
    color: '#61DAFB',
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  achievementsCard: {
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
  achievementsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  achievementIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementIconContainerCompleted: {
    backgroundColor: '#FFF8E1',
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9E9E9E',
    marginBottom: 4,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  achievementTitleCompleted: {
    color: '#333333',
  },
  achievementDescription: {
    fontSize: 14,
    color: '#666666',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  finalTestCard: {
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
  finalTestTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  finalTestDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  finalTestButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  finalTestButtonActive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#61DAFB',
  },
  finalTestButtonText: {
    color: '#666666',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
}); 