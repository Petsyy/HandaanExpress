import { Link } from "@inertiajs/react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	className?: string;
	type?: "button" | "submit" | "reset";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-orange-500 text-white shadow-lg shadow-orange-900/25 hover:bg-orange-600",
	secondary:
		"bg-white text-gray-800 shadow-lg shadow-gray-900/25 hover:bg-gray-100",
	ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-3 text-lg",
	icon: "p-0",
};

const baseClasses =
	"inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

export default function Button({
	children,
	href,
	variant = "primary",
	size = "md",
	className = "",
	type = "button",
	onClick,
}: ButtonProps) {
	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

	if (href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button type={type} onClick={onClick} className={classes}>
			{children}
		</button>
	);
}
