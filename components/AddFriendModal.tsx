import {
  Text,
  Modal,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import OwnProfileCard from "./OwnProfileCard";
import FriendProfileCard from "./FriendProfileCard";
import Background from "./Background";

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
  {
    id: "5",
    name: "CharlieDavis",
    userId: "567890",
  },
];

const renderFriendRequest = ({
  item,
}: {
  item: (typeof FriendRequests)[0];
}) => (
  <View style={styles.profileListSpacing}>
    <FriendProfileCard name={item.name} userId={item.userId} />
  </View>
);

export default function AddFriendModal({ onClose, Visibility }: Props) {
  return (
    <Modal visible={Visibility} animationType="fade" onRequestClose={onClose}>
      <Background>
        <View style={styles.modelContainerLayout}>
          <View style={styles.modelContainer}>
            <View style={styles.backButtonLayout}>
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={require("../assets/images/backButton.png")}
                  style={styles.backButtonImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.searchButtonLayout}>
              <View style={styles.searchButtonContainer}>
                <Image
                  source={require("../assets/images/search_icon.png")}
                  style={styles.searchIconImage}
                />
                <TextInput placeholder="Name or User ID"></TextInput>
              </View>
            </View>
            <View style={styles.profileListContainer}>
              <Text style={styles.topicText}>Your Profile</Text>
              <OwnProfileCard />
              <View style={styles.divider}></View>
              <Text style={styles.topicText}>Friend Requests</Text>
              <FlatList
                data={FriendRequests}
                renderItem={({ item }) => renderFriendRequest({ item })}
                keyExtractor={(item) => item.id}
                style={styles.scollableProfileListContainer}
              />
            </View>
          </View>
        </View>
      </Background>
    </Modal>
  );
}

const searchButtonColour = "#fff";
const dividerColour = "#fff";
const modelContainerColour = "#d3d3d3";

const styles = StyleSheet.create({
  backButtonImage: {
    height: "80%",
    resizeMode: "contain",
    width: "20%",
  },
  backButtonLayout: {
    alignContent: "center",
    borderRadius: 10,
    flex: 0.07,
    justifyContent: "center",
  },
  divider: {
    borderBottomColor: dividerColour,
    borderBottomWidth: 2,
    marginBottom: 15,
    marginTop: 15,
  },
  modelContainer: {
    backgroundColor: modelContainerColour,
    borderRadius: 10,
    flex: 1,
  },
  modelContainerLayout: {
    flex: 1,
    justifyContent: "center",
    paddingBlock: 50,
    paddingHorizontal: 20,
  },
  profileListContainer: {
    flex: 0.85,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  profileListSpacing: {
    marginBottom: 10,
  },
  scollableProfileListContainer: {
    borderRadius: 10,
    flex: 1,
  },
  searchButtonContainer: {
    alignItems: "center",
    backgroundColor: searchButtonColour,
    borderColor: searchButtonColour,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchButtonLayout: {
    borderRadius: 10,
    flex: 0.08,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchIconImage: {
    height: 20,
    padding: 10,
    resizeMode: "contain",
    width: 20,
  },
  topicText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
});
