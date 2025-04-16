import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const lessons = [
  {
    id: '1',
    title: 'Ortam Kurulumu',
    description: 'Node.js, JDK, Android Studio kurulumu',
    videoUrl: 'https://www.youtube.com/watch?v=qSRrxpdMpVc&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&index=1',
  },
  {
    id: '2',
    title: 'Proje Başlatma',
    description: 'React Native CLI ile proje başlatma',
    videoUrl: 'https://www.youtube.com/watch?v=VozPNrt-LfE&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&index=2',
  },
  {
    id: '3',
    title: 'Yapı İncelemesi',
    description: 'Proje dosya yapısını anlama',
    videoUrl: 'https://www.youtube.com/watch?v=GZZ7zq5DW4U&list=PLC3y8-rFHvwhiQJD1di4eRVN30WWCXkg1&index=3',
  },
];

export default function App() {
  const [completed, setCompleted] = useState([]);

  const toggleCompleted = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const openVideo = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openVideo(item.videoUrl)}
      >
        <Text style={styles.buttonText}>İzle</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleCompleted(item.id)}>
        <Text style={[styles.checkbox, completed.includes(item.id) && styles.checked]}>
          {completed.includes(item.id) ? '✅' : '⬜️'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>📚 React Native Öğrenme Rehberi</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  desc: { fontSize: 14, color: '#666' },
  button: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  checkbox: { fontSize: 20 },
  checked: { color: 'green' },
});
