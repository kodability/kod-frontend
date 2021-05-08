import add from "date-fns/add";
import { sleep } from "src/library/utils/time";
import { ChallengeState } from "src/main/recoil/auth/atom";

export const fetchChallengeState = async (
  cid: string
): Promise<ChallengeState | null> => {
  if (!cid) {
    return null;
  }

  console.log("fetching...");
  await sleep(2000);
  console.log("fetch success.");

  switch (cid) {
    case "waiting":
      return {
        state: "waiting",
        validUntil: add(new Date(), { hours: 1 }),
      };
    case "started":
      return {
        state: "started",
        startedAt: add(new Date(), { hours: -1 }),
        endAt: add(new Date(), { hours: 1 }),
      };
    case "finished":
      return {
        state: "finished",
        startedAt: add(new Date(), { hours: -1 }),
        finishedAt: add(new Date(), { minutes: -1 }),
      };
    case "expired":
      return {
        state: "expired",
      };
    default:
      return null;
  }
};
