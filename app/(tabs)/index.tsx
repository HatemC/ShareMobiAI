import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import ClickableComponent from '../../assets/components/ClickableComponent';
import ProfileHeader from '../../assets/components/ProfileHeader';

export default function HomeScreen() {
  return (
    <ScrollView>
        <ProfileHeader />
        <Link href={`/details/home/calendrier`} asChild>
          <ClickableComponent
            title={`Mon Calendrier`}
            iconName="calendar"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>

        <Link href={`/details/home/consommation`} asChild>
          <ClickableComponent
            title={`Ma Consommation`}
            iconName="battery-half"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>

        <Link href={`/details/home/position`} asChild>
          <ClickableComponent
            title={`La position de ma Voiture`}
            iconName="location"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>

        <Link href={`/details/home/solde`} asChild>
          <ClickableComponent
            title={`Mon Solde`}
            iconName="logo-euro"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>

        <Link href={`/details/home/valeur`} asChild>
          <ClickableComponent
            title={`La valeur de ma Voiture`}
            iconName="logo-euro"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>

        <Link href={`/details/home/message`} asChild>
          <ClickableComponent
            title={`Message`}
            iconName="chatbubble-outline"
            onPress={() => { }}
            style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
          />
        </Link>
    </ScrollView>
  );
}
