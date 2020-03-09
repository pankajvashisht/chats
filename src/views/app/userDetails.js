import React, { Fragment, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
const UserDetails = (props) => {
	const [ userDetails ] = useState({ ...props.location.state.post });
	return (
		<Fragment>
			<Card>
				<CardHeader>
					<h1 style={{ paddingTop: '31px' }}> User Details </h1>
				</CardHeader>
			</Card>
			<CardBody>
				<div>
					<b> First Name </b> : {userDetails.first_name}
				</div>
				<hr />
				<div>
					<b> Last Name </b> : {userDetails.last_name}
				</div>
				<hr />
				<div>
					<b> Email </b> : {userDetails.email}
				</div>
				<hr />
				<div>
					<b> Phone </b> : {userDetails.phone_code}
					{userDetails.phone}
				</div>
			</CardBody>
		</Fragment>
	);
};

export default UserDetails;
