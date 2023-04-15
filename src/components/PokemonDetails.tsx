import {View, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={{...styles.title}}>Types</Text>

        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={{...styles.title}}>Weigth</Text>
        <Text style={{...styles.regularText}}>{pokemon.weight} Kg</Text>
      </View>
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Sprites</Text>
      </View>
      <ScrollView style={{}} horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={{...styles.basicSprits}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={{...styles.basicSprits}}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={{...styles.basicSprits}}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={{...styles.basicSprits}}
        />
      </ScrollView>
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Skills Base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={{...styles.container}}>
        <Text style={{...styles.title}}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{flexDirection: 'row'}}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 70, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{...styles.basicSprits}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprits: {
    height: 100,
    width: 100,
  },
});
