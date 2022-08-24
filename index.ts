import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

const TARGET_HOST = Deno.env.get('TARGET_HOST');

serve(async (req: Request) => {
    const newReq = req.clone();
    const newUrl = new URL(req.url);
    newUrl.host = TARGET_HOST;
    newReq.url = newUrl.toString();
    return fetch(newUrl, newReq);
});