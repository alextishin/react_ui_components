import React, { Component } from 'react';
import ValidationForm from '../../components/ValidationForm'
import ValidationInput from '../../components/ValidationInput'
import Checkbox from '../../components/Checkbox'
import RadioGroup from '../../components/RadioGroup'
import Radio from '../../components/Radio'
import Combo from '../../components/Combo'
import Switcher from '../../components/Switcher'
import Panel from '../../components/Panel'



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
          <h1 className="content__header">FORM</h1>
          <Panel>
              <ValidationForm rules={formRules}>
                <div className="row">
                  <h3 className="info-header">Form Elements</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ValidationInput inputId="name" text="Text" name="text"/>
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
                      <Switcher name="switcher" label="Switcher 1"/>
                    </div>
                    <div className="col-md-6"></div>

                  </div>
                </div>
              </ValidationForm>
          </Panel>
        </div>
      </div>
    )
  }
}


export default FormElements;
