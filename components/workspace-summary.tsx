import { getActiveWorkspaceSummaryAction } from "@/app/actions";
import { Workspaces } from "./landing-page/workspaces";
import WorkspaceRedirect from "./workspace-router";

export default async function WorkspacePage() {
  const workspace = await getActiveWorkspaceSummaryAction();
  if (workspace) { return <WorkspaceRedirect workspace={workspace} /> }

  return <Workspaces />;
}
