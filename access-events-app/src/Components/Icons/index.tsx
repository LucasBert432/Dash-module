import { FunctionComponent, useMemo, Suspense } from "react";
import { PropsIcon } from "./icon-types";
import iconMap from "./icon-map.ts";
import useThemeStyles from "../../hook/useThemeStyles.ts";
import { useThemeStore } from "../../globalStore/globalStore.ts";
const EmptyIcon = () => <div />;

const Icon: FunctionComponent<PropsIcon> = ({
  name,
  size = "20px",
  width = "",
  height = "",
  color,
  ariaLabel,
  ...rest
}) => {
  const styles = useThemeStyles();
  const { isWhite } = useThemeStore();

  const Icon = name ? iconMap?.icons?.[name] : EmptyIcon;
  const style = useMemo(() => {
    const realSize: { width: string; height: string } = {
      width: "unset",
      height: "unset",
    };
    if (width || height) {
      if (width) realSize.width = width;
      if (height) realSize.height = height;
      return realSize;
    }
    return { width: size, height: size };
  }, [height, size, width]);

  return (
    <Suspense fallback={<i />}>
      <Icon
        style={style}
        color={isWhite ? styles.defaultDark : styles.defaultDarkGreen}
        aria-label={ariaLabel}
        {...rest}
      />
    </Suspense>
  );
};

export default Icon;
