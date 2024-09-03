import logo from "../images/mygov_logo.png";

export default function Header() {
  return (
    <div
      class="py-3"
      style={{
        position: "absolute",
        top: 25,
        left: 50,
        display: "flex",
        columnGap: 10,
        alignItems: "center",
      }}
    >
      <img
        className="logo"
        height={50}
        width={175}
        src={logo}
        alt="mygov logo"
      />
      <div
        style={{
          height: 20,
          width: 20,
          borderRadius: 20,
          backgroundColor: "#80b6b3",
        }}
      ></div>
    </div>
  );
}
