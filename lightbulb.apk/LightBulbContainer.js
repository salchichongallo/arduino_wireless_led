import React from "react";
import { Image, TouchableOpacity } from "react-native";

const API_URL = "http://192.168.1.184:3000";

function controlLightBulb(state) {
  return fetch(`${API_URL}/${state}`);
}

export default function LightBulbContainer() {
  const [isOn, setIsOn] = React.useState(false);

  React.useEffect(() => {
    if (isOn) {
      controlLightBulb("ON");
    } else {
      controlLightBulb("OFF");
    }
  }, [isOn]);

  return (
    <LightBulb
      isOn={isOn}
      onTurnOn={() => setIsOn(true)}
      onTurnOff={() => setIsOn(false)}
    />
  );
}

function LightBulb({ isOn, onTurnOn, onTurnOff }) {
  const handlePress = () => (isOn ? onTurnOff() : onTurnOn());
  const imageSource = isOn
    ? require("./assets/lightbulb_on.png")
    : require("./assets/lightbulb_off.png");
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={imageSource} />
    </TouchableOpacity>
  );
}
