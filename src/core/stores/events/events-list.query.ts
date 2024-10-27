import {PokeInfoModel} from '../../models/app-poke.model';
import {useQuery} from '@tanstack/react-query';
import {APP_URL} from '../../context/environment.context';

export const fetchEventData = async (): Promise<PokeInfoModel[]> => {
    const endpoint = APP_URL + 'events';
    return await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((preResponse) => {
        return preResponse.json();
    }).then((response) =>{
        return response;
    }).catch(() => {
        throw new Error('Event list response was not ok');
    });
};

export const useEventsData = () => {
    return useQuery<PokeInfoModel[]>({queryKey: ['fetchEventData'], queryFn: fetchEventData});
};