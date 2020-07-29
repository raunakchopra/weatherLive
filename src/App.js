import React, { useState, useEffect } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

import Input from "./components/Input";
import Information from "./components/Information";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(false);

  const getData = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ccbab1ca97c632cfce09064455c4126c`
      )
      .then((res) => {
        setData({
          weather: res.data.weather[0].main,
          temp: res.data.main.temp,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
        });
      });
    setDisplay(true);
  };

  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    setCity(data.city);
    getData();
  };

  return (
    <div style={styles.mainSection}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.input}>
          <Input reg={register} Name="city" />
        </div>
        <input type="submit" style={styles.button} placeholder="Search!" />
      </form>
      {display === true ? (
        <Information
          Country={data.country}
          Temp={data.temp}
          Humidity={data.humidity}
          Weather={data.weather}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

const styles = {
  input: {
    marginLeft: "42.5%",
    marginBottom: "35px",
  },
  mainSection: {
    paddingTop: "137px",
  },
  button: {
    marginLeft: "45.5%",
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "#0099FF",
    color: "#ffffff",
    fontSize: "14px",
    padding: "10px",
    borderStyle: "none",
    borderRadius: "10px",
    width: "100px",
    marginBottom: "20px",
    outline: "none",
  },
};

// fetch(
//   `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ccbab1ca97c632cfce09064455c4126c`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     setData({
//       weather: data.weather[0].main,
//       temp: data.main.temp,
//       country: data.sys.country,
//       humidity: data.main.humidity,
//     });
//   });
