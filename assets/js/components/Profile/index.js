import React, { Component } from 'react';
import ValidationForm from '../../components/ValidationForm'
import ValidationInput from '../../components/ValidationInput'
import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'


class Profile extends Component {

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
          <div className="panel">
            <div className="panel__body">
              <ValidationForm rules={formRules}>
                <div className="row">
                  <h3 className="info-header">Основная информация</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <ValidationInput inputId="name" text="Имя" name="name"/>
                      <Checkbox labelText="Checkbox 1" name="checkbox"/>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                </div>
              </ValidationForm>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Profile;
