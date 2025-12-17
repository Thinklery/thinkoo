import { fetchAPI } from "./fetch";

export const getPlushieInfo = async (nfcId: string) => {
  console.log("getPlushieInfo called successfully");
  try {
    const plushieInfo = await fetchAPI(
      `https://thinkoo-backend.vercel.app/api/get?nfcId=${nfcId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_SECRET}`,
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

  try {
    if (plushieInfo && plushieInfo.data) {
      return plushieInfo.data;
    } else {
      const plushieInfoAfterPost = await fetchAPI(
        "https://thinkoo-backend.vercel.app/api/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_SECRET}`,
          },
          body: JSON.stringify({ nfcId, name }),
        }
      );

      return plushieInfoAfterPost.data;
    }
  } catch (e) {
    console.log("Unable to post plushie info to backend", e);
    return null;
  }
};
