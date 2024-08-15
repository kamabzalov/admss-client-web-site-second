'use client';

import { ChangeEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Base } from "@/app/models/base";

interface FiltersFormProps {
    filters: Array<Base[]>;
}

export default function FiltersForm({filters}: FiltersFormProps) {

    let makes: Base[] = [];
    let models: Base[] = [];
    let locations: Base[] = [];
    let years: Base[] = [];
    let categories: Base[] = [];

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
            selectedFilters[filterKey] = event.target.value;
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
                    <select onChange={e => setFilter(e, 'make')} className="form-select border-0 border-radius-0 form-select-lg"
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
                    <select onChange={e => setFilter(e, 'model')} className="form-select border-0 border-radius-0 form-select-lg"
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
                    <select onChange={e => setFilter(e, 'location')} className="form-select border-0 border-radius-0 form-select-lg"
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
                    <select onChange={e => setFilter(e, 'year')} className="form-select border-0 border-radius-0 form-select-lg"
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
                    <select onChange={e => setFilter(e, 'category')} className="form-select border-0 border-radius-0 form-select-lg"
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
                            <i className="fi fi-br-search"></i>
                            Find
                        </button>
                    </div>
                </div>
                <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                    <div className="form-group">
                    </div>
                </div>
            </div>
        </form>
    )
}
