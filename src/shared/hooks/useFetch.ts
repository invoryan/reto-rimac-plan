import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<T>(url).then((res) => {
        setData(res.data);
        setLoading(false);
        });
    }, [url]);

    return { data, loading };
}
