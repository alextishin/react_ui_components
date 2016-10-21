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
      openedMap: this._createOpenedMap(this.state.data),
      itemMap: this._createItemMap(this.state.data),
      branch: this._createBranch(this.state.data)
    }, () => {console.log(this.state)})
  }

  _createBranch = (data) => {
    var branch = {};

    data.forEach((item) => {
      if(item.data) {
        branch[item.id] = {};

        item.data.forEach((child) => {
          branch[item.id][child.id] = {...child}
        })
      }
      else
        branch[item.id] = {};
    })

    return branch;
  }


  _createOpenedMap = (data) => {
    var openNodeMap = {};

    data.forEach((item) => {
      openNodeMap[item.id] = false;
    });

    return openNodeMap;
  }

  _createItemMap = (data) => {
    var itemMap = {};

    data.forEach((item) => {
      if(item.data) {
        item.data.forEach((child) => {
          itemMap[child.id] = {...child};
        });
      }
      itemMap[item.id] = {...item};
      delete itemMap[item.id].data;
    });

    return itemMap;
  }

  isBranchOpen = (branchId) => {
    return this.state.openedMap[branchId];
  }

  isCollapsed = () => {
    return this.state.collapsed;
  }

  hasChilds = (branchId) => {
    return (Object.keys(this.state.branch[branchId]).length > 0);
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
    var bracheLeafs = [];

    for(let key in leafs) {
      var leaf = (
        <li key={shortid.generate()} className='tree__leaf'>
          <a href="#" className="tree__link">
            <i className={`fa fa-file`}></i>
            <span className="tree__branch-name">{leafs[key].name}</span>
          </a>
        </li>
      )

      bracheLeafs.push(leaf);
    }

    return <ul className={`${ !this.isBranchOpen(branchId) ? 'hidden' : '' }`}>{bracheLeafs}</ul>;
  }


  renderBranches = () => {
    var branches = [];
    var _branch = this.state.branch;
    var _items = this.state.itemMap;

    for(let key in _branch) {
      let branch = (
        <li key={shortid.generate()} className='tree__branch'>
        {this.hasChilds(key) ? this.renderBranchOpenIcon(key) : ''}
        <a className={`tree__link ${!this.hasChilds(key) ? 'tree__link--empty' : ''} `}>
            <span className={`tree__folder `}>
            <i className={`fa fa-${this.isBranchOpen(key) ? 'folder-open' : 'folder'}`}></i>
          </span>
          <span className="tree__branch-name">
            {_items[key].name}
          </span>
        </a>
        {this.hasChilds(key) ? this.renderLeafs(_branch[key], key) : ''}
      </li>
      );
      branches.push(branch);
    }

    return branches;
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
