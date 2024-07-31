import { API_HOST, API_KEY } from "@/app/app-config";
import { Inventory } from "@/app/models/inventory";

export async function generateStaticParams() {
    const inventories = await fetch(`${API_HOST}list/0`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    }).then((res) => res.json());

    return inventories.map((inventory: Inventory) => ({
        inventoryId: inventory.itemuid,
    }))
}

export default async function InventoryCard(params: { params: { inventoryId: string } }) {
    const getInventoryDataById = await fetch(`${API_HOST}item/${params.params.inventoryId}`, {
        headers: {
            Authorization: `Basic ${API_KEY}`,
        }
    })
    const inventoryData: Inventory = await getInventoryDataById.json();
    return (
        <div class="car-details-page content-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="car-details-section">
                            <div className="heading-car-3 d-flex justify-content-between">
                                <div className="pull-left">
                                    <h3>{inventoryData.Make} {inventoryData.Model}</h3>
                                </div>
                                <div className="pull-right">
                                    <h3>$ {inventoryData.Price}</h3>
                                </div>
                            </div>
                            <div className="Description mb-50">
                                <h3 className="heading-2">Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.
                                    Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien
                                    vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
                                    convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In
                                    fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et
                                    nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus
                                    accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod
                                    fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus
                                    magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus
                                    eu nunc porttitor, ut hendrerit arcu efficitur.</p>
                            </div>
                            <div className="inside-car mb-50">
                                <h3 className="heading-2">Video</h3>
                                <iframe src="https://www.youtube.com/embed/V7IrnC9MISU" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="sidebar-right">
                            <div className="widget advanced-search d-none d-xl-block d-lg-block">
                                <h3 className="sidebar-title">Booking This Car</h3>
                                <ul>
                                    <li>
                                        <span>Make</span>{inventoryData.Make}
                                    </li>
                                    <li>
                                        <span>Model</span>{inventoryData.Model}
                                    </li>
                                    <li>
                                        <span>Body Style</span>{inventoryData.BodyStyle}
                                    </li>
                                    <li>
                                        <span>Year</span>{inventoryData.Year}
                                    </li>
                                    <li>
                                        <span>Mileage</span>{inventoryData.mileage} mi
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
