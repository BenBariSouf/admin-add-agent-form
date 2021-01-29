import Logo from "../logo.png";

export default function Login() {
	return (
		<div>
			<div class="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
				<div class="max-w-md w-full space-y-8 max-w-lg bg-white shadow-xl rounded-xl overflow-hidden mx-auto p-12 mb-14">
					<h2 class="text-center text-4xl font-extrabold text-gray-900">
						Bienvenue à ENSA Pay
					</h2>
					<div>
						<img class="mx-auto h-12 w-auto logo" src={Logo} alt="logo" />
						<h2 class="text-center text-2xl font-extrabold text-gray-900">
							Connectez-vous à votre compte administrateur
						</h2>
					</div>
					<form class="mt-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" value="true" />
						<div class="rounded-md shadow-sm -space-y-px">
							<div>
								<input
									id="login"
									name="login"
									type="text"
									required
									class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Login"
								/>
							</div>
							<div>
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-5"
									placeholder="Mot de passe"
								/>
							</div>
						</div>

						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<input
									id="remember_me"
									name="remember_me"
									type="checkbox"
									class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
								/>
								<label
									for="remember_me"
									class="ml-2 block text-sm text-gray-900"
								>
									Rester connecté
								</label>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
							>
								<span class="absolute left-0 inset-y-0 flex items-center pl-3">
									<svg
										class="h-5 w-5 text-green-900 group-hover:text-green-200"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
								S'authentifier
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
