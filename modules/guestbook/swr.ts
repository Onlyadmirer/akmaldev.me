import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export interface CommentType {
  id: string;
  text: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
    role: string;
  };
}

export default function useComments() {
  const { data, error, isLoading, mutate } = useSWR<CommentType[]>(`/api/guestbook`, fetcher, { refreshInterval: 3000 })
  return {
    comments: data ?? [],
    isLoading,
    isError: error,
    mutate: mutate
  }
}