import React from 'react'

const NameContainer = ({children}) => {
  return (
    <>
     <Head>
            <meta keywords="Ulby tv nextjs"></meta>
        <title>Главная страница</title>

        </Head>
        <div className="navbar">
                <A href={'/'} text="Главная"/>
                <A href={'/users'} text="Пользователи"/>
           </div>
           <div>{children}</div>
    </>
  )
}

export default NameContainer
