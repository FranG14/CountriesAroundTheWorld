import React from 'react';
import { Link, Route } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('Deberia renderizar Dos <Link />', () => {
    expect(wrapper.find(Route)).toHaveLength(4);
  });
  it('El primer Link debe tener el texto "TODOS" y cambiar la ruta hacia "/".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Route).at(0).prop('path')).toEqual('/');
    // Tiene que ser literal! ojo con los espacios.
    // expect(wrapper.find(Link).at(0).text()).toEqual('TODOS');
  });
  it('El segundo Link debe tener el texto "Add Todo" y cambiar la ruta hacia "/add"', () => {
    expect(wrapper.find(Route).at(1).prop('path')).toEqual('/countries');
    // Tiene que ser literal! ojo con los espacios.
    // expect(wrapper.find(Link).at(1).text()).toEqual('Add Todo');
  });
  it('El segundo Link debe tener el texto "Add Todo" y cambiar la ruta hacia "/add"', () => {
    expect(wrapper.find(Route).at(2).prop('path')).toEqual('/country/:id');
    // Tiene que ser literal! ojo con los espacios.
    // expect(wrapper.find(Link).at(1).text()).toEqual('Add Todo');
  });
  it('El segundo Link debe tener el texto "Add Todo" y cambiar la ruta hacia "/add"', () => {
    expect(wrapper.find(Route).at(3).prop('path')).toEqual('/activities/new');
    // Tiene que ser literal! ojo con los espacios.
    // expect(wrapper.find(Link).at(1).text()).toEqual('Add Todo');
  });
})