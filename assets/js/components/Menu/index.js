/**
 * Created by alextishin on 06.06.17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router'
import shortid from 'shortid'
import './styles.css';


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.map((item) => {
        if(!item.id) {
          return {...item, id: shortid.generate()};
          //return  Object.assign({}, item, {id: shortid.generate()});
        }
        return {...item};
      }),
      selectedId: null
    }
  }


  static propTypes = {
    layout: React.PropTypes.string,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  static defaultProps = {
    layout: 'x'
  };

  getLayoutClass = () => {
    return this.props.layout == 'x' ? 'hmenu' : 'vmenu';
  }

  renderItems(layout){
    return this.state.items.map((navItem) => {
      return (
        <li key={shortid.generate()} className={`${layout}__item`}>
          <Link to={navItem.pathname} className={`menu__link`}>{navItem.name}</Link>
        </li>
      )
    });
  }

  render() {
    let layout = this.getLayoutClass();

    return (
      <div className="menu">
        <ul className={layout}>
          {this.renderItems(layout)}
        </ul>
      </div>
    )
  }
}

export default Menu;
