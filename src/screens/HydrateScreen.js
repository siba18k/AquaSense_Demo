import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE } from '../theme/colors';
import { ListRow, SmallPill, StitchBar } from '../components/Core';

export default function HydrateScreen() {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <StitchBar />
      <View style={s.alertCard}>
        <Text style={s.sectionTitle}>Best Water Quality right now at West Hall</Text>
        <View style={s.pillRow}>
          <SmallPill icon="flask" text="7.2 pH" />
          <SmallPill icon="thermometer" text="18°C" gray />
        </View>
      </View>
      <View style={s.twoCols}>
        <View style={s.tipCard}>
          <Ionicons name="bulb" color={BLUE} size={30} />
          <Text style={s.body}>Wellness Tip</Text>
          <Text style={s.sectionTitle}>Drink 250ml before each lecture.</Text>
        </View>
        <View style={s.tipCard}>
          <Ionicons name="bar-chart" color={BLUE} size={30} />
          <Text style={s.body}>Weekly Avg</Text>
          <Text style={s.statValueDark}>2.4L</Text>
        </View>
      </View>
      <View style={s.rowBetween}>
        <Text style={s.sectionTitle}>Recent Intake</Text>
        <Text style={s.link}>View History</Text>
      </View>
      <ListRow icon="water" title="Sparkling Water" sub="10:45 AM • West Hall Fountain" right="500ml" />
      <ListRow icon="cafe" title="Black Coffee" sub="08:15 AM • Campus Hub" right="250ml" />
    </ScrollView>
  );
}
