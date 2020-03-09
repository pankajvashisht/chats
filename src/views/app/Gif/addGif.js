import React, { Fragment, useState, useReducer } from 'react';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import { Row, Card, CardBody, Input, CardTitle, FormGroup, Label, Button, Form } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { addGif } from '../../../Apis/admin';
import { NotificationManager } from '../../../components/common/react-notifications';
const initialState = {
	image: '',
	title: ''
};
const AddGif = React.memo(() => {
	const reducer = (form, action) => {
		switch (action.key) {
			case action.key:
				return { ...form, [action.key]: action.value };
			default:
				throw new Error('Unexpected action');
		}
	};
	const [ userForm, dispatch ] = useReducer(reducer, initialState);
	const [ perviewfile, setPerviewfile ] = useState();
	const [ loading, setIsLoading ] = useState(false);
	const [ redirect, setRedirect ] = useState(false);
	const addGifs = (event) => {
		event.preventDefault();
		setIsLoading(true);
		addGif(userForm)
			.then(() => {
				setRedirect(true);
				NotificationManager.success('Gif add successfully', 'Success', 3000, null, null, '');
			})
			.catch((err) => {
				if (err.response) {
					const { data } = err.response;
					NotificationManager.warning(data.error_message, 'Something went wrong', 3000, null, null, '');
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleInput = (key, value) => {
		dispatch({ key, value });
	};

	if (redirect) {
		return <Redirect to="/gifs" />;
	}
	return (
		<Fragment>
			<Row>
				<Colxx xxs="12">
					<h1>Add Gif</h1>
					<Separator className="mb-5" />
				</Colxx>
			</Row>
			<Row className="mb-4">
				<Colxx xxs="12">
					<Card>
						<CardBody>
							<CardTitle>Add Gif</CardTitle>
							<Form onSubmit={addGifs}>
								<FormGroup row>
									<Colxx sm={12}>
										<FormGroup>
											<Label for="exampleEmailGrid">Title</Label>
											<Input
												type="text"
												required={true}
												value={userForm.title}
												onChange={({ target }) => handleInput('title', target.value)}
												name="title"
												placeholder="Title"
											/>
										</FormGroup>
									</Colxx>

									<Colxx sm={12}>
										<FormGroup>
											<Label for="examplePasswordGrid">Image</Label>
											<Input
												type="file"
												accept="image/gif"
												required={true}
												onChange={({ target }) => {
													handleInput('image', target.files[0]);
													setPerviewfile(URL.createObjectURL(target.files[0]));
												}}
												name="image"
												placeholder=""
											/>
										</FormGroup>
									</Colxx>
									<Colxx>{perviewfile && <img height={200} width={200} src={perviewfile} />}</Colxx>
								</FormGroup>

								<Button
									disabled={loading}
									type="submit"
									className={`btn-shadow btn-multiple-state ${loading ? 'show-spinner' : ''}`}
									color="primary"
								>
									Save
								</Button>
							</Form>
						</CardBody>
					</Card>
				</Colxx>
			</Row>
		</Fragment>
	);
});

export default AddGif;
