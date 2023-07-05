import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";

const Calender = () => {
	const session = useSession();
	const supabase = useSupabaseClient();
	async function googleSignIn() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				scopes: "https://www.googleapis.com/auth/calendar",
				redirectTo: "http://localhost:3000/Patientdashboard/Remainder",
			},
		});
		if (error) {
			alert("Error in Authorization Google");
			console.log(Error);
		}
	}
	async function signOut() {
		await supabase.auth.signOut();
	}
	async function createCalenderEvent() {
		console.log("Event Created");
		const event = {
			summary: pillName,
			description: pillDescription,
			start: {
				dateTime: pillStartTime.toISOString(),
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			},
			end: {
				dateTime: pillEndTime.toISOString(),
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			},
		};
		await fetch(
			"https://www.googleapis.com/calendar/v3/calendars/primary/events",
			{
				method: "POST",
				key: "AIzaSyCrBW4UQ8HP146KI5qNXFN55wu-8tEl-Dg",
				headers: {
					Authorization: "Bearer " + session.provider_token,
				},
				body: JSON.stringify(event),
			}
		)
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				console.log(data);
				alert("Event Created in Your Calender");
			});
	}
	const [pillName, setPillName] = useState("");
	const [pillStartTime, setPillStartTime] = React.useState(
		dayjs("2023-01-01T00:00")
	);
	const [pillEndTime, setPillEndTime] = React.useState(
		dayjs("2023-01-01T00:00")
	);
	const [pillDescription, setpillDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Pill name: ${pillName}, Pill time: ${pillStartTime}`);
	};

	return (
		<div className="Calender">
			<div style={{ width: "800px" }}>
				{session ? (
					<>
						<h2>Hey there {session.user.email}</h2>
						<button onClick={() => signOut()}>SignOut with Google</button>
					</>
				) : (
					<>
						<button onClick={() => googleSignIn()}>
							Authorize with Google
						</button>
					</>
				)}
			</div>
			<form onSubmit={handleSubmit} className="pill-form">
				<label htmlFor="pill-name" className="label">
					Pill Name:
				</label>
				<input
					type="text"
					id="pill-name"
					value={pillName}
					onChange={(e) => setPillName(e.target.value)}
					className="input"
					required
				/>
				<label htmlFor="pill-name" className="label">
					Pill Description:
				</label>
				<input
					type="text"
					id="pill-name"
					value={pillDescription}
					onChange={(e) => setpillDescription(e.target.value)}
					className="input"
					required
				/>
				<div className="pilltimeselect">
					<div className="pilltime">
						<label htmlFor="pill-time" className="label">
							Pill Start Date and Time:
						</label>
						<br></br>
						<div className="finaltime">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<StaticDateTimePicker
									label="Uncontrolled picker"
									ampm={false}
									orientation="landscape"
									value={pillStartTime || ""}
									onChange={(pillStartTime) => setPillStartTime(pillStartTime)}
								/>
							</LocalizationProvider>
						</div>{" "}
						<div className="finaltime"></div>
					</div>
					<div className="pilltime">
						<label htmlFor="pill-time" className="label">
							Pill End Date and Time:
						</label>
						<br></br>
						<div className="finaltime">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<StaticDateTimePicker
									label="Uncontrolled picker"
									ampm={false}
									orientation="landscape"
									value={pillEndTime || ""}
									onChange={(pillEndTime) => setPillEndTime(pillEndTime)}
								/>
							</LocalizationProvider>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="button"
					onClick={() => createCalenderEvent()}>
					Save Pill
				</button>
			</form>
		</div>
	);
};

export default Calender;
