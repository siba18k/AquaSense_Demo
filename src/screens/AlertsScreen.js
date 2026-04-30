import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles as s } from '../theme/styles';
import { AlertBox, ReportCard } from '../components/Core';

export default function AlertsScreen() {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <Text style={s.screenTitle}>Alerts</Text>
      <Text style={s.copy}>Critical water-quality updates across campus.</Text>
      <AlertBox title="Best Water Quality right now at West Hall" icon="medal" />
      <ReportCard title="Science Library - 2nd Floor" tag="METALLIC TASTE" desc="The water from the fountain near the elevator has a strong metallic aftertaste." count="24" />
      <ReportCard title="Student Union - Main Lobby" tag="FILTER FULL" desc="Red light is flashing on the bottle filler. Filter status indicates replacement needed immediately." count="12" />
    </ScrollView>
  );
}
