import { ReactNode } from 'react';

interface IUserMenuItems {
  label: string;
  to: string | null;
  icon: ReactNode | null;
  items: [] | null;
}

export default IUserMenuItems;
