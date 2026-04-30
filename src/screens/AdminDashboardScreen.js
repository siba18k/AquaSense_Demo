import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, GREEN, RED, shadow } from '../theme/colors';
import { TopHeader } from '../components/Core';

function AdminMetric({ icon, value, label, color = BLUE }) {
  return (
    <View style={[s.adminMetric, shadow]}>
      <View style={[s.adminIcon, { backgroundColor: color + '22' }]}><Ionicons name={icon} size={24} color={color} /></View>
      <Text style={s.metricNum}>{value}</Text>
      <Text style={s.metricLabel}>{label}</Text>
    </View>
  );
}

export default function AdminDashboardScreen({ setTab, onLogout }) {
  const [systemLive, setSystemLive] = useState(true);
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader admin onLogout={onLogout} />
      <Text style={s.screenTitle}>Admin Dashboard</Text>
      <Text style={s.subTitle}>Manage users, stations, reports and service alerts.</Text>

      <View style={[s.adminHero, shadow]}>
        <View style={s.rowBetween}>
          <View>
            <Text style={s.micro}>SYSTEM HEALTH</Text>
            <Text style={s.adminHeroTitle}>Campus Network</Text>
            <Text style={s.body}>28 stations online • 3 need attention</Text>
          </View>
          <Pressable onPress={() => setSystemLive(!systemLive)} style={systemLive ? s.switchOn : s.switchOff}>
            <View style={systemLive ? s.knobOn : s.knobOff} />
          </Pressable>
        </View>
        <View style={s.adminProgress}><View style={[s.adminProgressFill, { width: systemLive ? '86%' : '42%' }]} /></View>
        <Text style={s.link}>{systemLive ? 'Live monitoring enabled' : 'Monitoring paused for demo'}</Text>
      </View>

      <View style={s.adminGrid}>
        <AdminMetric icon="people" value="1,248" label="ACTIVE USERS" />
        <AdminMetric icon="water" value="28" label="STATIONS" color={GREEN} />
        <AdminMetric icon="warning" value="14" label="OPEN REPORTS" color={RED} />
        <AdminMetric icon="shield-checkmark" value="96%" label="COMPLIANCE" />
      </View>

      <Text style={s.sectionTitle}>Quick Actions</Text>
      <View style={s.quickRow}>
        <Pressable onPress={() => setTab('Users')} style={[s.quickCard, shadow]}><Ionicons name="people" size={26} color={BLUE} /><Text style={s.quickTitle}>Manage Users</Text></Pressable>
        <Pressable onPress={() => setTab('Sensors')} style={[s.quickCard, shadow]}><Ionicons name="hardware-chip" size={26} color={BLUE} /><Text style={s.quickTitle}>Sensors</Text></Pressable>
        <Pressable onPress={() => setTab('Reports')} style={[s.quickCard, shadow]}><Ionicons name="document-text" size={26} color={BLUE} /><Text style={s.quickTitle}>Reports</Text></Pressable>
      </View>

      <View style={[s.feedCard, shadow]}>
        <Text style={s.sectionTitle}>Recent Admin Activity</Text>
        <Text style={s.body}>• Science Hall issue assigned to maintenance</Text>
        <Text style={s.body}>• 42 new student accounts synced</Text>
        <Text style={s.body}>• Library station filter replaced</Text>
      </View>
    </ScrollView>
  );
}
