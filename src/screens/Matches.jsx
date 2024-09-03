// src/screens/MatchesScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Matches = ({ route }) => {
  const { playerId,player } = route.params;
  console.log(player,"playerIIIIIII")
  const matches = useSelector((state) => state.tournament.matches);
  console.log()
  const playerMatches = matches.filter(
    (match) => match.player1 === playerId || match.player2 === playerId
  );

  console.log(matches,"matchesmatchesmatches")

  return (
    <View style={styles.container}>
      <Text style={styles.Headline}>{player.name}</Text>
      <FlatList
        data={playerMatches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isWin = (item.player1 === playerId && item.player1Score > item.player2Score) ||
                        (item.player2 === playerId && item.player2Score > item.player1Score);
          const isDraw = item.player1Score === item.player2Score;
          const backgroundColor = isDraw ? '#fff' : isWin ? 'green' : 'red';

          return (
            <View style={[styles.matchItem, { backgroundColor }]}>
              <Text style={styles.matchText}>
               {item.playerName1} {item.player1Score} - {item.player2Score} {item.playerName2}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8'
  },
  matchItem: {
    padding: 15,
  },
  Headline: {
    fontSize: 24,
    fontWeight:'bold',
    textAlign: 'center'
  },
  matchText: {
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Matches;
