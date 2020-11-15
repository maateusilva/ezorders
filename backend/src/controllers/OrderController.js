const Order = require('../models/Order');

class OrderController {
  async index(req, res) {
    const orders = await Order.find();
    res.json(orders);
  }

  async store(req, res) {
    const { table, description } = req.body;

    if (!table || !description) {
      return res.sendStatus(400);
    }

    const order = await Order.create({
      table, description,
    });

    req.io.emit('newOrder', order);
    res.json(order);
  }

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.sendStatus(400);
    }

    const order = await Order.findByIdAndUpdate(
      { _id: id },
      { status },
      { new: true },
    );

    req.io.emit('statusChange', order);
    res.json(order);
  }
}

module.exports = new OrderController();
