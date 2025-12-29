import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      
      {/* Paris Butonu - Veri gönderiyoruz */}
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
        />
      </View>

      {/* London Butonu - Veri gönderiyoruz */}
      <View style={styles.buttonSpacing}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
  buttonSpacing: { marginVertical: 10 } // Butonlar arası boşluk olsun
});