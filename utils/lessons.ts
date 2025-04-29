// Lesson data including titles, descriptions, and video URLs
export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'React Native Giriş',
    description: 'React Native nedir, neden kullanılır ve nasıl kurulur? Bu derste React Native\'in temellerini öğreneceksiniz.',
    videoUrl: 'https://youtube.com/playlist?list=PLZFrBLNgbT_nv3et1ffaAspHIe8ds-ceX',
  },
  {
    id: '2',
    title: 'Bileşenler ve Stiller',
    description: 'React Native\'de bileşenler nasıl oluşturulur ve stillendirilir? Bu derste temel bileşenleri ve stil sistemini öğreneceksiniz.',
    videoUrl: 'https://youtube.com/playlist?list=PLZFrBLNgbT_nv3et1ffaAspHIe8ds-ceX',
  },
  {
    id: '3',
    title: 'Navigasyon',
    description: 'React Native\'de ekranlar arası geçiş nasıl yapılır? Bu derste navigasyon sistemini öğreneceksiniz.',
    videoUrl: 'https://youtube.com/playlist?list=PLZFrBLNgbT_nv3et1ffaAspHIe8ds-ceX',
  },
  {
    id: '4',
    title: 'Veri Saklama',
    description: 'React Native\'de veri nasıl saklanır? Bu derste AsyncStorage kullanımını öğreneceksiniz.',
    videoUrl: 'https://youtube.com/playlist?list=PLZFrBLNgbT_nv3et1ffaAspHIe8ds-ceX',
  },
  {
    id: '5',
    title: 'API Çağrıları',
    description: 'React Native\'de API çağrıları nasıl yapılır? Bu derste fetch API kullanımını öğreneceksiniz.',
    videoUrl: 'https://youtube.com/playlist?list=PLZFrBLNgbT_nv3et1ffaAspHIe8ds-ceX',
  },
]; 