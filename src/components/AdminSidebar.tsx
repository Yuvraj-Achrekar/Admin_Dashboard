import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
	FaChartBar,
	FaChartLine,
	FaChartPie,
	FaGamepad,
	FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
	RiCoupon3Fill,
	RiDashboardFill,
	RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";

const AdminSidebar = () => {
	const location = useLocation();

	return (
		<aside>
			<h2>Logo.</h2>
			<div>
				<h5>Dashboard</h5>
				<ul>
					<Li
						url="/admin/dashboard"
						title="Dashboard"
						location={location}
						Icon={RiDashboardFill}
					/>
					<Li
						url="/admin/products"
						title="Product"
						location={location}
						Icon={RiShoppingBag3Fill}
					/>
					<Li
						url="/admin/customers"
						title="Customer"
						location={location}
						Icon={IoIosPeople}
					/>
					<Li
						url="/admin/transaction"
						title="Transaction"
						location={location}
						Icon={AiFillFileText}
					/>
				</ul>
			</div>
			<div>
				<h5>Charts</h5>
				<ul>
					<Li
						url="/admin/chart/bar"
						title="Bar"
						location={location}
						Icon={FaChartBar}
					/>
					<Li
						url="/admin/chart/pie"
						title="Pie"
						location={location}
						Icon={FaChartPie}
					/>
					<Li
						url="/admin/chart/line"
						title="Line"
						location={location}
						Icon={FaChartLine}
					/>
				</ul>
			</div>
			<div>
				<h5>Apps</h5>
				<ul>
					<Li
						url="/admin/app/stopwatch"
						title="Stopwatch"
						location={location}
						Icon={FaStopwatch}
					/>
					<Li
						url="/admin/app/coupon"
						title="Coupon"
						location={location}
						Icon={RiCoupon3Fill}
					/>
					<Li
						url="/admin/app/toss"
						title="Toss"
						location={location}
						Icon={FaGamepad}
					/>
				</ul>
			</div>
		</aside>
	);
};

// LI component
interface LiProps {
	url: string;
	title: string;
	Icon: IconType;
	location: Location;
}

const Li = ({ url, title, Icon, location }: LiProps) => (
	<li
		style={{
			backgroundColor: location.pathname.includes(url)
				? "rgba(0,115,255,0.1)"
				: "white",
		}}>
		<Link
			to={url}
			style={{
				color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
			}}>
			<Icon />
			{title}
		</Link>
	</li>
);

export default AdminSidebar;
