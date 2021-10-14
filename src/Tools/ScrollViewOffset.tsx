import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InteractionManager,
  ScrollView,
  ScrollViewProps,
  View,
} from "react-native";

function ScrollViewOffset(
  props: ScrollViewProps & { children: ReactNode; startAtEnd?: boolean }
) {
  const scrollViewRef: MutableRefObject<ScrollView | null> = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (props.startAtEnd) {
        scrollViewRef.current!.scrollToEnd({ animated: false });
      } else if (props.contentOffset) {
        scrollViewRef.current!.scrollTo({
          ...props.contentOffset,
          animated: false,
        });
      }

      setTimeout(() => {
        setOpacity(1);
      }, 1);
    });
  }, [props.contentOffset, props.startAtEnd]);

  return (
    <View style={{ opacity }}>
      <ScrollView {...props} ref={scrollViewRef} />
    </View>
  );
}

export default ScrollViewOffset;
