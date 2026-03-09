import { LucideIconNode } from "lucide-angular";

export interface IMenuItem {
  label: string;
  description: string;
  icon: readonly LucideIconNode[];
  path: string;
}
