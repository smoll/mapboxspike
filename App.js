import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {MAPBOX_ACCESS_TOKEN} from 'react-native-dotenv'
import MapboxGL from '@mapbox/react-native-mapbox-gl'

export default class App extends React.Component {
  async componentWillMount() {
    MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={styles.map}
          centerCoordinate={[-73.970895, 40.723279]}
          zoomLevel={10} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1,
  },
})
