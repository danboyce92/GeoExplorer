import { url } from './config';

export async function getCountry(country) {
  const response = await fetch(`${url}name?country=${country}`);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
}
