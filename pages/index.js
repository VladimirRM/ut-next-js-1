import Head from "next/head";
import A from "../components/A"
const Index = () => {
    return (
        <>
        <Head>
            <meta keywords="Ulby tv nextjs"></meta>
        </Head>
        <div>
            <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
           </div>
            <h1>Main page</h1>
            <style>
       
            </style>
        </div>
        </>
    );
};

export default Index;