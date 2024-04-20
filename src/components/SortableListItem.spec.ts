import { describe, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import SortableListItem from "./SortableListItem.vue";
import SortableButtons from "./SortableButtons.vue";
import { makePosts } from "@/test/factory";

const post = makePosts(1)[0];

describe("SortableListItem", () => {
  test("renders with post id", () => {
    const wrapper = mount(SortableListItem, {
      props: { post },
    });
    expect(wrapper.text()).toContain(`Post ${post.id}`);
  });

  test("renders ordering buttons", () => {
    const wrapper = mount(SortableListItem, {
      props: { post },
    });
    expect(wrapper.findComponent(SortableButtons).exists()).toBe(true);
  });

  test("renders only Down button if the post is the first", () => {
    const wrapper = mount(SortableListItem, {
      props: { post, isFirst: true },
    });
    expect(wrapper.find('[data-testid="up-button"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="down-button"]').exists()).toBe(true);
  });

  test("renders only Up button if the post is the first", () => {
    const wrapper = mount(SortableListItem, {
      props: { post, isLast: true },
    });
    expect(wrapper.find('[data-testid="up-button"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="down-button"]').exists()).toBe(false);
  });

  test("doesn't render ordering buttons if the post is a single (is first and is last)", () => {
    const wrapper = mount(SortableListItem, {
      props: { post, isFirst: true, isLast: true },
    });
    expect(wrapper.find('[data-testid="up-button"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="down-button"]').exists()).toBe(false);
  });
});
