import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import RegisterTemplate from '../Registertemplate'

function RegisterPage() {
    return (
        <div>
        <Header />
        <div className="my-4">
          <RegisterTemplate />
        </div>
        <Footer />
            
        </div>
    )
}

export default RegisterPage
