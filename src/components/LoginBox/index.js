import { Container, Footer, Header, LoginCard } from './styles';

import logo from '../../assets/logoLogin.svg';

export function LoginBox() {
	return (
		<>
			<Container>
				<Header>
					<h1>Create</h1>
					<strong>TECHNOLOGY</strong>
				</Header>

				<LoginCard>
					<form className="form">
						<img src={logo} />

						<h2>LOGIN</h2>

						<div>
							<label>E-mail / Username</label>
							<input type="text" name="email" />
							<p>User Não encontrado</p>
						</div>

						<div>
							<label>Senha</label>
							<input type="password" name="password" />
							<p>Senha nao Confere</p>
						</div>

						<button>ENTRAR</button>
					</form>
				</LoginCard>

				<p className="createAccount">DON'T HAVE AN ACCOUNT?</p>
			</Container>

			<Footer>KOLABS©2020 - ALL RIGHTS RESERVED</Footer>
		</>
	);
}
