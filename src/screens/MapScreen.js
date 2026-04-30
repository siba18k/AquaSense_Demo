import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles as s } from '../theme/styles';
import { BLUE, RED, GREEN, shadow } from '../theme/colors';
import { Legend, StitchBar } from '../components/Core';

const stations = [
  { id: 1, left: '42%', top: '39%', label: 'MAIN QUAD', status: 'Optimal', color: BLUE, icon: 'water' },
  { id: 2, left: '20%', top: '30%', label: 'SCIENCE', status: 'Service', color: RED, icon: 'alert-circle' },
  { id: 3, left: '68%', top: '24%', label: 'LIBRARY', status: 'Good', color: GREEN, icon: 'checkmark-circle' },
  { id: 4, left: '60%', top: '58%', label: 'RES HALL', status: 'Optimal', color: BLUE, icon: 'water' },
];

export default function MapScreen() {
  const [selected, setSelected] = useState(stations[0]);
  const [routeOn, setRouteOn] = useState(false);

  return (
    <ScrollView style={s.mapScreen} contentContainerStyle={s.bottomPad}>
      <StitchBar />
      <View style={s.fakeMapHeader}>
        <Text style={s.fakeMapTitle}>Campus Water Map</Text>
        <Text style={s.fakeMapSub}>Live station quality overview</Text>
      </View>

      <View style={s.mapCanvasNew}>
        <View style={[s.mapBlock, { left: 22, top: 60, width: 105, height: 78 }]} />
        <View style={[s.mapBlock, { right: 18, top: 54, width: 118, height: 90 }]} />
        <View style={[s.mapBlock, { left: 32, bottom: 80, width: 115, height: 96 }]} />
        <View style={[s.mapBlock, { right: 36, bottom: 58, width: 100, height: 125 }]} />
        <View style={[s.mapRoadWide, { top: 172, left: -35, width: 440, transform: [{ rotate: '-13deg' }] }]} />
        <View style={[s.mapRoadWide, { top: 286, left: -20, width: 420, transform: [{ rotate: '17deg' }] }]} />
        <View style={[s.mapRoadWide, { top: 20, left: 176, width: 390, transform: [{ rotate: '86deg' }] }]} />
        <View style={[s.mapPath, routeOn && s.mapPathActive]} />

        {stations.map((station) => (
          <Pressable
            key={station.id}
            onPress={() => setSelected(station)}
            style={[s.stationPin, { left: station.left, top: station.top, borderColor: station.color }, selected.id === station.id && s.stationPinActive]}
          >
            <Ionicons name={station.icon} size={22} color={station.color} />
          </Pressable>
        ))}
      </View>

      <View style={[s.nearestCard, shadow]}>
        <View style={s.rowBetween}>
          <View>
            <Text style={s.micro}>SELECTED STATION</Text>
            <Text style={s.nearestCardTitle}>{selected.label}</Text>
            <Text style={s.body}>{selected.status} quality • 250m away</Text>
          </View>
          <View style={[s.qualityBubble, { backgroundColor: selected.color }]}>
            <Text style={s.qualityBubbleText}>98%</Text>
          </View>
        </View>
        <View style={s.mapActions}>
          <Pressable onPress={() => setRouteOn(!routeOn)} style={[s.actionBtn, routeOn && s.actionBtnActive]}>
            <Ionicons name="navigate" size={18} color={routeOn ? 'white' : BLUE} />
            <Text style={[s.actionText, routeOn && s.actionTextActive]}>{routeOn ? 'Route On' : 'Show Route'}</Text>
          </Pressable>
          <Pressable onPress={() => setSelected(stations[1])} style={s.actionBtn}>
            <MaterialCommunityIcons name="tools" size={18} color={BLUE} />
            <Text style={s.actionText}>Service Pin</Text>
          </Pressable>
        </View>
      </View>

      <View style={[s.legendCardNew, shadow]}>
        <Text style={s.sectionTitle}>Station Legend</Text>
        <Legend color={BLUE} label="Optimal Quality" count="18" />
        <Legend color={GREEN} label="Good Quality" count="7" />
        <Legend color={RED} label="Service Required" count="3" />
        <View style={s.liveBox}>
          <Text style={s.micro}>LIVE UPDATE</Text>
          <Text style={s.italic}>“Science Hall fountain flagged. Maintenance team notified.”</Text>
        </View>
      </View>
    </ScrollView>
  );
}
