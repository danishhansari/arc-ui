import { redirect } from "next/navigation";
import { getActiveWorkspaceSummaryAction } from "@/app/actions";
import { Workspaces } from "./landing-page/workspaces";

export default async function WorkspacePage() {
  const workspace = await getActiveWorkspaceSummaryAction();
  if (workspace) {
    redirect(`/${workspace.workspaceName}`);
  }

  return (<Workspaces />);
}
