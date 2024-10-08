import Image from "next/image";
import ExampleImg from "./image.jpeg"

export default function Page() {

  return (
    <div>
      <Image src="https://assets.quickr.dev/example2.jpeg" alt="Image loaded via URL" width={180} height={200} />
<br/><br/>
      <Image src={ExampleImg} alt="Image loaded via import" width={400}  />
    </div>
  );
}
