import React, {Component} from 'react'
import ContentContainer from '../../components/ContentContainer'
import Panel from '../../components/Panel'
import Tree from '../../components/Tree'

class TreesContainer extends Component {

  render = () => {
    return(
     <ContentContainer title="TREES">
       <Panel>
         <Tree data={[
          {name: "Book 1", data: [
            {name: "Part 1" },
            {name: "Part 2" }
          ]},
          {name: "Book 2", data: [
            {name: "Part 1" }
          ]},
          {name: "Book 3"}
        ]}/>
       </Panel>
     </ContentContainer>
    )
  }
}

export default TreesContainer;

