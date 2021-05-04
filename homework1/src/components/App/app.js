import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "../Card";
import AddItem from "../AddItem";
import Navbar from "../NavBar";
import Header from "../Header";
import Menu from "../Menu";

export default class App extends Component {
  state = {
    selected: false,
    query: "",
    onlyFavorite: false,
    data: [
      {
        id: 1,
        name: "Ivan",
        age: 18,
        favourite: true,
        social: {
          fb: "https://fb.com/#",
          insta: "https://instagram.com",
        },
      },
      {
        id: 2,
        name: "Ivanka",
        age: 20,
        favourite: false,
        social: {
          insta: "https://instagram.com",
        },
      },
      {
        id: 3,
        name: "Ivanko",
        age: 23,
        favourite: false,
        social: {
          fb: "https://fb.com/#",
        },
      },
    ],
  };

  onDelete = (id) => {
    let index = this.findElementByIndex(id);

    this.setState(({ data }) => {
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
      };
    });
  };

  findElementByIndex = (id) => {
    return this.state.data.findIndex((x) => x.id == id);
  };

  onFavouriteChange = (id) => {
    var index = this.findElementByIndex(id);
    this.setState(({ data }) => {
      let newEl = data[index];
      newEl.favourite = !newEl.favourite;

      let before = data.slice(0, index);
      let after = data.slice(index + 1);

      return {
        data: [...before, newEl, ...after],
      };
    });
  };

  onFilter = () => {
    if (this.state.query === "" && this.state.onlyFavorite == false) {
      return this.getUsers(this.state.data);
    }

    let users = this.state.data.filter((x) => {
      return x.favourite == this.state.onlyFavorite;
    });

    return this.getUsers(users.filter((x) => {
      return (x.name.toLowerCase().includes(this.state.query));
    }));
  };

  getUsers = (users) => {


    return users.map((el) => {
      return (
        <Card
          onDelete={() => this.onDelete(el.id)}
          onFavouriteChange={() => this.onFavouriteChange(el.id)}
          key={el.id}
          id={el.id}
          name={el.name}
          age={el.age}
          favourite={el.favourite}
          social={el.social}
        />
      );
    });
  };

  onAdd = (item) => {
    let newIndex = Math.max.apply(Math, this.state.data.map(function (o) { return o.id; })) + 1;
    this.setState(({ data }) => {
      return {
        data: [...data, {
          id: newIndex,
          name: item.name,
          age: item.age,
          favourite: Math.floor(Math.random()),
          social: {
            fb: "https://fb.com/#",
          },
        }]
      }
    });
  };

  search = (query) => {
    this.setState({
      query: query
    });
  }

  onFavoriteChange = (favouriteEnable) => {
    this.setState({
      onlyFavorite: favouriteEnable
    });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Menu />
          <Switch>
            <Route
              path="/"
              exact>
              <>
                <Navbar
                  onSearchQueryChange={this.search}
                  favoriteAction={this.onFavoriteChange} />
                <Header
                  countContacts={this.state.data.length}
                  countFavorites={this.state.data.filter(x => x.favourite == true).length}
                />
                <div className="row">
                  {this.onFilter()}
                </div>
              </>
            </Route>
            <Route
              path="/add"
              exact>
              <AddItem
                onAdd={this.onAdd} />
            </Route>
            <Route
              path="/about"
              render={() => <h1>About us: tel: 93963965</h1>}>
            </Route>
            <Route render={() => <h1>404. Not found</h1>} />
          </Switch>
        </Router>
      </div>
    );
  };
}