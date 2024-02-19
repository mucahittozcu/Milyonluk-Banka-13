import { use, useState } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""
  });

  const [verified, setVerified] = useState(undefined);
 const updateVerified = (e) => {
  e.preventDefault()
  const codeString = userInput.charOne + userInput.charTwo + userInput.charThree + userInput.charFour;
  if(codeString === passCode){
    setVerified(true)
  }else{
    setVerified(false)
  }
 } 

const handleChange = (e) => {
  const { name, value } = e.target;
  setUserInput((userInput) => ({
    ...userInput,
    [name]: value
  }));
};
// [name] = userInput.charOne vb 
// value = charOne.value
  /* Challenge

	Doğrulama kodu formu henüz kullanıcının girdisini kontrol etmiyor. Sizin göreviniz aşağıdaki gibi kurulumu tamamlamaktır: 
	
		1. Kullanıcı parola input'larından birine bir karakter yazdığında, userInput state nesnesinin ilgili özelliği, diğer özellikler korunarak güncellenmelidir. Özellik adlarının ve girdilerin adlarının birbiriyle eşleştiğine dikkat edin (charOne, charTwo, vb.)
		   
		2. Kullanıcı gönder butonuna tıkladığında, bir gönderme işleme fonksiyonu sayfanın yenilenmesini engellemeli ve userInput'ta saklanan dört karakterin kombinasyonunun passCode değerine eşit olup olmadığını kontrol etmelidir (yukarıdaki 7. satırda bildirilmiştir).
		   
		3. Eşleşiyorlarsa, verified state değeri true olarak ayarlanmalıdır. Aksi takdirde false olarak ayarlanmalıdır. 
		   
		4. Kodunuz mümkün olduğunca DRY olmalıdır
*/

  return (
    <div className="wrapper">
      <Header />

      <form>
        <Message status={verified} />

        <div>
          <input required type="password" value={userInput.charOne} name="charOne" maxLength="1" onChange={handleChange}/>

          <input required type="password" value={userInput.charTwo} name="charTwo" maxLength="1" onChange={handleChange}/>

          <input required type="password" value={userInput.charThree} name="charThree" maxLength="1" onChange={handleChange}/>

          <input required type="password" value={userInput.charFour} name="charFour" maxLength="1" onChange={handleChange}/>
        </div>

        <button onClick={updateVerified} disabled={verified}>Gönder</button>
      </form>

      <Footer />
    </div>
  );
}
