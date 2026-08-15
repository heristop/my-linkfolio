import Link from "next/link";
import type { Metadata } from "next";
import StatusPage, { ACTION_PRIMARY_CLASS } from "../lib/StatusPage";

/**
 * The App Router has file conventions for 404 (not-found), 401 (unauthorized)
 * and 403 (forbidden), but none for 400 — a page cannot set its own status
 * code. This route is the themed destination to redirect to from middleware or
 * a route handler that has already answered 400 to the failing request.
 */
export const metadata: Metadata = {
  title: "Bad request",
  robots: { index: false, follow: false },
};

export default function BadRequest() {
  return (
    <StatusPage
      code="400"
      title="That request could not be read"
      actions={
        <Link href="/" className={ACTION_PRIMARY_CLASS}>
          Back to my links
        </Link>
      }
    >
      <p>
        Something in the address or its parameters was malformed, so the server
        stopped before doing anything with it. Retyping the address usually
        clears it up.
      </p>
    </StatusPage>
  );
}
