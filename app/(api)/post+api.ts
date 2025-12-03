import { supabase } from "@/utils/supabaseClient";

export async function POST(req: Request) {
  const { nfcId, name } = await req.json();
  try {
    const { data: newPlushie, error: insertError } = await supabase
      .from("plushies")
      .insert([
        {	
          name,
          level: 0,
          xp: 0,
					nfc_id: nfcId
        },
      ])
      .select()
      .single();

    if (insertError) {
			console.log(insertError)
		};

    return Response.json({ data: newPlushie }, { status: 200 });
  } catch (e) {
    console.error("Error in post+api:");
    return Response.json({ error: e }, { status: 500 });
  }
}
