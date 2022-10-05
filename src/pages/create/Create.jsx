import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    host: "",
    starts: "",
    ends: "",
    location: "",
  };
  const [formData, setFormData] = useState({ ...initialData });
  const handleFile = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/event");
    toast.success("🥳 Event Created!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <main>
      <h3>Create your event</h3>
      <form onSubmit={handleSubmit}>
        <div className="picture" id="upload">
          <label htmlFor="upload" onClick={() => handleFile.current.click()}>
            📷 Choose a Photo
          </label>
          <input type="file" id="upload" ref={handleFile} hidden />
        </div>
        <div className="form-input">
          <label htmlFor="name"> 🎉 My event is called</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="host">🎤 Your host is</label>
          <input
            type="text"
            name="host"
            id="host"
            value={formData.host}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="starts">🗓 It starts at</label>
          <input
            type="datetime-local"
            name="starts"
            id="starts"
            value={formData.starts}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="ends">🏁 It ends at (optional)</label>
          <input
            type="datetime-local"
            name="ends"
            id="ends"
            value={formData.ends}
            onChange={handleChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="location">📍 Its happening at </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </main>
  );
};

export default Create;
