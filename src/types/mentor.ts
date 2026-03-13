import type { BaseUser } from "./baseUser";

export interface Mentor extends BaseUser {
  role: "mentor";
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
}
