import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useTheme } from '@/hooks/ThemeContext';
import { COLORS } from '@/constants/DesignSystem';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { MoreVertical } from 'lucide-react-native';

export function CardProject({ progress = 60 }) {
  const { width } = useWindowDimensions();
  const { currentTheme } = useTheme();
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  return (
    <View style={[
      styles.cardContainer,
      {
        backgroundColor: COLORS[currentTheme].secondaryBackground,
        borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
        width: isMobile ? '100%' : 'auto',
      }
    ]}>
      {/* Linha de título: Avatar (ícone Figma), texto, botão de menu */}
      <View style={styles.titleRow}>
        {/* Avatar com ícone Figma */}
        <View style={styles.avatarWrapper}>
          {/* Fundo do avatar */}
          <View style={[styles.avatarBackground, { backgroundColor: '#F5ECFE' }]} />
          {/* Logo Figma (imagem simulada) */}
          <Image
            style={styles.figmaIcon}
            source={require('@/assets/images/figma-icon.png')}
          />
        </View>

        {/* Texto do título */}
        <Text style={[
          styles.titleText,
          { color: COLORS[currentTheme].primaryText }
        ]} numberOfLines={1}>
          Figma Design System
        </Text>

        {/* Botão de menu (3 pontinhos) */}
        <TouchableOpacity style={styles.menuButton}>
          <MoreVertical size={16} color={COLORS[currentTheme].icon} />
        </TouchableOpacity>
      </View>

      {/* Bloco de Status e Data */}
      <View style={styles.infoBlock}>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: COLORS[currentTheme].secondaryText }]}>Status</Text>
          <Text style={[styles.infoValue, { color: COLORS[currentTheme].primaryText }]}>Em andamento</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.infoLabel, { color: COLORS[currentTheme].secondaryText }]}>Data</Text>
          <Text style={[styles.infoValue, { color: COLORS[currentTheme].primaryText }]}>25 July, 2024</Text>
        </View>
      </View>

      {/* Barra de Progresso + Footer */}
      <View style={styles.progressBlock}>
        {/* Barra de Progresso */}
        <View style={styles.progressBarContainer}>
          <View style={[
            styles.progressBarBackground,
            { borderColor: COLORS[currentTheme].primary }
          ]}>
            {/* Parte preenchida da barra (60% de exemplo) */}
            <View
              style={[
                styles.progressBarFill,
                { width: `${progress}%`, backgroundColor: COLORS[currentTheme].primary },
              ]}
            />
          </View>
          <Text style={[styles.progressText, { color: COLORS[currentTheme].primaryText }]}>
            {progress}%
          </Text>
        </View>

        {/* Linha final: Tarefa concluída + Avatares */}
        <View style={styles.footerRow}>
          {/* Texto: Tarefa concluída */}
          <View style={styles.footerInfo}>
            <Text style={[styles.footerLabel, { color: COLORS[currentTheme].secondaryText }]}>
              Tarefa concluída
            </Text>
            <Text style={[styles.footerValue, { color: COLORS[currentTheme].primaryText }]}>
              8/15
            </Text>
          </View>

          {/* Grupo de Avatares */}
          <View style={styles.avatarGroup}>
            <Image
              source={require('@/assets/images/avatar1.png')}
              style={styles.groupAvatar}
            />
            <Image
              source={require('@/assets/images/avatar2.png')}
              style={styles.groupAvatar}
            />
            <Image
              source={require('@/assets/images/avatar3.png')}
              style={styles.groupAvatar}
            />
            {/* Círculo com número extra (ex: 3) */}
            <View style={[styles.moreCount, { backgroundColor: COLORS[currentTheme].primary }]}>
              <Text style={styles.moreCountText}>3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    minHeight: 176,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  avatarWrapper: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 9999,
  },
  figmaIcon: {
    width: 10.12,
    height: 15.19,
  },
  titleText: {
    flex: 1,
    height: 24,
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  menuButton: {
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBlock: {
    flexDirection: 'column',
    marginTop: 12,
    gap: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 16,
  },
  infoLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  infoValue: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  progressBlock: {
    marginTop: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 12,
  },
  progressBarContainer: {
    height: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBarBackground: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(28, 34, 43, 0.02)',
    borderRadius: 9999,
    borderWidth: 1,
    overflow: 'hidden',
    height: 12,
  },
  progressBarFill: {
    borderRadius: 9999,
  },
  progressText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 20,
  },
  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  footerValue: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatar: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    marginLeft: -4,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  moreCount: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    marginLeft: -4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  moreCountText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    lineHeight: 12,
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
});
