import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Player from '../components/Player';
import { loadTournamentData, selectPlayer } from '../redux/actions/tournamentAction';

const PointsTable = ({ navigation }) => {
  const dispatch = useDispatch();
  const pointsTable = useSelector((state) => state.tournament.pointsTable);
  const matches = useSelector((state) => state.tournament.matches);

  useEffect(() => {
    dispatch(loadTournamentData());
  }, [dispatch]);

  const handlePlayerPress = (playerId, player) => {
    dispatch(selectPlayer(playerId));
    
    const playerMatches = matches.filter(
      (match) => match.player1.id === playerId || match.player2.id === playerId
    );
  
    navigation.navigate('Matches', { playerId, playerMatches, player });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pointsTable}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Player
            player={item}
            onPress={() => handlePlayerPress(item.id,item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
});

export default PointsTable;
