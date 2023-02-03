import { atom } from 'recoil';

export interface AuthModalState {
  open: boolean;
  view: ModalView;
}

export type ModalView = 'default' | 'resetPassword';

const defaultModalState: AuthModalState = {
  open: false,
  view: 'default',
};

export const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultModalState,
});
