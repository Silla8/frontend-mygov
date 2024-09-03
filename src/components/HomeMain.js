import InfoSection from "./InfoSection";
import pic from "../images/personal_info.svg";
import MergedSection from "./MergedSection";

export default function HomeMain() {
  const InfoSections= [
    ["personal_info" , "Personal Information"],
    ["workplace_info","Workplace"],
    ["personal_interest","Personal Interest"],
    ["financial_info","Financial Information"],
    ["family_info","Family Information"],
    ["education_info","Education Information"],
  ];
  return (
    <main
      role="main"
      class="flex-grow-1 d-flex justify-content-center align-items-center"
    >
      <div class="album py-3 ">
        <div className="container text-center" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>
          <div class="row">
            {InfoSections.map((infoSection, index) => (
              <InfoSection title={infoSection[1]} pic={pic} path={infoSection[0]} key={index} />
            ))}
          </div>
            <MergedSection title={"Merged Information"}  path={"profile"}/>
        </div>
      </div>
    </main>
  );
}
