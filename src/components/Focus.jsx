import { useEffect, useRef } from "react";

export default function Focus() {
  const refValue = useRef()
  useEffect(() => {
    refValue.current.focus()
  },[])
  return (
    <div>
      <input type="text" className="input" ref={refValue} />
    </div>
  );
}
