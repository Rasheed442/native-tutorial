import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { pmb } from "../assets/assets/IMAGES";
import { Paymybills } from "../assets/assets/IMAGES";
// import Svg, {
//   Rect,
//   Path,
//   G,
//   Ellipse,
//   Stop,
//   Defs,
//   Filter,R
// } from "react-native-svg";
import { BgImage, Mobile2 } from "../assets/assets/ICONS";
import ButtonLayout from "../Layouts/ButtonLayout";
import ModalLayout from "../Layouts/ModalLayout";

export default function TransactionDetails() {
  const ScreenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const [shareReceipt, setShareReceipt] = useState(false);

  const transactionReceipt = [
    {
      name: "Transaction ID",
      id: "83938384747474",
    },
    {
      name: "Transaction Type",
      id: "Airtime Purchase",
    },
    {
      name: "Recipent",
      id: "Payment for balance",
    },
    {
      name: "Payment Channel",
      id: "03903849484",
    },
    {
      name: "Status",
      id: "Successful",
    },
  ];
  return (
    <>
      {shareReceipt && (
        <ModalLayout onPress={() => setShareReceipt(false)}>
          <View style={[tw`flex flex-col justify-center items-center gap-2`]}>
            <Text style={tw`text-base font-500 `}>Transaction Receipt</Text>
            <View>
              <BgImage />
              <View style={[tw`absolute p-2 `]}>
                <View>
                  <Text style={tw`text-sm font-500 text-white`}>
                    Amount Paid
                  </Text>
                  <Text style={tw`text-2xl font-500 text-white`}>190,000</Text>
                </View>
              </View>
              <Text style={[tw`absolute bottom-0 text-white font-500 p-2`]}>
                30 Sept 2022 12:30pm
              </Text>
              <View
                style={[tw`absolute right-0 p-2`, { width: 120, height: 50 }]}
              >
                <Paymybills width="100%" height="100%" />
              </View>
            </View>
          </View>
          <View
            style={[
              tw`p-3 py-7 flex-col gap-6 border-b-2`,
              { borderBottomColor: "#0053C5" },
            ]}
          >
            {transactionReceipt.map((t) => {
              return (
                <View style={tw`flex flex-row justify-between`}>
                  <Text>{t?.name}</Text>
                  <Text
                    style={tw`${
                      t?.id === "Successful" ? `text-green-600` : ""
                    }`}
                  >
                    {t?.id}
                  </Text>
                </View>
              );
            })}
          </View>

          <View
            style={tw`flex flex-col justify-center items-center py-5 gap-3`}
          >
            <Text style={tw`font-500`}>DISCLAIMER</Text>
            <Text style={tw`text-center text-xs font-400`}>
              Any confirmation of a transaction must not be construed as a
              confirmation of Credit into a beneficiary’s account. Due to the
              nature of the internet, transactions may be subject to
              intrruption, transaction blackout, delayed transactions and
              incorrect data transmission.
            </Text>
          </View>
        </ModalLayout>
      )}
      {shareReceipt ? (
        ""
      ) : (
        <SafeAreaView style={tw`flex-1`}>
          <View
            style={tw`flex-row justify-between p-5 border-b-2 border-b-green-600`}
          >
            <TouchableOpacity style={tw``}>
              <AntDesign
                name="arrowleft"
                size={25}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            {/* <View style={{ width: 170, height: 50 }}>
          <Paymybills width="100%" height="100%" />
        </View> */}
            <View style={tw``}>
              <Text style={tw`text-xl  font-500`}>Transaction Details</Text>
            </View>
            <Text style={tw``}></Text>
          </View>

          <View style={tw`flex justify-center items-center p-3 gap-2`}>
            <Text style={tw`font-500 text-sm`}>AIRTIME TOPUP</Text>
            <Mobile2 />
            <Text style={[tw`text-xl font-600`, { color: "#2C2C4B" }]}>
              ₦500.00
            </Text>
          </View>
          <View style={tw`p-6 flex flex-col gap-5`}>
            <View style={tw`flex flex-row justify-between p-2`}>
              <Text>Transaction Date:</Text>
              <Text style={tw`font-500 text-base`}>07 APR 2022</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-2`}>
              <Text>Transaction ID:</Text>
              <Text style={tw`font-500 text-base`}>8377439938490</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-2`}>
              <Text>DESCRIPTION:</Text>
              <Text style={tw`font-500 text-base`}>Airtime Purchase</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-2`}>
              <Text>Payment Mode:</Text>
              <Text style={tw`font-500 text-base`}>CARD</Text>
            </View>
            <View style={tw`flex flex-row justify-between p-2`}>
              <Text>Status:</Text>
              <Text style={tw`font-500 text-base text-green-600`}>
                SUCCESSFUL
              </Text>
            </View>
          </View>
          <View style={tw`p-5 flex flex-col gap-4`}>
            <ButtonLayout
              title="Share Receipt"
              onPress={() => setShareReceipt(true)}
            />
            <Button title="Report an issue" color="#03B66B" />
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

//  <ModalLayout>
//           <View style={[tw`flex flex-col justify-center items-center gap-2`]}>
//             <Text style={tw`text-base font-500 `}>Transaction Receipt</Text>
//             <View>
//               <BgImage />
//               <View style={[tw`absolute p-2`]}>
//                 <Text style={tw`text-sm font-500 text-white`}>Amount Paid</Text>
//                 <Text style={tw`text-2xl font-500 text-white`}>190,000</Text>
//               </View>
//             </View>
//           </View>
//         </ModalLayout>
