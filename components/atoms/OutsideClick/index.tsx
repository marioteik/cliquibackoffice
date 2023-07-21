import * as React from "react";

interface OutsideClickProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickOutside: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function OutsideClick({
  onClickOutside,
  className,
  children,
}: OutsideClickProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

OutsideClick.displayName = "OutsideClick";

export { OutsideClick };
