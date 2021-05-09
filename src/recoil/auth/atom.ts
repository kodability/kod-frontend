import { atom } from "recoil";

export interface ChallengeStarted {
  state: "started";
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
  validUntil: Date;
}

export interface ChallengeExpired {
  state: "expired";
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
