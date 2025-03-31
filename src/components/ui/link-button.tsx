
import { Link, LinkProps } from "react-router-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = ButtonProps & LinkProps & {
  children: React.ReactNode;
};

const LinkButton = ({
  to,
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <Link to={to} className="w-fit">
      <Button variant={variant} size={size} className={className} {...props}>
        {children}
      </Button>
    </Link>
  );
};

export { LinkButton };
