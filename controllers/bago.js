/*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
import { Device, sequelize } from "../models/Device.js";
await sequelize.sync();
const bago ={
  index: async (req, res) => {
    const data = await Device.findAll();
    res.render("home", {data});
  },
  edit:async (req, res) =>{
    const {id} = req.params;
    const data = await Device.findByPk(id);
    res.render("edit", {data});
  },
  add: (req, res) =>{
    res.render("add");
  },
  insert: async (req, res) =>{
    const {Name, Type, Quantity, Price, DatePurchased } = req.body;
    await Device.create({ Name, Type, Quantity, Price, DatePurchased });
    res.redirect("/");
  },
  delete: async(req, res)=>{
      const { id } = req.params;
      await Device.destroy({ where: { id } });
      res.redirect("/");
  },
  update: async (req, res) => {
    {
      const { id } = req.params;
      const { Name, Type, Quantity, Price, DatePurchased } = req.body;
      const rep = await Device.update(
        { Name, Type, Quantity, Price, DatePurchased },
        { where: { id } }
      );
      res.redirect("/");
    }
  }
};
export { bago };