import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
	const { data: session } = useSession()

	if (session) {
		console.log(session)
		return (
			<>
				Signed in as {session.user.email}
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		)
	}

	return (
		<>
			Not signed in
			<button onClick={() => signIn()}>Sign In</button>
		</>
	)
}
