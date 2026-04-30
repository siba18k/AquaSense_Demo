import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles as s } from '../theme/styles';
import { shadow } from '../theme/colors';
import { MetricsGrid, Ring, SmallPill, TopHeader, TrendCard } from '../components/Core';

export default function DashboardScreen() {
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader />
      <Text style={s.screenTitle}>Water Status</Text>
      <View style={s.rowBetween}>
        <Text style={s.subTitle}>University Laboratory Main Line</Text>
        <Text style={s.lastUpdated}>LAST UPDATED{`\n`}2 mins ago</Text>
      </View>
      <View style={[s.statusCard, shadow]}>
        <Ring />
        <Text style={s.sectionTitle}>System Performance</Text>
        <Text style={s.body}>All sensors reporting within optimal clinical parameters. No filtration bypass detected in the last 24-hour cycle.</Text>
        <View style={s.pillRow}>
          <SmallPill icon="checkmark-circle" text="BIOSAFE CERTIFIED" />
          <SmallPill icon="flash" text="LOW LATENCY" gray />
        </View>
      </View>
      <MetricsGrid />
      <TrendCard />
    </ScrollView>
  );
}
