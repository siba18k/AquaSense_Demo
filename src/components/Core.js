import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { BLUE, MUTED, RED, shadow } from '../theme/colors';
import { styles as s } from '../theme/styles';

export function Logo() {
  return (
    <View style={s.logoWrap}>
      <View style={s.logoCircle}><Ionicons name="water" size={40} color="white" /></View>
      <Text style={s.logoText}>AquaSense</Text>
      <Text style={s.tagline}>Smart Campus Hydration</Text>
    </View>
  );
}

export function Label({ children }) {
  return <Text style={s.label}>{children}</Text>;
}

export function Input({ icon, placeholder, right, value, onChangeText, secure }) {
  return (
    <View style={s.inputBox}>
      <Ionicons name={icon} size={20} color={MUTED} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9A9DAA"
        style={s.input}
        secureTextEntry={secure || right === 'eye'}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      {right ? <Ionicons name={right} size={20} color={MUTED} /> : null}
    </View>
  );
}

export function TopHeader({ onLogout, admin }) {
  return (
    <View style={s.topHeader}>
      <Ionicons name="water" size={28} color={BLUE} />
      <Text style={s.brandSmall}>{admin ? 'AquaSense Admin' : 'AquaSense'}</Text>
      <Ionicons name="notifications-outline" size={24} color={BLUE} />
      {onLogout ? (
        <Pressable onPress={onLogout} style={s.logoutMini}>
          <Ionicons name="log-out-outline" size={20} color={BLUE} />
        </Pressable>
      ) : (
        <View style={s.smallAvatar}><Text>👨🏽</Text></View>
      )}
    </View>
  );
}

export function SmallPill({ icon, text, gray }) {
  return (
    <View style={[s.smallPill, gray && s.grayPill]}>
      <Ionicons name={icon} size={14} color={BLUE} />
      <Text style={s.smallPillText}>{text}</Text>
    </View>
  );
}

export function Ring() {
  return (
    <View style={s.ring}>
      <Text style={s.ringMain}>98%</Text>
      <Text style={s.ringSub}>OPTIMAL</Text>
    </View>
  );
}

export function MetricCard({ icon, value, label, tag }) {
  return (
    <View style={[s.metricCard, shadow]}>
      <View style={s.metricTop}>
        <View style={s.roundIcon}><Ionicons name={icon} size={24} color={BLUE} /></View>
        <Text style={s.statusTag}>{tag}</Text>
      </View>
      <Text style={s.metricNum}>{value}</Text>
      <Text style={s.metricLabel}>{label}</Text>
    </View>
  );
}

export function MetricsGrid() {
  return (
    <View style={s.grid}>
      <MetricCard icon="flask" value="7.2" label="PH LEVEL" tag="NORMAL" />
      <MetricCard icon="thermometer" value="18°" label="TEMP" tag="COOL" />
      <MetricCard icon="pulse" value="0.3" label="TURBIDITY" tag="LOW" />
      <MetricCard icon="shield-checkmark" value="Safe" label="BIO STATUS" tag="PASS" />
    </View>
  );
}

export function TrendCard() {
  const bars = [84, 112, 74, 150, 126, 166, 104];
  return (
    <View style={[s.trendCard, shadow]}>
      <View style={s.rowBetween}>
        <Text style={s.sectionTitle}>Trend Analysis</Text>
        <Text style={s.link}>Today</Text>
      </View>
      <View style={s.bars}>
        {bars.map((height, index) => (
          <View key={index} style={[s.bar, { height, backgroundColor: index === 4 ? BLUE : '#C9D2E8' }]} />
        ))}
      </View>
      <Text style={s.times}>6AM      9AM      12PM      3PM      6PM      9PM</Text>
    </View>
  );
}

export function StitchBar() {
  return <Text style={s.stitch}>9:41     AquaSense     ●●●</Text>;
}

export function Legend({ color, label, count }) {
  return (
    <View style={s.legendRow}>
      <View style={[s.legendDot, { backgroundColor: color }]} />
      <Text style={s.body}>{label}</Text>
      <Text style={s.legendCount}>{count}</Text>
    </View>
  );
}

export function StatBox({ title, value, active }) {
  return (
    <View style={[s.statBox, active && s.statActive]}>
      <Text style={[s.micro, active && { color: 'white' }]}>{title}</Text>
      <Text style={[s.statNumber, active && { color: 'white' }]}>{value}</Text>
    </View>
  );
}

export function Chip({ text, active }) {
  return <Text style={[s.chip, active && s.chipActive]}>{text}</Text>;
}

export function ReportCard({ title, tag, desc, count }) {
  return (
    <View style={[s.feedCard, shadow]}>
      <View style={s.reportTop}>
        <View style={s.locationCircle}><Ionicons name="location" size={20} color={BLUE} /></View>
        <View style={{ flex: 1 }}>
          <Text style={s.reportTitle}>{title}</Text>
          <Text style={s.reportBy}>Reported by student • 12 min ago</Text>
        </View>
        <Text style={s.redTag}>{tag}</Text>
      </View>
      <Text style={s.reportDesc}>{desc}</Text>
      <View style={s.rowBetween}>
        <Text style={s.plus}> + {count} confirmations </Text>
        <Text style={s.verify}>Verify Issue</Text>
      </View>
    </View>
  );
}

export function AlertBox({ title, icon }) {
  return (
    <View style={[s.alertCard, shadow]}>
      <FontAwesome5 name={icon} size={28} color={BLUE} />
      <Text style={s.sectionTitle}>{title}</Text>
      <Text style={s.body}>Recommended station for clean and cool drinking water.</Text>
    </View>
  );
}

export function Timeline({ status, title, date, time, text, done }) {
  return (
    <View style={s.timeline}>
      <View style={s.timelineLine} />
      <View style={s.timelineDot}>{done ? <Ionicons name="checkmark" size={14} color={BLUE} /> : null}</View>
      <View style={s.timelineCard}>
        <Text style={s.micro}>{status}</Text>
        <Text style={s.timelineTitle}>{title}</Text>
        <Text style={s.timelineDate}>{date}</Text>
        <Text style={s.timelineTime}>{time}</Text>
        <Text style={s.body}>{text}</Text>
      </View>
    </View>
  );
}

export function ListRow({ icon, title, sub, right, toggle, toggleOff, chevron, onPress }) {
  const content = (
    <>
      <Ionicons name={icon} size={24} color={BLUE} />
      <View style={{ flex: 1 }}>
        <Text style={s.listTitle}>{title}</Text>
        {sub ? <Text style={s.body}>{sub}</Text> : null}
      </View>
      {right ? <Text style={s.listRight}>{right}</Text> : null}
      {toggle ? <View style={s.switchOn}><View style={s.knobOn} /></View> : null}
      {toggleOff ? <View style={s.switchOff}><View style={s.knobOff} /></View> : null}
      {chevron ? <Ionicons name="chevron-forward" size={22} color={MUTED} /> : null}
    </>
  );
  if (onPress) return <Pressable onPress={onPress} style={[s.listRow, shadow]}>{content}</Pressable>;
  return <View style={[s.listRow, shadow]}>{content}</View>;
}

export function ServiceIcon() {
  return <MaterialCommunityIcons name="tools" size={23} color={BLUE} />;
}

export function FloatingAddButton() {
  return <Pressable style={[s.fab, shadow]}><Ionicons name="add" size={32} color="white" /></Pressable>;
}

export { BLUE, RED, shadow };
