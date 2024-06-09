import { FaSearch } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { CiBellOn } from "react-icons/ci";
import user from "../assets/user.png";
import WidgetItem from "../components/WidgetItem";
import CategoryItem from "../components/CategoryItem";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";
import DashboardTable from "../components/DashboardTable";

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
						<BarChart
							data_1={[344, 342, 343, 434, 433, 555, 666, 455]}
							data_2={[456, 345, 657, 876, 855, 677, 554, 664]}
							title_1="Revenue"
							title_2="Transaction"
							bgColor_1="red"
							bgColor_2="blue"
						/>
					</div>
					<div className="dashboardCategories">
						<h2>Inventory</h2>
						<div>
							{data.categories.map((cat, index) => (
								<CategoryItem
									key={index}
									color={`hsl(${cat.value * 4},${cat.value}%,50%)`}
									heading={cat.heading}
									value={cat.value}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="transactionContainer">
					<div className="genderChart">
						<h2>Gender Ratio</h2>
						{/* Chart */}
						<DoughnutChart
							labels={["Female", "Male"]}
							data={[12, 19]}
							backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8) "]}
							cutout={90}
						/>
						<p>
							<BiMaleFemale />
						</p>
					</div>
					{/* Table */}
					<DashboardTable data={data.transaction} />
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
