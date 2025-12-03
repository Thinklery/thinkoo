import { supabase } from "@/utils/supabaseClient";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const nfcId = url.searchParams.get("nfcId");
	console.log("Received nfcId:", nfcId)
  if (!nfcId) {
    return Response.json(
      { error: "nfcId query parameter is required" },
      { status: 400 }
    );
  }

  try {
    let { data: plushie, error: selectError } = await supabase
      .from("plushies")
      .select(`id, name, level, xp, nfc_id, type: type(type)`)
      .eq("nfc_id", nfcId)
      .single();

    if (selectError) {
      console.log("get+api error", selectError);
    }

    return Response.json({ data: plushie }, { status: 200 });
  } catch (e) {
    console.log("Unable to get plushieId from backend", e);
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
