import { fetchAllProducts} from './dummyJsonModule.js';
import { fetchMealsByCategory} from './mealDbModule.js';

// Brug af DummyJSON API'et
fetchAllProducts().then(products => console.log('Produkter:', products));
// fetchProductById(1).then(product => console.log('Specifikt produkt:', product));
// fetchProductsByCategory('electronics').then(products => console.log('Elektronikprodukter:', products));

// Brug af TheMealDB API'et
// fetchAllMealCategories().then(categories => console.log('Måltidskategorier:', categories));
fetchMealsByCategory('Seafood').then(meals => console.log('Opskrifter:', meals));
// fetchMealById(52772).then(meal => console.log('Specifikt måltid:', meal));