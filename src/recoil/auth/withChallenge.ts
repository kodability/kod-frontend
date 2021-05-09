import { selectorFamily } from "recoil";
import { fetchChallengeState } from "@/api/auth";
import { ChallengeState } from "@/recoil/auth/atom";

/**
 * Query challengeState
 */
export const queryChallengeState = selectorFamily<
  ChallengeState | null,
  string
>({
  key: "QueryChallengeID",
  get: (cid: string) => async () => {
    return await fetchChallengeState(cid);
  },
});
