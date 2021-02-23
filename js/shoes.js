import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroCamera,
  ViroOrbitCamera
} from "react-viro";

export default class Shoes extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      position: [0, 0, -2],
      scale: [1, 1, 1],
      rotation: [0, 0, 0]
    };

    console.log((this.state.text, "Initializing AR..."));

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onDrag = this._onDrag.bind(this);
    this._onPinch = this._onPinch.bind(this);
    this._onRotate = this._onRotate.bind(this);
  }

  render() {
    return (
      <Viro3DObject
        source={require("./res/abros/Shoes01.gltf")}
        scale={this.state.scale}
        position={this.state.position}
        type="GLTF"
        style={styles.helloWorldTextStyle}
        dragType={"FixedToWorld"}
        onClick={console.log("Pankaj")}
        onPinch={this._onPinch}
        onDrag={this._onDrag}
        rotation={this.state.rotation}
        onRotate={this._onRotate}
      />
    );
  }

  _onPinch(pinchState, scaleFactor, source) {
    var newScale = this.state.scale.map((x) => {
      return x * scaleFactor;
    });

    if (pinchState == 3) {
      this.setState({
        scale: newScale
      });
    }
  }

  _onRotate(rotateState, rotationFactor, source) {
    if (rotateState == 3) {
      this.setState({
        rotation: [
          this.state.rotation[0],
          this.state.rotation[1] + rotationFactor,
          this.state.rotation[2]
        ]
      });
      return;
    }
  }

  _onDrag(dragToPos, source) {
    if (dragToPos) {
      // dragtoPos[0]: x position // dragtoPos[1]: y position // dragtoPos[2]: z position
      //console.log([dragtoPos[0], dragToPos[1], dragToPos[2]]);

      this.setState({
        position: dragToPos
      });
    }
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hi Pankaj!!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = Shoes;
