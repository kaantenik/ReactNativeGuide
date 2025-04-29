// Quiz data for each lesson and the final test
export const quizzes = {
  "0": {
    questions: [
      {
        question: "React Native nedir?",
        options: [
          "Sadece web uygulamaları geliştirmek için bir framework",
          "Mobil uygulamalar geliştirmek için bir framework",
          "Masaüstü uygulamaları geliştirmek için bir framework",
          "Oyun geliştirmek için bir framework"
        ],
        answerIndex: 1
      },
      {
        question: "React Native ile hangi platformlar için uygulama geliştirebilirsiniz?",
        options: [
          "Sadece iOS",
          "Sadece Android",
          "iOS ve Android",
          "Sadece Web"
        ],
        answerIndex: 2
      },
      {
        question: "Expo nedir?",
        options: [
          "Bir oyun motoru",
          "React Native uygulamaları geliştirmek için bir araç seti",
          "Bir veritabanı yönetim sistemi",
          "Bir web sunucusu"
        ],
        answerIndex: 1
      }
    ]
  },
  "1": {
    questions: [
      {
        question: "React Native'de bir bileşen nasıl oluşturulur?",
        options: [
          "class Component extends React",
          "function Component()",
          "const Component = () => {}",
          "B ve C doğru"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de stil tanımlamak için ne kullanılır?",
        options: [
          "CSS",
          "StyleSheet",
          "HTML",
          "XML"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de bir görüntü nasıl gösterilir?",
        options: [
          "<img src='image.jpg' />",
          "<Image source={require('./image.jpg')} />",
          "<picture src='image.jpg' />",
          "<photo source='image.jpg' />"
        ],
        answerIndex: 1
      }
    ]
  },
  "2": {
    questions: [
      {
        question: "React Native'de View bileşeni ne için kullanılır?",
        options: [
          "Sadece metin göstermek için",
          "Sadece görüntü göstermek için",
          "Diğer bileşenleri gruplamak için",
          "Sadece buton göstermek için"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de Text bileşeni ne için kullanılır?",
        options: [
          "Sadece başlık göstermek için",
          "Metin göstermek için",
          "Sadece alt başlık göstermek için",
          "Sadece paragraf göstermek için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de stil tanımlamak için hangi özellik kullanılır?",
        options: [
          "class",
          "className",
          "style",
          "css"
        ],
        answerIndex: 2
      }
    ]
  },
  "3": {
    questions: [
      {
        question: "React Native'de TextInput bileşeni ne için kullanılır?",
        options: [
          "Sadece metin göstermek için",
          "Kullanıcıdan metin girişi almak için",
          "Sadece sayı göstermek için",
          "Sadece tarih göstermek için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de Pressable bileşeni ne için kullanılır?",
        options: [
          "Sadece metin göstermek için",
          "Kullanıcı etkileşimlerini algılamak için",
          "Sadece görüntü göstermek için",
          "Sadece liste göstermek için"
        ],
        answerIndex: 1
      },
      {
        question: "useState hook'u ne için kullanılır?",
        options: [
          "Sadece stil tanımlamak için",
          "Bileşen durumunu yönetmek için",
          "Sadece efekt tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      }
    ]
  },
  "4": {
    questions: [
      {
        question: "React Native'de Image bileşeni ne için kullanılır?",
        options: [
          "Sadece metin göstermek için",
          "Görüntü göstermek için",
          "Sadece buton göstermek için",
          "Sadece liste göstermek için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de props ne için kullanılır?",
        options: [
          "Sadece stil tanımlamak için",
          "Bileşenler arasında veri aktarmak için",
          "Sadece efekt tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de özel bileşen nasıl oluşturulur?",
        options: [
          "Sadece class kullanarak",
          "Sadece function kullanarak",
          "Class veya function kullanarak",
          "Sadece arrow function kullanarak"
        ],
        answerIndex: 2
      }
    ]
  },
  "5": {
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
  "6": {
    questions: [
      {
        question: "React Native'de kullanıcı girişi nasıl kontrol edilir?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "TextInput ve useState ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de props ile ne aktarılabilir?",
        options: [
          "Sadece string",
          "Sadece number",
          "Sadece boolean",
          "String, number, boolean, function ve nesneler"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir bileşen nasıl yeniden render edilir?",
        options: [
          "Sadece props değiştiğinde",
          "Sadece state değiştiğinde",
          "Props veya state değiştiğinde",
          "Sadece useEffect çalıştığında"
        ],
        answerIndex: 2
      }
    ]
  },
  "7": {
    questions: [
      {
        question: "React Native'de bileşenleri dışarı taşımak ne işe yarar?",
        options: [
          "Sadece kodu düzenlemek için",
          "Kod tekrarını azaltmak ve yeniden kullanılabilirlik sağlamak için",
          "Sadece performansı artırmak için",
          "Sadece bellek kullanımını azaltmak için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de bir bileşen nasıl dışa aktarılır?",
        options: [
          "Sadece export default ile",
          "Sadece export ile",
          "export default veya export ile",
          "Sadece module.exports ile"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de bir bileşen nasıl içe aktarılır?",
        options: [
          "Sadece import ile",
          "Sadece require ile",
          "import veya require ile",
          "Sadece include ile"
        ],
        answerIndex: 2
      }
    ]
  },
  "8": {
    questions: [
      {
        question: "React Native'de FlexBox ne için kullanılır?",
        options: [
          "Sadece metin düzenlemek için",
          "Sadece görüntü düzenlemek için",
          "Esnek ve duyarlı düzenler oluşturmak için",
          "Sadece buton düzenlemek için"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de yeniden kullanılabilir bileşenler ne için önemlidir?",
        options: [
          "Sadece kod düzenlemek için",
          "Kod tekrarını azaltmak ve tutarlılık sağlamak için",
          "Sadece performansı artırmak için",
          "Sadece bellek kullanımını azaltmak için"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de flex: 1 ne anlama gelir?",
        options: [
          "Bileşenin 1 piksel genişliğinde olması",
          "Bileşenin mevcut alanı doldurması",
          "Bileşenin 1 piksel yüksekliğinde olması",
          "Bileşenin 1 piksel kenar boşluğu olması"
        ],
        answerIndex: 1
      }
    ]
  },
  "9": {
    questions: [
      {
        question: "Redux Toolkit nedir?",
        options: [
          "Sadece stil tanımlamak için bir araç",
          "State yönetimi için bir araç seti",
          "Sadece navigasyon için bir araç",
          "Sadece veritabanı işlemleri için bir araç"
        ],
        answerIndex: 1
      },
      {
        question: "Redux Toolkit'te createSlice ne işe yarar?",
        options: [
          "Sadece stil tanımlamak için",
          "Reducer ve action'ları bir arada tanımlamak için",
          "Sadece effect tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      },
      {
        question: "Redux Toolkit'te configureStore ne işe yarar?",
        options: [
          "Sadece stil tanımlamak için",
          "Redux store'u yapılandırmak için",
          "Sadece effect tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      }
    ]
  },
  "10": {
    questions: [
      {
        question: "Redux Toolkit'te extraReducers ne işe yarar?",
        options: [
          "Sadece stil tanımlamak için",
          "Harici action'ları işlemek için",
          "Sadece effect tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      },
      {
        question: "Firebase nedir?",
        options: [
          "Sadece veritabanı",
          "Sadece kimlik doğrulama",
          "Sadece depolama",
          "Backend hizmetleri sunan bir platform"
        ],
        answerIndex: 3
      },
      {
        question: "Firebase'i React Native projesine nasıl ekleyebilirsiniz?",
        options: [
          "Sadece npm install ile",
          "Sadece yarn add ile",
          "npm install veya yarn add ile",
          "Sadece CDN ile"
        ],
        answerIndex: 2
      }
    ]
  },
  "11": {
    questions: [
      {
        question: "Firestore nedir?",
        options: [
          "Sadece ilişkisel veritabanı",
          "NoSQL belge tabanlı veritabanı",
          "Sadece grafik veritabanı",
          "Sadece anahtar-değer veritabanı"
        ],
        answerIndex: 1
      },
      {
        question: "Firestore'da veri eklemek için hangi metod kullanılır?",
        options: [
          "add()",
          "set()",
          "A ve B doğru",
          "Sadece update()"
        ],
        answerIndex: 2
      },
      {
        question: "Firestore'da veri okumak için hangi metod kullanılır?",
        options: [
          "Sadece get()",
          "Sadece where()",
          "get() ve where()",
          "Sadece orderBy()"
        ],
        answerIndex: 2
      }
    ]
  },
  "12": {
    questions: [
      {
        question: "Firestore'dan tüm verileri çekmek için hangi metod kullanılır?",
        options: [
          "Sadece get()",
          "Sadece where()",
          "get() ve where()",
          "Sadece orderBy()"
        ],
        answerIndex: 0
      },
      {
        question: "Firestore'da veri filtrelemek için hangi metod kullanılır?",
        options: [
          "Sadece get()",
          "Sadece where()",
          "get() ve where()",
          "Sadece orderBy()"
        ],
        answerIndex: 1
      },
      {
        question: "Firestore'da veri sıralamak için hangi metod kullanılır?",
        options: [
          "Sadece get()",
          "Sadece where()",
          "Sadece orderBy()",
          "get() ve where()"
        ],
        answerIndex: 2
      }
    ]
  },
  "13": {
    questions: [
      {
        question: "Firestore'da veri silmek için hangi metod kullanılır?",
        options: [
          "Sadece delete()",
          "Sadece remove()",
          "delete() ve remove()",
          "Sadece clear()"
        ],
        answerIndex: 0
      },
      {
        question: "Firestore'da veri güncellemek için hangi metod kullanılır?",
        options: [
          "Sadece update()",
          "Sadece set()",
          "update() ve set()",
          "Sadece modify()"
        ],
        answerIndex: 2
      },
      {
        question: "Firestore'da belge ID'si nasıl oluşturulur?",
        options: [
          "Sadece manuel olarak",
          "Sadece otomatik olarak",
          "Manuel veya otomatik olarak",
          "Sadece rastgele olarak"
        ],
        answerIndex: 2
      }
    ]
  },
  "14": {
    questions: [
      {
        question: "Auto Login nedir?",
        options: [
          "Sadece manuel giriş",
          "Kullanıcının otomatik olarak giriş yapması",
          "Sadece çıkış yapma",
          "Sadece kayıt olma"
        ],
        answerIndex: 1
      },
      {
        question: "Auto Login için hangi veri saklanmalıdır?",
        options: [
          "Sadece kullanıcı adı",
          "Sadece şifre",
          "Kullanıcı token'ı veya kimlik bilgileri",
          "Sadece e-posta"
        ],
        answerIndex: 2
      },
      {
        question: "Auto Login verisi nerede saklanmalıdır?",
        options: [
          "Sadece state'de",
          "Sadece props'ta",
          "AsyncStorage veya SecureStore'da",
          "Sadece context'te"
        ],
        answerIndex: 2
      }
    ]
  },
  "15": {
    questions: [
      {
        question: "React Native'de kayıt olma işlemi nasıl yapılır?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "TextInput, useState ve Firebase Auth ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de çıkış yapma işlemi nasıl yapılır?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "Firebase Auth signOut metodu ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de kullanıcı durumu nasıl kontrol edilir?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "Firebase Auth onAuthStateChanged metodu ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      }
    ]
  },
  "16": {
    questions: [
      {
        question: "React Native Reanimated nedir?",
        options: [
          "Sadece stil tanımlamak için bir kütüphane",
          "Animasyonlar oluşturmak için bir kütüphane",
          "Sadece navigasyon için bir kütüphane",
          "Sadece veritabanı işlemleri için bir kütüphane"
        ],
        answerIndex: 1
      },
      {
        question: "React Native Reanimated ile animasyon nasıl oluşturulur?",
        options: [
          "Sadece CSS ile",
          "Sadece JavaScript ile",
          "useAnimatedStyle ve withSpring/withTiming ile",
          "Sadece HTML ile"
        ],
        answerIndex: 2
      },
      {
        question: "React Native Reanimated'de useSharedValue ne işe yarar?",
        options: [
          "Sadece stil tanımlamak için",
          "Animasyon değerlerini paylaşmak için",
          "Sadece effect tanımlamak için",
          "Sadece bağlam tanımlamak için"
        ],
        answerIndex: 1
      }
    ]
  },
  "17": {
    questions: [
      {
        question: "To Do uygulamasında veri nerede saklanmalıdır?",
        options: [
          "Sadece state'de",
          "Sadece props'ta",
          "Firestore veya AsyncStorage'da",
          "Sadece context'te"
        ],
        answerIndex: 2
      },
      {
        question: "To Do uygulamasında görev ekleme nasıl yapılır?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "TextInput, useState ve Firestore ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      },
      {
        question: "To Do uygulamasında görev silme nasıl yapılır?",
        options: [
          "Sadece TextInput ile",
          "Sadece useState ile",
          "Firestore delete metodu ile",
          "Sadece useEffect ile"
        ],
        answerIndex: 2
      }
    ]
  },
  "final": {
    questions: [
      {
        question: "React Native'in en büyük avantajı nedir?",
        options: [
          "Sadece ücretsiz olması",
          "Tek kod tabanıyla birden fazla platform",
          "Sadece hızlı olması",
          "Sadece küçük boyutlu olması"
        ],
        answerIndex: 1
      },
      {
        question: "React Native'de performansı artırmak için ne yapılmalıdır?",
        options: [
          "Sadece daha fazla bileşen kullanmak",
          "Sadece daha az bileşen kullanmak",
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
          "Sadece web üzerinden"
        ],
        answerIndex: 2
      },
      {
        question: "React Native'de bir hata ayıklamak için ne kullanılır?",
        options: [
          "Sadece console.log()",
          "Sadece React Native Debugger",
          "Sadece Chrome DevTools",
          "Hepsi"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir animasyon nasıl oluşturulur?",
        options: [
          "Sadece CSS animasyonları",
          "Sadece Animated API",
          "Sadece JavaScript setTimeout",
          "Animated API veya Reanimated"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir kamera nasıl kullanılır?",
        options: [
          "Sadece HTML5 kamera API",
          "Sadece Expo Camera",
          "Sadece React Native Camera",
          "Expo Camera veya React Native Camera"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir bildirim nasıl gönderilir?",
        options: [
          "Sadece web push notifications",
          "Sadece Expo Notifications",
          "Sadece React Native Push Notifications",
          "Expo Notifications veya React Native Push Notifications"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir harita nasıl gösterilir?",
        options: [
          "Sadece Google Maps",
          "Sadece React Native Maps",
          "Sadece Expo Location",
          "React Native Maps veya Expo Location"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir veritabanı nasıl kullanılır?",
        options: [
          "Sadece SQLite",
          "Sadece Firebase",
          "Sadece MongoDB",
          "SQLite, Firebase veya MongoDB"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir tema nasıl uygulanır?",
        options: [
          "Sadece CSS değişkenleri",
          "Sadece Context API",
          "Sadece Redux",
          "Context API veya Redux"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir form nasıl oluşturulur?",
        options: [
          "Sadece HTML form",
          "Sadece React Native Paper",
          "Sadece Formik",
          "React Native Paper veya Formik"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir yükleme göstergesi nasıl oluşturulur?",
        options: [
          "Sadece ActivityIndicator",
          "Sadece ProgressBar",
          "Sadece Spinner",
          "ActivityIndicator veya ProgressBar"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir liste nasıl oluşturulur?",
        options: [
          "Sadece FlatList",
          "Sadece ScrollView",
          "Sadece ListView",
          "FlatList veya ScrollView"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir modal nasıl oluşturulur?",
        options: [
          "Sadece Modal bileşeni",
          "Sadece Popup",
          "Sadece Dialog",
          "Modal bileşeni veya Dialog"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir buton nasıl oluşturulur?",
        options: [
          "Sadece TouchableOpacity",
          "Sadece Button",
          "Sadece Pressable",
          "TouchableOpacity, Button veya Pressable"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir input nasıl oluşturulur?",
        options: [
          "Sadece TextInput",
          "Sadece Input",
          "Sadece TextField",
          "TextInput veya TextField"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir switch nasıl oluşturulur?",
        options: [
          "Sadece Switch bileşeni",
          "Sadece Toggle",
          "Sadece Checkbox",
          "Switch bileşeni veya Toggle"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir slider nasıl oluşturulur?",
        options: [
          "Sadece Slider bileşeni",
          "Sadece Range",
          "Sadece Progress",
          "Slider bileşeni veya Range"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir picker nasıl oluşturulur?",
        options: [
          "Sadece Picker bileşeni",
          "Sadece Select",
          "Sadece Dropdown",
          "Picker bileşeni veya Dropdown"
        ],
        answerIndex: 3
      },
      {
        question: "React Native'de bir date picker nasıl oluşturulur?",
        options: [
          "Sadece DatePickerIOS",
          "Sadece DatePickerAndroid",
          "Sadece DateTimePicker",
          "DateTimePicker veya platform özel DatePicker"
        ],
        answerIndex: 3
      }
    ]
  }
}; 