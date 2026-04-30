import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, RED, shadow } from '../theme/colors';
import { ListRow, TopHeader } from '../components/Core';

export default function SettingsScreen({ onLogout, role }) {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);
  const [privateMode, setPrivateMode] = useState(role === 'admin');

  return (
    <ScrollView style={s.page} contentContainerStyle={s.bottomPad}>
      <TopHeader admin={role === 'admin'} onLogout={onLogout} />
      <Text style={s.screenTitle}>Settings</Text>
      <Text style={s.micro}>ACCOUNT</Text>
      <View style={s.profileCard}>
        <View style={s.avatar}><Text style={{ fontSize: 42 }}>{role === 'admin' ? 'A' : 'U'}</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={s.profileName}>{role === 'admin' ? 'Admin Console' : 'Alex\nThompson'}</Text>
          <Text style={s.body}>{role === 'admin' ? 'System Administrator' : 'Vanguard\nResidence Hall'}</Text>
        </View>
        <Ionicons name="pencil" size={24} color={BLUE} />
      </View>

      <Text style={s.micro}>PREFERENCES</Text>
      <ListRow icon="notifications" title="Push Notifications" sub="Critical water quality alerts" toggle={push} toggleOff={!push} onPress={() => setPush(!push)} />
      <ListRow icon="mail" title="Email Reports" sub="Weekly summary of consumption" toggle={email} toggleOff={!email} onPress={() => setEmail(!email)} />
      <ListRow icon="lock-closed" title="Private Mode" sub="Hide personal hydration info" toggle={privateMode} toggleOff={!privateMode} onPress={() => setPrivateMode(!privateMode)} />

      <Text style={s.micro}>SUPPORT & INFO</Text>
      <ListRow icon="help-circle" title="Help Center" chevron />
      <ListRow icon="shield-checkmark" title="Privacy & Safety" chevron />

      <Pressable onPress={onLogout} style={[s.logoutBtn, shadow]}>
        <Ionicons name="log-out-outline" size={22} color={RED} />
        <Text style={s.logoutText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
}
