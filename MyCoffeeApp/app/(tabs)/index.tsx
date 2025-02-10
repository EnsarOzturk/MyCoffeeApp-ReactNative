import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/coffee-background.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Kahve Dünyası</Text>
        <Text style={styles.subtitle}>En İyi Kahve Deneyimi</Text>
        
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => router.push('/menu')}
        >
          <Text style={styles.buttonText}>Menüyü Görüntüle</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuButton, styles.aboutButton]}
          onPress={() => router.push('/about')}
        >
          <Text style={styles.buttonText}>Hakkımızda</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
  },
  menuButton: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 25,
    width: 200,
    alignItems: 'center',
    marginBottom: 15,
  },
  aboutButton: {
    backgroundColor: '#6F4E37',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
