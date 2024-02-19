import { useRouter } from "next/router";

function GoBackButton() {
  const router = useRouter();

  return <button onClick={() => router.back()}>Go Back</button>;
}

export default GoBackButton;
