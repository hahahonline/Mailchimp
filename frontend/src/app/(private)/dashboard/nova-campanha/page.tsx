import Image from "next/image";
import { NewCampaignForm } from "./components/new-campaign-form";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 flex-1 gap-20">
      <div className="flex flex-col gap-10 self-center">
        <h1 className="text-3xl font-semibold">Nova campanha</h1>
        <NewCampaignForm />
      </div>
      <Image
        className="self-center"
        src="/assets/images/nova-campanha.png"
        width={524}
        height={588.04}
        alt=""
      />
    </div>
  );
}
