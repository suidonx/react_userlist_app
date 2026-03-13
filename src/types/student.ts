import type { BaseUser } from "./baseUser";

export interface Student extends BaseUser {
  role: "student";
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
}
