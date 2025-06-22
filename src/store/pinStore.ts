import { create } from 'zustand';

interface PinStore {
    pin: string;
    setPin: (value: string) => void;
}

export const usePinStore = create<PinStore>((set) => ({
    pin: '',
    setPin: (value) => set({ pin: value }),
}));
