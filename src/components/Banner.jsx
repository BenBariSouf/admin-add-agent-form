import Logo from "../assets/logo.png";

export default function Banner() {
	return (
		<div>
			<div className="max-w-6xl w-full space-y-8 bg-green-100 shadow-xl rounded-xl overflow-hidden mx-auto mb-14 mt-12">
				<div className="flex justify-evenly ">
					<div className=" md:justify-start md:space-x-10 ">
						<a href="#">
							<span className="sr-only">Logo</span>
							<img className="h-8 sm:h-10 logo2" src={Logo} alt="logo" />
						</a>
					</div>

					<div className=" my-auto md:justify-start md:space-x-10">
						<span className="mt-12 text-xl font-medium leading-6 text-gray-900">
							Nom, Prénom dial admin
						</span>
					</div>
					<div className=" my-auto md:justify-start md:space-x-10">
						<span className="mt-12 text-xl font-medium leading-6 text-gray-900">
							Logout
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
