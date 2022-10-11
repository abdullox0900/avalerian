export default function HeroAnimation() {
    return (
        <>
            <div className="her-wrap">
                <div className="her-oval-1" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    data-aos-duration="1500"
                    data-aos-offset="0"></div>
                <div className="her-oval-2" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="500"
                    data-aos-duration="2000"
                    data-aos-offset="0"></div>
                <div className="her-oval-3" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="600"
                    data-aos-duration="2500"
                    data-aos-offset="10"></div>
                <div className="her-logo"></div>
            </div>
        </>
    )
}