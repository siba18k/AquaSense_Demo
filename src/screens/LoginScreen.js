import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles as s } from '../theme/styles';
import { shadow } from '../theme/colors';
import { Input, Label, Logo } from '../components/Core';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = () => {
    const cleanEmail = email.trim().toLowerCase();
    const isAdmin = cleanEmail.includes('admin') || password === 'admin123';
    setMessage(isAdmin ? 'Admin access granted' : 'Student demo access granted');
    onLogin(isAdmin ? 'admin' : 'user');
  };

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={s.loginWrap}>
        <Logo />
        <View style={[s.loginCard, shadow]}>
          <Text style={s.h1}>Welcome Back</Text>
          <Text style={s.copy}>Please enter your credentials to access the AquaSense dashboard.</Text>
          <View style={s.demoBox}>
            <Text style={s.micro}>DEMO LOGIN</Text>
            <Text style={s.body}>Admin: admin@aquasense.com / admin123</Text>
            <Text style={s.body}>User: anything else / any password</Text>
          </View>
          <Label>Email Address</Label>
          <Input icon="mail" placeholder="scientist@university.edu" value={email} onChangeText={setEmail} />
          <View style={s.rowBetween}>
            <Label>Password</Label>
            <Text style={s.forgot}>Forgot?</Text>
          </View>
          <Input icon="lock-closed" placeholder="••••••••" right="eye" value={password} onChangeText={setPassword} secure />
          {message ? <Text style={s.successMsg}>{message}</Text> : null}
          <Pressable onPress={login} style={[s.primaryBtn, shadow]}>
            <Text style={s.primaryText}>Login to Dashboard</Text>
          </Pressable>
          <Text style={s.centerText}>New to AquaSense? <Text style={s.link}>Create account</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
