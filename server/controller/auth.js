import bcrypt from "bcrypt";
import { db } from "../src/db/db.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User alredy exsist!");

    //hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //Insert value
    const insertQuery =
      "INSERT INTO users(username, email, password) VALUES (?, ?, ? )";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    console.log(data);
    //check password
    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isCorrectPassword)
      return res.status(400).json("Wrong username or password.");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...otherInfo } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherInfo);
  });
};

export const logout = (req, res) => {};
