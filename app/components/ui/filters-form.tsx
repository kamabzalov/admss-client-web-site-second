'use client';

import { Base } from "@/app/models/base";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

interface FiltersFormProps {
    filters: Array<Base[]>;
}

const generatePricesSelect: () => Base[] = () => {
    const result: Base[] = [];
    for (let i = 2000; i <= 50000; i = i + 1000) {
        result.push({idx: i, name: i.toString()})
    }
    return result;
}

export default function FiltersForm({filters}: FiltersFormProps) {

    let makes: Base[] = [];
    let models: Base[] = [];
    let locations: Base[] = [];
    let years: Base[] = [];
    let categories: Base[] = [];
    const prices: Base[] = generatePricesSelect();

    let selectedFilters: any = {};

    if (Array.isArray(filters) && filters.length) {
        makes = filters[0];
        models = filters[1];
        locations = filters[2];
        years = filters[3];
        categories = filters[4];
    }

    const pathname = usePathname();
    const {replace} = useRouter();


    const setFilter = (event: ChangeEvent<HTMLSelectElement>, filterKey: string) => {
        if (event.target.value) {
            switch (filterKey) {
                case "ListPriceMin":
                    selectedFilters['pricemin'] = event.target.value;
                    break;
                case "ListPriceMax":
                    selectedFilters['pricemax'] = event.target.value;
                    break;
                default:
                    selectedFilters[filterKey] = event.target.value;
                    break;
            }
        } else {
            delete selectedFilters[filterKey];
        }
    }

    const onSearchClick = () => {
        const params = new URLSearchParams(selectedFilters);
        replace(`${pathname}?${params.toString()}`);
    }

    const resetFilters = () => {
        selectedFilters = {};
        const params = new URLSearchParams(selectedFilters);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <form>
            <div className="row g-0">
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <select onChange={e => setFilter(e, 'make')}
                            className="form-select border-radius-0 border-0 form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Make</option>
                        {makes.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <select onChange={e => setFilter(e, 'model')}
                            className="form-select border-radius-0 border-0 form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Model</option>
                        {models.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <select onChange={e => setFilter(e, 'location')}
                            className="form-select border-radius-0 border-0 form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Location</option>
                        {locations.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <select onChange={e => setFilter(e, 'year')}
                            className="form-select border-radius-0 border-0 form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Year</option>
                        {years.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <select onChange={e => setFilter(e, 'category')}
                            className="form-select border-radius-0 border-0 border-0 form-select-lg"
                            aria-label="Default select example">
                        <option value=''>Select Category</option>
                        {categories.map(item => {
                            return (
                                <option key={item.idx} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <div className="form-group">
                        <button type="button" onClick={onSearchClick}
                                className="btn button-theme btn-search">
                            Find
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
