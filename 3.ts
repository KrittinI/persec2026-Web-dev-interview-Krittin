export function autoComplete(
  search: string,
  items: Array<string>,
  maxResult: number
) {
  const query = search.toLowerCase();

  return items
    .map((item, order) => ({
      item,
      index: item.toLowerCase().indexOf(query),
      order,
    }))
    .filter(({ index }) => index !== -1)
    .sort((a, b) => a.index - b.index || a.order - b.order)
    .slice(0, maxResult)
    .map(({ item }) => item);
}

console.log(
  autoComplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
);
