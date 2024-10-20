import { Inventory } from "@/app/models/inventory";
import FiltersForm from "@/app/components/ui/filters-form";
import InventoriesList from "@/app/components/inventories-list";
import {
    getAvailableBrands,
    getAvailableCategories,
    getAvailableLocations,
    getAvailableModels,
    getAvailablePrices,
    getAvailableYears,
    getInventories
} from "@/app/http";

export default async function Page({searchParams}: any) {
    let data: Inventory[] = await getInventories();
    const entities = await Promise.all([
        getAvailableBrands(),
        getAvailableModels(),
        getAvailableLocations(),
        getAvailableYears(),
        getAvailableCategories(),
        getAvailablePrices()
    ]);

    if (Object.keys(searchParams).length) {
        data = await getInventories(searchParams);
    }

    return (
        <>
            <div className="banner">
                <div className="carousel-inner banner-slider-inner">
                    <div className="item-bg">
                        <div className="carousel-content container banner-info">
                            <div className="text-center">
                                <h3 className="text-uppercase">Find your Dream Car</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                </p>
                                <div className="inline-search-area">
                                    <FiltersForm filters={entities}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data.length ? <InventoriesList inventories={data}/> : null}
            <div className="testimonial-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div id="carouselExampleFade2" className="carousel slide carousel-fade"
                                 data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <div className="testimonial-info">
                                            <div className="main-title-3">
                                                <p>What Clients Say</p>
                                                <h1>Our <span>Testimonial</span></h1>
                                            </div>
                                            <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                                text everLorem industrys standard dummy text everLorem Ipsum Lorem
                                                Ipsum is simply dummy text of the printing. as been the industry</p>
                                            <div className="user-info d-flex">
                                                <a className="pr-3" href="/">
                                                    <img src="/img/avatar-3.png" alt="testimonial-user"
                                                         className="flex-shrink-0 me-3"/>
                                                </a>
                                                <div className="detail align-self-center">
                                                    <h5>
                                                        <a href="#">Auro Navanth</a>
                                                    </h5>
                                                    <p>Web Designer, Uk</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <div className="testimonial-info">
                                            <div className="main-title-3">
                                                <p>What Clients Say</p>
                                                <h1>Our <span>Testimonial</span></h1>
                                            </div>
                                            <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                                text everLorem industrys standard dummy text everLorem Ipsum Lorem
                                                Ipsum is simply dummy text of the printing. as been the industry</p>
                                            <div className="user-info d-flex">
                                                <a className="pr-3" href="#">
                                                    <img src="/img/avatar-3.png" alt="testimonial-user"
                                                         className="flex-shrink-0 me-3"/>
                                                </a>
                                                <div className="detail align-self-center">
                                                    <h5>
                                                        <a href="#">Carolyn Stone</a>
                                                    </h5>
                                                    <p className="job">Web Designer, Uk</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-info">
                                            <div className="main-title-3">
                                                <p>What Clients Say</p>
                                                <h1>Our <span>Testimonial</span></h1>
                                            </div>
                                            <p className="mb-30">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industrys standard dummy
                                                text everLorem industrys standard dummy text everLorem Ipsum Lorem
                                                Ipsum is simply dummy text of the printing. as been the industry</p>
                                            <div className="user-info d-flex">
                                                <a className="pr-3" href="#">
                                                    <img src="img/avatar/avatar-3.png" alt="testimonial-user"
                                                         className="flex-shrink-0 me-3"/>
                                                </a>
                                                <div className="detail align-self-center">
                                                    <h5>
                                                        <a href="#">Michelle Nelson</a>
                                                    </h5>
                                                    <p className="job">Designer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages content-area-5 bg-grea-3">
                <div className="container">
                    <div className="main-title-3">
                        <h1>Make <span>the Order</span></h1>
                    </div>

                    <div className="row">
                        <div className="col-12">
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104710.50765498672!2d33.5378337094314!3d34.90134569505271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e082a16c40cb13%3A0x4fcbf0221371d0a5!2z0JvQsNGA0L3QsNC60LAsINCa0LjQv9GA!5e0!3m2!1sru!2s!4v1729349145275!5m2!1sru!2s"
                                width="100%" height="450" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advantages content-area-5 bg-grea-3">
                <div className="container">
                    <div className="main-title-3">
                        <p>We Are The Best</p>
                        <h1>Our <span>Advantages</span></h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="advantages-4">
                                <div className="advantages-4-inner">
                                    <div className="icon flaticon-console">
                                        <i className="flaticon-shield"></i>
                                    </div>
                                    <div className="detail">
                                        <h4><a href="services.html">Highly Secured</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industrys standard dummy text ever since the
                                            1500s, when an unknown printer It has survived</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="advantages-4">
                                <div className="advantages-4-inner">
                                    <div className="icon flaticon-console">
                                        <i className="flaticon-money"></i>
                                    </div>
                                    <div className="detail">
                                        <h4><a href="services.html">Get an Offer</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industrys standard dummy text ever since the
                                            1500s, when an unknown printer It has survived</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="advantages-4">
                                <div className="advantages-4-inner">
                                    <div className="icon flaticon-console">
                                        <i className="flaticon-support-2"></i>
                                    </div>
                                    <div className="detail">
                                        <h4><a href="services.html">Free Support</a></h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industrys standard dummy text ever since the
                                            1500s, when an unknown printer It has survived</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <a href="services.html" className="btn-6">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
