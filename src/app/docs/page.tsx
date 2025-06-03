import { redirect } from "next/navigation";

export default function DocsPage() {
  // Redirect to /docs/index.html (the Storybook entry point)
  redirect("/docs/index.html");
  return null;
}