import { authImg, logoImg } from "@/constants/assets_constant";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex-center min-h-screen w-full">
			<div className="flex-between background h-screen grow flex-col p-12">
				<Image src={logoImg} alt="logo" height={70} />
				{children}
			</div>
			<Image
				src={authImg}
				alt="background image"
				className="h-screen w-1/2 object-cover"
			/>
		</main>
	);
};

export default AuthLayout;