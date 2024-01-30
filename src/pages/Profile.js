import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default function Profile() {
  const [formData, setFormData] = useState("");
  const [data, setData] = useState();
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = () => {
    console.log("aaa");
    axios
      .get(`https://api.github.com/users/${formData}`)
      .then((value) => setData(value.data))
      .catch((err) => console.log(err));
  };
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <div className="row">
        <div
          className="col-md-6"
          style={{ width: "50%", padding: "5px", marginTop: "25px" }}
        >
          <Form>
            <Form.Group className="m" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="enter username"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </div>
        <div
          className="col-md-6"
          style={{ width: "50%", padding: "5px", marginTop: "25px" }}
        >
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <hr class="mt-3 mb-3" />
      {data && (
        <div>
          <text> {data.login}</text>
          <img src={data.avatar_url} width={"200px"} height={"200px"} />
        </div>
      )}
    </div>
  );
}
