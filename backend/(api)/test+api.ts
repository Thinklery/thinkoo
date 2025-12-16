import { supabase } from "@/utils/supabaseClient";

export async function POST(req: Request) {
  const { plushieId, name } = await req.json();

  try {
    const { data: newPlushie, error: insertError } = await supabase
      .from("plushies")
      .insert([
        {
          id: plushieId,
          name,
          level: 0,
          xp: 0,
        },
      ])
      .select()
      .single();

    if (insertError) throw insertError;

    return Response.json({data: newPlushie}, {status: 200})
  } catch (e) {
		console.log("Unable to get backend", e)
		return Response.json({error: String(e)}, {status: 200})
	}
}
