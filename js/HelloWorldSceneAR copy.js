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
  ViroOrbitCamera
} from "react-viro";

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});
export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();
    this._onInitialized = this._onInitialized.bind(this);
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      console.log("pankaj");
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={900} />
        <Viro3DObject
          source={require("./res/shooe/MaterialsVariantsShoe.gltf")}
          scale={[1, 1, 1]}
          position={[0, 0, -1]}
          type="GLTF"
          style={styles.helloWorldTextStyle}
        />

        {/* <ViroOrbitCamera
          position={[0, 0, 0]}
          focalPoint={[0, 0, -1]}
          active={true}
        /> */}

        {/* <Shoes></Shoes> */}
        {/* <Shoes></Shoes> */}
      </ViroARScene>
    );
  }
}

module.exports = HelloWorldSceneAR;
