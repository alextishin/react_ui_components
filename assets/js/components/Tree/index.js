import React, {Component} from 'react'
import shortid from 'shortid'
import './style.css'

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      data: props.data.map((item) => {
        var i = {...item};

        if (!i.id) {
          i.id = shortid.generate();
        }

        if(i.data) {
          i.data = i.data.map((child) => {
            if (!child.id) {
              return {
                id: shortid.generate(),
                parentId: i.id,
                ...child
              };
            }
            return {...child};
          });
        }
        
        return i;
      }),
      openedMap: null
    }
  }


  static propTypes = {
    data: React.PropTypes.array.isRequired
  }

  componentWillMount = () => {
    this.setState({
      openedMap: this.createOpenedMap(this.state.data),
      itemMap: this.createItemMap(this.state.data)
    })
  }


  createOpenedMap = (data) => {
    var openNodeMap = {};

    data.forEach((item) => {
      openNodeMap[item.id] = false;
    });

    return openNodeMap;
  }

  createItemMap = (data) => {
    var itemMap = {};

    data.forEach((item) => {
      if(item.data) {
        item.data.forEach((child) => {
          itemMap[child.id] = child;
        });
      }
      itemMap[item.id] = item;
    });

    return itemMap;
  }

  isBranchOpen = (branchId) => {
    return this.state.openedMap[branchId];
  }

  isCollapsed = () => {
    return this.state.collapsed;
  }

  toggleBranchState = (branchId) => {
    var openedMap = {...this.state.openedMap};

    openedMap[branchId] = !openedMap[branchId];

    this.setState({
      openedMap: openedMap
    })
  }

  collapseAll = () => {
      var openedMap = {...this.state.openedMap};

      for(let key in openedMap) {
        openedMap[key] = false;
      }

      this.setState({
        openedMap: openedMap,
      })

  }

  expandAll = () => {
    var openedMap = {...this.state.openedMap};

    for(let key in openedMap) {
      openedMap[key] = true;
    }

    this.setState({
      openedMap: openedMap,
      collapsed: false
    })
  }

  renderBranchOpenIcon = (branchId) => {
    return (
      <span className="tree__plus" onClick={() => {this.toggleBranchState(branchId)}}>
        <i className={`fa fa-${ this.isBranchOpen(branchId) ? 'minus-square-o' : 'plus-square-o' }`}></i>
      </span>
    )
  }


  renderLeafs = (leafs, branchId) => {
    let branchLeafs = leafs.map((leaf) => {
      return (
        <li key={shortid.generate()} className='tree__leaf'>
          <a href="#" className="tree__link">
            <i className={`fa fa-file`}></i>
            <span className="tree__branch-name">{leaf.name}</span>
          </a>
        </li>
      )
    });

    return <ul className={`${ !this.isBranchOpen(branchId) ? 'hidden' : '' }`}>{branchLeafs}</ul>;
  }

  renderBranches = () => {
    return this.state.data.map((branch) => {
      return (
        <li key={shortid.generate()} className='tree__branch'>
          {branch.data ? this.renderBranchOpenIcon(branch.id) : ''}
          <a className={`tree__link ${!branch.data ? 'tree__link--empty' : ''} `}>
            <span className={`tree__folder `}>
            <i className={`fa fa-${this.isBranchOpen(branch.id) ? 'folder-open' : 'folder'}`}></i>
          </span>
          <span className="tree__branch-name">
            {branch.name}
          </span>
          </a>
          {branch.data ? this.renderLeafs(branch.data, branch.id) : ''}
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
