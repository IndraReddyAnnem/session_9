export function filterData(searchInput, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
        restaurant?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filteredData;
}
