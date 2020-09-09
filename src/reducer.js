export const initialState = {
    basketItems: [],
    basketItemsTotal: 0,
    basketCostTotal: 0,
    user: null,
};

export const reducer = (state, action) => {
    // console.log(action);
    console.log('Before Action => Cost: ', state.basketCostTotal);
    switch (action.type) {
        case 'BASKET_ITEM_ADD':
            const prevCount = state.basketItemsTotal;
            const prevCost = state.basketCostTotal;
            return {
                ...state,
                basketItems: [...state.basketItems, action.item],
                basketItemsTotal: state.basketItemsTotal + 1,
                basketCostTotal: Math.round((state.basketCostTotal + action.item.price) * 100) / 100,
            };
        case 'BASKET_ITEM_REMOVE':
            let currentBasket = state.basketItems;

            let indx = currentBasket.findIndex((ele, index) => {
                return ele.id === action.item.id;
            });

            currentBasket.splice(indx, 1);

            return {
                ...state,
                basketItems: currentBasket,
                basketItemsTotal: state.basketItemsTotal - 1,
                basketCostTotal: Math.round((state.basketCostTotal - action.item.price) * 100) / 100,
            };
        case 'BASKET_ITEMS_REMOVEALL':
            return {
                ...state,
                basketItems: [],
                basketItemsTotal: 0,
                basketCostTotal: 0,
            };
        default:
            return state;
    }
};
