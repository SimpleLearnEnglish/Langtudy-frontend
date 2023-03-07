import { atom } from 'recoil';

export interface AppInstallModalState {
  open: boolean;
  view: appModalView;
}

export type appModalView = 'yet' | 'default';

const defaultModalState: AppInstallModalState = {
  open: true,
  view: 'default',
};

export const installModalState = atom<AppInstallModalState>({
  key: 'appInstallState',
  default: defaultModalState,
});
