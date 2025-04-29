import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { lessonData } from '@/utils/lessonData';
import { useProgress } from '@/context/ProgressContext';
import Animated, { FadeInUp } from 'react-native-reanimated';

// Define the Lesson interface
interface Lesson {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const { isLessonCompleted, isLessonAvailable, isQuizCompleted } = useProgress();

  const renderLessonItem = ({ item, index }: { item: Lesson; index: number }) => {
    const isCompleted = isLessonCompleted(item.id.toString());
    const isQuizDone = isQuizCompleted(item.id.toString());
    const isAvailable = isLessonAvailable(item.id.toString());
    const isVideoWatched = isCompleted || isQuizDone;

    return (
      <Animated.View 
        entering={FadeInUp.duration(400).delay(index * 100)}
        style={[
          styles.lessonItem,
          !isAvailable && styles.disabledLessonItem
        ]}
      >
        <View style={styles.lessonInfo}>
          <View style={styles.lessonHeader}>
            <Text style={[
              styles.lessonTitle,
              !isAvailable && styles.disabledText
            ]}>
              {item.title}
            </Text>
            {isCompleted && isQuizDone && (
              <View style={styles.completedBadge}>
                <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
              </View>
            )}
          </View>
          <Text style={[
            styles.lessonDescription,
            !isAvailable && styles.disabledText
          ]}>
            {item.description}
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.watchButton,
              !isAvailable && styles.disabledButton,
              isVideoWatched && styles.completedButton
            ]}
            onPress={() => router.push({
              pathname: '/lesson/[id]',
              params: { id: item.id }
            })}
            disabled={!isAvailable}
          >
            {isVideoWatched ? (
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            ) : (
              <>
                <Ionicons name="play-circle" size={24} color="#61DAFB" />
                <Text style={styles.buttonText}>İzle</Text>
              </>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.actionButton,
              styles.quizButton,
              !isVideoWatched && styles.disabledButton,
              isQuizDone && styles.completedButton
            ]}
            onPress={() => router.push({
              pathname: '/quiz/[id]',
              params: { id: item.id }
            })}
            disabled={!isVideoWatched}
          >
            {isQuizDone ? (
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            ) : (
              <>
                <Ionicons name="document-text" size={24} color="#61DAFB" />
                <Text style={styles.buttonText}>Testi Çöz</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  const renderFinalTestButton = () => {
    const allLessonsCompleted = lessonData.every(lesson => 
      isLessonCompleted(lesson.id.toString()) && isQuizCompleted(lesson.id.toString())
    );
    
    return (
      <Animated.View 
        entering={FadeInUp.duration(400).delay(lessonData.length * 100)}
        style={styles.finalTestContainer}
      >
        <TouchableOpacity
          style={[
            styles.finalTestButton,
            !allLessonsCompleted && styles.disabledButton
          ]}
          onPress={() => router.push('/final-test')}
          disabled={!allLessonsCompleted}
        >
          <Ionicons 
            name="trophy" 
            size={24} 
            color={allLessonsCompleted ? "#FFD700" : "#CCCCCC"} 
          />
          <Text style={[
            styles.finalTestText,
            !allLessonsCompleted && styles.disabledText
          ]}>
            Final Testi
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      
      
      <View style={styles.logoContainer}>
        <View style={styles.logoRow}>
          <View style={styles.logoWrapper}>
            <Ionicons name="logo-react" size={32} color="#61DAFB" />
          </View>
          <Text style={styles.logoText}>React Native</Text>
        </View>
        <Text style={styles.subtitleText}>Eğitim Serisi</Text>
      </View>
      
      <FlatList
        data={lessonData}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFinalTestButton}
      />
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
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  logoWrapper: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  subtitleText: {
    fontSize: 14,
    color: '#666666',
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  listContent: {
    padding: 16,
  },
  lessonItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
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
  disabledLessonItem: {
    opacity: 0.7,
  },
  lessonInfo: {
    marginBottom: 16,
  },
  lessonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  disabledText: {
    color: '#999999',
  },
  completedBadge: {
    marginLeft: 8,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
  },
  watchButton: {
    borderColor: '#61DAFB',
  },
  quizButton: {
    borderColor: '#61DAFB',
  },
  disabledButton: {
    backgroundColor: '#F5F5F5',
    borderColor: '#CCCCCC',
  },
  completedButton: {
    backgroundColor: '#F8FFF8',
    borderColor: '#4CAF50',
  },
  buttonText: {
    color: '#61DAFB',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
  finalTestContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  finalTestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFD700',
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
  },
  finalTestText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 8,
    fontFamily: Platform.select({
      ios: 'System',
      android: 'Roboto',
    }),
  },
});
