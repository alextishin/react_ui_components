/**
 * Created by alextishin on 26.09.16.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import shortid from 'shortid'

import './style.css'

class Sidebar extends Component {

  state = {
    navItems: [
      {id:2, pathname: '/components/form_elements', label: 'Form Elements', icon: 'check-square ' },
      {id:3, pathname: '/components/tabs', label: 'Tabs', icon: 'columns ' },
      {id:4, pathname: '/components/tables', label: 'Tables', icon: 'table ' },
      {id:5, pathname: '/components/trees', label: 'Trees', icon: 'sitemap ' }

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
    return this.state.navItems.map((navItem) => {
      return (
        <li key={shortid.generate()} className={`sidebar__item ${this.isSelected(navItem.id)}`} onClick={() => this.select(navItem.id)}>
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
        <ul>
          {this.renderItems()}
        </ul>
      </aside>
    )
  }
}

export default Sidebar;
