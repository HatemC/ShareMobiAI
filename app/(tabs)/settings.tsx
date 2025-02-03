import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import ClickableComponent from '../../assets/components/ClickableComponent';

export default function SettingsScreen() {
  return (
    <ScrollView>
      {[...Array(10).keys()].map((i) => (
        <Link key={i} href={`/details/${i + 1}`} asChild>
          <ClickableComponent
            title={`Élément ${i + 1}`}
            iconName="settings" // Icône différente pour l'écran Settings
            onPress={() => { }}
          />
        </Link>
      ))}
    </ScrollView>
  );
}
