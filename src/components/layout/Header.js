import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <Topbar />
                    <Navbar />
                    <h1 className="d-none">Steven's英語補習班|IELTS|TOEFL|TOEIC|SAT|商業英文</h1>
                </div>
            </div>
        </div>
    )
}

export default Header

