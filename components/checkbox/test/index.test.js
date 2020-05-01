import React from 'react';
import { render, mount,shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Checkbox from '../index';
const CheckboxGroup = Checkbox.CheckboxGroup

describe('Checkbox', () => {
  it('renders normal Checkbox', () => {
    const wrapper = render(
        <Checkbox value="Checkbox">
        复选框
      </Checkbox>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders disabled Checkbox', () => {
    const wrapper = render(
        <Checkbox value="Checkbox" disabled>
        复选框
      </Checkbox>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders indeterminate Checkbox', () => {
    const wrapper = render(
        <Checkbox value="Checkbox" indeterminate>
        复选框
      </Checkbox>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders checked Checkbox', () => {
    const wrapper = render(
        <Checkbox
        value="php"
        checked
      >
        Php
      </Checkbox>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should can trigger change event", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Checkbox onChange={onChange}  value="Checkbox">复选框</Checkbox>);
    wrapper.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });

  it('renders CheckboxGroup correctly', () => {
    const plainOptions = ["Php", "Java", "Js"];
    const wrapper = render(
        <CheckboxGroup options={plainOptions} value={["php","java", "js"]}/>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('renders defaultChecked Checkbox correctly', () => {
    const wrapper = render(
        <Checkbox
        value="js"
        defaultChecked
        onChange={e => {
          console.log(e.target.checked);
        }}
      >
        Javascript
      </Checkbox>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('behaves correctly when checking in CheckboxGroup', () => {
    const onChange = jest.fn();
    const wrapper = mount(
        <CheckboxGroup
          options={["1", "2", "3"]}
          value={["1", "2", "3"]}
          onChange={onChange}
        />
    );

    wrapper.find('input').first(0).simulate('change');

    expect(onChange).toHaveBeenCalled();
  });
});
