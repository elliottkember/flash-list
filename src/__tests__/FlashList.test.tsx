import React, { useEffect } from "react";
import { ListRenderItem, Text } from "react-native";
import "@quilted/react-testing/matchers";
import { mount } from "@quilted/react-testing";
import { ProgressiveListView } from "recyclerlistview";

import FlashList, { FlashListProps } from "../FlashList";
import Warnings from "../errors/Warnings";
import AutoLayoutView from "../AutoLayoutView";

jest.mock("../FlashList", () => {
  const ActualFlashList = jest.requireActual("../FlashList").default;
  class MockFlashList extends ActualFlashList {
    componentDidMount() {
      super.componentDidMount();
      this.rlvRef?._scrollComponent?._scrollViewRef?.props.onLayout({
        nativeEvent: { layout: { height: 900, width: 400 } },
      });
    }
  }
  return MockFlashList;
});

export const mountFlashList = (props?: {
  horizontal?: boolean;
  keyExtractor?: (item: string, index: number) => string;
  initialScrollIndex?: number;
  numColumns?: number;
  estimatedFirstItemOffset?: number;
  data?: string[];
  renderItem?: ListRenderItem<string>;
  onLoad?: (info: { elapsedTimeInMs: number }) => void;
  overrideItemLayout?: (
    layout: { span?: number; size?: number },
    item: string,
    index: number,
    maxColumns: number,
    extraData?: any
  ) => void;
  estimatedItemSize?: number;
  ListEmptyComponent?: FlashListProps<string>["ListEmptyComponent"];
}) => {
  const flashList = mount(
    <FlashList
      horizontal={props?.horizontal}
      keyExtractor={props?.keyExtractor}
      renderItem={props?.renderItem || (({ item }) => <Text>{item}</Text>)}
      estimatedItemSize={props?.estimatedItemSize ?? 200}
      data={props?.data || ["One", "Two", "Three", "Four"]}
      initialScrollIndex={props?.initialScrollIndex}
      numColumns={props?.numColumns}
      estimatedFirstItemOffset={props?.estimatedFirstItemOffset}
      onLoad={props?.onLoad}
      overrideItemLayout={props?.overrideItemLayout}
      ListEmptyComponent={props?.ListEmptyComponent}
    />
  );
  return flashList;
};

