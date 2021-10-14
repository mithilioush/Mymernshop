import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopSelection = createSelector([selectShop], shop => shop.collections);

export const selectCollectionForPreview = createSelector(
    [selectShopSelection],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectShopSelection],
    collections => collections ? collections[collectionUrlParams] : null
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)
export const selectIsCollectionsLoading = createSelector(
    [selectShop],
    shop => !!shop.collections
)