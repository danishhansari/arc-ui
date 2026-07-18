export const stats = [
  {
    start: 100,
    end: 11,
    format: "ms",
    label: "Median action latency",
  },
  {
    start: 0,
    end: 4200,
    format: "k",
    label: "Issues closed / day, avg team",
  },
  {
    start: 0,
    end: 98,
    format: "%",
    label: "Teams stay past month 3",
  },
  {
    start: 0,
    end: 35,
    format: "%",
    label: "Fewer standups reported",
  },
];

import {
  Inbox,
  CircleDot,
  FolderKanban,
  RefreshCw,
  Map,
  Users,
  Bookmark,
  FileText,
  Settings,
} from "lucide-react";


export const navigation = [
  {
    label: "Favorites",
    items: [
      { title: "Inbox", href: "/inbox", icon: Inbox },
      { title: "My Issues", href: "/issues", icon: CircleDot },
    ],
  },
  {
    label: "Planning",
    items: [
      { title: "Projects", href: "/projects", icon: FolderKanban },
      { title: "Cycles", href: "/cycles", icon: RefreshCw },
      { title: "Roadmap", href: "/roadmap", icon: Map },
    ],
  },
  {
    label: "Workspace",
    items: [
      { title: "Teams", href: "/teams", icon: Users },
      { title: "Views", href: "/views", icon: Bookmark },
      { title: "Documents", href: "/documents", icon: FileText },
    ],
  },
  {
    label: "Administration",
    items: [
      { title: "Settings", href: "/settings", icon: Settings },
    ],
  },
];