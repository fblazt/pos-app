import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/modules/Navbar.vue';

describe('Home.vue', () => {
  it('renders navTitle when passed', () => {
    const navTitle = 'Home';
    const wrapper = shallowMount(Navbar, {
      propsData: { navTitle },
    });
    expect(wrapper.text()).to.include(navTitle);
  });
});
