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

  addItem = () => {
    let tree = this.refs.tree;

    tree.add('xxYuasdi', {id: 'sdseeqdSa', name: "Part 3"});
  }

  removeItem = () => {
    let tree = this.refs.tree;

    tree.remove('sdseeqdSa');
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
             <Button value="Add To Book 1"
                     onClick={() => {this.addItem()}}
             />
             <Button value="Remove Part 3"
                     onClick={() => {this.removeItem()}}
             />
           </div>
           <div className="col-md-1"></div>
           <div className="col-md-9">
             <Tree ref="tree" data={[
                {name: "Book 1", id:'xxYuasdi', data: [
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

