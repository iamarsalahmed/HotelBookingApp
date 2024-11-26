'use client';

import { Provider } from 'react-redux'; // Import Provider
import store from '../(store)/store'; // Import your Redux store

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
