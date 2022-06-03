import { shallowMount } from '@vue/test-utils';
import Footer from '~/components/footer.vue';

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.vm).toBeTruthy();
  });
  test('renders correctly', () => {
    const { $children } = shallowMount(Footer).vm;
    $children
      .map((e) => e.$el.tagName.toLowerCase() === 'a')
      .forEach((e) => expect(e).toBeTruthy());
  });
});