describe("FlashList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders items", () => {
    const flashList = mountFlashList();
    expect(flashList).toContainReactComponent(Text, { children: "One" });
    expect(flashList).toContainReactComponent(ProgressiveListView, {
      isHorizontal: false,
    });
  });

  it("sets ProgressiveListView to horizontal", () => {
    const flashList = mountFlashList({ horizontal: true });
    expect(flashList).toContainReactComponent(ProgressiveListView, {
      isHorizontal: true,
    });
  });

  it("calls prepareForLayoutAnimationRender", () => {
    const flashList = mountFlashList({
      keyExtractor: (item) => item,
    });
    const warn = jest.spyOn(console, "warn").mockReturnValue();
    const prepareForLayoutAnimationRender = jest.spyOn(
      flashList.instance.rlvRef,
      "prepareForLayoutAnimationRender"
    );
    flashList.instance.prepareForLayoutAnimationRender();
    expect(prepareForLayoutAnimationRender).toHaveBeenCalledTimes(1);
    expect(warn).not.toHaveBeenCalled();
  });

  it("sends a warning when prepareForLayoutAnimationRender without keyExtractor", () => {
    const flashList = mountFlashList();
    const warn = jest.spyOn(console, "warn").mockReturnValue();
    const prepareForLayoutAnimationRender = jest.spyOn(
      flashList.instance.rlvRef,
      "prepareForLayoutAnimationRender"
    );
    flashList.instance.prepareForLayoutAnimationRender();
    expect(prepareForLayoutAnimationRender).not.toHaveBeenCalled();
    expect(warn).toHaveBeenCalledWith(Warnings.missingKeyExtractor);
  });

  it("disables initial scroll correction on recyclerlistview if initialScrollIndex is in first row", () => {
    let flashList = mountFlashList({ initialScrollIndex: 0, numColumns: 3 });
    expect(
      flashList.instance.getUpdatedWindowCorrectionConfig().applyToInitialOffset
    ).toBe(false);

    flashList = mountFlashList({ initialScrollIndex: 3, numColumns: 3 });
    expect(
      flashList.instance.getUpdatedWindowCorrectionConfig().applyToInitialOffset
    ).toBe(true);

    flashList = mountFlashList({ initialScrollIndex: 2, numColumns: 3 });
    expect(
      flashList.instance.getUpdatedWindowCorrectionConfig().applyToInitialOffset
    ).toBe(false);
  });

  it("assigns distance from window to window correction object", () => {
    const flashList = mountFlashList({ estimatedFirstItemOffset: 100 });
    expect(
      flashList.instance.getUpdatedWindowCorrectionConfig().value.windowShift
    ).toBe(-100);
  });

  it("only forwards onBlankArea prop to AutoLayout when needed", () => {
    const flashList = mountFlashList();
    const autoLayoutView = flashList.find(AutoLayoutView)?.instance;
    expect(autoLayoutView.props.onBlankAreaEvent).toBeUndefined();
    flashList.setProps({ onBlankArea: () => {} });
    expect(autoLayoutView.props.onBlankAreaEvent).not.toBeUndefined();
  });

  it("calls render item only when data of the items has changed", () => {
    const renderItemMock = jest.fn(({ item }) => {
      return <Text>{item}</Text>;
    });
    const flashList = mountFlashList({
      renderItem: renderItemMock,
      data: ["One", "Two", "Three", "Four"],
    });

    // because we have 4 data items
    expect(renderItemMock).toHaveBeenCalledTimes(4);
    // reset counter
    renderItemMock.mockClear();
    // changes layout of all four items
    flashList.setProps({ numColumns: 2 });
    // render item should be called 0 times because only layout of items would have changed
    expect(renderItemMock).toHaveBeenCalledTimes(0);
    flashList.unmount();
  });

  it("keeps component mounted based on prepareForLayoutAnimationRender being called", () => {
    // Tracks components being unmounted
    const unmountMock = jest.fn();
    const Item = ({ text }: { text: string }) => {
      useEffect(() => {
        return unmountMock;
      }, []);
      return <Text>{text}</Text>;
    };

    const flashList = mountFlashList({
      keyExtractor: (item) => item,
      renderItem: ({ item }) => {
        return <Item text={item} />;
      },
      data: ["One", "Two", "Three", "Four"],
    });

    // Change data without prepareForLayoutAnimationRender
    flashList.setProps({ data: ["One", "Two", "Three", "Five"] });
    expect(unmountMock).not.toHaveBeenCalled();

    // Before changing data, we run prepareForLayoutAnimationRender.
    // This ensures component gets unmounted instead of being recycled to ensure layout animations run as expected.
    flashList.instance.prepareForLayoutAnimationRender();
    flashList.setProps({ data: ["One", "Two", "Three", "Six"] });
    expect(unmountMock).toHaveBeenCalledTimes(1);
  });
  it("fires onLoad event", () => {
    const onLoadMock = jest.fn();

    // empty list
    mountFlashList({ data: [], onLoad: onLoadMock });
    expect(onLoadMock).toHaveBeenCalledWith({
      elapsedTimeInMs: expect.any(Number),
    });

    onLoadMock.mockClear();

    // non-empty list
    const flashList = mountFlashList({ onLoad: onLoadMock });
    flashList.find(ProgressiveListView)?.instance.onItemLayout(0);
    expect(onLoadMock).toHaveBeenCalledWith({
      elapsedTimeInMs: expect.any(Number),
    });
  });
  it("loads an empty state", () => {
    const EmptyComponent = () => {
      return <Text>Empty</Text>;
    };
    const flashList = mountFlashList({
      data: [],
      ListEmptyComponent: EmptyComponent,
    });
    expect(flashList).toContainReactComponent(EmptyComponent);
  });
  it("reports layout changes to the layout provider", () => {
    const flashList = mountFlashList();
    const reportItemLayoutMock = jest.spyOn(
      flashList.instance.state.layoutProvider,
      "reportItemLayout"
    );
    flashList.find(ProgressiveListView)?.instance.onItemLayout(0);
    expect(reportItemLayoutMock).toHaveBeenCalledWith(0);
    flashList.unmount();
  });
  it("should prefer overrideItemLayout over estimate and average", () => {
    const flashList = mountFlashList({
      overrideItemLayout: (layout) => {
        layout.size = 50;
      },
    });
    expect(flashList.instance.state.layoutProvider.averageItemSize).toBe(200);
    expect(
      flashList.instance.state.layoutProvider.getLayoutManager().getLayouts()[0]
        .height
    ).toBe(50);
  });
  it("should override span with overrideItemLayout", () => {
    const renderItemMock = jest.fn(({ item }) => {
      return <Text>{item}</Text>;
    });
    mountFlashList({
      overrideItemLayout: (layout) => {
        layout.span = 2;
      },
      numColumns: 2,
      estimatedItemSize: 300,
      renderItem: renderItemMock,
    });
    expect(renderItemMock).toHaveBeenCalledTimes(3);

    renderItemMock.mockClear();
    mountFlashList({
      overrideItemLayout: (layout, _, index) => {
        if (index > 2) {
          layout.span = 2;
        }
      },
      data: new Array(20).fill(""),
      numColumns: 3,
      estimatedItemSize: 100,
      renderItem: renderItemMock,
    });

    expect(renderItemMock).toHaveBeenCalledTimes(11);
  });
  it("overrideItemLayout should consider 0 as a valid span", () => {
    const renderItemMock = jest.fn(({ item }) => {
      return <Text>{item}</Text>;
    });
    mountFlashList({
      overrideItemLayout: (layout, _, index) => {
        if (index < 4) {
          layout.span = 0;
        }
      },
      data: new Array(20).fill(""),
      numColumns: 2,
      renderItem: renderItemMock,
    });
    expect(renderItemMock).toHaveBeenCalledTimes(14);
  });
});
