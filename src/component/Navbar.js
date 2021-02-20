
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleInvertedPointing extends Component {
  state = { activeItem: "Star War" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu inverted pointing vertical>
          <Link to='/'>
            <Menu.Item
              name='Star War'
              active={activeItem === "Star War"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/people/'>
            <Menu.Item
              name='People'
              active={activeItem === "People"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/planets/'>
            <Menu.Item
              name='Planets'
              active={activeItem === "Planets"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    );
  }
}
