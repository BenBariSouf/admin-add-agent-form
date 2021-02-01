import Banner from "./Banner";
import checkMark from "../assets/checkMark.svg";
import xSymbol from "../assets/xSymbol.svg";

export default function AddAgent() {
	return (
		<>
			<div className="min-h-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
				<Banner />
				<div className="mt-10 sm:mt-0 m-12 min-w-2xl">
					<div className="md:grid md:grid-cols-1 md:gap-6 form mx-auto">
						<div className="mt-5 md:mt-0 md:col-span-2 p-9 ">
							<h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
								Créer un nouvel agent
							</h2>
							<form action="#" method="POST">
								<div className="shadow-2xl overflow-hidden sm:rounded-xl">
									<div className="px-4 py-5 bg-white sm:p-6">
										<div className="px-4 sm:px-0 ">
											<h3 className="text-xl font-sans font-medium leading-6 text-gray-900">
												Informations personnelles
											</h3>
										</div>

										<div className="hidden sm:block" aria-hidden="true">
											<div className="py-5">
												<div className="border-t border-blue-200"></div>
											</div>
										</div>

										<div className="mt-5 grid grid-cols-6 gap-6">
											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="first_name"
													className="block text-sm font-medium text-gray-700"
												>
													Nom*
												</label>
												<input
													type="text"
													name="nom"
													id="nom"
													autoComplete="nom"
													required
													className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3">
												<label
													htmlFor="last_name"
													className="block text-sm font-medium text-gray-700"
												>
													Prénom*
												</label>
												<input
													type="text"
													name="prenom"
													id="prenom"
													autoComplete="prenom"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="country"
													className="block text-sm font-medium text-gray-700"
												>
													Pièce d'identité
												</label>
												<select
													id="identity"
													name="identity"
													autoComplete="identity"
													required
													className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
												>
													<option>C.I.N</option>
													<option>Option 2</option>
													<option>Option 3</option>
												</select>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="date_naissance"
													className="block text-sm font-medium text-gray-700"
												>
													N° de pièce d'identité
												</label>
												<input
													type="text"
													name="nbr_identity"
													id="nbr_identity"
													autoComplete="nbr_identity"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="date_naissance"
													className="block text-sm font-medium text-gray-700"
												>
													Date de naissance
												</label>
												<input
													type="date"
													name="date_naissance"
													id="date_naissance"
													autoComplete="date_naissance"
													required
													className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="adresse"
													className="block text-sm font-medium text-gray-700"
												>
													Adresse*
												</label>
												<input
													type="text"
													name="adresse"
													id="adresse"
													autoComplete="adresse"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="email"
													className="block text-sm font-medium text-gray-700"
												>
													Email*
												</label>
												<input
													type="email"
													name="email"
													id="email"
													autoComplete="email"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="email_confirmation"
													className="block text-sm font-medium text-gray-700"
												>
													Confirmation Email
												</label>
												<input
													type="email"
													name="email_confirmation"
													id="email_confirmation"
													autoComplete="email"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="telephone"
													className="block text-sm font-medium text-gray-700"
												>
													Numéro de téléphone*
												</label>
												<input
													type="text"
													name="telephone"
													id="telephone"
													autoComplete="telephone"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="num_immatriculation"
													className="block text-sm font-medium text-gray-700"
												>
													N° d'immatriculation au registre de commerce*
												</label>
												<input
													type="text"
													name="num_immatriculation"
													id="num_immatriculation"
													autoComplete="num_immatriculation"
													required
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>

											<div className="col-span-6 sm:col-span-3 mt-4">
												<label
													htmlFor="num_immatriculation"
													className="block text-sm font-medium text-gray-700"
												>
													N° de patente
												</label>
												<input
													type="text"
													name="num_immatriculation"
													id="num_immatriculation"
													autoComplete="num_immatriculation"
													className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
												/>
											</div>
										</div>

										<div className="px-4 py-3 sm:px-0 ">
											<h3 className="mt-12 text-xl font-medium leading-6 text-gray-900">
												Pièces jointes
											</h3>
										</div>
										<div className="hidden sm:block" aria-hidden="true">
											<div className="py-5">
												<div className="border-t border-blue-200"></div>
											</div>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="street_address"
												className="block text-sm font-medium text-gray-700"
											>
												Description
											</label>
											<input
												type="text"
												name="description"
												id="description"
												className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 mt-5">
												Fichier
											</label>
											<div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
												<div className="space-y-1 text-center">
													<div className="flex text-sm text-gray-600">
														<label
															htmlFor="file-upload"
															className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
														>
															<span>Choisir un fichier</span>
															<input
																id="file-upload"
																name="file-upload"
																type="file"
																className="sr-only"
															/>
														</label>
														<p className="pl-1">ou glisser et déposer un</p>
													</div>
													<p className="text-xs text-gray-500">
														PNG, JPG, GIF jusqu'à 10MB
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="p-6 bg-gray-50 text-right sm:px-6 flex justify-center">
										<button
											type="reset"
											className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm mr-10 font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
										>
											<img src={xSymbol} className="w-3 my-auto mr-2" />
											Annuler
										</button>

										<button
											type="submit"
											className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 "
										>
											<img src={checkMark} className="w-3 my-auto mr-2" />
											Enregistrer
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
