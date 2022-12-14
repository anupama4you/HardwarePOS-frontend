import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import ThemeContext from '../../../contexts/themeContext';

// eslint-disable-next-line react/prop-types
const CommonHeaderRight = ({ beforeChildren, afterChildren }) => {
	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const styledBtn = {
		color: 'light',
		hoverShadow: 'default',
		isLight: true,
		size: 'lg',
	};

	const [offcanvasStatus, setOffcanvasStatus] = useState(false);
	return (
		<HeaderRight>
			<div className='row g-3'>
				{beforeChildren}
				<div className='col-auto'>
					<Button
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...styledBtn}
						icon={fullScreenStatus ? 'Scale' : 'Fullscreen'}
						onClick={() => setFullScreenStatus(!fullScreenStatus)}
						aria-label='Toggle fullscreen'
					/>
				</div>

				<div className='col-auto'>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Button {...styledBtn} icon='CustomUsa' aria-label='Change language' />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd>
							<DropdownItem>
								<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
									<Icon icon='CustomUsa' /> English
								</div>
							</DropdownItem>
							<DropdownItem>
								<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
									<Icon icon='CustomGermany' /> Deutsche
								</div>
							</DropdownItem>
							<DropdownItem>
								<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
									<Icon icon='CustomFrance' /> Fran??ais
								</div>
							</DropdownItem>
							<DropdownItem>
								<div className='col text-nowrap overflow-hidden text-overflow-ellipsis'>
									<Icon icon='CustomTurkey' /> T??rk??e
								</div>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className='col-auto'>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Button {...styledBtn} icon='Tune' aria-label='Quick menu' />
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd size='lg' className='py-0 overflow-hidden'>
							<div className='row g-0'>
								<div className='col-12 p-4 d-flex justify-content-center fw-bold fs-5 bg-l25-info text-info border-bottom border-info'>
									Quick Panel
								</div>
								<div className='col-6 p-4 transition-base cursor-pointer bg-light-hover border-end border-bottom'>
									<div className='d-flex flex-column align-items-center justify-content-center'>
										<Icon icon='Public' size='3x' color='info' />
										<span>Dealers</span>
										<small className='text-muted'>Options</small>
									</div>
								</div>
								<div className='col-6 p-4 transition-base cursor-pointer bg-light-hover border-bottom'>
									<div className='d-flex flex-column align-items-center justify-content-center'>
										<Icon icon='Upcoming' size='3x' color='success' />
										<span>Inbox</span>
										<small className='text-muted'>Configuration</small>
									</div>
								</div>
								<div className='col-6 p-4 transition-base cursor-pointer bg-light-hover border-end'>
									<div className='d-flex flex-column align-items-center justify-content-center'>
										<Icon icon='Print' size='3x' color='danger' />
										<span>Print</span>
										<small className='text-muted'>Settings</small>
									</div>
								</div>
								<div className='col-6 p-4 transition-base cursor-pointer bg-light-hover'>
									<div className='d-flex flex-column align-items-center justify-content-center'>
										<Icon icon='ElectricalServices' size='3x' color='warning' />
										<span>Power</span>
										<small className='text-muted'>Mode</small>
									</div>
								</div>
							</div>
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className='col-auto'>
					<Button
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...styledBtn}
						icon='Notifications'
						onClick={() => setOffcanvasStatus(true)}
						aria-label='Notifications'
					/>
				</div>
				{afterChildren}
			</div>

			<OffCanvas
				id='notificationCanvas'
				titleId='offcanvasExampleLabel'
				placement='end'
				isOpen={offcanvasStatus}
				setOpen={setOffcanvasStatus}>
				<OffCanvasHeader setOpen={setOffcanvasStatus}>
					<OffCanvasTitle id='offcanvasExampleLabel'>Notifications</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Alert icon='ViewInAr' isLight color='info' className='flex-nowrap'>
						4 new components added.
					</Alert>
					<Alert icon='ThumbUp' isLight color='warning' className='flex-nowrap'>
						New products added to stock.
					</Alert>
					<Alert icon='Inventory2' isLight color='danger' className='flex-nowrap'>
						There are products that need to be packaged.
					</Alert>
					<Alert icon='BakeryDining' isLight color='success' className='flex-nowrap'>
						Your food order is waiting for you at the consultation.
					</Alert>
					<Alert icon='Escalator' isLight color='primary' className='flex-nowrap'>
						Escalator will turn off at 6:00 pm.
					</Alert>
				</OffCanvasBody>
			</OffCanvas>
		</HeaderRight>
	);
};
CommonHeaderRight.propTypes = {
	beforeChildren: PropTypes.node,
	afterChildren: PropTypes.node,
};
CommonHeaderRight.defaultProps = {
	beforeChildren: null,
	afterChildren: null,
};

export default CommonHeaderRight;
