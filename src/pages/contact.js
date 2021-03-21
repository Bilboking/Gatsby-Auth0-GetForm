import React, { useState }  from "react"
import axios from "axios";
//** axios allows HTTP request for Getform */

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
            <h1>Send a message to my email!</h1><br></br>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                <label for="exampleInputEmail1" required="required">Email address:  </label>
              <input type="email" name="email" className="form-control" placeholder="Your Email"/>
              </div>
                <div className="form-group">
                <label for="exampleInputName">Name: </label>
                <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
              </div>
             
                 <div className="form-group">
                <label for="exampleInputName">Message: </label>
                <input type="text" name="message" className="form-control" placeholder="Your Message"/>
              </div>
              <button type="submit">Send</button><br></br>
          </form>
        </div>
      </div>



 

    );
  };



  export default MyForm;