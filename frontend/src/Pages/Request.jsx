import { useParams } from "react-router-dom";
import Head from "./Head";
import Foot from "./Foot";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Request() {
  const { name, phone } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customer_name: "",
    customer_phone: "",
    mail: "",
    date: "",
    session: "",
    service: "",
    service_man: name || "",
    service_phone: phone || ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4040/e_service/request", form);
      console.log(response.data);

      setForm({
        customer_name: "",
        customer_phone: "",
        mail: "",
        date: "",
        session: "",
        service: "",
        service_man: "",
        service_phone: ""
      });

      navigate("/request_accepted", {
        state: {
          name: form.service_man,
          service: form.service,
          phone: form.service_phone,
          req_date: form.date
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head />
      <div className="req-container">
        <form onSubmit={submit} className="req-form">
          <h2>Service Request form</h2>
          <input
            type="text"
            name="name"
            required
            autoFocus
            autoComplete="off"
            placeholder="Name*"
            onChange={(e) => {
              setForm({ ...form, customer_name: e.target.value });
            }}
          />
          <input
            type="tel"
            name="phone"
            required
            autoFocus
            autoComplete="off"
            placeholder="Phone*"
            onChange={(e) => {
              setForm({ ...form, customer_phone: e.target.value });
            }}
          />
          <input
            type="email"
            name="mail"
            required
            autoFocus
            autoComplete="off"
            placeholder="Mail"
            onChange={(e) => {
              setForm({ ...form, mail: e.target.value });
            }}
          />
          <input
            type="date"
            name="date"
            required
            placeholder="Date*"
            onChange={(e) => {
              setForm({ ...form, date: e.target.value });
            }}
          />
          <select
            name="session"
            required
            value={form.session}
            onChange={(e) => {
              setForm({ ...form, session: e.target.value });
            }}
          >
            <option value="">Select Session</option>
            <option value="Forenoon">Forenoon</option>
            <option value="Afternoon">Afternoon</option>
          </select>

          <input
            type="textarea"
            name="service"
            required
            autoFocus
            autoComplete="off"
            placeholder="Type Detailed about Issue"
            onChange={(e) => {
              setForm({ ...form, mail: e.target.value });
            }}></input>

          <input
            type="text"
            name="worker"
            value={form.service_man}
            placeholder="Worker Name"
            disabled
          />

          <input
            type="tel"
            name="workerphone"
            value={form.service_phone}
            placeholder="Worker Phone"
            disabled
          />
          
          <button type="submit" className="req-btn">Request</button>
        </form>
      </div>
      <Foot />
    </>
  );
}

export default Request;
