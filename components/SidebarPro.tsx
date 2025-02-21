import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  useWindowDimensions
} from 'react-native';
import { 
  House,
  CheckCircle,
  MagnifyingGlass,
  Bell,
  Plus,
  CaretDown,
  Sparkle,
  UserPlus,
  Info
} from 'phosphor-react-native';
import { TYPOGRAPHY, getTypographyForBreakpoint, COLORS } from '@/constants/DesignSystem';
import { HoverableView } from './HoverableView';
import { useTheme } from '@/hooks/ThemeContext';

interface SidebarProProps {
  onNavigate: (route: string) => void;
  currentPath: string;
  onToggle: (expanded: boolean) => void;
}

const SidebarPro: React.FC<SidebarProProps> = ({ onNavigate, currentPath, onToggle }) => {
  const { height, width } = useWindowDimensions();
  const typography = getTypographyForBreakpoint(width);
  const { currentTheme } = useTheme();

  return (
    <View style={[
      styles.sidebar,
      { backgroundColor: COLORS[currentTheme].primaryBackground }
    ]}>
      {/* Logo + "DevSync" row */}
      <View style={styles.logoSection}>
        <View style={styles.logoWrapper}>
          <Image 
            source={require('../assets/images/Starblow.png')}
            style={styles.logo}
          />
          <Text style={[
            styles.devSyncText,
            typography.labelSmall,
            { color: COLORS[currentTheme].primaryText }
          ]}>DevSync</Text>
        </View>
      </View>

      <ScrollView 
        style={styles.mainScroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Menu */}
        <View style={styles.topMenu}>
          <HoverableView 
            style={styles.menuItemActive}
            isActive={true}
            activeBackgroundColor={COLORS[currentTheme].secondaryBackground}
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <House size={20} color={COLORS[currentTheme].primaryText} />
            <View style={styles.menuTextWrapper}>
              <Text style={[
                styles.menuItemText,
                typography.small,
                { color: COLORS[currentTheme].primaryText }
              ]}>Home</Text>
            </View>
          </HoverableView>

          <HoverableView 
            style={styles.menuItem}
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <CheckCircle size={20} color={COLORS[currentTheme].secondaryText} />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>
                Minhas tarefas
              </Text>
            </View>
          </HoverableView>

          <HoverableView 
            style={styles.menuItem}
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <MagnifyingGlass size={20} color={COLORS[currentTheme].secondaryText} />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>
                Procurar
              </Text>
            </View>
            <View style={[styles.shortcutBadge, { backgroundColor: COLORS[currentTheme].hover }]}>
              <Text style={[styles.shortcutLabel, { color: COLORS[currentTheme].secondaryText }]}>⌘K</Text>
            </View>
          </HoverableView>

          <HoverableView 
            style={styles.menuItem}
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <Bell size={20} color={COLORS[currentTheme].secondaryText} />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>
                Notificação
              </Text>
            </View>
          </HoverableView>
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={[styles.dividerLine, { backgroundColor: COLORS[currentTheme].divider }]} />
        </View>

        {/* Projetos */}
        <View style={styles.projectSection}>
          <View style={styles.headingRow}>
            <Text style={[styles.headingText, { color: COLORS[currentTheme].secondaryText }]}>Projetos</Text>
            <HoverableView style={[styles.plusCircleButton, { borderColor: COLORS[currentTheme].divider }]}>
              <Plus weight="regular" size={14} color={COLORS[currentTheme].secondaryText} />
            </HoverableView>
          </View>

          {/* Figma Design S... */}
          <HoverableView 
            style={styles.projectItem} 
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <Image
              style={styles.avatar}
              source={{ uri: 'https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format' }}
            />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Figma Design S…</Text>
            </View>
          </HoverableView>

          {/* Keep React */}
          <HoverableView 
            style={styles.projectItem} 
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <Image
              style={styles.avatar}
              source={{ uri: 'https://t.ctcdn.com.br/t_kuAtuj3qpV2DVpBvVYSHOIwco=/1080x1080/smart/i606944.png' }}
            />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Keep React</Text>
            </View>
          </HoverableView>

          {/* Static Mania */}
          <HoverableView 
            style={styles.projectItem} 
            hoverTranslateX={2}
            disableHoverBackground={false}
          >
            <Image
              style={styles.avatar}
              source={{ uri: 'https://cdn.prod.website-files.com/5d123a0e13543962b1665276/6435e04fcf30d2f09d19c187_61be9cc4372fa9aa3fc0681a_picture.jpeg' }}
            />
            <View style={styles.menuTextWrapper}>
              <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Aicrus Tech</Text>
            </View>
          </HoverableView>

          {/* Button "Veja tudo" */}
          <HoverableView style={[styles.seeAllButton, { backgroundColor: COLORS[currentTheme].hover }]}>
            <View style={styles.seeAllButtonTextArea}>
              <Text style={[styles.seeAllButtonText, { color: COLORS[currentTheme].secondaryText }]}>Veja tudo</Text>
              <CaretDown size={10} color={COLORS[currentTheme].secondaryText} />
            </View>
          </HoverableView>
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={[styles.dividerLine, { backgroundColor: COLORS[currentTheme].divider }]} />
        </View>

        {/* Mensagens */}
        <View style={styles.messagesSection}>
          <View style={styles.headingRow}>
            <Text style={[styles.headingText, { color: COLORS[currentTheme].secondaryText }]}>Mensagem</Text>
          </View>

          <ScrollView style={styles.messagesList}>
            {/* 1) Paulo Morales */}
            <HoverableView 
              style={styles.userItem} 
              hoverTranslateX={2}
              disableHoverBackground={false}
            >
              <Image
                style={styles.userAvatar}
                source={{ uri: 'https://media.licdn.com/dms/image/v2/C4E03AQFy5omIcTocVg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657212319358?e=2147483647&v=beta&t=UsUia-5GvPBUz9AFC6nzzDe_bEuKB4sOxQxi0YzitVg' }}
              />
              <View style={styles.menuTextWrapper}>
                <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Paulo Morales</Text>
              </View>
            </HoverableView>

            {/* 2) Kathryn Murphy */}
            <HoverableView 
              style={styles.userItem} 
              hoverTranslateX={2}
              disableHoverBackground={false}
            >
              <Image
                style={styles.userAvatar}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHWLoPmlWc8cGXZv4ibp3F_zzO4nHOdZntg&s' }}
              />
              <View style={styles.menuTextWrapper}>
                <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Kathryn Murphy</Text>
              </View>
            </HoverableView>

            {/* 3) Tainá Costa */}
            <HoverableView 
              style={styles.userItem} 
              hoverTranslateX={2}
              disableHoverBackground={false}
            >
              <Image
                style={styles.userAvatar}
                source={{ uri: 'https://images-ng.pixai.art/images/orig/4102996c-342a-4009-818f-a8b6d534cce2' }}
              />
              <View style={styles.menuTextWrapper}>
                <Text style={[styles.menuItemText, { color: COLORS[currentTheme].secondaryText }]}>Tainá Costa</Text>
              </View>
            </HoverableView>

            <HoverableView style={[styles.seeAllButton, { backgroundColor: COLORS[currentTheme].hover }]}>
              <View style={styles.seeAllButtonTextArea}>
                <Text style={[styles.seeAllButtonText, { color: COLORS[currentTheme].secondaryText }]}>Veja tudo</Text>
                <CaretDown size={8} color={COLORS[currentTheme].secondaryText} />
              </View>
            </HoverableView>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={[styles.dividerLine, { backgroundColor: COLORS[currentTheme].divider }]} />
      </View>

      {/* Bottom Menu */}
      <View style={styles.bottomMenu}>
        <HoverableView style={styles.menuItem} hoverTranslateX={4}>
          <Sparkle size={20} color={COLORS[currentTheme].secondaryText} />
          <View style={styles.menuTextWrapper}>
            <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>Upgrade</Text>
          </View>
        </HoverableView>

        <HoverableView style={styles.menuItem} hoverTranslateX={4}>
          <UserPlus size={20} color={COLORS[currentTheme].secondaryText} />
          <View style={styles.menuTextWrapper}>
            <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>Add Membro</Text>
          </View>
        </HoverableView>

        <HoverableView style={styles.menuItem} hoverTranslateX={4}>
          <Info size={20} color={COLORS[currentTheme].secondaryText} />
          <View style={styles.menuTextWrapper}>
            <Text style={[styles.menuItemText, typography.small, { color: COLORS[currentTheme].secondaryText }]}>Ajuda</Text>
          </View>
        </HoverableView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 200,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'column',
  },
  logoSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 4,
  },
  devSyncText: {
    ...TYPOGRAPHY.mobile.labelSmall,
    fontSize: 14,
    letterSpacing: -0.3,
    color: '#0A0C11',
  },
  mainScroll: {
    flex: 1,
    width: '100%',
  },
  topMenu: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  menuItemActive: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    marginHorizontal: 4,
  },
  menuTextWrapper: {
    flex: 1,
  },
  menuItemText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },
  menuItemTextActive: {
    color: '#57636C', // Secondary Text color
  },
  shortcutBadge: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    width: 34,
    height: 20,
    borderRadius: 9999,
  },
  shortcutLabel: {
    fontSize: 13,
  },
  divider: {
    width: '100%',
    paddingVertical: 8,
  },
  dividerLine: {
    width: '100%',
    height: 1,
  },
  projectSection: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
    paddingVertical: 8,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: '#57636C',
  },
  messagesSection: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
    paddingVertical: 8,
  },
  bottomMenu: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
    paddingVertical: 8,
  },
  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#F9FAFB',
    position: 'relative',
  },
  avatarContentFigma: {
    // replicate the figma multi-color shape approximately:
    flex: 1,
    borderRadius: 9999,
    backgroundColor: '#A259FF', // just to show there's a color
  },
  avatarContentReact: {
    flex: 1,
    borderRadius: 9999,
    backgroundColor: '#53C1DE',
  },
  avatarContentStatic: {
    flex: 1,
    borderRadius: 9999,
    backgroundColor: '#2684FF',
  },
  seeAllButton: {
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  seeAllButtonTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllButtonText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 10,
    color: '#57636C',
  },
  caretDown: {
    width: 14,
    height: 14,
    backgroundColor: '#455468',
    borderRadius: 2,
  },
  messagesList: {
    width: '100%',
    marginTop: 4,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  userAvatar: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#C9D5EC', // fallback color if image fails
  },
  iconSparkle: {
    // ...
  },
  iconUserCirclePlus: {
    // ...
  },
  iconInfo: {
    // ...
  },
  plusCircleButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#AFBACA',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SidebarPro;
