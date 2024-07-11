export default function Page() {
    return (
        <>
            <div className="banner" id="banner2">
                <div id="bannerCarousole" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner banner-slider-inner">
                        <div className="carousel-item banner-max-height active item-bg">

                            <div className="carousel-content container banner-info bi-2">
                                <div className="text-center">
                                    <h3 className="text-uppercase">Find your Dream Car</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    </p>
                                    <div className="inline-search-area">
                                        <div className="row g-0">
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                                <div className="dropdown bootstrap-select search-fields"><select
                                                    className="selectpicker search-fields" name="select-brand">
                                                    <option>Select Brand</option>
                                                    <option>Audi</option>
                                                    <option>BMW</option>
                                                    <option>Honda</option>
                                                    <option>Nissan</option>
                                                </select>
                                                    <button type="button"
                                                            className="btn dropdown-toggle btn-light"
                                                            data-bs-toggle="dropdown" role="combobox"
                                                            aria-owns="bs-select-1" aria-haspopup="listbox"
                                                            aria-expanded="false" title="Select Brand">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Select
                                                                    Brand
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu ">
                                                        <div className="inner show" role="listbox" id="bs-select-1">
                                                            <ul className="dropdown-menu inner show"
                                                                role="presentation"></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                                <div className="dropdown bootstrap-select search-fields"><select
                                                    className="selectpicker search-fields" name="select-make">
                                                    <option>Select Make</option>
                                                    <option>BMW</option>
                                                    <option>Honda</option>
                                                    <option>Lamborghini</option>
                                                    <option>Sports Car</option>
                                                </select>
                                                    <button type="button"
                                                            className="btn dropdown-toggle btn-light"
                                                            data-bs-toggle="dropdown" role="combobox"
                                                            aria-owns="bs-select-2" aria-haspopup="listbox"
                                                            aria-expanded="false" title="Select Make">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Select Make
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu ">
                                                        <div className="inner show" role="listbox" id="bs-select-2"
                                                        >
                                                            <ul className="dropdown-menu inner show"
                                                                role="presentation"></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                                <div className="dropdown bootstrap-select search-fields"><select
                                                    className="selectpicker search-fields" name="select-location">
                                                    <option>Select Location</option>
                                                    <option>United States</option>
                                                    <option>United Kingdom</option>
                                                </select>
                                                    <button type="button"
                                                            className="btn dropdown-toggle btn-light"
                                                            data-bs-toggle="dropdown" role="combobox"
                                                            aria-owns="bs-select-3" aria-haspopup="listbox"
                                                            aria-expanded="false" title="Select Location">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Select
                                                                    Location
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu ">
                                                        <div className="inner show" role="listbox" id="bs-select-3"
                                                        >
                                                            <ul className="dropdown-menu inner show"
                                                                role="presentation"></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                                <div className="dropdown bootstrap-select search-fields"><select
                                                    className="selectpicker search-fields" name="select-year">
                                                    <option>Select Year</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                    <option>2020</option>
                                                    <option>2021</option>
                                                </select>
                                                    <button type="button"
                                                            className="btn dropdown-toggle btn-light"
                                                            data-bs-toggle="dropdown" role="combobox"
                                                            aria-owns="bs-select-4" aria-haspopup="listbox"
                                                            aria-expanded="false" title="Select Year">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Select Year
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu ">
                                                        <div className="inner show" role="listbox" id="bs-select-4"
                                                        >
                                                            <ul className="dropdown-menu inner show"
                                                                role="presentation"></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col">
                                                <div className="dropdown bootstrap-select search-fields"><select
                                                    className="selectpicker search-fields" name="select-type">
                                                    <option>Select Type Of Car</option>
                                                    <option>New Car</option>
                                                    <option>Used Car</option>
                                                </select>
                                                    <button type="button"
                                                            className="btn dropdown-toggle btn-light"
                                                            data-bs-toggle="dropdown" role="combobox"
                                                            aria-owns="bs-select-5" aria-haspopup="listbox"
                                                            aria-expanded="false" title="Select Type Of Car">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">Select Type
                                                                    Of Car
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div className="dropdown-menu ">
                                                        <div className="inner show" role="listbox" id="bs-select-5"
                                                        >
                                                            <ul className="dropdown-menu inner show"
                                                                role="presentation"></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-6 search-col sc2">
                                                <button className="btn button-theme btn-search">
                                                    <i className="fa fa-search"></i> <strong>Find</strong>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-car content-area">
                <div className="container">
                    <div className="main-title">
                        <h2>Featured Cars</h2>
                        <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod</p>
                    </div>

                    <div className="row filter-portfolio">
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 filtr-item col-pad" data-category="3">
                            <div className="car-box">
                                <div className="photo-thumbnail">
                                    <div className="photo">
                                        <a href="/">
                                            <span className="blog-one__plus"></span>
                                        </a>
                                    </div>
                                    <div className="tag">Featured</div>
                                </div>
                                <div className="detail">
                                    <div className="top">
                                        <h1>
                                            <a href="car-details.html">Hyundai Santa</a><span>$850.00</span>
                                        </h1>
                                        <p>Build year: <span>2021</span></p>
                                    </div>
                                    <div className="footer">
                                        <ul className="facilities-list clearfix">
                                            <li>
                                                <i className="flaticon-way"></i> 4,000 km
                                            </li>
                                            <li>
                                                <i className="flaticon-manual-transmission"></i> Manual
                                            </li>
                                            <li>
                                                <i className="flaticon-calendar-1"></i> 2021
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
