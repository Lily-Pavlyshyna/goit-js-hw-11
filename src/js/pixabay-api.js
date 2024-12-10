const API_KEY = '47567407-25ef3519c02546aa2529f6321';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 9) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page.toString(),
    per_page: perPage.toString(),
  });

  const url = `${BASE_URL}?${params}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    iziToast.error({
      title: 'Fetch Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
      theme: 'dark',
      backgroundolor: 'red',
    });
    throw error;
  }
}
