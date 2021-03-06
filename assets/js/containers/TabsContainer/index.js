/**
 * Created by alextishin on 11.10.16.
 */
import React, {Component} from 'react'
import Panel from '../../components/Panel'
import Window from '../../components/Window'
import Tabs from '../../components/Tabs'
import TabPanel from '../../components/Tabs/TabPanel'
import ContentContainer from '../../components/ContentContainer'

class TabsContainer extends Component {
  render() {
    return (
      <ContentContainer title="TABS">
        <Panel>
          <Tabs>
            <TabPanel title="Tab 1">
              <p>
                London is the capital of England and of the United Kingdom. It has the population about 8—9 million people. That's why it is one of the largest cities in Britain and one of the largest in the world. It is also one of the world's most important commercial and cultural cities. London is situated on the river Thames. It is known to Londoners simply as "the river". The Thames divides the city into two parts. There are fifteen bridges across the river. The most famous are Westminster, Waterloo, the Tower and London bridges. All of them carry heavy traffic from one side of the river to the other.
              </p>
            </TabPanel>
            <TabPanel title="Tab 2">
              <p>
                London is also interested because of its history. It reaches back to the Roman times and is recorded in the names of many of its streets. London was an important city in the Roman times. There are the Roman remains, mostly below its street level. In the Middle Ages it became the political and business capital of England and one of the most important cities in Europe.
              </p>
            </TabPanel>
            <TabPanel title="Tab 3">
              <p>
                The oldest part of London is the City. In the City are the great church, the bank of England and the Old Bailey, the central criminal court in England. By the Thames there is the tower of London. It is one of the most famous buildings in Britain. It served as a royal palace, a fortress and a prison. The City is the business centre of London. It is full of people during the day and becomes almost empty when the working day is over.
              </p>
            </TabPanel>
            <TabPanel title="Tab 4">
              <p>
                The West End is the richest and most beautiful parts of London. Trafalgar Square, which is situated here, is known for its fountains, pigeons and Nelson's Column. Behind Nelson's Column is the National Gallery, which has a priceless collection of paintings, including works by nearly all the great masters. To the west is Piccadilly Circus with its advertisements and lights. There is a saying that if you wait long enough in Piccadilly Circus you will see everyone you know there.
              </p>
            </TabPanel>
            <TabPanel title="Tab 5">
              <p>
                Near Piccadilly Circus is the area known as Soho. It is a colourful region of narrow streets, markets, shops and restaurants. Almost any kind of food can be eaten here Soho is a foreign quarter. A great many foreigners, particularly French people and Italians, live here. Not far from here there is a district known as Blooms-bury. It is the centre of books and learning in London. Its most important building is the British Museum. The British Museum library contains about 7,000,000 books. Near the British Museum is a tall, handsome, white building which is the main building of the University of London. London University has 19,000 students and is divided into a number of colleges and schools. There is much to see and to do in London. That's why thousands of tourists visit it each year.
              </p>
            </TabPanel>
          </Tabs>
        </Panel>
        <Panel>
          <Tabs vertical={true}>
            <TabPanel title="Tab 1">
              <p>
                London is the capital of England and of the United Kingdom. It has the population about 8—9 million people. That's why it is one of the largest cities in Britain and one of the largest in the world. It is also one of the world's most important commercial and cultural cities. London is situated on the river Thames. It is known to Londoners simply as "the river". The Thames divides the city into two parts. There are fifteen bridges across the river. The most famous are Westminster, Waterloo, the Tower and London bridges. All of them carry heavy traffic from one side of the river to the other.
              </p>
            </TabPanel>
            <TabPanel title="Tab 2">
              <p>
                London is also interested because of its history. It reaches back to the Roman times and is recorded in the names of many of its streets. London was an important city in the Roman times. There are the Roman remains, mostly below its street level. In the Middle Ages it became the political and business capital of England and one of the most important cities in Europe.
              </p>
            </TabPanel>
            <TabPanel title="Tab 3">
              <p>
                The oldest part of London is the City. In the City are the great church, the bank of England and the Old Bailey, the central criminal court in England. By the Thames there is the tower of London. It is one of the most famous buildings in Britain. It served as a royal palace, a fortress and a prison. The City is the business centre of London. It is full of people during the day and becomes almost empty when the working day is over.
              </p>
            </TabPanel>
            <TabPanel title="Tab 4">
              <p>
                The West End is the richest and most beautiful parts of London. Trafalgar Square, which is situated here, is known for its fountains, pigeons and Nelson's Column. Behind Nelson's Column is the National Gallery, which has a priceless collection of paintings, including works by nearly all the great masters. To the west is Piccadilly Circus with its advertisements and lights. There is a saying that if you wait long enough in Piccadilly Circus you will see everyone you know there.
              </p>
            </TabPanel>
            <TabPanel title="Tab 5">
              <p>
                Near Piccadilly Circus is the area known as Soho. It is a colourful region of narrow streets, markets, shops and restaurants. Almost any kind of food can be eaten here Soho is a foreign quarter. A great many foreigners, particularly French people and Italians, live here. Not far from here there is a district known as Blooms-bury. It is the centre of books and learning in London. Its most important building is the British Museum. The British Museum library contains about 7,000,000 books. Near the British Museum is a tall, handsome, white building which is the main building of the University of London. London University has 19,000 students and is divided into a number of colleges and schools. There is much to see and to do in London. That's why thousands of tourists visit it each year.
              </p>
            </TabPanel>
          </Tabs>
        </Panel>
      </ContentContainer>
    )
  }
}

export default TabsContainer;
