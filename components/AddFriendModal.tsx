import { Text, Modal, View, TextInput, Image, FlatList } from "react-native";
import OwnProfileCard from "./OwnProfileCard";
import FriendProfileCard from "./FriendProfileCard";

type Props = {
  onClose: () => void;
  Visibility: boolean;
};

const FriendRequests = [
  {
    id: "1",
    name: "JaneDoe",
    userId: "654321",
  },
  {
    id: "2",
    name: "SamSmith",
    userId: "789012",
  },
  {
    id: "3",
    name: "AliceJones",
    userId: "345678",
  },
  {
    id: "4",
    name: "BobBrown",
    userId: "901234",
  },
];

const renderFriendRequest = ({
  item,
}: {
  item: (typeof FriendRequests)[0];
}) => (
  <View style={{ marginBottom: 10 }}>
    <FriendProfileCard name={item.name} userId={item.userId} />
  </View>
);

export default function AddFriendModal({ onClose, Visibility }: Props) {
  return (
    <Modal visible={Visibility} animationType="fade" onRequestClose={onClose}>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          justifyContent: "center",
          paddingBlock: 50,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              borderRadius: 10,
              flex: 0.07,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              source={require("../assets/images/backButton.png")}
              style={{
                resizeMode: "contain",
                height: "80%",
                width: "20%",
                alignContent: "left",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "red",
              borderRadius: 10,
              flex: 0.08,
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                gap: 10,
                justifyContent: "left",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#ccc",
              }}
            >
              <Image
                source={require("../assets/images/search_icon.png")}
                style={{ resizeMode: "contain", width: 20, height: 20 }}
              />
              <TextInput
                style={{
                  backgroundColor: "green",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="Name or User ID"
              ></TextInput>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "red",
              padding: 10,
              borderRadius: 10,
              flex: 0.85,
            }}
          >
            <OwnProfileCard />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Friend Requests
            </Text>
            <FlatList
              data={FriendRequests}
              renderItem={renderFriendRequest}
              keyExtractor={(item) => item.id}
              style={{ backgroundColor: "blue", flex: 1 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
