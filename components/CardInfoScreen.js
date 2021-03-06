import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  Text,
  AsyncStorage
} from "react-native";

export default function CardInfoScreen() {
  const [cardnb, setCardnb] = useState("");
  const [cardname, setCardName] = useState("");
  const [cardcvv, setCardcvv] = useState("");
  const [cardExMonth, setCardExMonth] = useState("");
  const [cardExYear, setCardExYear] = useState("");

  return (
    <ScrollView>
      <Text>Card Number: </Text>
      <TextInput onChangeText={text => setCardnb(text)} />
      <Text>Card Name: </Text>
      <TextInput onChangeText={text => setCardName(text)} />
      <Text>Card CVV: </Text>
      <TextInput onChangeText={text => setCardcvv(text)} />
      <Text>Card Expiry Month: </Text>
      <TextInput onChangeText={text => setCardExMonth(text)} />
      <Text>Card Expiry Year: </Text>
      <TextInput onChangeText={text => setCardExYear(text)} />
      <Button
        onPress={() =>
          setCardInfo(cardnb, cardname, cardcvv, cardExMonth, cardExYear)
        }
        title="update"
      />
    </ScrollView>
  );
}

const setCardInfo = (nb, name, cvv, month, year) => {
  AsyncStorage.setItem("cardnb", nb);
  AsyncStorage.setItem("cardname", name);
  AsyncStorage.setItem("cvv", cvv);
  AsyncStorage.setItem("cardExMonth", month);
  AsyncStorage.setItem("cardExYear", year);
  AsyncStorage.setItem("cardinfo", true);
};
