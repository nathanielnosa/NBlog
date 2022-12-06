import { useState } from "react";

const Home = () => {

    const [bName,setBlogName] = useState('NBlog');
    const[age,setAge]= useState(30);

    const handleClick =()=>{
        setBlogName('N-Blog');
        setAge(10000)

    };

    return ( 
        <section id="home" className="home">
            <div className="container">
                <h1>WELCOME TO { bName }</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Fuga soluta cum debitis nisi, vero ipsum excepturi architecto est quod adipisci reiciendis, laudantium illum magni!</p>
                <p> we have mover {age} members</p>
                <button onClick={handleClick}>Read More</button>
            </div>
        </section>
     );
}
export default Home;