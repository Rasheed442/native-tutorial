import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useRef, useState } from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import LabelInput from "../Layouts/LabelInput";
import ButtonLayout from "../Layouts/ButtonLayout";
export default function AirtimePopUpDash({ closeAirtimePop }) {
  const panelRef = useRef(null);
  const [airtimeBundle, setAirtimeBundle] = useState(true);
  const [dataBundle, setDataBundle] = useState(false);

  return (
    <BottomSheet ref={(ref) => (panelRef.current = ref)}>
      <KeyboardAvoidingView>
        <ScrollView style={tw``} showsVerticalScrollIndicator={false}>
          <View style={tw`flex flex-row justify-between items-center  `}>
            <Text style={tw`text-xl font-500  w-10%`}></Text>
            <Text style={tw`text-xl font-500  w-80% text-center`}>
              Airtime Topup
            </Text>
            <TouchableOpacity
              style={tw` w-10%`}
              onPress={() => closeAirtimePop(false)}
            >
              <AntDesign name="close" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              tw`flex flex-row justify-between mt-5 border gap-1 rounded-lg p-1`,
              { borderColor: "gainsboro" },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setDataBundle(false), setAirtimeBundle(true);
              }}
              style={tw`${
                airtimeBundle ? `bg-green-600` : ``
              } w-50% rounded-xl    text-center`}
            >
              <Text
                style={tw`text-md font-500 ${
                  airtimeBundle ? `text-white` : ``
                } p-2 text-center`}
              >
                Airtime
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDataBundle(true), setAirtimeBundle(false);
              }}
              style={tw`${
                dataBundle ? `bg-green-600` : ``
              } w-50% rounded-xl    text-center`}
            >
              <Text
                style={tw`text-md font-500 ${
                  dataBundle ? `text-white` : ``
                }  p-2 text-center`}
              >
                Data Bundles
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tw`pt-10 flex flex-col gap-5`}>
            <LabelInput title="Mobile Number" placeholder="09087545432" />
            <LabelInput title="Network" placeholder="MTN" />
            <LabelInput title="Amount" placeholder="₦0.00" />
            <ButtonLayout title="Proceed" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
