import { format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(new Date(date), 'MMM dd, yyyy');
};

export const getImageUrl = (index: number) => {
  return `https://source.unsplash.com/800x600/?blog,${index}`;
};
