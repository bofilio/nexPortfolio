import React from 'react'

const Main = ({children}) => {
    return (
        <main className="container mx-auto lg:px-16 px-4 mt-20">
            {children}
        </main>
    )
}

export default Main
