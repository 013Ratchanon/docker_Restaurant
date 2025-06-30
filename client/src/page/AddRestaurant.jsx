import React, { useState } from "react";
import NavBar from "../components/NavBar";
const AddRestaurant = () => {
  const [restaurant, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully!!");
        setRestaurants({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto">
      
      <div>
        <h4 className="title justify-center text-3xl text-center m-5 p5 ">
          Add Restaurant
        </h4>
      </div>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">What is your title?</legend>
        <input
          type="text"
          name="title"
          value={restaurant.title}
          onChange={handleChange}
          placeholder="Title"
          class="input input-secondary"
        />
        <legend class="fieldset-legend">What is your type?</legend>
        <input
          type="text"
          name="type"
          value={restaurant.type}
          onChange={handleChange}
          placeholder="Type"
          class="input input-primary"
        />
        <legend class="fieldset-legend">What is your img?</legend>
        <input
          type="text"
          name="img"
          value={restaurant.img}
          onChange={handleChange}
          placeholder="Img"
          class="input input-info"
        />
        {restaurant.img && (
          <div className="flex item-center gap-2">
            <img className="h-32" src={restaurant.img} />
          </div>
        )}
      </fieldset>
      <button
        onClick={handleSubmit}
        class="btn btn-outline btn-success"
        type="submit"
      >
        Add
      </button>
      <button class="btn btn-outline btn-error" type="cancel">
        Cancel
      </button>
    </div>
  );
};

export default AddRestaurant;
