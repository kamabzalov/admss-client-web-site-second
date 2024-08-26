import { getInventoryData } from "@/app/http";
import ImageCarousel from "@/app/components/ui/carousel";

export default async function Page(params: { params: { inventoryId: string } }) {
    const inventoryData = await getInventoryData(params)
    return (
        <div className="car-details-page content-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="car-details-section">
                            <div className="heading-car-3 d-flex justify-content-between">
                                <div className="pull-left">
                                    <h3>{inventoryData.Make} {inventoryData.Model}</h3>
                                </div>
                                <div className="pull-right">
                                    <h3>$ {inventoryData.ListPrice}</h3>
                                </div>
                            </div>
                            <div className="inside-car mb-50">
                                <ImageCarousel images={inventoryData.media}
                                               caption={inventoryData.Make + ' ' + inventoryData.Model}/>
                            </div>
                            <div className="Description">
                                <h3 className="heading-2">Description</h3>
                                <p>{inventoryData.Notes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search">
                                <h3 className="sidebar-title">Booking This Car</h3>
                                <ul>
                                    <li>
                                        <span>Make</span>{inventoryData.Make}
                                    </li>
                                    <li>
                                        <span>Model</span>{inventoryData.Model}
                                    </li>
                                    <li>
                                        <span>VIN</span>{inventoryData.VIN}
                                    </li>
                                    <li>
                                        <span>Body Style</span>{inventoryData.BodyStyle}
                                    </li>
                                    <li>
                                        <span>Year</span>{inventoryData.Year}
                                    </li>
                                    <li>
                                        <span>Condition</span>Brand New
                                    </li>
                                    <li>
                                        <span>Mileage</span>{inventoryData.mileage}
                                    </li>
                                    <li>
                                        <span>Interior Color</span>{inventoryData.InteriorColor}
                                    </li>
                                    <li>
                                        <span>Transmission</span>{inventoryData.Transmission}
                                    </li>
                                    <li>
                                        <span>Engine</span>{inventoryData.Engine}
                                    </li>
                                    <li>
                                        <span>No. of Gears:</span>5
                                    </li>
                                    <li>
                                        <span>Location</span>Toronto
                                    </li>
                                    <li>
                                        <span>Fuel Type</span>{inventoryData.TypeOfFuel}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
