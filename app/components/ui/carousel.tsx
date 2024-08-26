'use client'

import { Media } from "@/app/models/media";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

interface ImageCarouselProps {
    images: Media[],
    caption?: string
}

export default function ImageCarousel({images, caption}: ImageCarouselProps) {
    const slides = images.map(
        (image, index) =>
            <Carousel.Item key={index}>
                <Image src={image.itemurl_preview} alt={caption ?? ''} className="d-block w-100" width={856} height={640} sizes="100vw"
                       style={{
                           width: '100%',
                           height: 'auto',
                       }}/>
                <Carousel.Caption>
                    <h5>{caption}</h5>
                </Carousel.Caption>
            </Carousel.Item>
    )
    return (
        <Carousel>{slides}</Carousel>
    );
}
