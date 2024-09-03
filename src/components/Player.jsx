// src/components/PlayerItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Player = ({ player, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.playerInfo}>
        <Text style={styles.name}>{player.name}</Text>
      </View>
      <View style={styles.pointsInfo}>
        <Text style={styles.points}>{player.points}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    
    
  },
  playerInfo: {
    flex: 3,
  },
  name: {
    fontSize: 22,
    color: '#333',
  },
  pointsInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Player;
