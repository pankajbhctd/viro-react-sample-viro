import React, { Component } from "react";

import { StyleSheet } from "react-native";
import Shoes from "./shoes";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroCamera,
  ViroOrbitCamera,
  ViroARPlaneSelector
} from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ViroARScene>
        {/* <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        /> */}
        <ViroAmbientLight color="#ffffff" intensity={200} />
        {/* <ViroCamera position={[0, 0, 0]} rotation={[45, 0, 0]} active={true} /> */}

        <ViroOrbitCamera
          position={[0, 0, 0]}
          focalPoint={[0, 0, -1]}
          active={true}
        />

        <Shoes></Shoes>
        {/* <Shoes></Shoes> */}
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
