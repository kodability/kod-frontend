import { atom } from "recoil";

export interface ChallengeStarted {
  state: "started";
  cid: string;
  startedAt: Date;
  endAt: Date;
}

export interface ChallengeFinished {
  state: "finished";
  startedAt: Date;
  finishedAt: Date;
}

export interface ChallengeWaiting {
  state: "waiting";
  cid: string;
  dueDate: Date;
}

export interface ChallengeExpired {
  state: "expired";
  dueDate: Date;
}

export interface ChallengeInvalid {
  state: "invalid";
}

export type ChallengeState =
  | ChallengeWaiting
  | ChallengeStarted
  | ChallengeFinished
  | ChallengeExpired
  | ChallengeInvalid;

export const challengeStateAtom = atom<ChallengeState | null>({
  key: "ChallengeState",
  default: null,
});

// export const challengeIDRequestIDAtom = atomFamily<number, string>({
//   key: "ChallengeIDRequestID",
//   default: 0,
// });
