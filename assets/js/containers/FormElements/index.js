import React, { Component } from 'react';
import Row from '../../components/Row'
import ValidationForm from '../../components/ValidationForm'
import ValidationInput from '../../components/ValidationInput'
import Checkbox from '../../components/Checkbox'
import RadioGroup from '../../components/RadioGroup'
import Radio from '../../components/Radio'
import Combo from '../../components/Combo'
import Switcher from '../../components/Switcher'
import Panel from '../../components/Panel'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import ContentContainer from '../../components/ContentContainer'



class FormElements extends Component {

  render() {
    let formRules = {
      name: function (value) {
        if(value.length < 4) {
          console.log("меньше 3 символов");
          return false;
        }
        return true;
      }
    }

    return (
      <ContentContainer title="FORM">
        <Row>
          <div className="col-md-8">
            <Panel header={true} headerText="Form Elements">
              <ValidationForm rules={formRules}>
                <Row>
                  <div className="col-md-6">
                    <ValidationInput inputId="name" labelText="Text" name="text"/>
                    <Combo
                      labelText="Combo"
                      name="combo"
                      options={[
                      {id: 1, value: "Value 1"},
                      {id: 2, value: "Value 2"},
                      {id: 3, value: "Value 3"}
                    ]}
                    />
                    <div className="clearfix">
                      <div className="col-md-6">
                        <Checkbox labelText="Value 1" name="checkbox"/>
                        <Checkbox labelText="Value 2" name="checkbox"/>
                        <Checkbox labelText="Value 3" name="checkbox"/>
                      </div>
                      <div className="col-md-6">
                        <RadioGroup name="radio1">
                          <Radio name="radio1" labelText="Value 1" value="r1"/>
                          <Radio name="radio1" labelText="Value 2" value="r2"/>
                          <Radio name="radio1" labelText="Value 3" value="r2"/>
                        </RadioGroup>
                      </div>
                    </div>
                    <Switcher name="switcher" label="Switcher"/>
                    <Button type="button" value="Button"/>
                  </div>
                  <div className="col-md-6"></div>
                </Row>
              </ValidationForm>
            </Panel>
          </div>
          <div className="col-md-4">
            <Panel header={true} headerText="Icon Buttons">
              <Row>
                <IconButton icon="anchor" />
                <IconButton icon="bell-o" color="#bd3155"/>
                <IconButton icon="ban" color="#528439"/>
                <IconButton icon="exclamation-triangle" color="#7c3984"/>
              </Row>
              <Row>
                <IconButton icon="anchor" value="Anchor" />
                <IconButton icon="bell-o" color="#bd3155" value="Anchor"/>
                <IconButton icon="ban" color="#528439" value="Ban"/>
                <IconButton icon="exclamation-triangle" color="#7c3984" value="Warning"/>
              </Row>
            </Panel>
          </div>
        </Row>
      </ContentContainer>
    )
  }
}


export default FormElements;
