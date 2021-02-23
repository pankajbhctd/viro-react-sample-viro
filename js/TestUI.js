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

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      positionRoot: [0, 0, -1],
      scale: [1, 1, 1],
      rotation: [0, 0, 0]
    };

    console.log((this.state.text, "Initializing AR..."));

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    // this._onDrag = this._onDrag.bind(this);
    this._onPinch = this._onPinch.bind(this);
  }

  _refARObject = (component) => {
    this.arObject = component;
  };

  _onInitialized() {}

  render() {
    const { dish } = this.props;

    return (
      <ViroARScene
        onTrackingUpdated={this._onInitialized}
        ref={(component) => (this.arscene = component)}
        minHeight={0.22}
        minWidth={0.22}
      >
        <ViroARPlaneSelector
          minHeight={0.22}
          minWidth={0.22}
          onPlaneSelected={() => this.props.anchorFound()}
        >
          <ViroAmbientLight color="#ffffff" intensity={200} />
          <ViroNode
            position={this.state.positionRoot}
            scale={this.state.scale}
            rotation={this.state.rotation}
            ref={this._refARObject}
            onDrag={() => {}}
            dragType={"FixedDistance"}
          >
            <ViroNode position={this.state.position}>
              {/* <Viro3DObject
                source={{ uri: dish.obj }}
                type="OBJ"
                resources={[
                  { uri: dish.mtl },
                  { uri: dish.tex1 },
                  { uri: dish.tex2 }
                ]}
                onPinch={this._onPinch}
                onError={(err) => console.log("error: ", err)}
                onLoadStart={this._onLoadStart}
                onLoadEnd={this._onLoadEnd}
              /> */}

              <Viro3DObject
                source={require("./res/shooe/MaterialsVariantsShoe.gltf")}
                type="GLTF"
                scale={this.state.scale}
                position={this.state.position}
                onPinch={this._onPinch}
                onError={(err) => console.log("error: ", err)}
                onLoadStart={this._onLoadStart}
                onLoadEnd={this._onLoadEnd}
              />
            </ViroNode>
          </ViroNode>
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }

  _onPinch = (pinchState, scaleFactor, source) => {
    let newScale = [
      this.state.scale[0] * scaleFactor,
      this.state.scale[1] * scaleFactor,
      this.state.scale[2] * scaleFactor
    ];

    if (pinchState == 3) {
      this.setState({
        scale: newScale
      });

      return;
    }

    this.arObject.setNativeProps({ scale: newScale });
  };
}
