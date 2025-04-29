// Quiz data for each lesson and the final test
export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

export interface Quiz {
  questions: QuizQuestion[];
}

export const quizzes: Record<string, Quiz> = {
  "0": {
    questions: [
      {
        question: "React Native nedir?",
        options: [
          "Web uygulamaları için bir JavaScript kütüphanesi",
          "Mobil uygulamalar geliştirmek için bir framework",
          "Veritabanı yönetim sistemi",
          "Bir programlama dili",
        ],
        answerIndex: 1
      },
      {
        question: "React Native'in en önemli avantajı nedir?",
        options: [
          "Ücretsiz olması",
          "Tek kod tabanıyla hem iOS hem Android için uygulama geliştirebilme",
          "Hızlı derleme süresi",
          "Az bellek kullanımı",
        ],
        answerIndex: 1
      },
      {
        question: "React Native uygulamaları hangi dilde yazılır?",
        options: [
          "Java",
          "Swift",
          "JavaScript/TypeScript",
          "Python",
        ],
        answerIndex: 2
      },
    ]
  },
  "1": {
    questions: [
      {
        question: "React Native projesi nasıl oluşturulur?",
        options: [
          "npx create-react-native-app",
          "npx react-native init",
          "npm install react-native",
          "yarn add react-native",
        ],
        answerIndex: 1
      },
      {
        question: "Expo CLI nedir?",
        options: [
          "Bir veritabanı yönetim aracı",
          "React Native geliştirme ortamı",
          "Bir test framework'ü",
          "Bir kod editörü",
        ],
        answerIndex: 1
      },
      {
        question: "React Native projesinde hangi dosya uygulamanın giriş noktasıdır?",
        options: [
          "package.json",
          "App.tsx",
          "index.js",
          "metro.config.js",
        ],
        answerIndex: 1
      },
    ]
  },
  "2": {
    questions: [
      {
        question: "React Native'de View komponenti ne işe yarar?",
        options: [
          "Metin göstermek için",
          "Görsel öğeleri gruplamak için",
          "Buton oluşturmak için",
          "Resim göstermek için",
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de stil tanımlamaları nasıl yapılır?",
        options: [
          "CSS dosyaları kullanılarak",
          "StyleSheet.create() metodu ile",
          "Inline style olarak",
          "HTML class'ları kullanılarak",
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de flexbox özelliği ne işe yarar?",
        options: [
          "Animasyonlar oluşturmak için",
          "Sayfa düzeni oluşturmak için",
          "Veri depolamak için",
          "Ağ istekleri yapmak için",
        ],
        answerIndex: 1
      },
    ]
  },
  "3": {
    questions: [
      {
        question: "React Native'de navigasyon için hangi kütüphane kullanılır?",
        options: [
          "React Router",
          "React Navigation",
          "React Link",
          "React Path"
        ],
        answerIndex: 1
      },
      {
        question: "Stack Navigator ne işe yarar?",
        options: [
          "Ekranları yan yana gösterir",
          "Ekranları üst üste gösterir",
          "Ekranları alt alta gösterir",
          "Ekranları karışık gösterir"
        ],
        answerIndex: 1
      },
      {
        question: "Tab Navigator ne işe yarar?",
        options: [
          "Ekranları yan yana gösterir",
          "Ekranları üst üste gösterir",
          "Ekranları alt alta gösterir",
          "Ekranları karışık gösterir"
        ],
        answerIndex: 0
      }
    ]
  },
  "4": {
    questions: [
      {
        question: "React Native'de veri saklamak için hangi API kullanılır?",
        options: [
          "LocalStorage",
          "AsyncStorage",
          "SessionStorage",
          "CookieStorage"
        ],
        answerIndex: 1
      },
      {
        question: "AsyncStorage hangi veri tiplerini saklayabilir?",
        options: [
          "Sadece string",
          "String ve number",
          "String, number ve boolean",
          "String, number, boolean ve object"
        ],
        answerIndex: 3
      },
      {
        question: "AsyncStorage.setItem() ne işe yarar?",
        options: [
          "Veri silmek için",
          "Veri okumak için",
          "Veri yazmak için",
          "Veri güncellemek için"
        ],
        answerIndex: 2
      }
    ]
  },
  "5": {
    questions: [
      {
        question: "React Native'de API çağrıları için hangi fonksiyon kullanılır?",
        options: [
          "axios()",
          "fetch()",
          "http.get()",
          "api.call()"
        ],
        answerIndex: 1
      },
      {
        question: "fetch() fonksiyonu ne döndürür?",
        options: [
          "JSON verisi",
          "Promise",
          "String",
          "Number"
        ],
        answerIndex: 1
      },
      {
        question: "API'den gelen veriyi işlemek için hangi metod kullanılır?",
        options: [
          ".then()",
          ".catch()",
          ".finally()",
          "Hepsi"
        ],
        answerIndex: 3
      }
    ]
  },
  "final": {
    questions: [
      {
        question: "React Native'in en büyük avantajı nedir?",
        options: [
          "Ücretsiz olması",
          "Tek kod tabanıyla birden fazla platform",
          "Hızlı olması",
          "Küçük boyutlu olması"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de performansı artırmak için ne yapılmalıdır?",
        options: [
          "Daha fazla bileşen kullanmak",
          "Daha az bileşen kullanmak",
          "useMemo ve useCallback kullanmak",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir uygulama nasıl dağıtılır?",
        options: [
          "Sadece App Store",
          "Sadece Google Play",
          "App Store ve Google Play",
          "Web üzerinden"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de bir hata ayıklamak için ne kullanılır?",
        options: [
          "console.log()",
          "React Native Debugger",
          "Chrome DevTools",
          "Hepsi"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir animasyon nasıl oluşturulur?",
        options: [
          "CSS animasyonları",
          "Animated API",
          "JavaScript setTimeout",
          "Web animasyonları"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de bir kamera nasıl kullanılır?",
        options: [
          "HTML5 kamera API",
          "Expo Camera",
          "React Native Camera",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir bildirim nasıl gönderilir?",
        options: [
          "Web push notifications",
          "Expo Notifications",
          "React Native Push Notifications",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir harita nasıl gösterilir?",
        options: [
          "Google Maps",
          "React Native Maps",
          "Expo Location",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir veritabanı nasıl kullanılır?",
        options: [
          "SQLite",
          "Firebase",
          "MongoDB",
          "Hepsi"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir tema nasıl uygulanır?",
        options: [
          "CSS değişkenleri",
          "Context API",
          "Redux",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir form nasıl oluşturulur?",
        options: [
          "HTML form",
          "React Native Paper",
          "Formik",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir yükleme göstergesi nasıl oluşturulur?",
        options: [
          "ActivityIndicator",
          "ProgressBar",
          "Spinner",
          "A ve B doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir liste nasıl oluşturulur?",
        options: [
          "FlatList",
          "ScrollView",
          "ListView",
          "A ve B doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir modal nasıl oluşturulur?",
        options: [
          "Modal bileşeni",
          "Popup",
          "Dialog",
          "A ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir buton nasıl oluşturulur?",
        options: [
          "TouchableOpacity",
          "Button",
          "Pressable",
          "Hepsi"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir input nasıl oluşturulur?",
        options: [
          "TextInput",
          "Input",
          "TextField",
          "A ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir switch nasıl oluşturulur?",
        options: [
          "Switch bileşeni",
          "Toggle",
          "Checkbox",
          "A ve B doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir slider nasıl oluşturulur?",
        options: [
          "Slider bileşeni",
          "Range",
          "Progress",
          "A ve B doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir picker nasıl oluşturulur?",
        options: [
          "Picker bileşeni",
          "Select",
          "Dropdown",
          "A ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir date picker nasıl oluşturulur?",
        options: [
          "DatePickerIOS",
          "DatePickerAndroid",
          "DateTimePicker",
          "Hepsi"
        ],
        answerIndex: 3
      }
    ]
  }
}; 