import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { CardProject } from './components/CardProject';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <CardProject 
          title="Projeto Mobile" 
          subtitle="App Design" 
          progress={50}
          onPressMenu={() => console.log('Menu pressionado!')}
        />
        <CardProject 
          title="Landing Page" 
          subtitle="Website"
          progress={80}
        />
      </ScrollView>
    </SafeAreaView>
  );
} 