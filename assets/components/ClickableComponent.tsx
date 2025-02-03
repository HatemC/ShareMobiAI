import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Vous pouvez choisir une autre famille d'icônes si vous préférez

type ClickableComponentProps = {
  title: string; // Titre à gauche
  iconName: keyof typeof Ionicons.glyphMap; // Nom de l'icône (ex: "chevron-forward")
  onPress: () => void; // Fonction appelée lors du clic
};

export default function ClickableComponent({ title, iconName, onPress }: ClickableComponentProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name={iconName} size={24} color="#888" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginVertical: 20, // Espace de 1 cm entre les composants (environ 5 pixels)
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    height: 100, // Double de la hauteur précédente (50 -> 100)
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
