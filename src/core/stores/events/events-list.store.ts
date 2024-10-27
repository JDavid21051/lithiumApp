import {create} from 'zustand';
import {PokeInfoModel} from '../../models/app-poke.model';

interface EventsListStore {
    loading: boolean;
    setLoading: (state: boolean) => void;
    errors: string | null;
    setErrors: (state: string) => void;
    data: PokeInfoModel[];
    setData: (state: PokeInfoModel[]) => void;
}

export const useEventListStore = create<EventsListStore>()((set) => ({
    loading: false,
    data: [],
    errors: null,
    setLoading: (state: boolean) => set(() => ({loading: state})),
    setData: (data: PokeInfoModel[]) => set(() => ({data})),
    setErrors: (state: string) => set(() => ({errors: state})),
}));