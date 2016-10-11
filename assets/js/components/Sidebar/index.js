/**
 * Created by alextishin on 26.09.16.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import _ from 'lodash'

import './style.css'

class Sidebar extends Component {

  state = {
    navItems: [
      {id:1, pathname: '/', label: 'Home', icon: 'home' },
      {id:2, pathname: '/dashboard/form_elements', label: 'Form Elements', icon: 'check-square ' },
      {id:3, pathname: '/dashboard/tabs', label: 'Tabs', icon: 'columns ' }
    ],
    selectedItem: 1,
    collapsed: false
  }

  isSelected(id) {
    return id === this.state.selectedItem ? 'sidebar__item--selected' : '';
  }

  isCollapsed() {
    return this.state.collapsed;
  }

  select(id) {
    if(id !== this.state.selectedItem) {
      this.setState({
        selectedItem: id
      });
    }
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  renderItems(){
    return _.map(this.state.navItems, (navItem) => {
      return (
        <li key={navItem.id} className={`sidebar__item ${this.isSelected(navItem.id)}`} onClick={() => this.select(navItem.id)}>
          <Link to={navItem.pathname} className={`sidebar__link ${this.isCollapsed() ? 'sidebar__link--collapsed' : ''}`}>
            <div className={`sidebar__icon ${this.isCollapsed() ? 'sidebar__icon--collapsed' : ''}`}>
              <i className={`fa fa-${navItem.icon}`}></i>
            </div>
            <span className={`${this.isCollapsed() ? 'hidden' : ''}`}>{navItem.label}</span>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <aside className={`sidebar ${this.isCollapsed() ? 'sidebar--collapsed' : ''}`}>
        <div className="sidebar__toggle">
          <i className="fa fa-bars fa-2x" onClick={this.toggle.bind(this)}></i>
        </div>
        <ul>
          {this.renderItems()}
        </ul>
      </aside>
    )
  }
}

export default Sidebar;
