/**
 * Created by alextishin on 13.10.16.
 */
import React, {Component} from 'react'
import TableHead from './TableHead'
import shortid from 'shortid'
import './style.css'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data.map((item) => {
        if(!item.id) {
          return  Object.assign({}, item, {id: shortid.generate()});
        }
        return {...item};
      }),
      selectedId: null
    }
  }

  static propTypes = {
    columns: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        header: React.PropTypes.string.isRequired
      })
    ).isRequired,
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
      ])
    })).isRequired

  }

  select = (id) => {
    this.setState({
      selectedId: id
    })
  }

  isSelected = (id) => {
    return (id == this.state.selectedId) ? "table__row--selected" : '';
  }

  renderHeader = () => {
    return this.props.columns.map((column) =>{
      return <th className="table__cell table__cell--head" key={shortid.generate()}>{column.header}</th>
    })
  }

  renderRow = (rowData) => {
   return this.props.columns.map((header) => {
     return <td className="table__cell" key={shortid.generate()}>{rowData[header.id]}</td>
   });
  }


  renderBody = () => {
    return this.state.data.map((row) => {
      return <tr
        onClick={()=> {this.select(row.id)}}
        key={shortid.generate()}
        className={`table__row ${this.isSelected(row.id)}`}
      >
        {this.renderRow(row)}
      </tr>
    })
  }



  render() {
    return (
      <table className="table">
        <thead>
          <tr>{this.renderHeader()}</tr>
        </thead>
        <tbody>
        {this.renderBody()}
        </tbody>
      </table>
    )
  }
}

export default Table;
