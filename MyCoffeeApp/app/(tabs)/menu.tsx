import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useState, useRef } from 'react';

interface Coffee {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
}

interface CoffeeCategories {
  [key: string]: Coffee[];
}

const categories = [
  { id: '1', name: 'Sıcak Kahveler' },
  { id: '2', name: 'Soğuk Kahveler' },
  { id: '3', name: 'Tatlılar' },
];

const coffees: CoffeeCategories = {
  '1': [
    { 
      id: '1', 
      name: 'Türk Kahvesi', 
      price: '30 TL', 
      image: require('../../assets/turkish-coffee.jpg'),
      description: 'Geleneksel Türk Kahvesi, özenle kavrulmuş kahve çekirdekleri' 
    },
    { 
      id: '2', 
      name: 'Espresso', 
      price: '25 TL', 
      image: require('../../assets/espresso.jpg'),
      description: 'Yoğun aromalı İtalyan usulü espresso' 
    },
    { 
      id: '3', 
      name: 'Cappuccino', 
      price: '35 TL', 
      image: require('../../assets/cappuccino.jpg'),
      description: 'Espresso, buharla ısıtılmış süt ve süt köpüğü' 
    },
    { 
      id: '4', 
      name: 'Latte', 
      price: '35 TL', 
      image: require('../../assets/latte.jpg'),
      description: 'Espresso ve kadifemsi süt köpüğü' 
    },
    { 
      id: '5', 
      name: 'Mocha', 
      price: '38 TL', 
      image: require('../../assets/mocha.jpg'),
      description: 'Espresso, sıcak çikolata ve süt köpüğü' 
    },
    { 
      id: '6', 
      name: 'Filtre Kahve', 
      price: '28 TL', 
      image: require('../../assets/filter-coffee.jpg'),
      description: 'Özel harmanlanmış çekirdeklerden filtre kahve' 
    },
    { 
      id: '7', 
      name: 'Caramel Macchiato', 
      price: '40 TL', 
      image: require('../../assets/caramel-macchiato.jpg'),
      description: 'Espresso, vanilya şurubu ve karamel sos' 
    },
  ],
  '2': [
    {
      id: '1',
      name: 'Ice Americano',
      price: '32 TL',
      image: require('../../assets/ice-americano.jpg'),
      description: 'Buz üzerine espresso ve soğuk su'
    },
    {
      id: '2',
      name: 'Frappuccino',
      price: '40 TL',
      image: require('../../assets/frappuccino.jpg'),
      description: 'Kahve, süt, buz ve krema karışımı'
    },
    {
      id: '3',
      name: 'Cold Brew',
      price: '35 TL',
      image: require('../../assets/cold-brew.jpg'),
      description: '12 saat demlenen soğuk kahve'
    },
    {
      id: '4',
      name: 'Ice Latte',
      price: '38 TL',
      image: require('../../assets/ice-latte.jpg'),
      description: 'Soğuk süt üzerine espresso ve buz'
    },
    {
      id: '5',
      name: 'Ice Mocha',
      price: '42 TL',
      image: require('../../assets/ice-mocha.jpg'),
      description: 'Soğuk çikolatalı kahve ve krema'
    },
    {
      id: '6',
      name: 'Affogato',
      price: '45 TL',
      image: require('../../assets/affogato.jpg'),
      description: 'Vanilyalı dondurma üzerine sıcak espresso'
    },
    {
      id: '7',
      name: 'Buzlu Caramel Macchiato',
      price: '43 TL',
      image: require('../../assets/iced-caramel-macchiato.jpg'),
      description: 'Soğuk süt, espresso ve karamel sos'
    },
  ],
  '3': [
    {
      id: '1',
      name: 'Tiramisu',
      price: '45 TL',
      image: require('../../assets/tiramisu.jpg'),
      description: 'İtalyan usulü kahveli pasta'
    },
    {
      id: '2',
      name: 'Cheesecake',
      price: '40 TL',
      image: require('../../assets/cheesecake.jpg'),
      description: 'New York usulü cheesecake'
    },
    {
      id: '3',
      name: 'Brownie',
      price: '35 TL',
      image: require('../../assets/brownie.jpg'),
      description: 'Sıcak çikolatalı brownie'
    },
    {
      id: '4',
      name: 'San Sebastian',
      price: '48 TL',
      image: require('../../assets/san-sebastian.jpg'),
      description: 'Bask usulü yanık cheesecake'
    },
    {
      id: '5',
      name: 'Havuçlu Kek',
      price: '35 TL',
      image: require('../../assets/carrot-cake.jpg'),
      description: 'Tarçınlı havuçlu kek'
    },
    {
      id: '6',
      name: 'Çikolatalı Sufle',
      price: '42 TL',
      image: require('../../assets/chocolate-souffle.jpg'),
      description: 'Sıcak servis çikolatalı sufle'
    },
    {
      id: '7',
      name: 'Elmalı Turta',
      price: '38 TL',
      image: require('../../assets/apple-pie.jpg'),
      description: 'Tarçınlı elmalı turta'
    },
  ],
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('1');
  const categoryListRef = useRef<FlatList>(null);

  const handleCategorySelect = (categoryId: string, index: number) => {
    setSelectedCategory(categoryId);
    categoryListRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Menümüz</Text>
      
      <View style={styles.categoriesContainer}>
        <FlatList
          ref={categoryListRef}
          horizontal
          data={categories}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item.id && styles.selectedCategory,
              ]}
              onPress={() => handleCategorySelect(item.id, index)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === item.id && styles.selectedCategoryText
              ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.productsContainer}>
        {selectedCategory && (
          <FlatList
            data={coffees[selectedCategory]}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productCard}>
                <Image 
                  source={item.image}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <View style={styles.productInfo}>
                  <View style={styles.nameAndPrice}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                  </View>
                  <Text style={styles.productDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5C3317',
    paddingVertical: 15,
    paddingHorizontal: 15,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E6CCB2',
    marginTop: 10,
  },
  categoriesContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E6CCB2',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DEB887',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minWidth: 120,
    alignItems: 'center',
  },
  selectedCategory: {
    backgroundColor: '#DEB887',
    borderColor: '#8B4513',
    transform: [{ scale: 1.02 }],
  },
  categoryText: {
    color: '#8B4513',
    fontWeight: '600',
    fontSize: 16,
  },
  selectedCategoryText: {
    color: '#5C3317',
    fontWeight: '700',
  },
  productsContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  productList: {
    padding: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#E6CCB2',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  nameAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },
}); 