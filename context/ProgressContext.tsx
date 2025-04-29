import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the progress interface
interface Progress {
  completedLessons: string[];
  completedQuizzes: string[];
  finalTestCompleted: boolean;
}

// Define the context interface
interface ProgressContextType {
  progress: Progress;
  isLessonCompleted: (lessonId: string) => boolean;
  isQuizCompleted: (lessonId: string) => boolean;
  isLessonAvailable: (lessonId: string) => boolean;
  isFinalTestAvailable: () => boolean;
  markLessonCompleted: (lessonId: string) => void;
  markQuizCompleted: (lessonId: string) => void;
  markFinalTestCompleted: () => void;
  resetProgress: () => void;
}

// Create the context with default values
const ProgressContext = createContext<ProgressContextType>({
  progress: {
    completedLessons: [],
    completedQuizzes: [],
    finalTestCompleted: false,
  },
  isLessonCompleted: () => false,
  isQuizCompleted: () => false,
  isLessonAvailable: () => false,
  isFinalTestAvailable: () => false,
  markLessonCompleted: () => {},
  markQuizCompleted: () => {},
  markFinalTestCompleted: () => {},
  resetProgress: () => {},
});

// Create the provider component
export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>({
    completedLessons: [],
    completedQuizzes: [],
    finalTestCompleted: false,
  });

  // Load progress from AsyncStorage on component mount
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const storedProgress = await AsyncStorage.getItem('userProgress');
        if (storedProgress) {
          setProgress(JSON.parse(storedProgress));
        }
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    };

    loadProgress();
  }, []);

  // Save progress to AsyncStorage whenever it changes
  useEffect(() => {
    const saveProgress = async () => {
      try {
        await AsyncStorage.setItem('userProgress', JSON.stringify(progress));
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    };

    saveProgress();
  }, [progress]);

  // Check if a lesson is completed
  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(lessonId);
  };

  // Check if a quiz is completed
  const isQuizCompleted = (lessonId: string) => {
    return progress.completedQuizzes.includes(lessonId);
  };

  // Check if a lesson is available (previous lesson and quiz are completed)
  const isLessonAvailable = (lessonId: string) => {
    // First lesson is always available
    if (lessonId === '0') {
      return true;
    }

    // For other lessons, check if the previous lesson and quiz are completed
    const previousLessonId = (parseInt(lessonId) - 1).toString();
    return (
      isLessonCompleted(previousLessonId) && 
      isQuizCompleted(previousLessonId)
    );
  };

  // Check if the final test is available (all lessons and quizzes are completed)
  const isFinalTestAvailable = () => {
    // Check if all lessons and quizzes are completed
    const totalLessons = 18; // Total number of lessons
    for (let i = 0; i < totalLessons; i++) {
      const lessonId = i.toString();
      if (!isLessonCompleted(lessonId) || !isQuizCompleted(lessonId)) {
        return false;
      }
    }
    return true;
  };

  // Mark a lesson as completed
  const markLessonCompleted = (lessonId: string) => {
    if (!isLessonCompleted(lessonId)) {
      setProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      }));
    }
  };

  // Mark a quiz as completed
  const markQuizCompleted = (lessonId: string) => {
    if (!isQuizCompleted(lessonId)) {
      setProgress(prev => ({
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, lessonId],
      }));
    }
  };

  // Mark the final test as completed
  const markFinalTestCompleted = () => {
    setProgress(prev => ({
      ...prev,
      finalTestCompleted: true,
    }));
  };

  // Reset progress
  const resetProgress = () => {
    setProgress({
      completedLessons: [],
      completedQuizzes: [],
      finalTestCompleted: false,
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLessonCompleted,
        isQuizCompleted,
        isLessonAvailable,
        isFinalTestAvailable,
        markLessonCompleted,
        markQuizCompleted,
        markFinalTestCompleted,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

// Create a custom hook to use the progress context
export const useProgress = () => useContext(ProgressContext); 