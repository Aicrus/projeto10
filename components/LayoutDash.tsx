import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { COLORS } from '@/constants/DesignSystem';
import { useTheme } from '@/hooks/ThemeContext';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import { CardProject } from '@/components/CardProject';
import { CardTask } from '@/components/CardTask';

export default function LayoutDash() {
  const { currentTheme } = useTheme();
  const { isDesktop, isMobile } = useBreakpoints();

  const renderProjectCards = () => {
    if (isMobile) {
      return (
        <>
          <CardProject progress={63} />
          <CardProject progress={45} />
          <CardProject progress={63} />
          <CardProject progress={45} />
        </>
      );
    }

    return (
      <>
        <View style={styles.cardsRow}>
          <CardProject progress={63} />
          <CardProject progress={45} />
        </View>
        <View style={styles.cardsRow}>
          <CardProject progress={63} />
          <CardProject progress={45} />
        </View>
      </>
    );
  };

  const renderTaskCards = () => (
    <>
      <CardTask />
      <CardTask />
      <CardTask />
    </>
  );

  const renderTaskContainer = () => (
    <ThemedView style={[
      styles.sideContainer,
      { 
        backgroundColor: COLORS[currentTheme].secondaryBackground,
        borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
      }
    ]}>
      <View style={styles.headerContainer}>
        <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
          Minha tarefa
        </ThemedText>
        <View style={styles.linkButton}>
          <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
            Home
          </ThemedText>
          <Ionicons name="chevron-down" size={16} color={COLORS[currentTheme].primaryText} />
        </View>
      </View>
      <ScrollView 
        style={styles.taskScrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderTaskCards()}
      </ScrollView>
    </ThemedView>
  );

  return (
    <View style={[
      styles.container,
      !isDesktop && styles.columnLayout
    ]}>
      {isDesktop ? (
        <>
          {/* Layout Desktop 2x2 */}
          <View style={[styles.row, { marginBottom: 20 }]}>
            <ThemedView style={[
              styles.mainContainer,
              { 
                backgroundColor: COLORS[currentTheme].secondaryBackground,
                borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
              }
            ]}>
              <View style={styles.headerContainer}>
                <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
                  Visão geral do projeto
                </ThemedText>
                <View style={styles.linkButton}>
                  <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
                    Veja tudo
                  </ThemedText>
                  <Ionicons name="chevron-forward" size={16} color={COLORS[currentTheme].secondaryText} />
                </View>
              </View>
              
              {/* Container dos Cards 2x2 */}
              <View style={styles.cardsContainer}>
                {renderProjectCards()}
              </View>
            </ThemedView>

            {renderTaskContainer()}
          </View>

          <View style={styles.row}>
            <ThemedView style={[
              styles.mainContainer,
              { 
                backgroundColor: COLORS[currentTheme].secondaryBackground,
                borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
              }
            ]}>
              <View style={styles.headerContainer}>
                <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
                  Progresso da equipe
                </ThemedText>
                <View style={styles.linkButton}>
                  <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
                    Este mês
                  </ThemedText>
                  <Ionicons name="chevron-down" size={16} color={COLORS[currentTheme].secondaryText} />
                </View>
              </View>
            </ThemedView>

            <ThemedView style={[
              styles.sideContainer,
              { 
                backgroundColor: COLORS[currentTheme].secondaryBackground,
                borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
              }
            ]}>
              <View style={styles.headerContainer}>
                <ThemedText style={styles.title}>Notas</ThemedText>
                <View style={styles.linkButton}>
                  <Ionicons name="lock-closed-outline" size={16} color={COLORS[currentTheme].primary} />
                  <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].primary }]}>Privado</ThemedText>
                </View>
              </View>
            </ThemedView>
          </View>
        </>
      ) : (
        <>
          {/* Layout Tablet/Mobile */}
          <ThemedView style={[
            styles.fullWidthContainer,
            { 
              backgroundColor: COLORS[currentTheme].secondaryBackground,
              borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
            }
          ]}>
            <View style={styles.headerContainer}>
              <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
                Visão geral do projeto
              </ThemedText>
              <View style={styles.linkButton}>
                <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
                  Veja tudo
                </ThemedText>
                <Ionicons name="chevron-forward" size={16} color={COLORS[currentTheme].secondaryText} />
              </View>
            </View>
            
            {/* Container dos Cards */}
            <View style={[
              styles.cardsContainer,
              isMobile && styles.cardsContainerMobile
            ]}>
              {renderProjectCards()}
            </View>
          </ThemedView>

          <ThemedView style={[
            styles.fullWidthContainer,
            { 
              backgroundColor: COLORS[currentTheme].secondaryBackground,
              borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
              height: 500, // Altura fixa para mobile/tablet
            }
          ]}>
            <View style={styles.headerContainer}>
              <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
                Minha tarefa
              </ThemedText>
              <View style={styles.linkButton}>
                <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
                  Home
                </ThemedText>
                <Ionicons name="chevron-down" size={16} color={COLORS[currentTheme].primaryText} />
              </View>
            </View>

            <ScrollView 
              style={styles.taskScrollContainer}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.taskScrollContent}
            >
              {renderTaskCards()}
            </ScrollView>
          </ThemedView>

          <ThemedView style={[
            styles.fullWidthContainer,
            { 
              backgroundColor: COLORS[currentTheme].secondaryBackground,
              borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
            }
          ]}>
            <View style={styles.headerContainer}>
              <ThemedText style={[styles.title, { color: COLORS[currentTheme].primaryText }]}>
                Progresso da equipe
              </ThemedText>
              <View style={styles.linkButton}>
                <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].secondaryText }]}>
                  Este mês
                </ThemedText>
                <Ionicons name="chevron-down" size={16} color={COLORS[currentTheme].secondaryText} />
              </View>
            </View>
          </ThemedView>

          <ThemedView style={[
            styles.fullWidthContainer,
            { 
              backgroundColor: COLORS[currentTheme].secondaryBackground,
              borderColor: currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 17, 0.1)',
            }
          ]}>
            <View style={styles.headerContainer}>
              <ThemedText style={styles.title}>Notas</ThemedText>
              <View style={styles.linkButton}>
                <Ionicons name="lock-closed-outline" size={16} color={COLORS[currentTheme].primary} />
                <ThemedText style={[styles.linkText, { color: COLORS[currentTheme].primary }]}>Privado</ThemedText>
              </View>
            </View>
          </ThemedView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    width: '100%',
  },
  columnLayout: {
    flexDirection: 'column',
    gap: 10,
  },
  mainContainer: {
    flex: 2,
    minWidth: 0,
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
  },
  sideContainer: {
    flex: 1,
    minWidth: 0,
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    height: 500, // Aumentei a altura para ficar mais alinhado
  },
  fullWidthContainer: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    padding: 24,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    letterSpacing: -0.3,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    letterSpacing: -0.2,
  },
  cardsContainer: {
    gap: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
  cardsContainerMobile: {
    flexDirection: 'column',
    gap: 20,
  },
  taskScrollContainer: {
    flex: 1,
  },
  taskScrollContent: {
    padding: 0,
  },
});
