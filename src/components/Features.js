import Card from "./Card";

const Features = (props) => {

    return (
        <>
            <div className="feature-block d-lg-flex">
                <Card>
                    <div>
                        <a href="appoinment.html" className="btn btn-main btn-round-full">Make a appoinment</a>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Features