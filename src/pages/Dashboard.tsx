import { FaSearch } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { CiBellOn } from "react-icons/ci";
import user from "../assets/user.png";
import WidgetItem from "../components/WidgetItem";

const Dashboard = () => {
	return (
		<div className="adminContainer">
			<AdminSidebar />
			<main className="dashboard">
				<div className="bar">
					<FaSearch />
					<input type="text" placeholder="Search for data ,users,docs" />
					<CiBellOn />
					<img src={user} alt="User" />
				</div>
				<section className="widgetContainer">
					<div className="widgetCarousel">
						<WidgetItem
							percent={40}
							value={340000}
							heading="Revenue"
							color="rgb(0,155,155)"
						/>
						<WidgetItem
							percent={-60}
							value={400}
							heading="Revenue"
							color="rgb(24, 10, 87)"
						/>
						<WidgetItem
							percent={80}
							value={53000}
							heading="Revenue"
							color="rgb(155, 0, 59)"
						/>
						<WidgetItem
							percent={20}
							value={3000}
							heading="Revenue"
							color="rgb(61, 5, 52)"
						/>
					</div>
				</section>
				<section className="graphContainer">
					<div className="revenueChart">
						<h2>Revenue & Transaction</h2>
					</div>
					<div className="dashboardCategories">
						<h2>Inventory</h2>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
