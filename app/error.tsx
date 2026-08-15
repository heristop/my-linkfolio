"use client";
import { useEffect } from "react";
import Link from "next/link";
import StatusPage, {
  ACTION_PRIMARY_CLASS,
  ACTION_SECONDARY_CLASS,
} from "./lib/StatusPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // The digest is the only handle on the server-side stack, which Next
    // withholds from the browser in production.
    console.error("Unhandled error", error.digest ?? error.message);
  }, [error]);

  return (
    <StatusPage
      code="500"
      title="Something went wrong"
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className={`${ACTION_PRIMARY_CLASS} cursor-pointer`}
          >
            Try again
          </button>
          <Link href="/" className={ACTION_SECONDARY_CLASS}>
            Back to my links
          </Link>
        </>
      }
    >
      <p>
        This page failed to render. Retrying often clears it; if it keeps
        happening the problem is on the server rather than with your browser.
      </p>
      {error.digest && (
        <p className="mt-4 text-sm">
          Reference code: <code>{error.digest}</code>
        </p>
      )}
    </StatusPage>
  );
}
