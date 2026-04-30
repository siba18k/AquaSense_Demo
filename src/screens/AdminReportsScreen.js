import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, GREEN, RED, shadow } from '../theme/colors';
import { TopHeader } from '../components/Core';

export default function AdminReportsScreen({ onLogout }) {
  const [resolved, setResolved] = useState(false);
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader admin onLogout={onLogout} />
      <Text style={s.screenTitle}>Reports Queue</Text>
      <Text style={s.subTitle}>Approve, assign and resolve user reports.</Text>
      <View style={[s.feedCard, shadow]}>
        <View style={s.reportTop}>
          <View style={s.locationCircle}><Ionicons name="alert-circle" size={22} color={resolved ? GREEN : RED} /></View>
          <View style={{ flex: 1 }}>
            <Text style={s.reportTitle}>Science Hall fountain low pressure</Text>
            <Text style={s.reportBy}>7 confirmations • 12 min ago</Text>
          </View>
          <Text style={[s.redTag, resolved && { backgroundColor: '#E6F8EF', color: GREEN }]}>{resolved ? 'RESOLVED' : 'URGENT'}</Text>
        </View>
        <Text style={s.reportDesc}>Students reported cloudy water and weak flow near Lab 3.</Text>
        <View style={s.mapActions}>
          <Pressable onPress={() => setResolved(!resolved)} style={[s.actionBtn, resolved && s.actionBtnActive]}>
            <Ionicons name="checkmark-circle" size={18} color={resolved ? 'white' : BLUE} />
            <Text style={[s.actionText, resolved && s.actionTextActive]}>{resolved ? 'Resolved' : 'Mark Resolved'}</Text>
          </Pressable>
          <Pressable style={s.actionBtn}><Ionicons name="construct" size={18} color={BLUE} /><Text style={s.actionText}>Assign Tech</Text></Pressable>
        </View>
      </View>
      <View style={[s.feedCard, shadow]}>
        <Text style={s.sectionTitle}>Analytics Snapshot</Text>
        <Text style={s.body}>Most reported area: Science Hall</Text>
        <Text style={s.body}>Average response time: 18 minutes</Text>
        <Text style={s.body}>Resolved this week: 31</Text>
      </View>
    </ScrollView>
  );
}
