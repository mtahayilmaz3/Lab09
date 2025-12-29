import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Gelen parametreleri route.params üzerinden alıyoruz
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to {place}</Text>
      <Text style={styles.subText}>Rating: {rating} Stars</Text>

      {/* Challenge: Rating'e göre özel mesaj */}
      <Text style={styles.message}>
        {rating === 5 ? "Superb! A must-visit location." : "Great choice for a trip."}
      </Text>

      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subText: { fontSize: 18, marginBottom: 5 },
  message: { fontSize: 16, fontStyle: 'italic', marginBottom: 20, color: '#555' },
});