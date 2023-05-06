import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Link href="/">
                <>Главная</>
                </Link>
                <Link href="/users">
                <>Пользователи</>
                </Link>
                  </div>
            <h1>Main page</h1>
            <style>
       
            </style>
        </div>
    );
};

export default Index;