/**
 * Created by alextishin on 13.10.16.
 */
import React, {Component} from 'react'
import Panel from '../../components/Panel'
import Table from '../../components/Table'
import Row from '../../components/Row'
import ContentContainer from '../../components/ContentContainer'

class TablesContainer extends Component {
  render() {
    return (
      <ContentContainer title="TABLES">
        <Row>
          <div className="col-md-6">
            <Panel header={true} headerText="Bordered Table">
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
          <div className="col-md-6">
            <Panel header={true} headerText="Non-Bordered Table">
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
                ]}
                border={false}

              />
            </Panel>
          </div>
        </Row>
      </ContentContainer>
    )
  }
}


export default TablesContainer;
