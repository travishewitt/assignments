import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Cylinder, 
  DirectionalLight,
  AmbientLight,
  PointLight
} from 'react-vr';

const Tree = props => {
  return (
    <View style={props.style}>
      <Sphere 
        style={{ color: 'green', transform: [{translateY: 0.8}]}}
        />
      <Cylinder
        style={{ color: "brown"}}
        radiusBottom={0.05}
        radiusTop={0.05}
        />
    </View>
  )
}

const TallTree = props => {
  return (
    <View style={props.style}>
      <Sphere
        style={{ color: "green", transform: [{translateY: 1.1}]}}
        />
      <Cylinder
        style={{ color: "brown"}}
        radiusBottom={0.05}
        radiusTop={0.05}
        dimHeight={1.5}
        />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View>
      <TallTree style={{transform: [{translateZ: 3}, {translateX: 5}]}}/>
        <Tree style={{transform: [{translateZ: -3}]}}/>
        <Tree style={{transform: [{translateZ: -3}, {translateX: 1.5}]}}/>
        <Tree style={{transform: [{translateZ: -3}, {translateX: 1.1}]}}/>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          FUCK U
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
