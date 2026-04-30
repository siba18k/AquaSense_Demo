import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles as s } from '../theme/styles';
import { Chip, FloatingAddButton, ReportCard, StatBox, StitchBar } from '../components/Core';

export default function ReportScreen() {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <StitchBar />
      <Text style={s.bigTitle}>Community Feed</Text>
      <Text style={s.copy}>Real-time water quality insights from fellow students across campus.</Text>
      <View style={s.statsRow}>
        <StatBox title="ACTIVE ALERTS" value="12" />
        <StatBox title="VERIFIED TODAY" value="156" active />
      </View>
      <View style={s.chips}>
        <Chip text="All Reports" active />
        <Chip text="Low Pressure" />
        <Chip text="Taste Issues" />
      </View>
      <ReportCard title="Science Library - 2nd Floor" tag="METALLIC TASTE" desc="The water from the fountain near the elevator has a strong metallic aftertaste. Noticed it starting this morning." count="24" />
      <ReportCard title="Student Union - Main Lobby" tag="FILTER FULL" desc="Red light is flashing on the bottle filler. Filter status indicates replacement needed immediately." count="12" />
      <ReportCard title="Engineering Hall - Room 304" tag="LOW PRESSURE" desc="Water stream is barely reaching the spout. Hard to fill a bottle today." count="8" />
      <FloatingAddButton />
    </ScrollView>
  );
}
