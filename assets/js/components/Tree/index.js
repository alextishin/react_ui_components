import React, {Component} from 'react'
import shortid from 'shortid'
import './style.css'

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    }
  }

  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  isCollapsed = () => {
    return this.state.collapsed;
  }

  renderCollapseIcon = () => {
    return (
      <span className="tree__plus">
        <i className={`fa fa-plus-square-o`}></i>
      </span>
    )
  }


  renderLeafs = (leafs) => {
    let branchLeafs = leafs.map((leaf) => {
      return (
        <li key={shortid.generate()} className='tree__leaf'>
          <i className={`fa fa-file`}></i>
          <span className="tree__branch-name">{leaf.name}</span>
        </li>
      )
    });
    
    return <ul>{branchLeafs}</ul>;
  }

  renderBranches = () => {
    return this.props.data.map((branch) => {
      return (
        <li key={shortid.generate()} className='tree__branch'>
          {branch.data ? this.renderCollapseIcon() : ''}
          <span className={`tree__folder ${!branch.data ? 'tree__folder--empty' : ''}`}>
            <i className={`fa fa-${this.isCollapsed() ? 'folder-open' : 'folder'}`}></i>
          </span>
          <span className="tree__branch-name">
            {branch.name}
          </span>
          {branch.data ? this.renderLeafs(branch.data) : ''}
        </li>
      )
    });
  }

  render = () => {
    return (
      <div className="tree">
        <ul>
          {this.renderBranches()}
        </ul>
      </div>
    )
  }
}

export default Tree;
