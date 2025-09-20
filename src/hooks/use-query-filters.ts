import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    const { prices, pizzaTypes, sizes, selectedIngredients } = filters;
    const priceFrom = prices.priceFrom;
    const priceTo = prices.priceTo;
    
    const query = React.useMemo(() => {
        const toArray = (set: Set<string>) => Array.from(set).filter(Boolean);
        const params = {
            priceFrom,
            priceTo,
            pizzaTypes: toArray(pizzaTypes),
            sizes: toArray(sizes),
            ingredients: toArray(selectedIngredients),
        };
        return qs.stringify(params, {
            arrayFormat: "comma",
            skipNulls: true,
            encodeValuesOnly: true,
        });
    }, [priceFrom, priceTo, pizzaTypes, sizes, selectedIngredients]);
    React.useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const search = query ? `?${query}` : "";
        if (search === window.location.search) {
            return; // Prevent redundant router updates that trigger re-fetches
        }
        const pathname = window.location.pathname;
        router.replace(`${pathname}${search}`, { scroll: false });
    }, [query, router]);
};