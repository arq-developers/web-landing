"use client";

import { useState } from "react";

const ContactForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("");

		if (!firstName || !lastName || !email || !contactNumber || !message) {
			setStatus("Please fill in all fields.");
			return;
		}

		const phonePattern = /^\+63\d{10}$/;
		if (!phonePattern.test(`+63${contactNumber}`)) {
			setStatus(
				"Please enter a valid Philippine phone number (e.g., +631234567890).",
			);
			return;
		}
		setStatus("Email sent successfully!");

		setFirstName("");
		setLastName("");
		setEmail("");
		setContactNumber("");
		setMessage("");
	};

	const handleContactNumberChange = (e) => {
		const input = e.target.value;

		if (/^\d{0,10}$/.test(input)) {
			setContactNumber(input);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 mt-0 md:mt-8"
		>
			<div className="flex items-center justify-center gap-4 w-full">
				<div className="flex flex-col items-start justify-center w-1/2 gap-1">
					<label htmlFor="firstName" className="text-xs sm:text-sm">
						First Name
					</label>
					<input
						type="text"
						id="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className="w-full bg-blue-dark/5 border-transparent p-2 rounded-sm"
						required
					/>
				</div>
				<div className="flex flex-col items-start justify-center w-1/2 gap-1">
					<label htmlFor="lastName" className="text-xs sm:text-sm">
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className="w-full bg-blue-dark/5 border-transparent p-2 rounded-sm"
						required
					/>
				</div>
			</div>
			<div className="flex flex-col items-start justify-center gap-1 w-full">
				<label htmlFor="email" className="text-xs sm:text-sm">
					Email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full bg-blue-dark/5 border-transparent p-2 rounded-sm"
					required
				/>
			</div>
			<div className="flex flex-col items-start justify-center gap-1 w-full">
				<label htmlFor="contactNumber" className="text-xs sm:text-sm">
					Contact Number
				</label>
				<div className="flex items-center w-full">
					<span className="bg-blue-dark/5 border-transparent p-2 rounded-sm text-gray-500">
						+63
					</span>
					<input
						type="text"
						id="contactNumber"
						value={contactNumber}
						onChange={handleContactNumberChange}
						required
						maxLength={10}
						className="w-full bg-blue-dark/5 border-transparent p-2 rounded-sm ml-1"
					/>
				</div>
			</div>
			<div className="flex flex-col items-start justify-center gap-1 w-full">
				<label htmlFor="message" className="text-xs sm:text-sm">
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="min-h-[150px] resize-y w-full bg-blue-dark/5 border-transparent p-2 rounded-sm"
					required
				/>
			</div>
			<button
				type="submit"
				className="bg-yellow-dark py-2 px-7 rounded-sm text-white-soft font-medium text-sm md:text-base border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-blue-dark hover:text-blue-dark transition-all duration-300 w-full mt-4 cursor-pointer"
			>
				Send
			</button>
			{status && <p>{status}</p>}
		</form>
	);
};

export default ContactForm;
