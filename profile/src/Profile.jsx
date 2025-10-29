 

export default function Profile() {
  const userName = "Teena";

  return (
    <div>
        <h2 style={{ fontSize:50,color:"purple" }} >{userName}</h2>
      <img 
        src={"/Image.png"} 
        style={{ width: "120px", height: "120px" }} 
      />
    </div>
  );
}
