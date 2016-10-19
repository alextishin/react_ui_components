import React, {Component} from 'react'
import shortid from 'shortid'
import './style.css'

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      data: props.data.map((item) => {
        if(!item.id) {
          return  {
            id: shortid.generate(),
            ...item
          };
        }


        return {...item};

      }),
      openedMap: null
    }

  }

  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  componentWillMount = () => {
    this.setState({
      openedMap: this.createOpenedMap(this.state.data)
    }, ()=>{console.log(this.state)})
  }

  createOpenedMap = (data) => {
    var openNodeMap = {};

    data.forEach((item) => {
      openNodeMap[item.id] = false;
    });

    return openNodeMap;
  }

  isBranchOpen = (branchId) => {
    return this.state.openedMap[branchId];
  }

  isCollapsed = () => {
    return this.state.collapsed;
  }

  renderBranchOpenIcon = (branchId) => {
    return (
      <span className="tree__plus">
        <i className={`fa fa-${ this.isBranchOpen(branchId) ? 'minus-square-o' : 'plus-square-o' }`}></i>
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
    return this.state.data.map((branch) => {
      return (
        <li key={shortid.generate()} className='tree__branch'>
          {branch.data ? this.renderBranchOpenIcon(branch.id) : ''}
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
