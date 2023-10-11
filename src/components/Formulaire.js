import {useEffect, useState} from "react";
import axios from 'axios';

const Formulaire = (props) => {

    let formInit = {
        selectServ: "",
        selectOpts: "",
        date: null,
        time: null,
        name2: "terterterter",
        phone: "",
        message: "",
    };

    const [getForm, setForm] = useState(formInit)
    const [allPropositions, setAllPropositions] = useState([])

    useEffect(() => {
        fetchForms()
    }, []);

    const fetchForms = async () => {
        try {
            let response = await axios.get('https://localhost:8000/api/forms-all');
            /*
            let existingForm = response.data;
             let messages = []
            j'extrait tout les messages de mes formulaires existant dans [] messages
            existingForm.map((form) => {
                messages.push(form.message)
            })

            // je ne garde dans mon array messages que les message unique
            messages = messages.filter((mess, i) => messages.indexOf(mess) === i)
         */
            setAllPropositions(response.data)
        } catch (e) {

        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(getForm)

        try {
            const response = await axios.post('https://localhost:8000/api/forms.json', getForm);
            fetchForms()
        } catch (error) {
            console.log(error);
        }
    }
    const handleInputChange = (event) => {
        let {name, value} = event.target;
        if (name === 'time') {
            value = parseInt(value)
        }
        setForm((previousForm) => (
            {...previousForm, [name]: value}
        ));
    }

    const PropositionOnClickHandler = (proposition) => {
        setForm((previousForm) => (
            {...previousForm, ["message"]: proposition}
        ));
    }
    console.log(allPropositions)
    return (

        <form onSubmit={handleSubmit} id="#" className="appoinment-form" method="post" action="#">
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <select name="selectServ" value={getForm.selectServ} onChange={handleInputChange}
                                className="form-control" id="exampleFormControlSelect1">
                            <option>Choose Department</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <select name="selectOpts" value={getForm.selectOpts} onChange={handleInputChange}
                                className="form-control"
                                id="exampleFormControlSelect2">
                            <option>Select Doctors</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="date" value={getForm.date} onChange={handleInputChange} id="date" type="text"
                               className="form-control"
                               placeholder="dd/mm/yyyy"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="time" value={getForm.time} onChange={handleInputChange} id="time" type="number"
                               className="form-control"
                               placeholder="Time"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="name2" value={getForm.name2} onChange={handleInputChange} id="name2" type="text"
                               className="form-control"
                               placeholder="Full Name"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <input name="phone" value={getForm.phone} onChange={handleInputChange} id="phone" type="Number"
                               className="form-control"
                               placeholder="Phone Number"/>
                    </div>
                </div>
            </div>
            <div className="form-group-2 mb-4">
                <textarea name="message" value={getForm.message} onChange={handleInputChange} id="message"
                          className="form-control" rows="6"
                          placeholder="Your Message"></textarea>
                {getForm.message !== '' &&
                    <div>
                        <h4>Propisitions</h4>
                        <ul>
                            {allPropositions
                                /*
                                .sort((a, b) => {
                                if (a > b) return 1
                                if (a < b) return -1
                                return 0
                            }) */
                                .filter((prop) => prop.includes(getForm.message))
                                .slice(0, 5).map((
                                    proposition =>
                                        <li key={proposition} style={{cursor: "pointer"}}
                                            onClick={() => PropositionOnClickHandler(proposition)}>{proposition}</li>
                                ))}
                        </ul>
                    </div>
                }

            </div>

            <button type="submit" className="btn btn-main btn-round-full">Make Appoinment <i
                className="icofont-simple-right ml-2  "></i></button>
        </form>
    )
}
export default Formulaire