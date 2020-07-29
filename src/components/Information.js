import React from "react";

const Information = (props) => {
  const country = props.Country;
  const temp = props.Temp;
  const humidity = props.Humidity;
  const weather = props.Weather;

  return (
    <div>
      <h1 style={styles.weather}>{weather}</h1>
      <div style={styles.data}>
        <div style={styles.header}>
          <p style={styles.heading}>COUNTRY</p>
          <p style={styles.heading}>TEMPERATURE</p>
          <p style={styles.heading}>HUMIDITY</p>
        </div>
        <div style={styles.dataNew}>
          <img
            style={styles.icon}
            alt="United States"
            src={`http://catamphetamine.gitlab.io/country-flag-icons/3x2/${country}.svg`}
          />
          <h1 style={styles.text}>{temp}*F</h1>
          <h1 style={styles.text}>{humidity}%</h1>
        </div>
      </div>
    </div>
  );
};

export default Information;

const styles = {
  text: {
    marginRight: "310px",
    marginTop: "-1px",
    fontFamily: "Inter",
    color: "#EBEBEB",
    fontSize: "24px",
  },
  iconContainer: {
    marginLeft: "100px",
  },
  icon: {
    marginRight: "310px",
    marginTop: "-25px",
    height: "80px",
    width: "80px",
  },
  dataNew: {
    paddingLeft: "320px",
    display: "flex",
    marginTop: "10px",
  },
  heading: {
    fontFamily: "Inter",
    color: "#badc57",
    fontSize: "24px",
    marginRight: "20%",
  },
  header: {
    marginLeft: "20%",
    display: "flex",
  },
  weather: {
    marginLeft: "46.5%",
    fontFamily: "Inter",
    color: "#EBEBEB",
    fontSize: "36px",
  },
  data: {
    marginTop: "50px",
  },
};
