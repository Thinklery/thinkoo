import { fetchAPI } from "./fetch";

export const getPlushieInfo = async (nfcId: string) => {
  console.log("getPlushieInfo called successfully");
  try {
    const plushieInfo = await fetchAPI(
      `https://localhost:8081/(api)/get?nfcId=${nfcId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return plushieInfo;
  } catch (e) {
    console.log("Unable to get plushie info from backend", e);
    return null;
  }
};

export const postPlushieInfo = async (nfcId: string, name: string) => {
  console.log("postPlushieInfo called successfully");
  const plushieInfo = await getPlushieInfo(nfcId);
  console.log("plushieinfo", plushieInfo);
  if (plushieInfo && plushieInfo.data) {
    return plushieInfo.data;
  }

  try {
    const plushieInfoAfterPost = await fetchAPI(
      "https://localhost:8081/(api)/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nfcId, name }),
      }
    );
    return plushieInfoAfterPost.data;
  } catch (e) {
    console.log("Unable to post plushie info to backend", e);
    return null;
  }
};
