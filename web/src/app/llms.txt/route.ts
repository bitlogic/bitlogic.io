import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt("es"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
