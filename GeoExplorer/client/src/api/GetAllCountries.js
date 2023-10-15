import { url } from './config';

export async function getAllCountries() {
  const response = await fetch(`${url}all`);

  if (!response.ok) {
    throw new Error(
      `Request failed with status: ${response.status} because: ${response.statusText}`
    );
  }

  return response.json();
}
