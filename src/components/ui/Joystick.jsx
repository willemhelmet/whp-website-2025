// taken from:
// https://github.com/pmndrs/ecctrl/blob/main/example/index.tsx
import { useState, useEffect } from "react";
import { EcctrlJoystick } from "ecctrl";
function Joystick() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);
  return <>{isTouchScreen && <EcctrlJoystick buttonNumber={0} />}</>;
}
export default Joystick;
