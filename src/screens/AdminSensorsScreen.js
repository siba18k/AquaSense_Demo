import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, GREEN, RED, shadow } from '../theme/colors';
import { TopHeader } from '../components/Core';

export default function AdminSensorsScreen({ onLogout }) {
  const [calibrated, setCalibrated] = useState(false);
  const sensors = [
    ['Main Quad', 'Online', GREEN, '98%'],
    ['Science Hall', 'Service', RED, '62%'],
    ['Library', 'Online', GREEN, '94%'],
    ['Residence Hall', 'Online', BLUE, '91%'],
  ];
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader admin onLogout={onLogout} />
      <Text style={s.screenTitle}>Sensor Network</Text>
      <Text style={s.subTitle}>Frontend demo controls for station health.</Text>
      <View style={[s.adminHero, shadow]}>
        <View style={s.rowBetween}>
          <Text style={s.adminHeroTitle}>Remote Calibration</Text>
          <Pressable onPress={() => setCalibrated(!calibrated)} style={calibrated ? s.switchOn : s.switchOff}><View style={calibrated ? s.knobOn : s.knobOff} /></Pressable>
        </View>
        <Text style={s.body}>{calibrated ? 'Calibration demo activated.' : 'Tap switch to simulate calibration.'}</Text>
      </View>
      {sensors.map(([name, status, color, percent]) => (
        <View key={name} style={[s.sensorCard, shadow]}>
          <View style={[s.adminIcon, { backgroundColor: color + '22' }]}><Ionicons name="hardware-chip" size={24} color={color} /></View>
          <View style={{ flex: 1 }}>
            <Text style={s.reportTitle}>{name}</Text>
            <Text style={s.body}>{status} • Water quality {percent}</Text>
          </View>
          <Text style={[s.statusBadge, { color }]}>{status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
