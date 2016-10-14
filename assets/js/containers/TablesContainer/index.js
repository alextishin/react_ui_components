/**
 * Created by alextishin on 13.10.16.
 */
import React, {Component} from 'react'
import Panel from '../../components/Panel'
import Table from '../../components/Table'

class TablesContainer extends Component {
  render() {
    return (
      <div className="content">
        <div className="content__block">
          <h1 className="content__header">TABLES</h1>
          <Panel>
            <Table
              columns={[
                {id: 'name', header: "Name"},
                {id: 'age', header: "Age"},
                {id:  'gender', header: "Gender"}
              ]}
              data={[
                {name: 'John', age: '24', gender: 'Male'},
                {name: 'John', age: '24', gender: 'Male'},
                {name: 'John', age: '24', gender: 'Male'}
              ]}/>
          </Panel>
        </div>
      </div>
    )
  }
}

export default TablesContainer;
