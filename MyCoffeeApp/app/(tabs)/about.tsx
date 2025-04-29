import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Kahve Dünyası Hakkında</Text>
          
          <Text style={styles.description}>
            2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçerek, 
            uzman baristalarımızla sizlere eşsiz bir kahve deneyimi sunuyoruz.
          </Text>

          <View style={styles.hoursContainer}>
            <Text style={styles.subtitle}>Çalışma Saatleri</Text>
            
            <View style={styles.hoursRow}>
              <Text style={styles.day}>Pazartesi - Cuma:</Text>
              <Text style={styles.hours}>08:00 - 22:00</Text>
            </View>
            
            <View style={styles.hoursRow}>
              <Text style={styles.day}>Cumartesi:</Text>
              <Text style={styles.hours}>09:00 - 23:00</Text>
            </View>
            
            <View style={styles.hoursRow}>
              <Text style={styles.day}>Pazar:</Text>
              <Text style={styles.hours}>10:00 - 21:00</Text>
            </View>
          </View>

          <View style={styles.contactContainer}>
            <Text style={styles.subtitle}>İletişim</Text>
            <Text style={styles.contactText}>Adres: Kahve Sokak No:1, İstanbul</Text>
            <Text style={styles.contactText}>Telefon: (0212) 555 55 55</Text>
            <Text style={styles.contactText}>E-posta: info@kahvedunyasi.com</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Dikey ortalama
  },
  content: {
    padding: 20,
    backgroundColor: '#FFF',
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E6CCB2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5C3317',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  hoursContainer: {
    marginBottom: 30,
    backgroundColor: '#FFF8DC',
    padding: 15,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#8B4513',
    textAlign: 'center',
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  day: {
    fontSize: 16,
    color: '#5C3317',
    fontWeight: '500',
  },
  hours: {
    fontSize: 16,
    color: '#8B4513',
    fontWeight: '500',
  },
  contactContainer: {
    backgroundColor: '#FFF8DC',
    padding: 15,
    borderRadius: 10,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#5C3317',
    textAlign: 'center',
  },
}); 