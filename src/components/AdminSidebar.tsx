import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
	return (
		<aside>
			<h2>Logo.</h2>
			<div>
				<h5>Dashboard</h5>
				<ul>
					<li>
						<Link to={"/admin/dashboard"}>
							<RiDashboardFill />
							Dashboard
						</Link>
					</li>
					<li>
						<Link to={"/admin/products"}>
							<RiShoppingBag3Fill />
							Product
						</Link>
					</li>
					<li>
						<Link to={"/admin/customer"}>
							<IoIosPeople />
							Customer
						</Link>
					</li>
					<li>
						<Link to={"/admin/transaction"}>
							<AiFillFileText />
							Transaction
						</Link>
					</li>
				</ul>
			</div>
			{/* <div>
				<h5>Charts</h5>
				<Link to={""}>Bar</Link>
				<Link to={""}>Pie</Link>
				<Link to={""}>Line</Link>
			</div>
			<div>
				<h5>Apps</h5>
				<Link to={""}>Stopwatch</Link>
				<Link to={""}>Coupon</Link>
				<Link to={""}>Toss</Link>
			</div> */}
		</aside>
	);
};

export default AdminSidebar;
