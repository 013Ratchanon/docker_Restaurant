import Restaurant from "../models/restaurant.model.js";
const restaurantController = {};
//Create and save a new restaurant
restaurantController.create = async (req, res) => {
  const { name, type, imgUrl } = req.body;
  //validate data
  if (!name || !type || !imgUrl) {
    res
      .status(400)
      .send({ message: "Name, type or ImageUrl can nit be empty na ja !!" });
    return;
  }

  await Restaurant.findOne({
    where: {
      name: name,
    },
  }).then((restaurant) => {
    if (restaurant) {
      res.status(400).send({ message: "Restaurant already exists!" });
      return;
    }
    const newRestaurant = {
      name: name,
      type: type,
      imgUrl: imgUrl,
    };
    Restaurant.create(newRestaurant)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "something error while creating the rastaurant",
        });
      });
  });
};
export default restaurantController;
