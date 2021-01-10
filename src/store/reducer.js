import Data from 'data/data';

const initialState = {
    city: sessionStorage.getItem('city') || null,
    categories: sessionStorage.getItem('categories') || [],
    price: sessionStorage.getItem('price') || [0, 250],
    items: Data
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SELECT_CITY':
            const city = JSON.stringify(actions.payload);
            sessionStorage.setItem('city', city);
            return {
                ...state,
                city: city
            }

        case 'CLICK_CHECKBOX':
            let categoriesList = typeof state.categories === 'string' ? [...JSON.parse(state.categories)] : [];
            const indx = categoriesList.indexOf(actions.payload);

            if (indx !== -1) {
                categoriesList.splice(indx, 1);
                categoriesList = JSON.stringify(categoriesList);
                sessionStorage.setItem('categories', categoriesList);
                return {
                    ...state,
                    categories: categoriesList
                };
            } else {
                categoriesList.push(actions.payload);
                categoriesList = JSON.stringify(categoriesList);
                sessionStorage.setItem('categories', categoriesList);
                return {
                    ...state,
                    categories: categoriesList
                };
            }

        case 'RANGE_SET_PRICE':
            const priceString = JSON.stringify(actions.payload)
            sessionStorage.setItem('price', priceString);
            return {
                ...state,
                price: priceString
            }

        case 'APPLY_FILTER':
            const items = [...state.items];
            const price = JSON.parse(state.price);
            console.log(price)

            const filteredItems = items.filter(item => item.city === JSON.parse(state.city).id)
                         .filter(item => JSON.parse(state.categories).includes(item.category.toString()))
                        //  .filter(item => {
                        //      console.log(item.price >= price[0] && item.price <= price[1])
                        //      return item.price >= price[0] && item.price <= price[1]
                        //  });

            return {
                ...state,
                items: filteredItems
            }

        default:
            return state;
    }
}

export default reducer;