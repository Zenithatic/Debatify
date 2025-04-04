import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import styles from "../signup/Signup.module.css";
export default function SignuPage() {
    return (
        <div className={styles.page} >
            <Navbar />
            
            <div className="max-w-3xl mx-auto px-4 py-12">
           
            <h1 className="text-4xl font-bold mb-4"> Find the next party!</h1>
            <p className= "text-lg text-gray-700 mb-6"> start finding new people and making new memories!
             make the next project X!! Signup today!</p>
             <Form />
            </div>

        </div>

    );
}