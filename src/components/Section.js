const Section = (props) => {
    return (
        <>
            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Section;


