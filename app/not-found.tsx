import Link from "next/link";
import StatusPage, { ACTION_PRIMARY_CLASS } from "./lib/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="This page does not exist"
      actions={
        <Link href="/" className={ACTION_PRIMARY_CLASS}>
          Back to my links
        </Link>
      }
    >
      <p>
        The address you followed does not match anything here. It may have
        moved, or the link that brought you here may be out of date.
      </p>
    </StatusPage>
  );
}
