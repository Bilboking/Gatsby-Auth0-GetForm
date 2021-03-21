import React, { useState }  from "react"
import axios from "axios";

const MyForm = () => {

    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/19897abb-5649-4047-9e1f-3628a0ceb039",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
       

    <div>
         <div className="col-md-8 mt-5">
            <h3>Send a message to my phone and email!</h3>
            <form onSubmit={handleOnSubmit}>
              <input type="email" name="email" placeholder="Your Email"/>
              <input type="text" name="name" placeholder="Your Name"/>
              <input type="text" name="message" placeholder="Your Message"/>
              <button type="submit">Send</button>
          </form>
        </div>
      </div>

 

    );
  };

  export default MyForm;