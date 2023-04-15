import React from 'react';
import {Image, FlatList, ActivityIndicator, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../theme/appTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={pokemon => pokemon.id.toString()}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={() => (
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          )}
        />
      </View>
    </>
  );
};
