import React from 'react'

const Main = ({children}) => {
    return (
        <main className="container mx-auto lg:px-16 px-4 mt-16">
            {children}
        </main>
    )
}

export default Main
