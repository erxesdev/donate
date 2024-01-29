import { type ClassValue, clsx } from 'clsx';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const READ_FILE = '/read-file?key=';

export const readFile = (url: string = '') => {
  if (url.includes(READ_FILE)) {
    const apiUrl = url.split(READ_FILE)[0];
    return url.replace(apiUrl, process.env.NEXT_PUBLIC_MAIN_API_DOMAIN || '');
  }
  return url;
};

export const formatNum = (num: number | string, splitter?: string): string => {
  const checked = typeof num === 'string' ? Number(num) : num;

  if (checked) {
    const options = splitter
      ? {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      : undefined;

    return checked.toLocaleString(undefined, options);
  }

  return '0';
};