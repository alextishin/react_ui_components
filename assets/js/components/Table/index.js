/**
 * Created by alextishin on 13.10.16.
 */
import React, {Component} from 'react'
import TableHead from './TableHead'
import './style.css'

class Table extends Component {
  constructor(props) {
    super(props);
  }
  


  render(){
    return (
      <table>
        {this.props.children}
      </table>
    )
  }
}

export default Table;
