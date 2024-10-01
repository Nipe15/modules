const dummyApiUrl = 'https://dummyjson.com/products';

// Hent alle produkter
export async function fetchAllProducts() {
    try {
        const response = await fetch(dummyApiUrl);
        const data = await response.json();
        return data.products; // Returnerer listen over produkter
    } catch (error) {
        console.error('Fejl ved hentning af produkter:', error);
    }
}