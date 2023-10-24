import { url } from './config';

//No longer in use due to redux store & thunks
export async function getAllCountries() {
  const response = await fetch(`${url}all`);

  if (!response.ok) {
    throw new Error(
      `Request failed with status: ${response.status} because: ${response.statusText}`
    );
  }

  return response.json();
}
