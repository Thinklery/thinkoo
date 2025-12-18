import Page1 from "@/components/onboarding/Page1";
import Page2 from "@/components/onboarding/Page2";
import Page3 from "@/components/onboarding/Page3";
import Page4 from "@/components/onboarding/Page4";
import Page5 from "@/components/onboarding/Page5";
import Page6 from "@/components/onboarding/Page6";
import useOnboardingStore from "@/utils/useOnboardingStore";
import { View, StyleSheet } from "react-native";

const Onboarding = () => {
  const currentPage = useOnboardingStore((state) => state.currentPage);
  return (
    <View style={styles.container}>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
      {currentPage === 5 && <Page5 />}
      {currentPage === 6 && <Page6 />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Onboarding;
