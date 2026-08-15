import { NextResponse } from "next/server";
import userConfig from "~/user.config";

// The config is a build-time constant, so serve it from the CDN instead of
// invoking a function on every request.
export const dynamic = "force-static";

export async function GET() {
  // Entries flagged `hidden` are filtered out of both the rendered links and
  // the JSON-LD by linkfolio, so they must not leak through this route either.
  const { socialNetworks, ...rest } = userConfig;

  return NextResponse.json({
    ...rest,
    socialNetworks: socialNetworks?.filter((network) => !network.hidden),
  });
}
