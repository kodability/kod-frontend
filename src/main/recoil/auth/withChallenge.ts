import { selectorFamily } from "recoil";
import { fetchChallengeState } from "src/library/api/auth";
import { ChallengeState } from "src/main/recoil/auth/atom";

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
