import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import SummaryHeader from '../../pages/common/Headers/SummaryHeader';
import DashboardHeader from '../../pages/common/Headers/DashboardHeader';
import ComponentsHeader from '../../pages/common/Headers/ComponentsHeader';
import FormHeader from '../../pages/common/Headers/FormHeader';
import ChartsHeader from '../../pages/common/Headers/ChartsHeader';
import ContentHeader from '../../pages/common/Headers/ContentHeader';
import UtilitiesHeader from '../../pages/common/Headers/UtilitiesHeader';
import IconHeader from '../../pages/common/Headers/IconHeader';
import ExtrasHeader from '../../pages/common/Headers/ExtrasHeader';
import PageLayoutHeader from '../../pages/common/Headers/PageLayoutHeader';
import DefaultHeader from '../../pages/common/Headers/DefaultHeader';
import ProfilePageHeader from '../../pages/common/Headers/ProfilePageHeader';
import ProductsHeader from '../../pages/common/Headers/ProductsHeader';
import ProductListHeader from '../../pages/common/Headers/ProductListHeader';
import DashboardBookingHeader from '../../pages/common/Headers/DashboardBookingHeader';
import { componentsMenu, dashboardMenu, demoPages, layoutMenu } from '../../menu';

const HeaderRoutes = () => {
	const location = useLocation();

	//	Add paths to the array that you don't want to be "Header".
	const withoutHeaderPages = [
		layoutMenu.pageLayout.subMenu.onlySubheader.path,
		layoutMenu.pageLayout.subMenu.onlyContent.path,
		layoutMenu.blank.path,
		demoPages.login.path,
		demoPages.signUp.path,
		demoPages.page404.path,
		demoPages.knowledge.subMenu.grid.path,
	];

	return (
		<Switch location={location}>
			{/* BEGIN :: Custom Headers */}
			<Route
				path={[dashboardMenu.dashboard.path, demoPages.projectManagement.subMenu.list.path]}
				exact
				component={DashboardHeader}
			/>
			<Route
				path={[
					dashboardMenu.dashboardBooking.path,
					demoPages.appointment.subMenu.calendar.path,
					demoPages.appointment.subMenu.employeeList.path,
					demoPages.listPages.subMenu.listFluid.path,
					`${demoPages.editPages.path}/:path?`,
					`${demoPages.appointment.subMenu.employeeID.path}/:path?`,
					`${demoPages.projectManagement.subMenu.itemID.path}/:path?`,
				]}
				exact
				component={DashboardBookingHeader}
			/>

			<Route path={dashboardMenu.summary.path} exact component={SummaryHeader} />

			<Route
				path={[
					demoPages.singlePages.subMenu.fluidSingle.path,
					demoPages.singlePages.subMenu.boxedSingle.path,
					demoPages.sales.subMenu.transactions.path,
					demoPages.chat.subMenu.withListChat.path,
					demoPages.chat.subMenu.onlyListChat.path,
					`${demoPages.knowledge.subMenu.itemID.path}/:id`,
					demoPages.crm.subMenu.dashboard.path,
					demoPages.crm.subMenu.customersList.path,
					`${demoPages.crm.subMenu.customerID.path}/:id`,
				]}
				exact
				component={ProfilePageHeader}
			/>

			<Route
				path={[
					demoPages.gridPages.subMenu.gridBoxed.path,
					demoPages.gridPages.subMenu.gridFluid.path,
				]}
				exact
				component={ProductsHeader}
			/>
			<Route
				path={[
					demoPages.listPages.subMenu.listBoxed.path,
					demoPages.sales.subMenu.salesList.path,
					demoPages.sales.subMenu.productsGrid.path,
					`${demoPages.sales.subMenu.productID.path}/:id`,
				]}
				exact
				component={ProductListHeader}
			/>

			<Route path={`${componentsMenu.components.path}/:path?`} component={ComponentsHeader} />
			<Route path={`${componentsMenu.forms.path}/:path?`} component={FormHeader} />
			<Route path={`${componentsMenu.charts.path}/:path?`} component={ChartsHeader} />
			<Route path={`${componentsMenu.content.path}/:path?`} component={ContentHeader} />
			<Route path={`${componentsMenu.utilities.path}/:path?`} component={UtilitiesHeader} />
			<Route path={`${componentsMenu.icons.path}/:path?`} component={IconHeader} />
			<Route path={`${componentsMenu.extra.path}/:path?`} component={ExtrasHeader} />
			<Route
				path={[
					`${layoutMenu.asideTypes.path}/:path?`,
					layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
					layoutMenu.pageLayout.subMenu.onlyHeader.path,
				]}
				exact
				component={PageLayoutHeader}
			/>
			{/* END :: Custom Headers */}

			{/* BEGIN :: Without Header */}
			{withoutHeaderPages.map((path) => (
				<Route key={path} path={path} exact />
			))}
			{/* BEGIN :: Without Header */}

			<Route component={DefaultHeader} />
		</Switch>
	);
};

export default HeaderRoutes;
