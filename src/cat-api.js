
export function fetchBreeds() {

    const x_api_key = "live_2SCLc2e8yL8H35rFHZqMqPd24YkRk9a9M1x7jKQmJh1vERJo6M0ZvxLZbp60Dnqt";
    const url = 'https://api.thecatapi.com/v1/breeds';

    return fetch(`${url}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
};

export function fetchCatByBreed(breedId) {
    const x_api_key = "live_2SCLc2e8yL8H35rFHZqMqPd24YkRk9a9M1x7jKQmJh1vERJo6M0ZvxLZbp60Dnqt";
    const base_url = 'https://api.thecatapi.com/v1';
    return fetch(`${base_url}/images/search?breed_ids=${breedId}&api_key=${x_api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
}