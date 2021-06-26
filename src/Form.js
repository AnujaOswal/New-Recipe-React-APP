import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export default function Form({recipe}) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUsers] = useState({});
  function getUsers() {
    fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }

  useEffect(() => {
    getUsers();
  }, [newUser]);

  return (
    <div>
      <AddUser refreshUsers={getUsers} />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.title}</p>
          <img
            src={user.foodimage}
            style={{ height: "100px" }}
            alt="Sometimes profile must be blank"
          />
          <p>{user.ingredients}</p>
        </div>
      ))}
    </div>
  );
}

function AddUser({ refreshUsers }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Name is awesome why leave it blank!?")
      .min(3, "Tell me your full food name")
      // .max(15, "Keep it short buddy")
      ,
    foodimage: Yup.string()
      .required("Show as your handsome pic")
      .url("Not looks like a url"),
    password: Yup.string().min(8, "Password at least 8 chars"),
    confrimPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    )
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log(data);
    addUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Enter your name" />
      {errors.title && (
        <span style={{ color: "crimson" }}> {errors.title.message} </span>
      )}
      <input {...register("foodimage")} placeholder="Enter your image url" />
      {errors.foodimage && (
        <span style={{ color: "crimson" }}> {errors.foodimage.message} </span>
      )}
      <input
        {...register("ingredients")}
        placeholder="Enter your ingredients"
      />
      {errors.ingredients && (
        <span style={{ color: "crimson" }}> {errors.ingredients.message} </span>
      )}
      {/* crt+d */}
      <br />
      {/* <input
        {...register("password")}
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && (
        <span style={{ color: "crimson" }}> {errors.password.message} </span>
      )} */}

      {/* <input
        {...register("confrimPassword")}
        type="password"
        placeholder="Confirm password"
      />
      {errors.confrimPassword && (
        <span style={{ color: "crimson" }}>
          {errors.confrimPassword.message}
        </span>
      )} */}

      <input type="submit" />
    </form>
  );

  function addUser(data) {
    fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
      .then((res) => res.json())
      .then((res) => refreshUsers(res));
  }
}

