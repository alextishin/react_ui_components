import React, { Component } from 'react';
import ValidationForm from '../../components/ValidationForm'
import ValidationInput from '../../components/ValidationInput'
import Checkbox from '../../components/Checkbox'
import RadioGroup from '../../components/RadioGroup'
import Radio from '../../components/Radio'
import Combo from '../../components/Combo'
import Switcher from '../../components/Switcher'
import Panel from '../../components/Panel'
import Window from '../../components/Window'
import Tabs from '../../components/Tabs'
import TabPanel from '../../components/Tabs/TabPanel'


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
      <div className="content">
        <div className="content__block">
          <h1 className="content__header">Профиль</h1>
          <Panel>
              <ValidationForm rules={formRules}>
                <div className="row">
                  <h3 className="info-header">Основная информация</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ValidationInput inputId="name" text="Имя" name="name"/>
                      <Combo
                        labelText="Combo 1"
                        name="combo"
                        options={[
                          {id: 1, value: "value1"},
                          {id: 2, value: "value2"},
                          {id: 3, value: "value3"}
                        ]}
                      />
                      <Switcher name="switcher"/>
                      <Checkbox labelText="Checkbox 1" name="checkbox"/>
                      <RadioGroup name="radio1">
                        <Radio name="radio1" labelText="Radio 1" value="r1"/>
                        <Radio name="radio1" labelText="Radio 2" value="r2"/>
                      </RadioGroup>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                </div>
              </ValidationForm>
          </Panel>
          <Panel>
            <Tabs>
              <TabPanel title="Tab 1">Tab1</TabPanel>
              <TabPanel title="Tab 2">Tab2</TabPanel>
              <TabPanel title="Tab 3">Tab3</TabPanel>
            </Tabs>
          </Panel>
        </div>
      </div>
    )
  }
}


export default FormElements;
