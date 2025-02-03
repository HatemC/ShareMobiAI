import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details/home/calendrier" options={{ title: 'Mon Calendrier' }} />
      <Stack.Screen name="details/home/consommation" options={{ title: 'Ma Consommation' }} />
      <Stack.Screen name="details/home/position" options={{ title: 'La position de ma Voiture' }} />
      <Stack.Screen name="details/home/solde" options={{ title: 'Mon Solde' }} />
      <Stack.Screen name="details/home/valeur" options={{ title: 'La valeur de ma Voiture' }} />
      <Stack.Screen name="details/home/message" options={{ title: 'message' }} />
      <Stack.Screen name="details/settings/infoPerso" options={{ title: 'Modifier mes informations personnelles' }} />
      <Stack.Screen name="details/settings/photo" options={{ title: 'Modifier ma photo de profil' }} />
      <Stack.Screen name="details/settings/mdp" options={{ title: 'Modifier mon mot de passe' }} />
    </Stack>
  );
}
