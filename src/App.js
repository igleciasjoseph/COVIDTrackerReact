import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  // State is constructed in the backend using this syntax and it works the same way as using a constructor() and super()
  state = {
    data: {},
  };

  async componentDidMount() {
    // fetch the data
    // set state
    const fetchedGlobalData = await fetchData();

    this.setState({ data: fetchedGlobalData });
  }

  handleCountryChange = async (country) => {
    // fetch the data
    // set state
    const fetchedCountryData = await fetchData(country);

    this.setState({ data: fetchedCountryData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://i.ibb.co/7QpKsCX/image.png"
          alt="COVID-19"
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
