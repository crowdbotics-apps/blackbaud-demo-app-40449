import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = () => {
  return <View style={_styles.ZCYavIWI}>
      <View style={_styles.glQsCpfE}>
        <Text style={_styles.NwVKgloO}>Sign up</Text>
        <TextInput style={_styles.vUNKNcbL} placeholder="Email" label="Email address" />
        <TextInput style={_styles.EENmtMSw} placeholder="Enter" label="Password" secureTextEntry />
        <TextInput style={_styles.BWwkYaXF} placeholder="Enter" label="Confirm Password" secureTextEntry />
        <TouchableOpacity style={_styles.YxukiFfZ}>
          <Text style={_styles.vrLPxREK}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={_styles.IPpULGRJ}>or</Text>
        <View style={_styles.bPCXDORG}>
          <View style={_styles.rXPphTTj}>
            <Image source={{
            uri: 'apple'
          }} style={_styles.UdUPksPN} />
          </View>
          <View style={_styles.BYtQuaOM}>
            <Image source={{
            uri: 'google'
          }} style={_styles.oZModpuG} />
          </View>
          <View style={_styles.BWfVUXVQ}>
            <Image source={{
            uri: 'facebook'
          }} style={_styles.gKyDofuS} />
          </View>
        </View>
        <Text style={_styles.YriXkqum}>I don’t have an account. <Text style={_styles.KtDzozXz}>Login</Text></Text>
      </View>
    </View>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  ZCYavIWI: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  glQsCpfE: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  NwVKgloO: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20
  },
  vUNKNcbL: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  EENmtMSw: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  BWwkYaXF: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  YxukiFfZ: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    marginBottom: 10
  },
  vrLPxREK: {
    color: "#fff",
    fontWeight: "bold",
    width: 154,
    height: 30,
    position: "relative",
    left: -69,
    top: 13
  },
  IPpULGRJ: {
    textAlign: "center",
    marginBottom: 10
  },
  bPCXDORG: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rXPphTTj: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    alignItems: "center"
  },
  UdUPksPN: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  BYtQuaOM: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginHorizontal: 10
  },
  oZModpuG: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  BWfVUXVQ: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    alignItems: "center"
  },
  gKyDofuS: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  YriXkqum: {
    textAlign: "center",
    marginTop: 20
  },
  KtDzozXz: {
    fontWeight: "bold"
  }
});