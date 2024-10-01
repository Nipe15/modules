const mealApiUrl = 'https://www.themealdb.com/api/json/v1/1';

// Hent måltider efter kategori
export async function fetchMealsByCategory(category) {
    try {
        const response = await fetch(`${mealApiUrl}/filter.php?c=${category}`);
        const data = await response.json();
        return data.meals; // Returnerer måltider fra den specifikke kategori
    } catch (error) {
        console.error(`Fejl ved hentning af måltider fra kategori: ${category}`, error);
    }
}