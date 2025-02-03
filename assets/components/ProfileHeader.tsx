import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Pour la sélection de photos

const ProfileHeader = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null); // État pour la photo de profil
  const today = new Date().toLocaleDateString(); // Date du jour

  // Fonction pour sélectionner une photo
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission refusée pour accéder à la galerie.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images', // Utilisation directe de la chaîne 'Images'
      allowsEditing: true,
      aspect: [1, 1], // Format carré
      quality: 1,
    });


    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Mettre à jour l'image
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={profileImage ? { uri: profileImage } : require('../../assets/images/default-profile.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Bonjour le Monde!</Text>
        <Text style={styles.dateText}>Nous sommes le {today}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20, // Padding ajusté
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16, // Espacement avec le composant cliquable
    height: 150, // Double de la hauteur du composant cliquable (50 -> 100)
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Image ronde
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  dateText: {
    fontSize: 14,
    color: '#888888',
  },
});

export default ProfileHeader;
