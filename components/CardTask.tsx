import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/hooks/ThemeContext';
import { COLORS } from '@/constants/DesignSystem';

/**
 * Exemplo de card que exibe tarefas com checkbox,
 * baseado fielmente no snippet CSS fornecido.
 */
export function CardTask() {
  const { currentTheme } = useTheme();

  return (
    <View style={[
      styles.cardContainer,
      {
        backgroundColor: COLORS[currentTheme].secondaryBackground,
        borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
      }
    ]}>
      {/* Linha de título: Avatar (Figma), Título, Badge */}
      <View style={styles.titleRow}>
        {/* Avatar Figma */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarBackground} />
          {/* Logo Figma (simulação) */}
          <Image
            source={require('@/assets/images/figma-icon.png')}
            style={styles.figmaIcon}
          />
        </View>

        {/* Título */}
        <Text style={[
          styles.titleText,
          { color: COLORS[currentTheme].primaryText }
        ]} numberOfLines={1}>
          Figma Design System
        </Text>

        {/* Badge (53px x 16px) */}
        <View style={[
          styles.badge,
          { backgroundColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(28, 34, 43, 0.05)' }
        ]}>
          <Text style={[styles.badgeText, { color: COLORS[currentTheme].primaryText }]}>UI/UX</Text>
        </View>
      </View>

      {/* Lista de tarefas */}
      <View style={styles.listContainer}>
        {/* Tarefa 1 */}
        <View style={styles.taskRow}>
          <View style={styles.checkboxLabel}>
            {/* Checkbox */}
            <TouchableOpacity style={styles.checkboxWrapper}>
              <View style={[
                styles.checkbox,
                { 
                  backgroundColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(28, 34, 43, 0.04)',
                  borderColor: currentTheme === 'dark' ? '#3A3A3A' : '#D7DFE9'
                }
              ]} />
            </TouchableOpacity>
            {/* Conteúdo da task (título do item) */}
            <View style={styles.taskContent}>
              <View style={styles.taskTitleWrapper}>
                <Text style={[styles.taskTitle, { color: COLORS[currentTheme].primaryText }]}>
                  Criar wireframes
                </Text>
              </View>
            </View>
          </View>

          {/* Exemplo: Badge de "Urgente" (ou algo similar) */}
          <View style={styles.badgeUrgent}>
            <Text style={styles.badgeUrgentText}>Urgent</Text>
          </View>
        </View>

        {/* Tarefa 2 */}
        <View style={styles.taskRow}>
          <View style={styles.checkboxLabel}>
            <TouchableOpacity style={styles.checkboxWrapper}>
              <View style={[
                styles.checkbox,
                { 
                  backgroundColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(28, 34, 43, 0.04)',
                  borderColor: currentTheme === 'dark' ? '#3A3A3A' : '#D7DFE9'
                }
              ]} />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <View style={styles.taskTitleWrapper}>
                <Text style={[styles.taskTitle, { color: COLORS[currentTheme].primaryText }]}>
                  Definir fluxos
                </Text>
              </View>
            </View>
          </View>

          {/* Badge Info (exemplo) */}
          <View style={styles.badgeInfo}>
            <Text style={styles.badgeInfoText}>Discussão</Text>
          </View>
        </View>

        {/* Tarefa 3 */}
        <View style={styles.taskRow}>
          <View style={styles.checkboxLabel}>
            <TouchableOpacity style={styles.checkboxWrapper}>
              <View style={[
                styles.checkbox,
                { 
                  backgroundColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(28, 34, 43, 0.04)',
                  borderColor: currentTheme === 'dark' ? '#3A3A3A' : '#D7DFE9'
                }
              ]} />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <View style={styles.taskTitleWrapper}>
                <Text style={[styles.taskTitle, { color: COLORS[currentTheme].primaryText }]}>
                  Documentar ícones
                </Text>
              </View>
            </View>
          </View>

          {/* Exemplo de outra badge ou sem badge */}
          <View style={[
            styles.badgeLight,
            { backgroundColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(28, 34, 43, 0.05)' }
          ]}>
            <Text style={[styles.badgeLightText, { color: COLORS[currentTheme].primaryText }]}>Review</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'column',
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    width: '100%',
    height: 24,
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
    backgroundColor: '#F5ECFE',
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
  badge: {
    minWidth: 53,
    height: 16,
    borderRadius: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  badgeText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
  listContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    height: 24,
  },
  checkboxLabel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    flexGrow: 1,
    height: 24,
  },
  checkboxWrapper: {
    width: 24,
    height: 24,
    padding: 4,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4,
  },
  taskContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2,
    height: 24,
    flexGrow: 1,
  },
  taskTitleWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
    height: 24,
  },
  taskTitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.2,
    width: '100%',
  },
  badgeUrgent: {
    minWidth: 47,
    height: 16,
    backgroundColor: '#FFF5F4',
    borderRadius: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  badgeUrgentText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
    color: '#FF3838',
  },
  badgeInfo: {
    minWidth: 69,
    height: 16,
    backgroundColor: 'rgba(27, 77, 255, 0.05)',
    borderRadius: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  badgeInfoText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
    color: '#4174FF',
  },
  badgeLight: {
    minWidth: 53,
    height: 16,
    borderRadius: 9999,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  badgeLightText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.2,
  },
});
