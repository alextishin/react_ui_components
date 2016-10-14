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
      data: props.data
    }
  }

  static propTypes = {
    columns: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        header: React.PropTypes.string.isRequired
      })
    ).isRequired,
    data: React.PropTypes.array

  }

  renderHeader = () => {
    return this.props.columns.map((column) =>{
      return <th key={shortid.generate()}>{column.header}</th>
    })
  }

  renderRow = (rowData) => {
   return this.props.columns.map((header) => {
     return <td key={shortid.generate()}>{rowData[header.id]}</td>
   });
  }

  renderBody = () => {
    return this.state.data.map((row) => {
      return <tr key={shortid.generate()}>{this.renderRow(row)}</tr>
    })
  }



  render() {
    return (
      <table>
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
