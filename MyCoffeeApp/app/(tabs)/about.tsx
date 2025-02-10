import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8B4513',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    color: '#333',
  },
  hoursContainer: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#8B4513',
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    color: '#333',
  },
  hours: {
    fontSize: 16,
    color: '#666',
  },
  contactContainer: {
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
}); 