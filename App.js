import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles as s } from './src/theme/styles';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AlertsScreen from './src/screens/AlertsScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import MapScreen from './src/screens/MapScreen';
import ReportScreen from './src/screens/ReportScreen';
import HydrateScreen from './src/screens/HydrateScreen';
import ServiceScreen from './src/screens/ServiceScreen';
import ImpactScreen from './src/screens/ImpactScreen';
import AdminDashboardScreen from './src/screens/AdminDashboardScreen';
import AdminUsersScreen from './src/screens/AdminUsersScreen';
import AdminSensorsScreen from './src/screens/AdminSensorsScreen';
import AdminReportsScreen from './src/screens/AdminReportsScreen';
import BottomTabs from './src/navigation/BottomTabs';

const userScreens = {
  Dashboard: DashboardScreen,
  Alerts: AlertsScreen,
  History: HistoryScreen,
  Settings: SettingsScreen,
  Map: MapScreen,
  Report: ReportScreen,
  Hydrate: HydrateScreen,
  Service: ServiceScreen,
  Impact: ImpactScreen,
};

const adminScreens = {
  Admin: AdminDashboardScreen,
  Users: AdminUsersScreen,
  Sensors: AdminSensorsScreen,
  Reports: AdminReportsScreen,
  Settings: SettingsScreen,
};

export default function App() {
  const [session, setSession] = useState(null);
  const [tab, setTab] = useState('Dashboard');

  const handleLogin = (role) => {
    setSession({ role });
    setTab(role === 'admin' ? 'Admin' : 'Dashboard');
  };

  const handleLogout = () => {
    setSession(null);
    setTab('Dashboard');
  };

  if (!session) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const isAdmin = session.role === 'admin';
  const screens = isAdmin ? adminScreens : userScreens;
  const ActiveScreen = screens[tab] || (isAdmin ? AdminDashboardScreen : DashboardScreen);
  const tabs = isAdmin ? ['Admin', 'Users', 'Sensors', 'Reports', 'Settings'] : ['Dashboard', 'Map', 'Report', 'Hydrate', 'Service', 'Settings'];

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar style="dark" />
      <ActiveScreen setTab={setTab} onLogout={handleLogout} role={session.role} />
      <BottomTabs tabs={tabs} active={tab} setTab={setTab} />
    </SafeAreaView>
  );
}
