import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import ClickableComponent from '../../assets/components/ClickableComponent';

export default function SettingsScreen() {
  return (
    <ScrollView>
      <Link href={`/details/settings/infoPerso`} asChild>
               <ClickableComponent
                 title={`Modifier mes informations personnelles`}
                 iconName="pencil"
                 onPress={() => { }}
                 style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
               />
             </Link>

             <Link href={`/details/settings/photo`} asChild>
               <ClickableComponent
                 title={`Modifier ma photo de profil`}
                 iconName="pencil"
                 onPress={() => { }}
                 style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
               />
             </Link>

             <Link href={`/details/settings/mdp`} asChild>
               <ClickableComponent
                 title={`Modifier mon mot de passe`}
                 iconName="pencil"
                 onPress={() => { }}
                 style={{ backgroundColor: '#FFDDDD' }} // Personnalisation
               />
             </Link>
    </ScrollView>
  );
}
