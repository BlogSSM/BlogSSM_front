import { atom, RecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

interface User {
  id: string;
  pwd: string;
  email: string;
  name: string;
}

const { persistAtom } = recoilPersist();

export const userState: RecoilState<User> = atom({
  key: "UserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
