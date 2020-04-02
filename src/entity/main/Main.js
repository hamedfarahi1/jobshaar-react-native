import React, { useEffect } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import { store } from '../../core/_helpers';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { userActions } from '../../core/_actions';

const styles = StyleSheet.create({

})

function Main(props) {

	return <Container>
		<Header>
			{
				// change that later
				false ?
					<Left>
						<Button transparent>
							<Icon color="#fff" name='arrow-left' size={20} />
						</Button>
					</Left> : <Left>
						<Icon color="#fff" name='home' size={20} />
					</Left>
			}
			<Body>
				<Title >Jobshaar</Title>
			</Body>
			<Right>
				<Button transparent>
					<Icon color="#fff" name='bars' size={20} />
				</Button>
			</Right>
		</Header>
		<Content>
			<Text>
				This is Content Section
          </Text>
		</Content>
		{
			props.loggedIn &&
			<Footer>
				<FooterTab>
					<Button full>
						<Text>University Jon Community Service</Text>
					</Button>
				</FooterTab>
			</Footer>
		}
	</Container>
}
function mapState(state) {
	const { loggedIn } = state.authentication;
	return { loggedIn }
}

const connectedMainPage = connect(mapState, {})(Main)
export { connectedMainPage as Main }