import parse from 'html-react-parser';

const Card = (props) => {

    const iconText = [
        {
            icone: "icofont-surgeon-alt",
            span: "24 Hours Service",
            h4: "Online Appointment",
            p: "<p class=\"mb-4\">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>\n" +
                "\t\t\t\t\t\t<a href=\"appoinment.html\" class=\"btn btn-main btn-round-full\">Make a appoinment</a>"
        },

        {
            icone: "icofont-ui-clock",
            span: "Timing schedule",
            h4: "Working Hours",
            p: "<ul class=\"w-hours list-unstyled\">\n" +
                "\t\t                    <li class=\"d-flex justify-content-between\">Sun - Wed : <span>8:00 - 17:00</span></li>\n" +
                "\t\t                    <li class=\"d-flex justify-content-between\">Thu - Fri : <span>9:00 - 17:00</span></li>\n" +
                "\t\t                    <li class=\"d-flex justify-content-between\">Sat - sun : <span>10:00 - 17:00</span></li>\n" +
                "\t\t                </ul>",
        },

        {
            icone: "icofont-support",
            span: "Emegency Cases",
            h4: "1-800-700-6200",
            p: "Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency",
        },
    ];

    const horaires = [
        {jour: "Sun - Wed", heure: "8:00 - 17:00"},
        {jour: "Sun - Wed", heure: "9:00 - 17:00"},
        {jour: "Sun - Wed", heure: "10:00 - 17:00"},
    ];

    return (

        <>
            {iconText.map((contenu) =>
                    <div className="feature-item mb-5 mb-lg-0">

                        <div className="feature-icon mb-4">
                            <i className={contenu.icone}></i>
                        </div>
                        <span>{contenu.span}</span>
                        <h4 className="mb-3">{contenu.h4}</h4>
                        <div>{parse(contenu.p)}</div>

                        {/*
                            <ul className="w-hours list-unstyled">

                            {horaires.map((horaire) =>
                                <>
                                    <ul className="w-hours list-unstyled">
                                        <li className="d-flex justify-content-between">{horaire.jour}<span>{horaire.heure}</span>
                                        </li>
                                    </ul>
                                </>)}
                                </ul>
                            */}
                    </div>
            )}


        </>
    )
}

export default Card