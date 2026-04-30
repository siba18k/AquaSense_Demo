import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, GREEN, RED, shadow } from '../theme/colors';
import { TopHeader } from '../components/Core';

const baseUsers = [
  { name: 'Alex Thompson', role: 'Student', status: 'Active' },
  { name: 'Mia Khumalo', role: 'Hydra Tech', status: 'Active' },
  { name: 'Dr. Naidoo', role: 'Lab Admin', status: 'Admin' },
];

export default function AdminUsersScreen({ onLogout }) {
  const [filter, setFilter] = useState('All');
  const users = filter === 'All' ? baseUsers : baseUsers.filter((u) => u.status === filter || u.role === filter);
  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader admin onLogout={onLogout} />
      <Text style={s.screenTitle}>User Control</Text>
      <Text style={s.subTitle}>Demo admin permissions and account status.</Text>
      <View style={s.chips}>
        {['All', 'Active', 'Admin'].map((item) => (
          <Pressable key={item} onPress={() => setFilter(item)}><Text style={[s.chip, filter === item && s.chipActive]}>{item}</Text></Pressable>
        ))}
      </View>
      {users.map((user, i) => (
        <View key={user.name} style={[s.userCard, shadow]}>
          <View style={s.userAvatar}><Text style={{ fontSize: 22 }}>{i === 1 ? '🛠️' : '👤'}</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={s.reportTitle}>{user.name}</Text>
            <Text style={s.body}>{user.role}</Text>
          </View>
          <Text style={[s.statusBadge, { color: user.status === 'Admin' ? BLUE : GREEN }]}>{user.status}</Text>
        </View>
      ))}
      <Pressable style={[s.primaryBtn, shadow]}><Text style={s.primaryText}>+ Add Demo User</Text></Pressable>
    </ScrollView>
  );
}
