import React, {Component} from 'react'
import ContentContainer from '../../components/ContentContainer'
import Panel from '../../components/Panel'
import Tree from '../../components/Tree'
import Row from '../../components/Row'
import Button from '../../components/Button'

class TreesContainer extends Component {

  collapseTree = () => {
    let tree = this.refs.tree;

    tree.collapseAll();
  }

  expandTree = () => {
    let tree = this.refs.tree;

    tree.expandAll();
  }

  render = () => {
    return(
     <ContentContainer title="TREES">
       <Panel styles={{height: '400px'}}>
         <Row>
           <div className="col-md-2">
             <Button value="Collapse All"
                     onClick={() => {this.collapseTree()}}
             />
             <Button value="Expand All"
                     onClick={() => {this.expandTree()}}
             />
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-9">
             <Tree ref="tree" data={[
                {name: "Book 1", data: [
                  {name: "Part 1" },
                  {name: "Part 2" }
                ]},
                {name: "Book 2", data: [
                  {name: "Part 1" }
                ]},
                {name: "Book 3"}
              ]}/>
           </div>
         </Row>
       </Panel>
     </ContentContainer>
    )
  }
}

export default TreesContainer;

