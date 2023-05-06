import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div>
                <Link href="/">
                <a >Главная страница</a>
                </Link>
                <Link href="/users">
                <a >Users</a>

                </Link>
            </div>
            <h1>Main page</h1>
        </div>
    );
};

export default Index;